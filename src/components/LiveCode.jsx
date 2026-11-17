import React, { useEffect, useMemo, useRef, useState } from 'react';
import EditorModule from 'react-simple-code-editor';
import { Highlight } from 'prism-react-renderer';
import { brightTheme } from './CodeBlock';
import { runJs, runHtmlTests, buildHtmlDoc } from './sandbox';

// CJS paketi: ba'zi bundler larda default eksport obyekt ichida keladi
const Editor = EditorModule.default || EditorModule;

const PRISM_LANG = { js: 'jsx', html: 'markup', css: 'css' };
const LANG_LABEL = { js: 'JavaScript', html: 'HTML', css: 'CSS' };

function loadDone(key) {
  try { return (JSON.parse(localStorage.getItem('roadmap-done') || '[]')).includes(key); } catch { return false; }
}
function saveDone(key) {
  try {
    const list = JSON.parse(localStorage.getItem('roadmap-done') || '[]');
    if (!list.includes(key)) localStorage.setItem('roadmap-done', JSON.stringify([...list, key]));
  } catch { /* localStorage mavjud emas — muhim emas */ }
}

function CodeEditor({ value, onChange, lang }) {
  return (
    <div style={{ background: '#1e1e1e', border: '1px solid #333', borderRadius: 8, maxHeight: 420, overflow: 'auto' }}>
      <Editor
        value={value}
        onValueChange={onChange}
        padding={14}
        tabSize={2}
        insertSpaces
        highlight={(code) => (
          <Highlight theme={brightTheme} code={code} language={PRISM_LANG[lang]}>
            {({ tokens, getTokenProps }) => tokens.map((line, i) => (
              <span key={i}>{line.map((token, k) => <span key={k} {...getTokenProps({ token })} />)}{i < tokens.length - 1 ? '\n' : ''}</span>
            ))}
          </Highlight>
        )}
        style={{ fontFamily: '"Fira Code", Consolas, monospace', fontSize: '1rem', lineHeight: 1.6, color: '#f3f3f3', minHeight: 90 }}
        textareaClassName="live-code-textarea"
      />
    </div>
  );
}

function Preview({ html, css, tailwind }) {
  const [height, setHeight] = useState(100);
  const id = useRef('p' + Math.random().toString(36).slice(2));
  useEffect(() => {
    const onMsg = (e) => { if (e.data && e.data.__viz === id.current) setHeight(Math.min(520, Math.max(60, e.data.m))); };
    window.addEventListener('message', onMsg);
    return () => window.removeEventListener('message', onMsg);
  }, []);
  const doc = useMemo(() => {
    const hs = `<script>(function(){function r(){var b=document.body;parent.postMessage({__viz:${JSON.stringify(id.current)},m:Math.ceil(b.getBoundingClientRect().height)+36},'*');}
window.addEventListener('load',function(){r();if(window.ResizeObserver){new ResizeObserver(r).observe(document.body);}setTimeout(r,500);setTimeout(r,1500);});})();<\/script>`;
    return buildHtmlDoc(html, { css, tailwind, extra: hs });
  }, [html, css, tailwind]);
  return (
    <div style={{ marginTop: 12 }}>
      <div style={{ color: '#4ec9b0', fontSize: '0.8rem', fontFamily: 'Consolas, monospace', fontWeight: 700, marginBottom: 4 }}>▶ Natija (jonli ko'rinish)</div>
      <iframe title="jonli natija" sandbox="allow-scripts" srcDoc={doc} style={{ width: '100%', height, border: '1px solid #333', borderRadius: 8, background: '#fff', display: 'block' }} />
    </div>
  );
}

const btn = (accent, primary) => ({
  background: primary ? accent : 'transparent', color: primary ? '#111' : '#cbd5e1', border: `1px solid ${primary ? accent : '#475569'}`,
  borderRadius: 8, padding: '8px 16px', fontWeight: 700, cursor: 'pointer', fontFamily: 'inherit', fontSize: '0.95rem'
});

export default function LiveCode({ sec, accent, tailwind, storageKey }) {
  const isChallenge = sec.type === 'challenge';
  const lang = sec.lang || 'js';
  const initial = isChallenge ? sec.starter : sec.code;
  const [code, setCode] = useState(initial);
  const [result, setResult] = useState(null);
  const [running, setRunning] = useState(false);
  const [hint, setHint] = useState(false);
  const [solution, setSolution] = useState(false);
  const [done, setDone] = useState(() => isChallenge && loadDone(storageKey));
  const tests = sec.tests || [];

  const run = async () => {
    setRunning(true);
    let r;
    if (lang === 'js') r = await runJs(code, tests);
    else if (lang === 'html') r = await runHtmlTests(code, tests, { tailwind });
    else r = await runHtmlTests(sec.html, tests, { css: code, tailwind });
    setRunning(false);
    setResult(r);
    if (isChallenge && r.tests && r.tests.length && r.tests.every(Boolean) && !r.error) { setDone(true); saveDone(storageKey); }
  };

  // Tajriba (playground): JavaScript kodi o'zgarganda avtomatik ishga tushadi
  useEffect(() => {
    if (isChallenge || lang !== 'js') return undefined;
    let alive = true;
    const t = setTimeout(() => { runJs(code).then((r) => { if (alive) setResult(r); }); }, 600);
    return () => { alive = false; clearTimeout(t); };
  }, [code, isChallenge, lang]);

  const reset = () => { setCode(initial); setResult(null); setHint(false); setSolution(false); };
  const allPassed = result && result.tests && result.tests.length && result.tests.every(Boolean) && !result.error;

  return (
    <div style={{ border: `1px solid ${accent}`, borderRadius: 12, background: 'rgba(5,6,8,0.7)', padding: 18, margin: '16px 0', boxShadow: `0 0 18px ${accent}22` }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10, flexWrap: 'wrap', marginBottom: 10 }}>
        <div style={{ color: accent, fontWeight: 800, fontSize: '1rem' }}>
          {isChallenge ? '🧩 Mini vazifa' : '🧪 Tajriba'} · <span style={{ color: '#94a3b8', fontWeight: 400 }}>{LANG_LABEL[lang]}</span>
        </div>
        {done && <div style={{ background: '#064e3b', color: '#6ee7b7', borderRadius: 999, padding: '2px 12px', fontSize: '0.85rem', fontWeight: 700 }}>✅ Bajarilgan</div>}
      </div>

      {sec.story && (
        <div style={{ borderLeft: `3px solid ${accent}`, background: '#0f172a', borderRadius: 6, padding: '10px 14px', color: '#e2e8f0', marginBottom: 10, lineHeight: 1.7 }}>
          <b>💼 Hayotiy vaziyat:</b> {sec.story}
        </div>
      )}
      {sec.task && <div style={{ color: '#f1f5f9', marginBottom: 12, lineHeight: 1.7 }}><b>📝 Vazifa:</b> {sec.task}</div>}

      {lang === 'css' && (
        <details style={{ marginBottom: 10, color: '#94a3b8' }}>
          <summary style={{ cursor: 'pointer' }}>Sahifaning HTML qismi (o'zgartirilmaydi)</summary>
          <pre style={{ background: '#1e1e1e', padding: 10, borderRadius: 6, overflowX: 'auto', color: '#9cdcfe', fontSize: '0.9rem' }}>{sec.html}</pre>
        </details>
      )}

      <CodeEditor value={code} onChange={(v) => { setCode(v); }} lang={lang} />

      <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginTop: 12 }}>
        {isChallenge && <button onClick={run} disabled={running} style={btn(accent, true)}>{running ? 'Tekshirilmoqda...' : '▶ Tekshirish'}</button>}
        {!isChallenge && lang === 'js' && <span style={{ color: '#94a3b8', alignSelf: 'center', fontSize: '0.9rem' }}>Kodni o'zgartiring — natija avtomatik yangilanadi</span>}
        {isChallenge && sec.hint && <button onClick={() => setHint(!hint)} style={btn(accent)}>💡 Maslahat</button>}
        {isChallenge && sec.solution && <button onClick={() => setSolution(!solution)} style={btn(accent)}>👀 Yechim</button>}
        <button onClick={reset} style={btn(accent)}>↺ Boshidan</button>
      </div>

      {hint && <div style={{ marginTop: 10, background: '#422006', color: '#fde68a', borderRadius: 8, padding: '10px 14px' }}>💡 {sec.hint}</div>}
      {solution && (
        <pre style={{ marginTop: 10, background: '#1e1e1e', border: '1px dashed #475569', borderRadius: 8, padding: 12, overflowX: 'auto', color: '#d4f0b0', fontFamily: '"Fira Code", Consolas, monospace' }}>{sec.solution}</pre>
      )}

      {result && result.error && (
        <div style={{ marginTop: 12, background: '#450a0a', color: '#fca5a5', borderRadius: 8, padding: '10px 14px', fontFamily: 'Fira Code, monospace', fontSize: '0.92rem' }}>⚠ Xato: {result.error}</div>
      )}

      {isChallenge && result && result.tests && (
        <div style={{ marginTop: 12 }}>
          {tests.map((t, i) => (
            <div key={i} style={{ color: result.tests[i] ? '#6ee7b7' : '#fca5a5', padding: '3px 0' }}>{result.tests[i] ? '✅' : '❌'} {t.name}</div>
          ))}
          {allPassed && <div style={{ marginTop: 10, background: '#064e3b', color: '#a7f3d0', borderRadius: 8, padding: '10px 14px', fontWeight: 700 }}>🎉 Barakalla! Hamma tekshiruvdan o'tdingiz.</div>}
        </div>
      )}

      {lang === 'js' && result && result.logs && result.logs.length > 0 && (
        <div style={{ marginTop: 12 }}>
          <div style={{ color: '#4ec9b0', fontSize: '0.8rem', fontFamily: 'Consolas, monospace', fontWeight: 700, marginBottom: 4 }}>▶ Natija (console)</div>
          <pre style={{ margin: 0, background: '#181818', border: '1px solid #333', borderRadius: 8, padding: 12, fontFamily: '"Fira Code", Consolas, monospace', whiteSpace: 'pre-wrap' }}>
            {result.logs.map((l, i) => <div key={i} style={{ color: l.t === 'error' ? '#f87171' : l.t === 'warn' ? '#fbbf24' : '#e5e7eb' }}>{l.m === '' ? ' ' : l.m}</div>)}
          </pre>
        </div>
      )}

      {lang === 'html' && <Preview html={code} tailwind={tailwind} />}
      {lang === 'css' && <Preview html={sec.html} css={code} tailwind={tailwind} />}
    </div>
  );
}
