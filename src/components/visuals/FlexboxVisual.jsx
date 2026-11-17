import React, { useState } from 'react';
import { Panel, Controls, Select, Range, CssOut, itemColors } from './ui';

const sizes = [
  { w: 60, h: 50 },
  { w: 90, h: 80 },
  { w: 70, h: 40 },
  { w: 80, h: 65 }
];

export default function FlexboxVisual({ accent }) {
  const [direction, setDirection] = useState('row');
  const [justify, setJustify] = useState('flex-start');
  const [align, setAlign] = useState('stretch');
  const [wrap, setWrap] = useState('nowrap');
  const [gap, setGap] = useState(10);

  return (
    <Panel accent={accent}>
      <Controls>
        <Select label="flex-direction" value={direction} onChange={setDirection} options={['row', 'row-reverse', 'column', 'column-reverse']} />
        <Select label="justify-content" value={justify} onChange={setJustify} options={['flex-start', 'center', 'flex-end', 'space-between', 'space-around', 'space-evenly']} />
        <Select label="align-items" value={align} onChange={setAlign} options={['stretch', 'flex-start', 'center', 'flex-end']} />
        <Select label="flex-wrap" value={wrap} onChange={setWrap} options={['nowrap', 'wrap']} />
        <Range label="gap" value={gap} max={40} onChange={setGap} accent={accent} />
      </Controls>

      <div style={{
        display: 'flex', flexDirection: direction, justifyContent: justify, alignItems: align, flexWrap: wrap, gap,
        height: 240, padding: 10, background: '#0f172a', border: '2px dashed #475569', borderRadius: 10, overflow: 'hidden'
      }}>
        {sizes.map((s, i) => (
          <div key={i} style={{
            background: itemColors[i], width: s.w, height: align === 'stretch' && direction.startsWith('row') ? undefined : s.h,
            minHeight: direction.startsWith('row') ? s.h / 2 : undefined,
            display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 700, borderRadius: 6, flexShrink: 0
          }}>
            {i + 1}
          </div>
        ))}
        <div style={{ background: itemColors[4], width: 120, height: 55, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 700, borderRadius: 6, flexShrink: 0 }}>5</div>
      </div>

      <div style={{ color: '#94a3b8', fontSize: '0.85rem', marginTop: 8 }}>
        Asosiy o'q: <b style={{ color: '#fff' }}>{direction.startsWith('row') ? '→ gorizontal' : '↓ vertikal'}</b> (justify-content shu bo'ylab), ko'ndalang o'q (align-items) unga perpendikulyar.
      </div>

      <CssOut code={`.container {\n  display: flex;\n  flex-direction: ${direction};\n  justify-content: ${justify};\n  align-items: ${align};\n  flex-wrap: ${wrap};\n  gap: ${gap}px;\n}`} />
    </Panel>
  );
}
