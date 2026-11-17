import React, { useState } from 'react';
import TopicTemplate from './TopicTemplate';

// Mavzular menyusi + TopicTemplate dan iborat umumiy sahifa.
// colors: { accent, accentSoft, selectedBg, shadow }
export default function TopicPage({ modules, theme, colors, onBack }) {
  const [activeModule, setActiveModule] = useState(modules[0]);

  return (
    <div style={{ width: '100vw', minHeight: '100vh', margin: 0, padding: '30px', zIndex: 10, position: 'relative', boxSizing: 'border-box', display: 'flex', flexDirection: 'column' }}>
      <div>
        <button
          onClick={onBack}
          style={{ background: 'transparent', border: 'none', color: colors.accentSoft, fontFamily: 'Fira Code, monospace', fontWeight: 700, fontSize: '1.2rem', cursor: 'pointer', marginBottom: '20px', display: 'inline-flex', alignItems: 'center', gap: '10px' }}
        >
          ← Roadmapga qaytish
        </button>
      </div>

      <div style={{ display: 'flex', gap: '30px', flex: 1, width: '100%', height: 'calc(100vh - 100px)' }}>
        <div style={{ flex: '0 0 320px', background: 'rgba(13, 20, 33, 0.95)', border: `2px solid ${colors.accent}`, borderRadius: '18px', padding: '24px', backdropFilter: 'blur(10px)', display: 'flex', flexDirection: 'column', boxShadow: `0 0 25px ${colors.shadow}`, overflowY: 'auto' }}>
          <h3 style={{ color: colors.accentSoft, marginBottom: '20px', fontSize: '1.4rem', borderBottom: `1px solid ${colors.accent}`, paddingBottom: '12px' }}>
            Mavzular
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {modules.map((mod) => {
              const isSelected = activeModule.id === mod.id;
              return (
                <button
                  key={mod.id}
                  onClick={() => setActiveModule(mod)}
                  style={{
                    textAlign: 'left',
                    background: isSelected ? colors.selectedBg : 'transparent',
                    border: isSelected ? `2px solid ${colors.accentSoft}` : '2px solid transparent',
                    color: isSelected ? colors.accentSoft : '#cbd5e1',
                    padding: '16px 20px', borderRadius: '12px', fontFamily: 'Fira Code, monospace',
                    fontWeight: isSelected ? '700' : '400', fontSize: '1.1rem', cursor: 'pointer', transition: '0.2s'
                  }}
                >
                  {mod.title}
                </button>
              );
            })}
          </div>
        </div>

        <TopicTemplate module={activeModule} theme={theme} />
      </div>
    </div>
  );
}
