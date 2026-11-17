import React, { useState } from 'react';
import { Panel } from './ui';

const areas = ['Working Directory', 'Staging Area', 'Local Repository', 'Remote (GitHub)'];
const icons = ['📝', '📦', '🗄️', '☁️'];

const commands = [
  { cmd: 'git add .', from: 0, to: 1, note: 'O\'zgarishlar keyingi commit uchun staging ga qo\'shildi.' },
  { cmd: 'git commit -m "..."', from: 1, to: 2, note: 'Staging dagi o\'zgarishlar commit sifatida lokal repozitoriyaga saqlandi.' },
  { cmd: 'git push', from: 2, to: 3, note: 'Commit lar GitHub ga yuborildi.' },
  { cmd: 'git fetch', from: 3, to: 2, note: 'GitHub dagi yangiliklar lokal repozitoriyaga yuklandi (fayllar hali o\'zgarmadi).' },
  { cmd: 'git pull', from: 3, to: 0, note: 'GitHub dagi yangiliklar olinib, ish papkangizga qo\'shildi (fetch + merge).' },
  { cmd: 'git restore --staged .', from: 1, to: 0, note: 'Fayl staging dan chiqarildi, o\'zgarish ish papkasida qoldi.' }
];

export default function GitAreasVisual({ accent }) {
  const [loc, setLoc] = useState(0);
  const [msg, setMsg] = useState('Fayl hozir Working Directory da. Pastdagi buyruqlardan birini bosing.');

  const run = (c) => { setLoc(c.to); setMsg(`${c.cmd} → ${c.note}`); };

  return (
    <Panel accent={accent}>
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        {areas.map((a, i) => (
          <div key={a} style={{ flex: '1 1 130px', minHeight: 110, background: loc === i ? `${accent}22` : '#0f172a', border: `2px ${loc === i ? 'solid' : 'dashed'} ${loc === i ? accent : '#475569'}`, borderRadius: 10, padding: 10, textAlign: 'center', transition: '0.25s' }}>
            <div style={{ fontSize: 26 }}>{icons[i]}</div>
            <div style={{ color: '#e2e8f0', fontSize: '0.85rem', fontWeight: 700, margin: '4px 0 8px' }}>{a}</div>
            {loc === i && <div style={{ display: 'inline-block', background: accent, color: '#111', borderRadius: 6, padding: '3px 10px', fontFamily: 'Fira Code, monospace', fontSize: '0.8rem', fontWeight: 700 }}>index.html</div>}
          </div>
        ))}
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, margin: '14px 0 10px' }}>
        {commands.map((c) => {
          const enabled = c.from === loc;
          return (
            <button key={c.cmd} onClick={() => run(c)} disabled={!enabled} style={{ background: enabled ? '#1e293b' : '#0b1220', color: enabled ? '#fde047' : '#475569', border: `1px solid ${enabled ? accent : '#1f2937'}`, borderRadius: 6, padding: '6px 12px', cursor: enabled ? 'pointer' : 'not-allowed', fontFamily: 'Fira Code, monospace', fontSize: '0.85rem' }}>
              {c.cmd}
            </button>
          );
        })}
        <button onClick={() => { setLoc(0); setMsg('Qaytadan boshlandi.'); }} style={{ background: 'transparent', color: '#94a3b8', border: '1px solid #475569', borderRadius: 6, padding: '6px 12px', cursor: 'pointer' }}>↺ Boshidan</button>
      </div>

      <div style={{ padding: 10, borderLeft: `3px solid ${accent}`, background: '#0f172a', color: '#e2e8f0', borderRadius: 6, fontSize: '0.92rem' }}>{msg}</div>
    </Panel>
  );
}
