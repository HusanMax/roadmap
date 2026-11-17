import React, { useState } from 'react';
import { Panel } from './ui';

// Selektor ballini (id, class, teg) hisoblaydi
function score(selector) {
  let s = selector
    .replace(/\[[^\]]*\]/g, ' [a] ')          // atribut = class darajasi
    .replace(/:not\(|:is\(|:where\(|:has\(/g, ' ( ');
  const ids = (s.match(/#[\w-]+/g) || []).length;
  const pseudoEl = (s.match(/::[\w-]+/g) || []).length;
  s = s.replace(/::[\w-]+/g, ' ');
  const classes = (s.match(/\.[\w-]+/g) || []).length + (s.match(/\[a\]/g) || []).length + (s.match(/:[\w-]+/g) || []).length;
  const stripped = s.replace(/#[\w-]+|\.[\w-]+|:[\w-]+|\[a\]|[>+~(),*]/g, ' ');
  const tags = (stripped.match(/[a-zA-Z][\w-]*/g) || []).length + pseudoEl;
  return [ids, classes, tags];
}

const examples = ['p', '.btn', '#nav .item a:hover', 'ul > li.active', 'a[href^="https"]', '#header', 'nav a::after'];

export default function SpecificityVisual({ accent }) {
  const [sel, setSel] = useState('#nav .item a:hover');
  const [a, b, c] = score(sel);

  const cell = (label, value, color) => (
    <div style={{ flex: 1, minWidth: 90, textAlign: 'center', background: '#0f172a', border: `2px solid ${color}`, borderRadius: 10, padding: '10px 6px' }}>
      <div style={{ fontSize: '2rem', fontWeight: 800, color }}>{value}</div>
      <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>{label}</div>
    </div>
  );

  return (
    <Panel accent={accent}>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 10 }}>
        {examples.map((e) => (
          <button key={e} onClick={() => setSel(e)} style={{ background: sel === e ? accent : '#1e293b', color: '#fff', border: '1px solid #475569', borderRadius: 6, padding: '4px 10px', cursor: 'pointer', fontFamily: 'Fira Code, monospace', fontSize: '0.85rem' }}>{e}</button>
        ))}
      </div>
      <input
        value={sel}
        onChange={(e) => setSel(e.target.value)}
        placeholder="Selektor yozing..."
        style={{ width: '100%', boxSizing: 'border-box', background: '#111827', color: '#ffa07a', border: '1px solid #374151', borderRadius: 8, padding: '10px 12px', fontFamily: 'Fira Code, monospace', fontSize: '1rem', marginBottom: 14 }}
      />
      <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
        {cell('id (a)', a, '#ef4444')}
        {cell('class / atribut / pseudo-class (b)', b, '#f59e0b')}
        {cell('teg / pseudo-element (c)', c, '#10b981')}
      </div>
      <div style={{ textAlign: 'center', marginTop: 12, color: '#e2e8f0', fontFamily: 'Fira Code, monospace' }}>
        Ball: <b style={{ color: '#fff', fontSize: '1.2rem' }}>({a}, {b}, {c})</b>
      </div>
      <div style={{ color: '#94a3b8', fontSize: '0.85rem', textAlign: 'center', marginTop: 6 }}>
        Solishtirish: avval a, teng bo'lsa b, keyin c. Masalan (0,1,0) har qanday (0,0,5) dan kuchli.
      </div>
    </Panel>
  );
}
