import React, { useState } from 'react';
import { Panel } from './ui';

const laneColors = ['#eab308', '#38bdf8', '#10b981', '#f43f5e', '#a855f7'];
const initial = {
  commits: [{ id: 0, lane: 0, parents: [], label: 'C0' }],
  branches: { main: { head: 0, lane: 0 } },
  current: 'main',
  log: 'Boshlang\'ich commit yaratildi. Tugmalarni bosing.'
};

function isAncestor(commits, anc, desc) {
  const stack = [desc]; const seen = new Set();
  while (stack.length) {
    const c = stack.pop();
    if (c === anc) return true;
    if (seen.has(c)) continue;
    seen.add(c);
    stack.push(...commits[c].parents);
  }
  return false;
}

export default function GitGraphVisual({ accent }) {
  const [st, setSt] = useState(initial);
  const [target, setTarget] = useState('');

  const names = Object.keys(st.branches);
  const mergeFrom = names.filter((n) => n !== st.current);
  const sel = mergeFrom.includes(target) ? target : mergeFrom[0] || '';

  const commit = () => setSt((s) => {
    const b = s.branches[s.current];
    const id = s.commits.length;
    return { ...s, commits: [...s.commits, { id, lane: b.lane, parents: [b.head], label: 'C' + id }], branches: { ...s.branches, [s.current]: { ...b, head: id } }, log: `git commit — ${s.current} ga yangi commit C${id} qo'shildi.` };
  });

  const newBranch = () => setSt((s) => {
    if (names.length >= 5) return { ...s, log: 'Namoyish uchun 5 tadan ko\'p branch ochilmaydi.' };
    const name = 'feature-' + names.length;
    return { ...s, branches: { ...s.branches, [name]: { head: s.branches[s.current].head, lane: names.length } }, current: name, log: `git switch -c ${name} — yangi branch ochildi va unga o'tildi.` };
  });

  const sw = (name) => setSt((s) => ({ ...s, current: name, log: `git switch ${name} — HEAD endi ${name} da.` }));

  const merge = () => setSt((s) => {
    if (!sel) return s;
    const cur = s.branches[s.current]; const other = s.branches[sel];
    if (isAncestor(s.commits, other.head, cur.head)) return { ...s, log: `${sel} allaqachon ${s.current} ichida — qo'shiladigan narsa yo'q.` };
    if (isAncestor(s.commits, cur.head, other.head)) {
      return { ...s, branches: { ...s.branches, [s.current]: { ...cur, head: other.head } }, log: `git merge ${sel} — Fast-forward: ${s.current} ko'rsatkichi oldinga surildi, yangi commit yaratilmadi.` };
    }
    const id = s.commits.length;
    return { ...s, commits: [...s.commits, { id, lane: cur.lane, parents: [cur.head, other.head], label: 'M' + id }], branches: { ...s.branches, [s.current]: { ...cur, head: id } }, log: `git merge ${sel} — ikki shox birlashtirildi: merge commit M${id}.` };
  });

  const X = (i) => 40 + i * 56;
  const Y = (lane) => 36 + lane * 46;
  const width = Math.max(420, X(st.commits.length) + 90);
  const height = Y(Math.max(...Object.values(st.branches).map((b) => b.lane))) + 50;

  const btn = (label, onClick, disabled) => (
    <button onClick={onClick} disabled={disabled} style={{ background: disabled ? '#0b1220' : '#1e293b', color: disabled ? '#475569' : '#fde047', border: `1px solid ${disabled ? '#1f2937' : accent}`, borderRadius: 6, padding: '6px 12px', cursor: disabled ? 'not-allowed' : 'pointer', fontFamily: 'Fira Code, monospace', fontSize: '0.85rem' }}>{label}</button>
  );

  return (
    <Panel accent={accent}>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, alignItems: 'center', marginBottom: 12 }}>
        {btn('git commit', commit)}
        {btn('git switch -c yangi', newBranch)}
        <select value={st.current} onChange={(e) => sw(e.target.value)} style={{ background: '#111827', color: '#f3f4f6', border: '1px solid #374151', borderRadius: 6, padding: '6px 8px', fontFamily: 'Fira Code, monospace' }}>
          {names.map((n) => <option key={n} value={n}>switch {n}</option>)}
        </select>
        {btn(`git merge ${sel || '...'}`, merge, !sel)}
        {btn('↺ Boshidan', () => setSt(initial))}
        {mergeFrom.length > 1 && (
          <select value={sel} onChange={(e) => setTarget(e.target.value)} style={{ background: '#111827', color: '#f3f4f6', border: '1px solid #374151', borderRadius: 6, padding: '6px 8px', fontFamily: 'Fira Code, monospace' }}>
            {mergeFrom.map((n) => <option key={n} value={n}>merge: {n}</option>)}
          </select>
        )}
      </div>

      <div style={{ overflowX: 'auto', background: '#0f172a', border: '2px dashed #475569', borderRadius: 10 }}>
        <svg width={width} height={height} style={{ display: 'block' }}>
          {st.commits.map((c) => c.parents.map((p) => {
            const pc = st.commits[p];
            return <path key={c.id + '-' + p} d={`M ${X(pc.id)} ${Y(pc.lane)} C ${X(pc.id) + 28} ${Y(pc.lane)}, ${X(c.id) - 28} ${Y(c.lane)}, ${X(c.id)} ${Y(c.lane)}`} stroke={laneColors[c.lane % 5]} strokeWidth="3" fill="none" opacity="0.85" />;
          }))}
          {st.commits.map((c) => (
            <g key={c.id}>
              <circle cx={X(c.id)} cy={Y(c.lane)} r="14" fill="#0f172a" stroke={laneColors[c.lane % 5]} strokeWidth="3" />
              <text x={X(c.id)} y={Y(c.lane) + 4} textAnchor="middle" fontSize="11" fill="#fff" fontFamily="monospace">{c.label}</text>
            </g>
          ))}
          {Object.entries(st.branches).map(([name, b]) => {
            const c = st.commits[b.head];
            const isCur = name === st.current;
            return (
              <g key={name} transform={`translate(${X(c.id) - 28}, ${Y(c.lane) - 40})`}>
                <rect width={name.length * 7.5 + (isCur ? 54 : 16)} height="18" rx="9" fill={laneColors[b.lane % 5]} opacity={isCur ? 1 : 0.6} />
                <text x="8" y="13" fontSize="11" fill="#111" fontWeight="700" fontFamily="monospace">{isCur ? 'HEAD → ' : ''}{name}</text>
              </g>
            );
          })}
        </svg>
      </div>

      <div style={{ marginTop: 10, padding: 10, borderLeft: `3px solid ${accent}`, background: '#0f172a', color: '#e2e8f0', borderRadius: 6, fontSize: '0.92rem' }}>{st.log}</div>
    </Panel>
  );
}
