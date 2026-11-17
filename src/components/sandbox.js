// Kodni izolyatsiyalangan (sandbox) iframe ichida xavfsiz ishga tushirish.
// Iframe `allow-scripts` bilan, lekin `allow-same-origin`siz — u ilova ma'lumotlariga (localStorage va h.k.) kira olmaydi.

const uid = () => 'v' + Math.random().toString(36).slice(2);
const esc = (code) => code.replace(/<\/script/gi, '<\\/script');

// console ni ushlab, parent oynaga yuboruvchi kod
const prelude = (id) => `
var __id=${JSON.stringify(id)};
window.__out=[];
function send(t,m){ parent.postMessage({__viz:__id,t:t,m:m},'*'); }
function q(s){ return "'" + s + "'"; }
function fmt(v,d,top){
  d=d||0;
  if(typeof v==='string') return top? v : q(v);
  if(v===null) return 'null';
  if(v===undefined) return 'undefined';
  if(typeof v==='function') return '[Function: '+(v.name||'anonymous')+']';
  if(typeof v==='bigint') return v+'n';
  if(typeof v==='symbol') return v.toString();
  if(typeof v!=='object') return String(v);
  if(v instanceof Error) return v.name+': '+v.message;
  if(v instanceof Date) return v.toISOString();
  if(d>2) return Array.isArray(v)?'[Array]':'[Object]';
  if(Array.isArray(v)){ if(!v.length) return '[]'; return '[ '+v.map(function(x){return fmt(x,d+1);}).join(', ')+' ]'; }
  if(v instanceof Map){ return 'Map('+v.size+') { '+Array.from(v.entries()).map(function(e){return fmt(e[0],d+1)+' => '+fmt(e[1],d+1);}).join(', ')+' }'; }
  if(v instanceof Set){ return 'Set('+v.size+') { '+Array.from(v.values()).map(function(x){return fmt(x,d+1);}).join(', ')+' }'; }
  var keys=Object.keys(v);
  if(!keys.length) return '{}';
  return '{ '+keys.map(function(k){return k+': '+fmt(v[k],d+1);}).join(', ')+' }';
}
function out(t){ return function(){ var s=Array.prototype.map.call(arguments,function(a){return fmt(a,0,true);}).join(' '); window.__out.push(s); send(t,s); }; }
console.log=console.info=console.debug=out('log');
console.warn=out('warn');
console.error=out('error');
console.table=function(x){ var s=fmt(x,0,true); window.__out.push(s); send('log',s); };
window.alert=function(m){ var s='alert: '+m; window.__out.push(s); send('log',s); };
window.prompt=function(){ return null; };
window.confirm=function(){ return true; };
`;

function listen(id, frame, onMsg, timeout, onTimeout) {
  const handler = (e) => {
    const d = e.data;
    if (e.source !== frame.contentWindow || !d || d.__viz !== id) return;
    onMsg(d);
  };
  window.addEventListener('message', handler);
  const kill = setTimeout(onTimeout, timeout);
  return () => { window.removeEventListener('message', handler); clearTimeout(kill); frame.remove(); };
}

// JavaScript kodini ishga tushiradi va (ixtiyoriy) testlarni tekshiradi.
// tests: [{ name, expr }] — expr foydalanuvchi kodidan keyin shu doirada baholanadi.
export function runJs(code, tests = [], { timeout = 3500 } = {}) {
  return new Promise((resolve) => {
    const id = uid();
    const logs = [];
    let testResults = null;
    let error = null;
    const frame = document.createElement('iframe');
    frame.setAttribute('sandbox', 'allow-scripts');
    frame.style.display = 'none';

    let cleanup = () => {};
    const finish = (timedOut) => {
      cleanup();
      if (timedOut && !error && testResults === null) error = 'Kod javob bermadi (cheksiz sikl bo\'lishi mumkin).';
      resolve({ logs, tests: testResults, error });
    };
    cleanup = listen(id, frame, (d) => {
      if (d.t === 'done') finish(false);
      else if (d.t === 'exc') error = d.m;
      else if (d.t === 'tests') testResults = d.m;
      else logs.push({ t: d.t, m: d.m });
    }, timeout, () => finish(true));

    const testCode = tests.length
      ? `var __t=[];\n${tests.map((t) => `try{ __t.push(!!(${t.expr})); }catch(e){ __t.push(false); }`).join('\n')}\nsend('tests',__t);`
      : '';

    frame.srcdoc = `<!doctype html><html><body>
<script>window.onerror=function(m){ parent.postMessage({__viz:${JSON.stringify(id)},t:'exc',m:String(m)},'*'); return true; };<\/script>
<script>${prelude(id)}
(async function(){
  try {
    await (async function(){
${esc(code)}
;${testCode}
    })();
  } catch(e) { send('exc', String((e && e.message) || e)); }
  setTimeout(function(){ send('done'); }, 600);
})();
<\/script></body></html>`;
    document.body.appendChild(frame);
  });
}

const TAILWIND_CDN = 'https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4';

// HTML/CSS ko'rinishi uchun to'liq hujjat yasaydi
export function buildHtmlDoc(html, { css = '', tailwind = false, extra = '' } = {}) {
  const isFull = /^\s*(<!doctype|<html)/i.test(html);
  const injected = `${tailwind ? `<script src="${TAILWIND_CDN}"><\/script>` : ''}${css ? `<style>${css}</style>` : ''}`;
  if (isFull) {
    let d = html;
    d = /<\/head>/i.test(d) ? d.replace(/<\/head>/i, injected + '</head>') : injected + d;
    return /<\/body>/i.test(d) ? d.replace(/<\/body>/i, extra + '</body>') : d + extra;
  }
  return `<!doctype html><html><head><meta charset="utf-8" />
<style>body{margin:12px;font-family:Arial,sans-serif;color:#111;background:#fff;}</style>${injected}</head><body>${html}${extra}</body></html>`;
}

// HTML/CSS ni yuklab, testlarni (document ustida) baholaydi.
export function runHtmlTests(html, tests, { css = '', tailwind = false, timeout = 6000 } = {}) {
  return new Promise((resolve) => {
    const id = uid();
    const frame = document.createElement('iframe');
    frame.setAttribute('sandbox', 'allow-scripts');
    frame.style.cssText = 'position:fixed;left:-9999px;top:0;width:900px;height:700px;border:0;';
    let cleanup = () => {};
    let done = false;
    const finish = (results, error) => { if (done) return; done = true; cleanup(); resolve({ tests: results, error }); };
    cleanup = listen(id, frame, (d) => {
      if (d.t === 'tests') finish(d.m, null);
      else if (d.t === 'exc') finish(null, d.m);
    }, timeout, () => finish(null, 'Sahifa yuklanmadi.'));

    const script = `<script>(function(){
var id=${JSON.stringify(id)};
window.addEventListener('load',function(){ setTimeout(function(){
  var res=[];
  ${tests.map((t) => `try{ res.push(!!(function(){ return (${t.expr}); })()); }catch(e){ res.push(false); }`).join('\n')}
  parent.postMessage({__viz:id,t:'tests',m:res},'*');
}, ${tailwind ? 1800 : 150}); });
})();<\/script>`;
    frame.srcdoc = buildHtmlDoc(html, { css, tailwind, extra: script });
    document.body.appendChild(frame);
  });
}
