import React, { useState } from 'react';
import { Panel, Controls, Range, CssOut } from './ui';

// Chrome DevTools dagi kabi qatlam ranglari
const layer = (bg, label, extra) => ({ background: bg, position: 'relative', ...extra });

export default function BoxModelVisual({ accent }) {
  const [margin, setMargin] = useState(24);
  const [border, setBorder] = useState(6);
  const [padding, setPadding] = useState(24);
  const [width, setWidth] = useState(160);

  const total = width + padding * 2 + border * 2;

  return (
    <Panel accent={accent}>
      <Controls>
        <Range label="margin" value={margin} max={50} onChange={setMargin} accent={accent} />
        <Range label="border" value={border} max={20} onChange={setBorder} accent={accent} />
        <Range label="padding" value={padding} max={50} onChange={setPadding} accent={accent} />
        <Range label="width" value={width} min={80} max={260} onChange={setWidth} accent={accent} />
      </Controls>

      <div style={{ display: 'flex', justifyContent: 'center', overflowX: 'auto', padding: '6px 0' }}>
        <div style={layer('#f9cc9d', 'margin', { padding: margin, border: '1px dashed #c58a4a', color: '#7a4a14' })}>
          <span style={{ position: 'absolute', top: 2, left: 6, fontSize: 11, fontFamily: 'monospace' }}>margin</span>
          <div style={{ background: '#fddd9b', padding: border, color: '#7a5d14', position: 'relative' }}>
            <span style={{ position: 'absolute', top: 0, left: 6, fontSize: 10, fontFamily: 'monospace' }}>{border >= 14 ? 'border' : ''}</span>
            <div style={{ background: '#c3d08b', padding, color: '#4a5a14', position: 'relative' }}>
              <span style={{ position: 'absolute', top: 2, left: 6, fontSize: 11, fontFamily: 'monospace' }}>padding</span>
              <div style={{ background: '#8cb6c0', width, height: 70, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0d3a47', fontFamily: 'monospace', fontSize: 13, fontWeight: 700 }}>
                content
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ color: '#94a3b8', fontSize: '0.9rem', marginTop: 10, textAlign: 'center' }}>
        Elementning umumiy kengligi (<code>content-box</code>): {width} + {padding * 2} (padding) + {border * 2} (border) = <b style={{ color: '#fff' }}>{total}px</b>
        &nbsp;·&nbsp; margin bilan: <b style={{ color: '#fff' }}>{total + margin * 2}px</b>
      </div>

      <CssOut code={`.box {\n  width: ${width}px;\n  padding: ${padding}px;\n  border: ${border}px solid;\n  margin: ${margin}px;\n}`} />
    </Panel>
  );
}
