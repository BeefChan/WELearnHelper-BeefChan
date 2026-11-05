import fs from 'node:fs';
import vm from 'node:vm';
import assert from 'node:assert/strict';
const source = fs.readFileSync('src/index.js','utf8').replace(/\r\n/g,'\n');
const part = (a,b) => {const start=source.indexOf(a);const end=source.indexOf(b,start);assert(start>=0&&end>start,`missing ${a}`);return source.slice(start,end);};
const handler=part('  let autoNextPending =','  window.addEventListener("message", handleAutoNextMessage, false);');
const flow=part('  async function etSleepWithAbort(','  function parseManifest(');
const jump=part('  function jumpToNextSelectedSco(','  let scoPanelSignature');
const bridge=part('  const settingsFingerprint =','  const CONSTANT =');
const subscriptions=part('    subscribe(store.userSettings, () => {\n      if (!store.userSettings.autoNext','    (async function() {');
const log={debug(){},info(){},error(){}};
let passed=0;
async function test(name,fn){await fn();console.log('PASS '+name);passed++;}
function parent(){
 const child={frames:[]};const root={frames:[child]};const tasks=[];const clicks=[];let current='a';
 const win={addEventListener(){}};win.top=win;
 const items=['a','b','c'].map(id=>({id,title:id,link:{click(){clicks.push(id);}}}));
 const context=vm.createContext({window:win,document:{getElementById:()=>({contentWindow:root,src:'https://centercourseware.sflep.com/book/index.html'})},store:{userSettings:{autoNext:true,autoSolve:true,loopRefresh:false}},logger:log,isCoursePlayerPage:()=>true,getCurrentScoId:()=>current,collectScoItems:()=>items,loadScoSelection:()=>({b:false}),setTimeout:fn=>tasks.push(fn)});
 vm.runInContext(jump+handler+'\nfunction nextChapter(){return jumpToNextSelectedSco(document);}',context);
 const event=(source=child,requestId='one')=>({source,data:{__eocs:true,type:'AUTO_NEXT',from:'https://centercourseware.sflep.com/book/res/1/exercise.html',requestId}});
 return {context,child,root,tasks,clicks,event,receive:e=>context.handleAutoNextMessage(e),flush:()=>{while(tasks.length)tasks.shift()();},setCurrent:id=>current=id};
}
function child(parentEnv,options={}){
 let now=0;const messages=[];
 const win={top:{postMessage(data){messages.push(data);if(parentEnv)parentEnv.receive({data,source:parentEnv.child});}}};
 const settings={autoNext:true,autoSolve:true,autoWait:false,autoSubmit:false,autoNextDelay:1,...options.settings};
 const c=vm.createContext({window:win,location:{href:'https://centercourseware.sflep.com/book/res/1/exercise.html'},store:{userSettings:settings},logger:log,Date:{now:()=>now},Math,sleep:async ms=>{now+=ms;options.onSleep?.(c);},etComputeAutoWaitMs:async()=>({totalMs:1000,media:0,random:1}),etAutoPlayMedia(){},etQuery:()=>[],etAutoSubmitCurrent:async()=>false});
 vm.runInContext(flow,c);return {c,win,messages};
}
await test('completion flow -> nested iframe message -> next selected chapter',async()=>{const p=parent();const c=child(p);await c.c.etAutoNextFlow(false);assert.equal(c.messages.length,1);p.flush();assert.deepEqual(p.clicks,['c']);});
await test('duplicate completion messages navigate once',()=>{const p=parent();p.receive(p.event());p.receive(p.event());p.flush();p.receive(p.event());p.flush();assert.deepEqual(p.clicks,['c']);});
await test('new request for same SCO is not suppressed by time-based dedup',()=>{const p=parent();p.receive(p.event());p.flush();p.receive(p.event(p.child,'two'));p.flush();assert.deepEqual(p.clicks,['c','c']);});
await test('unrelated and detached frames cannot trigger next chapter',()=>{const p=parent();p.receive(p.event({frames:[]}));p.flush();assert.equal(p.clicks.length,0);p.receive(p.event());p.root.frames=[];p.flush();assert.equal(p.clicks.length,0);});
await test('manual chapter change cancels queued automatic next',()=>{const p=parent();p.receive(p.event());p.setCurrent('c');p.flush();assert.equal(p.clicks.length,0);});
await test('turning off automatic next cancels queued parent callback',()=>{const p=parent();p.receive(p.event());p.context.store.userSettings.autoNext=false;p.flush();assert.equal(p.clicks.length,0);});
await test('turning off during child wait prevents completion and clears lock',async()=>{const c=child(null,{settings:{autoWait:true},onSleep:ctx=>{ctx.store.userSettings.autoNext=false;}});await c.c.etAutoNextFlow(false);assert.equal(c.messages.length,0);assert.equal(c.win.__eocsAutoNextUrl,'');});
await test('failed flow can be retried',async()=>{const c=child(null,{settings:{autoWait:true}});c.c.etComputeAutoWaitMs=async()=>{throw Error('temporary');};await c.c.etAutoNextFlow(false);assert.equal(c.win.__eocsAutoNextUrl,'');c.c.store.userSettings.autoWait=false;await c.c.etAutoNextFlow(false);assert.equal(c.messages.length,1);});
await test('one child page emits only one completion per enabled run',async()=>{const c=child();await c.c.etAutoNextFlow(false);await c.c.etAutoNextFlow(false);assert.equal(c.messages.length,1);assert.equal(typeof c.messages[0].requestId,'string');});
await test('enabling auto next on a ready page starts flow without solving again',()=>{let callback;let calls=0;const win={__eocsSolvedUrl:'page',__eocsAutoNextReady:{url:'page',hasAnswers:true}};const ctx=vm.createContext({window:win,location:{href:'page'},store:{userSettings:{autoSolve:true,autoNext:true}},subscribe:(_,fn)=>callback=fn,etAutoNextFlow:hasAnswers=>{assert.equal(hasAnswers,true);calls++;},determineCourseType(){throw Error('must not solve again');},logger:log});vm.runInContext(subscriptions,ctx);callback();assert.equal(calls,1);ctx.store.userSettings.autoNext=false;win.__eocsAutoNextRun={};callback();assert.equal(win.__eocsAutoNextRun,null);assert.equal(win.__eocsAutoNextUrl,'');});
await test('storage bridge delivers settings to already-open frames',()=>{let changed;const messages=[];const ctx=vm.createContext({chrome:{storage:{onChanged:{addListener:fn=>changed=fn}}},window:{addEventListener(){},postMessage:msg=>messages.push(msg)},console:log});vm.runInContext(fs.readFileSync('src/content.js','utf8'),ctx);changed({userSettings:{newValue:{autoNext:true}}},'sync');assert.equal(messages[0].type,'settingsChanged');assert.equal(messages[0].payload.autoNext,true);changed({userSettings:{newValue:'invalid'}},'sync');assert.equal(messages.length,1);});
await test('received settings update store without write-back loop',async()=>{let receive,save;let writes=0;const win={addEventListener:(_,fn)=>receive=fn};const store={userSettings:{autoNext:false,autoSolve:true},setUserSettings(s){Object.assign(this.userSettings,s);}};vm.runInContext(bridge,vm.createContext({window:win,store,subscribe:(_,fn)=>save=fn,setValue:async()=>writes++,logger:log}));receive({source:win,data:{extensionName:'eocs-helper',type:'settingsChanged',payload:{autoNext:true,autoSolve:true}}});assert.equal(store.userSettings.autoNext,true);await save();assert.equal(writes,0);store.userSettings.autoNext=false;await save();assert.equal(writes,1);});
console.log(`Auto-next regression: ${passed} passed, 0 failed.`);
