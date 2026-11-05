#!/usr/bin/env node
// Node >=22; built-in fetch/WebSocket; CDP_PORT defaults to 9223.
// Only a newly created about:blank target is used and closed.
import { readFile } from 'node:fs/promises';

const port = Number(process.env.CDP_PORT || 9223);
if (!Number.isInteger(port) || port < 1 || port > 65535) throw new Error('Invalid CDP_PORT');
const source = await readFile(new URL('../src/index.js', import.meta.url), 'utf8');
const start = source.indexOf('  const SCO_SELECTION_KEY');
const end = source.indexOf('  function isCoursePlayerPage()', start);
if (start < 0 || end <= start) throw new Error('Cannot locate SCO selection source block');
const block = source.slice(start, end);

class CDP {
  constructor(url) {
    this.socket = new WebSocket(url);
    this.sequence = 0;
    this.pending = new Map();
    this.socket.addEventListener('message', ({ data }) => {
      const message = JSON.parse(data);
      const request = this.pending.get(message.id);
      if (!request) return;
      this.pending.delete(message.id);
      clearTimeout(request.timer);
      if (message.error) request.reject(new Error(JSON.stringify(message.error)));
      else request.resolve(message.result);
    });
    this.socket.addEventListener('close', () => {
      for (const request of this.pending.values()) {
        clearTimeout(request.timer);
        request.reject(new Error('CDP connection closed'));
      }
      this.pending.clear();
    });
  }
  async open() {
    await new Promise((resolve, reject) => {
      const timer = setTimeout(() => reject(new Error('CDP connection timeout')), 15000);
      this.socket.addEventListener('open', () => { clearTimeout(timer); resolve(); }, { once: true });
      this.socket.addEventListener('error', () => { clearTimeout(timer); reject(new Error('CDP connection error')); }, { once: true });
    });
  }
  send(method, params = {}, sessionId) {
    const id = ++this.sequence;
    return new Promise((resolve, reject) => {
      const timer = setTimeout(() => {
        this.pending.delete(id);
        reject(new Error(`CDP timeout: ${method}`));
      }, 20000);
      this.pending.set(id, { resolve, reject, timer });
      this.socket.send(JSON.stringify({ id, method, params, ...(sessionId ? { sessionId } : {}) }));
    });
  }
  close() { this.socket.close(); }
}

// Serialized and evaluated only in our newly created about:blank target.
function runBrowserTests(selectionSource) {
  const results = [];
  function assert(condition, message) { if (!condition) throw new Error(message); }
  function equal(actual, expected, message) {
    assert(JSON.stringify(actual) === JSON.stringify(expected), `${message}: expected ${JSON.stringify(expected)}, got ${JSON.stringify(actual)}`);
  }
  function test(name, callback) {
    try { callback(); results.push({ name, ok: true }); }
    catch (error) { results.push({ name, ok: false, error: error.stack || String(error) }); }
  }
  const fixture = `<!doctype html><html><head><title>Fixture</title></head><body>
    <div class="courseware"><h2>Course wrapper heading</h2><div class="directory"><ul>
      <li><span>Unit 1</span><ul>
        <li><a href="#">Listening</a><ul>
          <li><span>Before You Listen</span><ul>
            <li class="courseware_current"><a onclick="SelectSCO('s1')">Exercise</a></li>
            <li><a onclick="SelectSCO('s2')">Exercise</a></li>
          </ul></li>
          <li><span>While You Listen</span><ul>
            <li><span>Passage 1</span><ul>
              <li><a onclick="SelectSCO('s3')">Exercise</a></li>
              <li><a onclick="SelectSCO('s4')">Exercise</a></li>
            </ul></li>
          </ul></li>
        </ul></li>
      </ul></li>
      <li><span>Unit 2</span><ul><li><span>Reading</span><ul>
        <li><span>Practice</span><ul><li><a onclick="SelectSCO('s5')">Exercise</a></li></ul></li>
      </ul></li></ul></li>
    </ul></div></div></body></html>`;
  const ids = ['s1', 's2', 's3', 's4', 's5'];
  function memoryStorage() {
    const values = new Map();
    return {
      get length() { return values.size; },
      key(index) { return [...values.keys()][index] ?? null; },
      getItem(key) { return values.has(String(key)) ? values.get(String(key)) : null; },
      setItem(key, value) { values.set(String(key), String(value)); },
      removeItem(key) { values.delete(String(key)); },
      clear() { values.clear(); }
    };
  }
  function harness({ cid = '1', current = 's1', loop = false, storage = memoryStorage(), html = fixture } = {}) {
    const parsed = new DOMParser().parseFromString(html, 'text/html');
    const location = new URL(`https://fixture.invalid/student/StudyCourse.aspx?cid=${cid}&sco=s1`);
    const clicks = [];
    // Inert document; SCO clicks only record IDs and never navigate or submit.
    for (const link of parsed.querySelectorAll('a[onclick*="SelectSCO"]')) {
      const id = /SelectSCO\('([^']+)'\)/.exec(link.getAttribute('onclick'))[1];
      link.parentElement.classList.toggle('courseware_current', id === current);
      link.click = () => { clicks.push(id); };
    }
    let fakeWindow;
    const doc = new Proxy(parsed, {
      get(target, key) {
        if (key === 'location') return location;
        if (key === 'URL' || key === 'documentURI' || key === 'baseURI') return location.href;
        if (key === 'defaultView') return fakeWindow;
        const value = Reflect.get(target, key, target);
        return typeof value === 'function' ? value.bind(target) : value;
      }
    });
    const logger = { debug() {}, info() {}, warn() {}, error() {} };
    const store = { userSettings: { loopRefresh: loop } };
    fakeWindow = { document: doc, location, localStorage: storage, console: logger };
    fakeWindow.top = fakeWindow;
    fakeWindow.parent = fakeWindow;
    fakeWindow.window = fakeWindow;
    fakeWindow.self = fakeWindow;
    const api = new Function('window', 'document', 'localStorage', 'store', 'location', 'logger', 'console',
      `${selectionSource}\nfunction isCoursePlayerPage() { return true; }\nreturn { loadScoSelection, saveScoSelection, collectScoItems, getCurrentScoId, jumpToNextSelectedSco, buildScoSelectionPanel };`
    )(fakeWindow, doc, storage, store, location, logger, logger);
    return { ...api, doc, location, storage, clicks, store };
  }
  const only = (...selected) => Object.fromEntries(ids.map(id => [id, selected.includes(id)]));
  function save(h, selection) { h.saveScoSelection(selection, h.doc); }
  function load(h) { return h.loadScoSelection(h.doc); }
  function jump(h) { return h.jumpToNextSelectedSco(h.doc); }

  test('nested paths exclude wrapper headings and the leaf itself', () => {
    const h = harness();
    const items = h.collectScoItems(h.doc);
    equal(items.map(item => item.id), ids, 'DOM order and IDs');
    equal(items[0].path, ['Unit 1', 'Listening', 'Before You Listen'], 'first leaf ancestry');
    equal(items[1].path, items[0].path, 'repeated Exercise titles have equal ancestry');
    equal(items[2].path, ['Unit 1', 'Listening', 'While You Listen', 'Passage 1'], 'additional nesting survives');
    equal(items[4].path, ['Unit 2', 'Reading', 'Practice'], 'second unit ancestry');
    for (const item of items) {
      equal(item.title, 'Exercise', 'leaf title');
      equal(item.unit, item.path[0], 'unit');
      assert(!item.path.includes(item.title), 'leaf must not be its own ancestor');
      assert(!item.path.some(part => part.includes('wrapper')), 'wrapper leaked into ancestry');
    }
  });
  test('current DOM entry beats stale sco URL', () => {
    const h = harness({ current: 's3' });
    equal(h.getCurrentScoId(h.doc), 's3', 'active DOM item');
    h.doc.querySelector('.courseware_current').classList.remove('courseware_current');
    equal(h.getCurrentScoId(h.doc), 's1', 'URL fallback with no active item');
  });
  test('selection skips excluded entries from the DOM current entry', () => {
    const h = harness({ current: 's2' });
    save(h, only('s1', 's4'));
    equal(jump(h), true, 'jump result');
    equal(h.clicks, ['s4'], 'skip s3 and ignore stale URL s1');
  });
  for (const current of ['s1', 's3', 's5']) {
    test(`loop includes current when only ${current} is selected`, () => {
      const h = harness({ current, loop: true });
      save(h, only(current));
      equal(jump(h), true, 'loop result');
      equal(h.clicks, [current], 'current leaf clicked once');
    });
  }
  test('loop wraps to an earlier selected item', () => {
    const h = harness({ current: 's5', loop: true });
    save(h, only('s2', 's4'));
    equal(jump(h), true, 'wrapped result');
    equal(h.clicks, ['s2'], 'wrapped selection');
  });
  for (const loop of [false, true]) {
    test(`none selected stops with loop=${loop}`, () => {
      const h = harness({ loop });
      save(h, only());
      equal(jump(h), false, 'none-selected result');
      equal(h.clicks, [], 'no click');
    });
  }
  test('nonloop stops at end of selected subset even before last DOM item', () => {
    const h = harness({ current: 's3' });
    save(h, only('s1', 's3'));
    equal(jump(h), false, 'end-of-selected result');
    equal(h.clicks, [], 'no click');
  });
  test('storage isolates cid=1 and cid=2 with overlapping SCO IDs', () => {
    const storage = memoryStorage();
    const one = harness({ cid: '1', storage });
    const two = harness({ cid: '2', storage });
    save(one, only('s1'));
    equal(load(one), only('s1'), 'course 1 saved selection');
    equal(load(two), {}, 'course 2 starts with defaults');
    save(two, only('s4'));
    equal(load(one), only('s1'), 'course 1 remains unchanged');
    equal(load(two), only('s4'), 'course 2 saved selection');
    equal(load(harness({ cid: '1', storage })), only('s1'), 'new instance reads persisted course 1');
  });
  for (const raw of ['{broken', 'null', 'false', '42', '"string"', '[]', '[false,true]']) {
    test(`invalid storage value ${raw} is safe`, () => {
      const h = harness();
      save(h, only('s1'));
      assert(h.storage.length > 0, 'save must create a storage entry');
      for (let i = 0; i < h.storage.length; i++) h.storage.setItem(h.storage.key(i), raw);
      const fresh = harness({ storage: h.storage });
      equal(load(fresh), {}, 'invalid selection resets to defaults on a fresh load');
      fresh.buildScoSelectionPanel();
      assert(fresh.doc.querySelector('#eocs-sco-panel'), 'panel survives invalid stored value');
    });
  }
  test('storage access failures do not crash selection functions', () => {
    const storage = { getItem() { throw new Error('blocked'); }, setItem() { throw new Error('quota'); } };
    const h = harness({ storage });
    equal(load(h), {}, 'blocked reads use defaults');
    save(h, only('s2'));
    h.buildScoSelectionPanel();
    assert(h.doc.querySelector('#eocs-sco-panel'), 'panel survives blocked storage');
  });

  // Discover parents by their visible row label; no assumed maximum tree depth.
  function panelParts(h) {
    const panel = h.doc.querySelector('#eocs-sco-panel');
    assert(panel, 'panel was created');
    const leaves = [...panel.querySelectorAll('input[data-scoid]')];
    const parents = [...panel.querySelectorAll('input[type="checkbox"]')].filter(input => !input.hasAttribute('data-scoid'));
    function parent(label) {
      const found = parents.find(input => input.parentElement.textContent.trim().endsWith(label));
      assert(found, `missing parent checkbox: ${label}`);
      return found;
    }
    function button(text) {
      const found = [...panel.querySelectorAll('button')].find(el => el.textContent.trim() === text);
      assert(found, `missing button: ${text}`);
      return found;
    }
    return { panel, leaves, parents, parent, button };
  }
  function setChecked(input, checked) {
    input.checked = checked;
    input.dispatchEvent(new Event('change', { bubbles: true }));
  }
  function allState(inputs, checked, message) {
    assert(inputs.length > 0, `${message}: no checkboxes`);
    assert(inputs.every(input => input.checked === checked && !input.indeterminate), message);
  }
  test('panel defaults, full/none actions and persisted leaf selection', () => {
    const h = harness();
    h.buildScoSelectionPanel();
    const p = panelParts(h);
    equal(p.leaves.map(input => input.getAttribute('data-scoid')).sort(), [...ids].sort(), 'one checkbox per SCO');
    allState([...p.leaves, ...p.parents], true, 'defaults select everything');
    p.button('全不选').click();
    allState([...p.leaves, ...p.parents], false, 'none clears leaves and parents');
    equal(load(h), only(), 'none persisted');
    p.button('全选').click();
    allState([...p.leaves, ...p.parents], true, 'full selects leaves and parents');
    equal(load(h), only(...ids), 'full persisted');
    const leaf = p.leaves.find(input => input.getAttribute('data-scoid') === 's1');
    setChecked(leaf, false);
    equal(load(h).s1, false, 'leaf deselection persisted');
    assert(p.leaves.filter(input => input !== leaf).every(input => input.checked), 'other leaves stay selected');
    for (const name of ['Unit 1', 'Listening', 'Before You Listen']) {
      const input = p.parent(name);
      assert(!input.checked && input.indeterminate, `partially selected ${name} must be indeterminate`);
    }
    assert(p.parent('Unit 2').checked && !p.parent('Unit 2').indeterminate, 'unrelated unit stays fully selected');
    setChecked(leaf, true);
    allState([...p.leaves, ...p.parents], true, 'restoring leaf clears partial states');
    h.buildScoSelectionPanel();
    equal(h.doc.querySelectorAll('#eocs-sco-panel').length, 1, 'panel build is idempotent');
  });
  test('parent selection applies only to descendants at arbitrary depth', () => {
    const h = harness();
    h.buildScoSelectionPanel();
    const p = panelParts(h);
    setChecked(p.parent('Before You Listen'), false);
    equal(load(h).s1, false, 'first descendant deselected');
    equal(load(h).s2, false, 'second descendant deselected');
    for (const id of ['s3', 's4', 's5']) assert(load(h)[id] !== false, `${id} remains selected`);
    assert(p.parent('Listening').indeterminate, 'ancestor is partial');
    setChecked(p.parent('Passage 1'), false);
    equal(load(h).s3, false, 'deep descendant s3 deselected');
    equal(load(h).s4, false, 'deep descendant s4 deselected');
    assert(!p.parent('Listening').checked && !p.parent('Listening').indeterminate, 'empty subtree is unchecked');
    setChecked(p.parent('Unit 1'), true);
    allState([...p.leaves, ...p.parents], true, 'unit selection restores all descendants');
  });
  // Sanitized structural fixture from the user's live 279-section player.
  const flatRow = (level, id, title, branch = false) => `<li class="courseware_list_1_${level} course_disable" style="display:none"><span><a onclick="${branch ? 'ShowSubMenu' : 'SelectSCO'}('${id}')">${title}</a></span><s></s></li>`;
  const flatUnit = (title, rows) => `<div class="courseware_list_1"><ul class="courseware_list_11_7"><div class="courseware_list_1_1 expandable"><a><span class="v_1">${title}</span><span class="v_2">85%</span></a></div><script>/* progress renderer */</script><ul class="categoryitems">${rows}</ul></ul></div>`;
  const flat = '<div class="courseware_list">' +
    flatUnit('Unit 1', flatRow(3,'l1','Listening',true) + flatRow(4,'b1','Before You Listen',true) + flatRow(5,'s1','Exercise') + flatRow(5,'s2','Exercise') + flatRow(4,'l2','Listen',true) + flatRow(5,'s3','Exercise') + flatRow(3,'sp1','Speaking',true) + flatRow(4,'s4','Conversation')) +
    flatUnit('Unit 2', flatRow(3,'sp2','Speaking',true) + flatRow(4,'s5','Conversation')) + '</div>';
  test('real player flat sibling levels restore all paths and include hidden leaves', () => {
    const h = harness({ html: flat });
    const items = h.collectScoItems(h.doc);
    equal(items.map(item => item.id), ids, 'flat catalogue order');
    equal(items[0].path, ['Unit 1','Listening','Before You Listen'], 'flat first path');
    equal(items[1].path, items[0].path, 'same section path');
    equal(items[2].path, ['Unit 1','Listening','Listen'], 'submodule reset');
    equal(items[3].path, ['Unit 1','Speaking'], 'skill reset');
    equal(items[4].path, ['Unit 2','Speaking'], 'unit reset');
    assert(items.every(item => !item.path.some(title => title.includes('%'))), 'progress leaked into titles');
  });
  test('flat player selection controls only the intended submodule and unit', () => {
    const h = harness({ html: flat }); h.buildScoSelectionPanel(); const p = panelParts(h);
    setChecked(p.parent('Before You Listen'), false);
    equal(load(h), {s1:false,s2:false}, 'submodule excludes only its leaves');
    setChecked(p.parent('Unit 2'), false);
    equal(load(h), {s1:false,s2:false,s5:false}, 'unit excludes only its leaves');
    assert(p.parent('Listening').indeterminate, 'partial Listening state');
    assert(p.parent('Unit 1').indeterminate, 'partial Unit 1 state');
  });
  test('panel writes retain newer same-course choices from another tab', () => {
    const storage = memoryStorage(); const h = harness({storage}); h.buildScoSelectionPanel();
    const other = harness({storage}); save(other, {s5:false});
    setChecked(panelParts(h).leaves.find(cb => cb.dataset.scoid === 's1'), false);
    equal(load(h), {s5:false,s1:false}, 'unrelated latest choice retained');
  });
  test('legacy preferences migrate to the first course only', () => {
    const storage = memoryStorage(); storage.setItem('eocs_sco_selection', JSON.stringify({s1:false}));
    equal(load(harness({storage})), {s1:false}, 'legacy imported');
    equal(load(harness({storage,cid:'2'})), {}, 'legacy not copied into second course');
  });
  test('restore defaults, changed catalogue and open panel state', () => {
    const h = harness({html:flat}); h.buildScoSelectionPanel(); const p = panelParts(h);
    p.button('全不选').click(); p.button('恢复默认').click(); equal(load(h),{},'defaults restored');
    h.doc.getElementById('eocs-sco-toggle').click();
    h.doc.querySelector('ul.categoryitems').insertAdjacentHTML('beforeend',flatRow(4,'s6','New exercise'));
    h.buildScoSelectionPanel(); equal(panelParts(h).leaves.length,6,'new leaf rendered');
    assert(h.doc.getElementById('eocs-sco-panel').classList.contains('eocs-open'),'open state preserved');
    equal(h.doc.querySelectorAll('#eocs-sco-style').length,1,'one style element');
    equal(h.doc.querySelectorAll('#eocs-sco-toggle').length,1,'one toggle');
  });
  return { passed: results.filter(result => result.ok).length, failed: results.filter(result => !result.ok).length, results };
}

const response = await fetch(`http://127.0.0.1:${port}/json/version`, { signal: AbortSignal.timeout(15000) });
if (!response.ok) throw new Error(`CDP version endpoint returned ${response.status}`);
const { webSocketDebuggerUrl } = await response.json();
if (!webSocketDebuggerUrl) throw new Error('Browser CDP WebSocket endpoint unavailable');
const cdp = new CDP(webSocketDebuggerUrl);
let targetId;
try {
  await cdp.open();
  ({ targetId } = await cdp.send('Target.createTarget', { url: 'about:blank' }));
  const { sessionId } = await cdp.send('Target.attachToTarget', { targetId, flatten: true });
  const evaluation = await cdp.send('Runtime.evaluate', {
    expression: `(${runBrowserTests.toString()})(${JSON.stringify(block)})`,
    returnByValue: true,
    awaitPromise: true,
    timeout: 15000
  }, sessionId);
  if (evaluation.exceptionDetails) throw new Error(evaluation.exceptionDetails.exception?.description || evaluation.exceptionDetails.text);
  const report = evaluation.result.value;
  if (!report || !Array.isArray(report.results)) throw new Error('Browser returned no test report');
  for (const result of report.results) {
    console.log(`${result.ok ? 'PASS' : 'FAIL'} ${result.name}`);
    if (!result.ok) console.error(result.error);
  }
  console.log(`\nSCO selection regression: ${report.passed} passed, ${report.failed} failed.`);
  if (report.failed) process.exitCode = 1;
} finally {
  try {
    // Never enumerate, navigate or close existing targets. Only this ID is ours.
    if (targetId) {
      const closed = await cdp.send('Target.closeTarget', { targetId });
      if (!closed.success) throw new Error(`Failed to close created target ${targetId}`);
    }
  } finally { cdp.close(); }
}
