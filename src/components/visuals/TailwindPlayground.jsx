import React, { useState } from 'react';
import { Panel, CssOut } from './ui';

// Tailwind class → mos CSS (namoyish uchun, ayrim class lar)
const groups = [
  { name: 'padding', items: { 'p-2': { padding: 8 }, 'p-4': { padding: 16 }, 'p-8': { padding: 32 } } },
  { name: 'burchak', items: { rounded: { borderRadius: 4 }, 'rounded-lg': { borderRadius: 8 }, 'rounded-2xl': { borderRadius: 16 }, 'rounded-full': { borderRadius: 999 } } },
  { name: 'fon', items: { 'bg-sky-500': { background: '#0ea5e9' }, 'bg-emerald-500': { background: '#10b981' }, 'bg-rose-500': { background: '#f43f5e' }, 'bg-gray-800': { background: '#1f2937' } } },
  { name: 'matn rangi', items: { 'text-white': { color: '#fff' }, 'text-yellow-300': { color: '#fde047' } } },
  { name: 'matn', items: { 'text-sm': { fontSize: 14 }, 'text-xl': { fontSize: 20 }, 'text-3xl': { fontSize: 30 } } },
  { name: 'qalinlik', items: { 'font-normal': { fontWeight: 400 }, 'font-bold': { fontWeight: 700 } } },
  { name: 'soya', items: { 'shadow-md': { boxShadow: '0 4px 6px rgba(0,0,0,0.35)' }, 'shadow-xl': { boxShadow: '0 20px 25px rgba(0,0,0,0.5)' } } },
  { name: 'chegara', items: { border: { border: '1px solid #cbd5e1' }, 'border-4': { border: '4px solid #fff' } } },
  { name: 'kenglik', items: { 'w-48': { width: 192 }, 'w-64': { width: 256 }, 'w-full': { width: '100%' } } },
  { name: 'tekislash', items: { 'text-left': { textAlign: 'left' }, 'text-center': { textAlign: 'center' }, uppercase: { textTransform: 'uppercase' } } }
];

export default function TailwindPlayground({ accent }) {
  const [active, setActive] = useState(['p-4', 'rounded-lg', 'bg-sky-500', 'text-white', 'text-xl', 'shadow-md', 'text-center']);

  const toggle = (group, cls) => {
    const names = Object.keys(group.items);
    setActive((cur) => (cur.includes(cls) ? cur.filter((c) => c !== cls) : [...cur.filter((c) => !names.includes(c)), cls]));
  };

  const style = {};
  groups.forEach((g) => Object.entries(g.items).forEach(([cls, st]) => { if (active.includes(cls)) Object.assign(style, st); }));

  return (
    <Panel accent={accent}>
      {groups.map((g) => (
        <div key={g.name} style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 6, marginBottom: 8 }}>
          <span style={{ width: 90, color: '#94a3b8', fontSize: '0.8rem', fontFamily: 'Fira Code, monospace' }}>{g.name}</span>
          {Object.keys(g.items).map((cls) => (
            <button key={cls} onClick={() => toggle(g, cls)} style={{ background: active.includes(cls) ? accent : '#1e293b', color: '#fff', border: `1px solid ${active.includes(cls) ? accent : '#475569'}`, borderRadius: 6, padding: '3px 10px', cursor: 'pointer', fontFamily: 'Fira Code, monospace', fontSize: '0.82rem' }}>{cls}</button>
          ))}
        </div>
      ))}

      <div style={{ background: '#e2e8f0', borderRadius: 10, padding: 24, margin: '14px 0', overflowX: 'auto' }}>
        <div style={{ boxSizing: 'border-box', maxWidth: '100%', ...style }}>Salom, Tailwind!</div>
      </div>

      <CssOut code={`<div class="${active.join(' ')}">\n  Salom, Tailwind!\n</div>`} />
    </Panel>
  );
}
