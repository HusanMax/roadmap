import React, { useState } from 'react';
import { Panel, Controls, Range, Check, CssOut, itemColors } from './ui';

export default function GridVisual({ accent }) {
  const [cols, setCols] = useState(3);
  const [gap, setGap] = useState(12);
  const [span, setSpan] = useState(false);
  const [rowSpan, setRowSpan] = useState(false);

  return (
    <Panel accent={accent}>
      <Controls>
        <Range label="ustunlar soni" value={cols} min={1} max={6} unit="" onChange={setCols} accent={accent} />
        <Range label="gap" value={gap} max={40} onChange={setGap} accent={accent} />
        <Check label="1-katak 2 ustunga cho'zilsin" checked={span} onChange={setSpan} />
        <Check label="2-katak 2 qatorga cho'zilsin" checked={rowSpan} onChange={setRowSpan} />
      </Controls>

      <div style={{ display: 'grid', gridTemplateColumns: `repeat(${cols}, 1fr)`, gap, padding: 10, background: '#0f172a', border: '2px dashed #475569', borderRadius: 10 }}>
        {Array.from({ length: 9 }, (_, i) => (
          <div key={i} style={{
            background: itemColors[i % itemColors.length], borderRadius: 6, color: '#fff', fontWeight: 700,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            gridColumn: i === 0 && span && cols > 1 ? 'span 2' : undefined,
            gridRow: i === 1 && rowSpan ? 'span 2' : undefined,
            height: i === 1 && rowSpan ? 'auto' : 54
          }}>
            {i + 1}
          </div>
        ))}
      </div>

      <CssOut code={`.grid {\n  display: grid;\n  grid-template-columns: repeat(${cols}, 1fr);\n  gap: ${gap}px;\n}${span ? '\n\n.item-1 { grid-column: span 2; }' : ''}${rowSpan ? '\n\n.item-2 { grid-row: span 2; }' : ''}`} />
    </Panel>
  );
}
