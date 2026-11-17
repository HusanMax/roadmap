import React, { useState } from 'react';
import { Panel } from './ui';

const code = [
  '<html>',
  '  <head>',
  '    <title>Sahifam</title>',
  '  </head>',
  '  <body>',
  '    <h1>Salom</h1>',
  '    <p>Matn</p>',
  '    <ul>',
  '      <li>HTML</li>',
  '      <li>CSS</li>',
  '    </ul>',
  '  </body>',
  '</html>'
];

// har bir tugun: nomi, chuqurligi va kodda egallagan qatorlari
const nodes = [
  { id: 'html', label: 'html', depth: 0, lines: [0, 12] },
  { id: 'head', label: 'head', depth: 1, lines: [1, 3] },
  { id: 'title', label: 'title', depth: 2, lines: [2, 2] },
  { id: 'body', label: 'body', depth: 1, lines: [4, 11] },
  { id: 'h1', label: 'h1', depth: 2, lines: [5, 5] },
  { id: 'p', label: 'p', depth: 2, lines: [6, 6] },
  { id: 'ul', label: 'ul', depth: 2, lines: [7, 10] },
  { id: 'li1', label: 'li', depth: 3, lines: [8, 8] },
  { id: 'li2', label: 'li', depth: 3, lines: [9, 9] }
];

const info = {
  html: 'Ildiz element — barcha elementlar uning ichida.',
  head: 'Sahifa haqida ma\'lumot (ko\'rinmaydi).',
  title: 'Brauzer tabidagi sarlavha.',
  body: 'Foydalanuvchi ko\'radigan hamma narsa shu yerda.',
  h1: 'Asosiy sarlavha.',
  p: 'Abzats.',
  ul: 'Tartibsiz ro\'yxat — ichida li elementlari bor.',
  li1: 'Ro\'yxat bandi (ul ning farzandi).',
  li2: 'Ro\'yxat bandi (ul ning farzandi).'
};

export default function HtmlTreeVisual({ accent }) {
  const [active, setActive] = useState('ul');
  const cur = nodes.find((n) => n.id === active);

  return (
    <Panel accent={accent}>
      <div style={{ color: '#94a3b8', fontSize: '0.88rem', marginBottom: 10 }}>
        Chapda — kod, o'ngda — brauzer yaratadigan DOM daraxti. Daraxtdagi elementni bosing: kodda mos qismi yoritiladi.
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 20 }}>
        <pre style={{ flex: '1 1 260px', margin: 0, background: '#1e1e1e', border: '1px solid #333', borderRadius: 8, padding: '12px 0', fontFamily: 'Fira Code, Consolas, monospace', fontSize: '0.92rem', color: '#9cdcfe' }}>
          {code.map((line, i) => {
            const hit = i >= cur.lines[0] && i <= cur.lines[1];
            return (
              <div key={i} style={{ padding: '0 14px', background: hit ? `${accent}44` : 'transparent', borderLeft: `3px solid ${hit ? accent : 'transparent'}`, whiteSpace: 'pre' }}>{line || ' '}</div>
            );
          })}
        </pre>

        <div style={{ flex: '1 1 260px' }}>
          {nodes.map((n) => (
            <div key={n.id} style={{ marginLeft: n.depth * 26, marginBottom: 6, display: 'flex', alignItems: 'center' }}>
              {n.depth > 0 && <span style={{ color: '#475569', marginRight: 6 }}>└─</span>}
              <button
                onClick={() => setActive(n.id)}
                style={{
                  background: active === n.id ? accent : '#1e293b', color: '#fff', border: `1px solid ${active === n.id ? accent : '#475569'}`,
                  borderRadius: 6, padding: '4px 12px', cursor: 'pointer', fontFamily: 'Fira Code, monospace', fontSize: '0.9rem'
                }}
              >
                &lt;{n.label}&gt;
              </button>
            </div>
          ))}
          <div style={{ marginTop: 12, padding: 10, borderLeft: `3px solid ${accent}`, background: '#0f172a', color: '#e2e8f0', borderRadius: 6, fontSize: '0.92rem' }}>
            <b>&lt;{cur.label}&gt;</b>: {info[cur.id]}
          </div>
        </div>
      </div>
    </Panel>
  );
}
