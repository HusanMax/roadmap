import React, { useState } from 'react';

// Ko'p variantli savollar. sec.questions: [{ q, options: [...], answer: index, explain }]
export default function Quiz({ sec, accent }) {
  const [picked, setPicked] = useState({});
  const questions = sec.questions || [];
  const answered = Object.keys(picked).length;
  const correct = questions.filter((q, i) => picked[i] === q.answer).length;

  return (
    <div style={{ border: `1px solid ${accent}`, borderRadius: 12, background: 'rgba(5,6,8,0.7)', padding: 18, margin: '16px 0' }}>
      <div style={{ color: accent, fontWeight: 800, marginBottom: 12 }}>❓ Bilimingizni sinab ko'ring</div>
      {questions.map((q, qi) => {
        const sel = picked[qi];
        const has = sel !== undefined;
        return (
          <div key={qi} style={{ marginBottom: 18 }}>
            <div style={{ color: '#f1f5f9', fontWeight: 600, marginBottom: 8, lineHeight: 1.6 }}>{qi + 1}. {q.q}</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              {q.options.map((opt, oi) => {
                const isAnswer = oi === q.answer;
                const isSel = sel === oi;
                const bg = !has ? '#111827' : isAnswer ? '#064e3b' : isSel ? '#450a0a' : '#111827';
                const border = !has ? '#374151' : isAnswer ? '#10b981' : isSel ? '#ef4444' : '#374151';
                return (
                  <button
                    key={oi}
                    onClick={() => !has && setPicked({ ...picked, [qi]: oi })}
                    style={{ textAlign: 'left', background: bg, border: `1px solid ${border}`, color: '#e2e8f0', borderRadius: 8, padding: '8px 14px', cursor: has ? 'default' : 'pointer', fontFamily: 'Fira Code, monospace', fontSize: '0.95rem' }}
                  >
                    {has && isAnswer ? '✅ ' : has && isSel ? '❌ ' : ''}{opt}
                  </button>
                );
              })}
            </div>
            {has && q.explain && <div style={{ marginTop: 8, color: '#94a3b8', borderLeft: `3px solid ${accent}`, paddingLeft: 10, lineHeight: 1.6 }}>{q.explain}</div>}
          </div>
        );
      })}
      {answered === questions.length && questions.length > 0 && (
        <div style={{ background: '#0f172a', borderRadius: 8, padding: '10px 14px', color: '#f1f5f9', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 8 }}>
          <span>Natija: <b style={{ color: accent }}>{correct} / {questions.length}</b> {correct === questions.length ? '🎉 Ajoyib!' : correct >= questions.length / 2 ? '👍 Yaxshi, yana urinib ko\'ring' : '📚 Mavzuni qayta o\'qib chiqing'}</span>
          <button onClick={() => setPicked({})} style={{ background: 'transparent', color: '#cbd5e1', border: '1px solid #475569', borderRadius: 8, padding: '6px 14px', cursor: 'pointer' }}>↺ Qayta</button>
        </div>
      )}
    </div>
  );
}
