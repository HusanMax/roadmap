import React, { useState } from 'react';
import { Panel, Controls, Range, Select, CssOut } from './ui';

export default function EffectsVisual({ accent }) {
  const [type, setType] = useState('linear');
  const [angle, setAngle] = useState(135);
  const [c1, setC1] = useState('#e44d26');
  const [c2, setC2] = useState('#6366f1');
  const [radius, setRadius] = useState(16);
  const [sx, setSx] = useState(0);
  const [sy, setSy] = useState(10);
  const [blur, setBlur] = useState(24);
  const [alpha, setAlpha] = useState(0.4);

  const bg = type === 'linear' ? `linear-gradient(${angle}deg, ${c1}, ${c2})`
    : type === 'radial' ? `radial-gradient(circle, ${c1}, ${c2})`
    : `conic-gradient(from ${angle}deg, ${c1}, ${c2}, ${c1})`;
  const shadow = `${sx}px ${sy}px ${blur}px rgba(0, 0, 0, ${alpha})`;

  const color = (label, v, set) => (
    <label style={{ color: '#cbd5e1', fontSize: '0.85rem', display: 'flex', flexDirection: 'column', gap: 4, fontFamily: 'Fira Code, monospace' }}>
      {label}
      <input type="color" value={v} onChange={(e) => set(e.target.value)} style={{ width: 60, height: 32, border: 'none', background: 'none', cursor: 'pointer' }} />
    </label>
  );

  return (
    <Panel accent={accent}>
      <Controls>
        <Select label="gradient turi" value={type} onChange={setType} options={['linear', 'radial', 'conic']} />
        {color('1-rang', c1, setC1)}
        {color('2-rang', c2, setC2)}
        {type !== 'radial' && <Range label="burchak" value={angle} max={360} unit="°" onChange={setAngle} accent={accent} />}
        <Range label="border-radius" value={radius} max={80} onChange={setRadius} accent={accent} />
      </Controls>
      <Controls>
        <Range label="soya x" value={sx} min={-40} max={40} onChange={setSx} accent={accent} />
        <Range label="soya y" value={sy} min={-40} max={40} onChange={setSy} accent={accent} />
        <Range label="blur" value={blur} max={80} onChange={setBlur} accent={accent} />
        <Range label="shaffoflik" value={alpha} min={0} max={1} step={0.05} unit="" onChange={setAlpha} accent={accent} />
      </Controls>

      <div style={{ background: '#e2e8f0', borderRadius: 10, padding: 40, display: 'flex', justifyContent: 'center' }}>
        <div style={{ width: 220, height: 130, background: bg, borderRadius: radius, boxShadow: shadow }} />
      </div>

      <CssOut code={`.box {\n  background: ${bg};\n  border-radius: ${radius}px;\n  box-shadow: ${shadow};\n}`} />
    </Panel>
  );
}
