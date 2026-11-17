import React, { useEffect, useRef, useState } from 'react';
import { Box, IconButton, Tooltip } from '@mui/material';
import ReplayIcon from '@mui/icons-material/Replay';

// ---------- Umumiy "Natija" paneli ----------
function OutputFrame({ label, children, onReplay }) {
  return (
    <Box sx={{ borderTop: '1px solid #333', background: '#181818' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', px: 1.5, py: 0.4, background: '#252526' }}>
        <Box sx={{ color: '#4ec9b0', fontSize: '0.8rem', fontFamily: 'Consolas, monospace', fontWeight: 700 }}>▶ {label}</Box>
        {onReplay && (
          <Tooltip title="Qayta ishga tushirish">
            <IconButton size="small" onClick={onReplay} sx={{ color: '#9da5b4' }}><ReplayIcon fontSize="small" /></IconButton>
          </Tooltip>
        )}
      </Box>
      {children}
    </Box>
  );
}

const outStyle = { m: 0, p: 2, fontFamily: '"Fira Code", Consolas, monospace', fontSize: '1rem', lineHeight: 1.6, overflowX: 'auto' };

// ---------- 1. Qo'lda yozilgan natija (SQL, terminal, React ...) ----------
export function StaticOutput({ text, label = 'Natija' }) {
  return (
    <OutputFrame label={label}>
      <Box component="pre" sx={{ ...outStyle, color: '#e5e7eb', whiteSpace: 'pre' }}>{text}</Box>
    </OutputFrame>
  );
}

// ---------- 2. JavaScript: izolyatsiyalangan iframe da ishga tushirib, console natijasini ko'rsatish ----------
const SKIP = /\b(prompt|confirm|fetch|XMLHttpRequest|axios|document|window|localStorage|sessionStorage|require|process|module|import|export|navigator|location|history|Notification)\b/;

const HAS_CONSOLE = /console\.(log|info|warn|error|table)|alert\(/;

// console.log yo'q bo'lsa — yuqori darajadagi o'zgaruvchilarning oxirgi qiymatini chiqaradi
function varsToShow(code) {
  const names = [];
  code.split('\n').forEach((line) => {
    const m = line.match(/^(?:const|let|var)\s+([A-Za-z_$][\w$]*)\s*=(.*)$/);
    if (m && !/^\s*(async\s+)?(function\b|class\b|\([^)]*\)\s*=>|[\w$]+\s*=>)/.test(m[2]) && !/require\(|\bnew (Promise|Date)\b|Math\.random/.test(m[2]) && !names.includes(m[1])) names.push(m[1]);
  });
  return names;
}

function prepare(code) {
  if (HAS_CONSOLE.test(code)) return { code, auto: false };
  const names = varsToShow(code);
  if (!names.length) return { code, auto: false };
  return { code: code + '\n' + names.map((n) => `console.log(${JSON.stringify(n + ' =')}, ${n});`).join('\n'), auto: true };
}

function canRun(code) {
  if (SKIP.test(code)) return false;
  const prepared = prepare(code);
  if (!HAS_CONSOLE.test(prepared.code)) return false;
  code = prepared.code;
  try {
    const AsyncFunction = Object.getPrototypeOf(async function () {}).constructor;
    new AsyncFunction(code); // faqat sintaksis tekshiruvi (JSX/TS bo'lsa xato beradi)
    return true;
  } catch {
    return false;
  }
}

const runnerScript = (id, code) => `
<script>
(function(){
  var id=${JSON.stringify(id)};
  function send(t,m){ parent.postMessage({__viz:id,t:t,m:m},'*'); }
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
  function out(t){ return function(){ send(t, Array.prototype.map.call(arguments,function(a){return fmt(a,0,true);}).join(' ')); }; }
  console.log=console.info=console.debug=out('log');
  console.warn=out('warn');
  console.error=out('error');
  console.table=function(x){ send('log', fmt(x,0,true)); };
  window.alert=function(m){ send('log','alert: '+m); };
  (async function(){
    try {
      await (async function(){
${code.replace(/<\/script/gi, '<\\/script')}
      })();
    } catch(e) { send('exc', String(e && e.message || e)); }
    setTimeout(function(){ send('done'); }, 700);
  })();
})();
<\/script>`;

export function JsOutput({ code: original }) {
  const { code, auto } = prepare(original);
  const [lines, setLines] = useState(null);
  const [run, setRun] = useState(0);
  const id = useRef('v' + Math.random().toString(36).slice(2));

  useEffect(() => {
    const collected = [];
    let failed = false;
    const frame = document.createElement('iframe');
    frame.setAttribute('sandbox', 'allow-scripts');
    frame.style.display = 'none';

    const finish = () => {
      window.removeEventListener('message', onMsg);
      clearTimeout(kill);
      frame.remove();
      setLines(failed ? null : collected);
    };
    const onMsg = (e) => {
      const d = e.data;
      if (e.source !== frame.contentWindow || !d || d.__viz !== id.current) return;
      if (d.t === 'done') finish();
      else if (d.t === 'exc') failed = true;
      else collected.push({ t: d.t, m: d.m });
    };
    window.addEventListener('message', onMsg);
    const kill = setTimeout(finish, 3000);
    frame.srcdoc = `<!doctype html><html><body>${runnerScript(id.current, code)}</body></html>`;
    document.body.appendChild(frame);

    return () => { window.removeEventListener('message', onMsg); clearTimeout(kill); frame.remove(); };
  }, [code, run]);

  if (!lines || lines.length === 0) return null;

  return (
    <OutputFrame label={auto ? 'Natija (o\'zgaruvchilarning qiymati)' : 'Natija (console)'} onReplay={() => { setLines(null); setRun((r) => r + 1); }}>
      <Box component="pre" sx={{ ...outStyle, whiteSpace: 'pre-wrap' }}>
        {lines.map((l, i) => (
          <div key={i} style={{ color: l.t === 'error' ? '#f87171' : l.t === 'warn' ? '#fbbf24' : '#e5e7eb' }}>{l.m === '' ? ' ' : l.m}</div>
        ))}
      </Box>
    </OutputFrame>
  );
}

// ---------- 3. HTML / CSS: sahifa qanday ko'rinishini ko'rsatish ----------
const HTML_SKIP = /<(head|iframe|video|audio|script|meta|link|title)\b/i;
const FULL_DOC = /^\s*(<!doctype|<html)/i;
const MEDIA_SKIP = /<(iframe|video|audio)\b/i;
const TAILWIND_CDN = 'https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4';

export function canPreviewHtml(code) {
  if (FULL_DOC.test(code)) return !MEDIA_SKIP.test(code);
  return !HTML_SKIP.test(code);
}

export function HtmlPreview({ html, css = '', tailwind = false }) {
  const [height, setHeight] = useState(120);
  const id = useRef('h' + Math.random().toString(36).slice(2));

  useEffect(() => {
    const onMsg = (e) => {
      if (e.data && e.data.__viz === id.current && e.data.t === 'h') setHeight(Math.min(600, Math.max(40, e.data.m)));
    };
    window.addEventListener('message', onMsg);
    return () => window.removeEventListener('message', onMsg);
  }, []);

  const heightScript = `<script>(function(){function r(){var b=document.body;parent.postMessage({__viz:${JSON.stringify(id.current)},t:'h',m:Math.ceil(b.getBoundingClientRect().height)+(parseFloat(getComputedStyle(b).marginTop)||0)+(parseFloat(getComputedStyle(b).marginBottom)||0)},'*');}
window.addEventListener('load',function(){r();if(window.ResizeObserver){new ResizeObserver(r).observe(document.body);}setTimeout(r,400);setTimeout(r,1200);setTimeout(r,2500);});})();<\/script>`;
  const doc = FULL_DOC.test(html)
    ? (/<\/body>/i.test(html) ? html.replace(/<\/body>/i, heightScript + '</body>') : html + heightScript)
    : `<!doctype html><html><head><meta charset="utf-8" />
<style>body{margin:12px;font-family:Arial,sans-serif;color:#111;background:#fff;} ${tailwind ? '' : ''}</style>
${tailwind ? `<script src="${TAILWIND_CDN}"><\/script>` : ''}
${css ? `<style>${css}</style>` : ''}
</head><body>${html}
${heightScript}
</body></html>`;

  return (
    <OutputFrame label="Natija (brauzerda shunday ko'rinadi)">
      <iframe title="natija" sandbox="allow-scripts" srcDoc={doc} style={{ width: '100%', height, border: 'none', background: '#fff', display: 'block' }} />
    </OutputFrame>
  );
}

export { canRun };
