import React, { useRef, useEffect, useState } from 'react';
import { Panel } from './ui';

const presets = ['p', '.card', '#logo', 'ul > li', 'nav a', 'li:first-child', 'a:not(.btn)', 'h1, h2'];

export default function SelectorVisual({ accent }) {
  const [sel, setSel] = useState('.card');
  const [count, setCount] = useState(0);
  const [error, setError] = useState(false);
  const root = useRef(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    el.querySelectorAll('[data-hit]').forEach((n) => n.removeAttribute('data-hit'));
    try {
      const found = sel.trim() ? el.querySelectorAll(sel) : [];
      found.forEach((n) => n.setAttribute('data-hit', '1'));
      setCount(found.length);
      setError(false);
    } catch {
      setCount(0);
      setError(true);
    }
  }, [sel]);

  return (
    <Panel accent={accent}>
      <style>{`.viz-sel [data-hit] { outline: 3px solid ${accent}; outline-offset: 2px; background-color: ${accent}33 !important; }`}</style>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 10 }}>
        {presets.map((p) => (
          <button key={p} onClick={() => setSel(p)} style={{ background: sel === p ? accent : '#1e293b', color: '#fff', border: '1px solid #475569', borderRadius: 6, padding: '4px 10px', cursor: 'pointer', fontFamily: 'Fira Code, monospace' }}>{p}</button>
        ))}
      </div>
      <input
        value={sel}
        onChange={(e) => setSel(e.target.value)}
        placeholder="O'z selektoringizni yozing..."
        style={{ width: '100%', boxSizing: 'border-box', background: '#111827', color: '#ffa07a', border: `1px solid ${error ? '#ef4444' : '#374151'}`, borderRadius: 8, padding: '10px 12px', fontFamily: 'Fira Code, monospace', fontSize: '1rem', marginBottom: 6 }}
      />
      <div style={{ color: error ? '#fca5a5' : '#94a3b8', fontSize: '0.85rem', marginBottom: 12 }}>
        {error ? 'Selektor noto\'g\'ri yozilgan' : `${count} ta element mos keldi`}
      </div>

      <div ref={root} className="viz-sel" style={{ background: '#f8fafc', borderRadius: 10, padding: 16, color: '#0f172a', fontFamily: 'Arial, sans-serif' }}>
        <h1 id="logo" style={{ margin: '0 0 6px', fontSize: 22 }}>Logo</h1>
        <h2 style={{ margin: '0 0 8px', fontSize: 16 }}>Kichik sarlavha</h2>
        <nav style={{ display: 'flex', gap: 12, marginBottom: 8 }}>
          <a href="#x" onClick={(e) => e.preventDefault()}>Bosh</a>
          <a href="#x" onClick={(e) => e.preventDefault()}>Haqida</a>
          <a href="#x" className="btn" onClick={(e) => e.preventDefault()}>Tugma</a>
        </nav>
        <p style={{ margin: '0 0 8px' }}>Birinchi abzats.</p>
        <div className="card" style={{ border: '1px solid #cbd5e1', borderRadius: 8, padding: 8, marginBottom: 8 }}>
          <p style={{ margin: 0 }}>Karta ichidagi abzats</p>
        </div>
        <div className="card" style={{ border: '1px solid #cbd5e1', borderRadius: 8, padding: 8, marginBottom: 8 }}>Ikkinchi karta</div>
        <ul style={{ margin: 0 }}>
          <li>Bir</li>
          <li>Ikki</li>
          <li>Uch</li>
        </ul>
      </div>
    </Panel>
  );
}
