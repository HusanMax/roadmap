import React, { useState } from 'react';
import { Panel, Check } from './ui';

const regions = {
  header: 'Sahifaning yuqori qismi: logo, sarlavha, ba\'zan navigatsiya.',
  nav: 'Asosiy havolalar guruhi (menyu).',
  main: 'Sahifaning asosiy mazmuni. Sahifada faqat bitta bo\'ladi.',
  article: 'Mustaqil mazmun — maqola, post, yangilik.',
  aside: 'Yon qism: tegishli havolalar, reklama, qo\'shimcha ma\'lumot.',
  footer: 'Sahifaning pastki qismi: mualliflik huquqi, aloqa.'
};

export default function SemanticVisual({ accent }) {
  const [active, setActive] = useState('main');
  const [divMode, setDivMode] = useState(false);

  const box = (name, style, children) => (
    <div
      onClick={(e) => { e.stopPropagation(); setActive(name); }}
      style={{
        border: `2px solid ${active === name ? accent : '#475569'}`, background: active === name ? `${accent}33` : '#1e293b',
        borderRadius: 8, padding: 8, cursor: 'pointer', color: '#e2e8f0', fontFamily: 'Fira Code, monospace', fontSize: '0.85rem', transition: '0.15s', ...style
      }}
    >
      <div style={{ fontWeight: 700, color: divMode ? '#94a3b8' : '#fff' }}>{divMode ? '<div>' : `<${name}>`}</div>
      {children}
    </div>
  );

  return (
    <Panel accent={accent}>
      <Check label="Faqat <div> bilan yozilgan variant (ma'nosiz)" checked={divMode} onChange={setDivMode} />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8, margin: '12px 0' }}>
        {box('header', {}, box('nav', { marginTop: 6 }))}
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {box('main', { flex: '3 1 260px', minHeight: 110 }, box('article', { marginTop: 6 }))}
          {box('aside', { flex: '1 1 100px' })}
        </div>
        {box('footer', {})}
      </div>
      <div style={{ padding: 10, borderLeft: `3px solid ${accent}`, background: '#0f172a', color: '#e2e8f0', borderRadius: 6, fontSize: '0.92rem' }}>
        {divMode
          ? 'Hammasi <div> — brauzer, qidiruv tizimi va ekran o\'qigich qismlarning vazifasini bilmaydi. Quti bosib ko\'ring: ma\'no yo\'q.'
          : <><b>&lt;{active}&gt;</b>: {regions[active]}</>}
      </div>
    </Panel>
  );
}
