import React from 'react';

// Vizual bloklar uchun umumiy kichik UI qismlari

export function Panel({ accent = '#e44d26', children }) {
  return (
    <div style={{
      border: `1px solid ${accent}`,
      borderRadius: 12,
      background: 'rgba(5, 6, 8, 0.7)',
      padding: 18,
      margin: '16px 0',
      boxShadow: `0 0 18px ${accent}22`
    }}>
      <div style={{ color: accent, fontWeight: 700, fontSize: '0.95rem', marginBottom: 12, letterSpacing: 0.5 }}>
        🎨 Vizual tushuntirish — o'zingiz sinab ko'ring
      </div>
      {children}
    </div>
  );
}

export function Controls({ children }) {
  return <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, marginBottom: 14 }}>{children}</div>;
}

const labelStyle = { color: '#cbd5e1', fontSize: '0.85rem', display: 'flex', flexDirection: 'column', gap: 4, fontFamily: 'Fira Code, monospace' };

export function Select({ label, value, options, onChange }) {
  return (
    <label style={labelStyle}>
      {label}
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={{ background: '#111827', color: '#f3f4f6', border: '1px solid #374151', borderRadius: 6, padding: '6px 8px', fontFamily: 'inherit' }}
      >
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
    </label>
  );
}

export function Range({ label, value, min = 0, max = 100, step = 1, unit = 'px', onChange, accent = '#e44d26' }) {
  return (
    <label style={{ ...labelStyle, minWidth: 150 }}>
      <span>{label}: <b style={{ color: '#fff' }}>{value}{unit}</b></span>
      <input type="range" min={min} max={max} step={step} value={value} onChange={(e) => onChange(Number(e.target.value))} style={{ accentColor: accent }} />
    </label>
  );
}

export function Check({ label, checked, onChange }) {
  return (
    <label style={{ ...labelStyle, flexDirection: 'row', alignItems: 'center', gap: 8, cursor: 'pointer' }}>
      <input type="checkbox" checked={checked} onChange={(e) => onChange(e.target.checked)} />
      {label}
    </label>
  );
}

export function CssOut({ code }) {
  return (
    <pre style={{ margin: '14px 0 0', padding: '10px 14px', background: '#1e1e1e', border: '1px solid #333', borderRadius: 8, color: '#ffa07a', fontFamily: 'Fira Code, Consolas, monospace', fontSize: '0.9rem', overflowX: 'auto' }}>
      {code}
    </pre>
  );
}

export const itemColors = ['#e44d26', '#2965f1', '#10b981', '#f59e0b', '#a855f7', '#ec4899', '#14b8a6', '#ef4444'];
