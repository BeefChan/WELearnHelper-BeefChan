#!/usr/bin/env node
// Minimal Chrome DevTools Protocol harness (no npm deps; Node >= 22 global fetch/WebSocket).
// Launches a DEDICATED Edge instance with its own profile dir + remote debugging port.
// It never touches a normal user profile: pass --user-data-dir explicitly (default wl/edge-automation).
//
// CLI:
//   node tools/cdp.mjs launch [--port 9333] [--headed]
//   node tools/cdp.mjs list
//   node tools/cdp.mjs nav <url> [--wait 1500] [--wait-for <css>]
//   node tools/cdp.mjs eval <js-expression> | eval --file <path.js>
//   node tools/cdp.mjs html [outfile]          (writes document.documentElement.outerHTML)
//   node tools/cdp.mjs screenshot <path.png>
//   node tools/cdp.mjs click <css-selector>    (real CDP mouse click at element center)
//   node tools/cdp.mjs close
//
// Env:
//   CDP_PORT (default 9333)
//   CDP_USER_DATA_DIR (default <workspace>/edge-automation)
//   CDP_TARGET (regexp matched against page url; default first page)
//   EDGE_BIN (default C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe)
//
// Pages are real, no login needed for centercourseware static courseware.
import fs from 'node:fs';
import path from 'node:path';
import { spawn } from 'node:child_process';

const PORT = Number(process.env.CDP_PORT || 9333);
const HOST = '127.0.0.1';
const BASE = `http://${HOST}:${PORT}`;
const EDGE_BIN = process.env.EDGE_BIN || 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const WORKSPACE = process.cwd();
const USER_DATA_DIR = process.env.CDP_USER_DATA_DIR || path.join(WORKSPACE, 'edge-automation');
const PID_FILE = path.join(WORKSPACE, 'edge-automation', 'cdp.pid');
const TARGET_RE = process.env.CDP_TARGET || '';

const argv = process.argv.slice(2);
const cmd = argv[0];
const rest = argv.slice(1);
const flags = {};
const pos = [];
for (let i = 0; i < rest.length; i++) {
  const a = rest[i];
  if (a.startsWith('--')) {
    const k = a.slice(2);
    const v = rest[i + 1] && !rest[i + 1].startsWith('--') ? rest[++i] : true;
    flags[k] = v;
  } else pos.push(a);
}

const sleep = (ms) => new Promise(r => setTimeout(r, ms));

async function httpJson(urlPath) {
  const res = await fetch(BASE + urlPath);
  if (!res.ok) throw new Error(`${urlPath} -> ${res.status}`);
  return res.json();
}

class CDP {
  constructor(wsUrl) { this.wsUrl = wsUrl; this.seq = 0; this.pending = new Map(); this.events = []; }
  async open() {
    this.ws = new WebSocket(this.wsUrl);
    await new Promise((res, rej) => {
      this.ws.addEventListener('open', res, { once: true });
      this.ws.addEventListener('error', (e) => rej(new Error('ws error: ' + (e.message || 'unknown'))), { once: true });
    });
    this.ws.addEventListener('message', (ev) => {
      const msg = JSON.parse(ev.data);
      if (msg.id && this.pending.has(msg.id)) {
        const { resolve, reject } = this.pending.get(msg.id);
        this.pending.delete(msg.id);
        msg.error ? reject(new Error(JSON.stringify(msg.error))) : resolve(msg.result);
      } else if (msg.method) {
        this.events.push(msg);
      }
    });
  }
  send(method, params = {}) {
    const id = ++this.seq;
    return new Promise((resolve, reject) => {
      this.pending.set(id, { resolve, reject });
      this.ws.send(JSON.stringify({ id, method, params }));
    });
  }
  async waitEvent(method, timeout = 15000) {
    const start = Date.now();
    while (Date.now() - start < timeout) {
      const idx = this.events.findIndex(e => e.method === method);
      if (idx >= 0) return this.events.splice(idx, 1)[0];
      await sleep(50);
    }
    return null;
  }
  close() { try { this.ws.close(); } catch {} }
}

async function browserWs() {
  const v = await httpJson('/json/version');
  return v.webSocketDebuggerUrl;
}

async function pages() {
  const list = await httpJson('/json/list');
  return list.filter(t => t.type === 'page');
}

function pickPage(list) {
  if (TARGET_RE) {
    const re = new RegExp(TARGET_RE);
    const hit = list.find(t => re.test(t.url));
    if (!hit) throw new Error(`no page matching CDP_TARGET=${TARGET_RE}. pages:\n` + list.map(t => '  ' + t.url).join('\n'));
    return hit;
  }
  const normal = list.filter(t => !t.url.startsWith('devtools://'));
  if (!normal.length) throw new Error('no page targets; run launch/nav first');
  return normal[0];
}

async function withPage(fn) {
  const list = await pages();
  const page = pickPage(list);
  const cdp = new CDP(page.webSocketDebuggerUrl);
  await cdp.open();
  try {
    await cdp.send('Page.enable');
    await cdp.send('Runtime.enable');
    return await fn(cdp, page);
  } finally {
    cdp.close();
  }
}

function printJson(v) {
  console.log(JSON.stringify(v, null, 2));
}

async function launch() {
  fs.mkdirSync(USER_DATA_DIR, { recursive: true });
  const existing = await httpJson('/json/version').catch(() => null);
  if (existing) { console.log('already running:', existing['Browser'], 'ws:', existing.webSocketDebuggerUrl); return; }
  const args = [
    `--remote-debugging-port=${PORT}`,
    `--user-data-dir=${USER_DATA_DIR}`,
    '--no-first-run',
    '--no-default-browser-check',
    '--disable-features=Translate,msEdgeSidebarV2',
    '--disable-background-networking',
    '--disable-sync',
    '--no-service-autorun',
    '--password-store=basic',
    '--use-mock-keychain',
  ];
  if (flags.headed !== true) args.push('--headless=new');
  args.push('about:blank');
  const log = fs.openSync(path.join(USER_DATA_DIR, 'edge-launch.log'), 'a');
  const child = spawn(EDGE_BIN, args, { detached: true, stdio: ['ignore', log, log], windowsHide: true });
  child.unref();
  fs.writeFileSync(PID_FILE, String(child.pid));
  const start = Date.now();
  while (Date.now() - start < 30000) {
    const v = await httpJson('/json/version').catch(() => null);
    if (v) { console.log('launched:', v['Browser'], '\nws:', v.webSocketDebuggerUrl, '\nprofile:', USER_DATA_DIR, '\nport:', PORT); return; }
    await sleep(300);
  }
  throw new Error('Edge did not expose CDP within 30s; see edge-automation/edge-launch.log');
}

async function nav() {
  const url = pos[0];
  if (!url) throw new Error('nav <url> required');
  await withPage(async (cdp) => {
    const loaded = cdp.waitEvent('Page.loadEventFired', 30000);
    await cdp.send('Page.navigate', { url });
    await loaded.catch(() => null);
    await sleep(Number(flags.wait ?? 1200));
    if (flags['wait-for']) {
      const css = String(flags['wait-for']);
      const start = Date.now();
      while (Date.now() - start < 30000) {
        const r = await cdp.send('Runtime.evaluate', { expression: `!!document.querySelector(${JSON.stringify(css)})`, returnByValue: true });
        if (r.result?.value) break;
        await sleep(200);
      }
    }
    const info = await cdp.send('Runtime.evaluate', { expression: `({url:location.href,title:document.title,ready:document.readyState})`, returnByValue: true });
    printJson(info.result.value);
  });
}

async function evalJs() {
  let expr;
  if (flags.file) expr = fs.readFileSync(String(flags.file), 'utf8');
  else if (pos[0] === '-') expr = fs.readFileSync(0, 'utf8');
  else expr = pos.join(' ');
  if (!expr) throw new Error('eval <js> or eval --file <path> required');
  await withPage(async (cdp) => {
    const r = await cdp.send('Runtime.evaluate', {
      expression: expr,
      awaitPromise: true,
      returnByValue: true,
      userGesture: true,
      timeout: 30000,
    });
    if (r.exceptionDetails) {
      console.error('EXCEPTION:', r.exceptionDetails.text);
      console.error((r.exceptionDetails.exception && (r.exceptionDetails.exception.description || r.exceptionDetails.exception.value)) || '');
      process.exitCode = 2;
    } else {
      printJson(r.result.value === undefined ? (r.result.description || null) : r.result.value);
    }
  });
}

async function dumpHtml() {
  const out = pos[0] || path.join('recon', `snapshot-${Date.now()}.html`);
  await withPage(async (cdp) => {
    const r = await cdp.send('Runtime.evaluate', { expression: 'document.documentElement.outerHTML', returnByValue: true });
    fs.mkdirSync(path.dirname(path.resolve(out)), { recursive: true });
    fs.writeFileSync(out, r.result.value);
    console.log('wrote', out, r.result.value.length, 'chars');
  });
}

async function screenshot() {
  const out = pos[0] || path.join('recon', `screenshot-${Date.now()}.png`);
  await withPage(async (cdp) => {
    await cdp.send('Emulation.setDeviceMetricsOverride', { width: 1280, height: 900, deviceScaleFactor: 1, mobile: false });
    const r = await cdp.send('Page.captureScreenshot', { format: 'png', captureBeyondViewport: false });
    fs.mkdirSync(path.dirname(path.resolve(out)), { recursive: true });
    fs.writeFileSync(out, Buffer.from(r.data, 'base64'));
    console.log('wrote', out);
  });
}

async function click() {
  const sel = pos[0];
  if (!sel) throw new Error('click <css-selector> required');
  await withPage(async (cdp) => {
    const r = await cdp.send('Runtime.evaluate', {
      expression: `(() => { const el = document.querySelector(${JSON.stringify(sel)});
        if (!el) return {ok:false, why:'not found'};
        const b = el.getBoundingClientRect();
        return {ok:true, x:b.left + b.width/2, y:b.top + b.height/2, w:b.width, h:b.height};
      })()`, returnByValue: true,
    });
    const v = r.result.value;
    if (!v.ok) throw new Error(`click ${sel}: ${v.why}`);
    for (const type of ['mousePressed', 'mouseReleased']) {
      await cdp.send('Input.dispatchMouseEvent', { type, x: v.x, y: v.y, button: 'left', clickCount: 1 });
    }
    console.log('clicked', sel, 'at', v.x.toFixed(1), v.y.toFixed(1));
  });
}

async function closeBrowser() {
  const ws = await browserWs();
  const cdp = new CDP(ws);
  await cdp.open();
  await cdp.send('Browser.close').catch(() => null);
  cdp.close();
  console.log('close requested');
}

async function main() {
  switch (cmd) {
    case 'launch': return launch();
    case 'list': {
      const list = await pages();
      for (const [i, p] of list.entries()) console.log(`[${i}] ${p.title || '(no title)'}\n    ${p.url}\n    ws=${p.webSocketDebuggerUrl}`);
      return;
    }
    case 'nav': return nav();
    case 'eval': return evalJs();
    case 'html': return dumpHtml();
    case 'screenshot': return screenshot();
    case 'click': return click();
    case 'close': return closeBrowser();
    default:
      console.log(fs.readFileSync(new URL(import.meta.url), 'utf8').split('\n').slice(1, 32).join('\n'));
      process.exit(cmd ? 1 : 0);
  }
}
main().catch(e => { console.error('ERROR:', e.message); process.exit(1); });
