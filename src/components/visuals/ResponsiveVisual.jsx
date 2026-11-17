import React, { useState } from 'react';
import { Panel, Controls, Range, CssOut, itemColors } from './ui';

export default function ResponsiveVisual({ accent }) {
  const [width, setWidth] = useState(720);
  const mode = width < 500 ? 'mobil' : width < 800 ? 'planshet' : 'kompyuter';
  const cols = width < 500 ? 1 : width < 800 ? 2 : 4;
  const icon = width < 500 ? '📱' : width < 800 ? '📟' : '🖥️';

  return (
    <Panel accent={accent}>
      <Controls>
        <Range label="Ekran kengligi" value={width} min={300} max={1000} step={10} onChange={setWidth} accent={accent} />
      </Controls>

      <div style={{ overflowX: 'auto' }}>
        <div style={{ width, maxWidth: '100%', margin: '0 auto', background: '#0f172a', border: '2px solid #475569', borderRadius: 10, padding: 12, transition: 'width 0.1s' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#1e293b', borderRadius: 6, padding: '8px 12px', marginBottom: 10, color: '#e2e8f0', fontSize: 13 }}>
            <b>Logo</b>
            {width < 500
              ? <span style={{ fontSize: 20 }}>☰</span>
              : <span style={{ display: 'flex', gap: 14 }}><span>Bosh</span><span>Haqida</span><span>Aloqa</span></span>}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: `repeat(${cols}, 1fr)`, gap: 10 }}>
            {Array.from({ length: 4 }, (_, i) => (
              <div key={i} style={{ background: itemColors[i], height: 56, borderRadius: 6, color: '#fff', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Karta {i + 1}</div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ textAlign: 'center', color: '#cbd5e1', marginTop: 10 }}>
        {icon} Hozir: <b style={{ color: '#fff' }}>{mode}</b> · {cols} ustun · {width}px
      </div>

      <CssOut code={`.cards { display: grid; grid-template-columns: 1fr; }\n\n@media (min-width: 500px) { .cards { grid-template-columns: repeat(2, 1fr); } }\n@media (min-width: 800px) { .cards { grid-template-columns: repeat(4, 1fr); } }`} />
    </Panel>
  );
}
