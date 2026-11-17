import React, { useState } from 'react';
import { Panel, Controls, Select, Range, Check, CssOut } from './ui';

const filler = { background: '#1e293b', border: '1px solid #334155', borderRadius: 6, color: '#94a3b8', padding: '10px 12px', fontSize: 13, marginBottom: 8, fontFamily: 'monospace' };

export default function PositionVisual({ accent }) {
  const [pos, setPos] = useState('relative');
  const [top, setTop] = useState(20);
  const [left, setLeft] = useState(20);
  const [parentRel, setParentRel] = useState(true);

  const offsets = pos === 'static' ? {} : pos === 'sticky' ? { top: 0 } : { top, left };

  return (
    <Panel accent={accent}>
      <Controls>
        <Select label="position" value={pos} onChange={setPos} options={['static', 'relative', 'absolute', 'sticky']} />
        {(pos === 'relative' || pos === 'absolute') && (
          <>
            <Range label="top" value={top} min={-20} max={120} onChange={setTop} accent={accent} />
            <Range label="left" value={left} min={-20} max={260} onChange={setLeft} accent={accent} />
          </>
        )}
        {pos === 'absolute' && <Check label="Ota element position: relative" checked={parentRel} onChange={setParentRel} />}
      </Controls>

      <div style={{ color: '#94a3b8', fontSize: '0.85rem', marginBottom: 6 }}>
        {pos === 'static' && 'static — element oddiy oqimda turadi, top/left ishlamaydi.'}
        {pos === 'relative' && 'relative — element o\'z odatiy joyiga nisbatan siljiydi, o\'z joyi bo\'sh qoladi.'}
        {pos === 'absolute' && (parentRel ? 'absolute — oqimdan chiqadi va eng yaqin position berilgan ota (sariq chiziqli) ga nisbatan joylashadi.' : 'absolute — ota element position olmagan, shuning uchun u tashqi (scroll qutisi) ga nisbatan joylashadi.')}
        {pos === 'sticky' && 'sticky — pastga scroll qiling: element qutining tepasiga yopishib qoladi.'}
      </div>

      <div style={{ height: 250, overflowY: 'auto', background: '#0f172a', border: '2px dashed #475569', borderRadius: 10, padding: 10, position: 'relative' }}>
        <div style={filler}>Boshqa element A</div>
        <div style={{ position: pos === 'absolute' && parentRel ? 'relative' : 'static', border: pos === 'absolute' && parentRel ? '2px dashed #facc15' : '2px dashed transparent', borderRadius: 6, padding: 8, marginBottom: 8 }}>
          <div style={filler}>Boshqa element B (ota)</div>
          <div style={{ position: pos, ...offsets, zIndex: 5, background: accent, color: '#fff', fontWeight: 700, padding: '10px 14px', borderRadius: 6, width: 130, textAlign: 'center', boxShadow: '0 4px 14px rgba(0,0,0,0.5)' }}>
            Mening elementim
          </div>
          <div style={filler}>Boshqa element C</div>
        </div>
        {Array.from({ length: 6 }, (_, i) => <div key={i} style={filler}>Qo'shimcha element {i + 1}</div>)}
      </div>

      <CssOut code={`.target {\n  position: ${pos};${pos === 'static' ? '' : pos === 'sticky' ? '\n  top: 0;' : `\n  top: ${top}px;\n  left: ${left}px;`}\n}${pos === 'absolute' && parentRel ? '\n\n.parent { position: relative; }' : ''}`} />
    </Panel>
  );
}
