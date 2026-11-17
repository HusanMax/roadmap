import React, { useState } from 'react';
import { Panel, Controls, Select, Range, CssOut } from './ui';

export default function TransitionVisual({ accent }) {
  const [on, setOn] = useState(false);
  const [duration, setDuration] = useState(0.6);
  const [easing, setEasing] = useState('ease');
  const [anim, setAnim] = useState('pulse');

  return (
    <Panel accent={accent}>
      <style>{`
        @keyframes vizPulse { 0%,100% { transform: scale(1); } 50% { transform: scale(1.3); } }
        @keyframes vizSpin { to { transform: rotate(360deg); } }
        @keyframes vizBounce { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-40px); } }
      `}</style>

      <div style={{ color: '#e2e8f0', fontWeight: 700, marginBottom: 8 }}>1. Transition — tugmani bosing</div>
      <Controls>
        <Range label="duration" value={duration} min={0.1} max={2} step={0.1} unit="s" onChange={setDuration} accent={accent} />
        <Select label="easing" value={easing} onChange={setEasing} options={['linear', 'ease', 'ease-in', 'ease-out', 'ease-in-out']} />
      </Controls>
      <div style={{ background: '#0f172a', border: '2px dashed #475569', borderRadius: 10, height: 90, padding: 12, position: 'relative' }}>
        <div style={{
          width: 56, height: 56, borderRadius: on ? '50%' : 8, background: on ? '#10b981' : accent,
          transform: on ? 'translateX(min(520px, 70vw)) rotate(180deg)' : 'translateX(0) rotate(0)',
          transition: `all ${duration}s ${easing}`, position: 'absolute', top: 17, left: 12
        }} />
      </div>
      <button onClick={() => setOn(!on)} style={{ marginTop: 10, background: accent, color: '#fff', border: 'none', borderRadius: 8, padding: '8px 18px', cursor: 'pointer', fontWeight: 700 }}>
        {on ? '↩ Qaytarish' : '▶ Boshlash'}
      </button>
      <CssOut code={`.box {\n  transition: all ${duration}s ${easing};\n}\n.box.active {\n  transform: translateX(400px) rotate(180deg);\n  border-radius: 50%;\n}`} />

      <div style={{ color: '#e2e8f0', fontWeight: 700, margin: '20px 0 8px' }}>2. @keyframes animatsiya</div>
      <Controls>
        <Select label="animatsiya" value={anim} onChange={setAnim} options={['pulse', 'spin', 'bounce']} />
      </Controls>
      <div style={{ background: '#0f172a', border: '2px dashed #475569', borderRadius: 10, height: 130, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div key={anim} style={{ width: 56, height: 56, borderRadius: anim === 'spin' ? 8 : '50%', background: accent, animation: `viz${anim[0].toUpperCase() + anim.slice(1)} 1.2s ease-in-out infinite` }} />
      </div>
      <CssOut code={`@keyframes ${anim} {\n${anim === 'pulse' ? '  0%, 100% { transform: scale(1); }\n  50% { transform: scale(1.3); }' : anim === 'spin' ? '  to { transform: rotate(360deg); }' : '  0%, 100% { transform: translateY(0); }\n  50% { transform: translateY(-40px); }'}\n}\n\n.box { animation: ${anim} 1.2s ease-in-out infinite; }`} />
    </Panel>
  );
}
