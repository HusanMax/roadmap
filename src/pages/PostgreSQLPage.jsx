import React, { useState } from 'react';
import { postgresAllModules } from '../data/PostgreSQL/AllData';
import TopicTemplate from '../components/TopicTemplate';

export default function PostgreSQLPage({ onBack }) {
  const [activeModule, setActiveModule] = useState(postgresAllModules[0]);

  return (
    <div style={{
      width: '100vw',
      minHeight: '100vh',
      margin: 0,
      padding: '30px',
      zIndex: 10,
      position: 'relative',
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <div>
        <button
          onClick={onBack}
          style={{
            background: 'transparent',
            border: 'none',
            color: '#8ecae6',
            fontFamily: 'Fira Code, monospace',
            fontWeight: 700,
            fontSize: '1.2rem',
            cursor: 'pointer',
            marginBottom: '20px',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px'
          }}
        >
          ← Roadmapga qaytish
        </button>
      </div>

      <div style={{
        display: 'flex',
        gap: '30px',
        flex: 1,
        width: '100%',
        height: 'calc(100vh - 100px)'
      }}>
        {/* Chap tomon: Mavzular menyusi */}
        <div style={{
          flex: '0 0 320px',
          background: 'rgba(13, 20, 33, 0.95)',
          border: '2px solid #336791',
          borderRadius: '18px',
          padding: '24px',
          backdropFilter: 'blur(10px)',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '0 0 25px rgba(51, 103, 145, 0.25)'
        }}>
          <h3 style={{ color: '#8ecae6', marginBottom: '20px', fontSize: '1.4rem', borderBottom: '1px solid #336791', paddingBottom: '12px' }}>
            Mavzular
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {postgresAllModules.map((mod) => {
              const isSelected = activeModule.id === mod.id;
              return (
                <button
                  key={mod.id}
                  onClick={() => setActiveModule(mod)}
                  style={{
                    textAlign: 'left',
                    background: isSelected ? 'rgba(23, 59, 87, 0.95)' : 'transparent',
                    border: isSelected ? '2px solid #8ecae6' : '2px solid transparent',
                    color: isSelected ? '#8ecae6' : '#cbd5e1',
                    padding: '16px 20px',
                    borderRadius: '12px',
                    fontFamily: 'Fira Code, monospace',
                    fontWeight: isSelected ? '700' : '400',
                    fontSize: '1.1rem',
                    cursor: 'pointer',
                    transition: '0.2s'
                  }}
                >
                  {mod.title}
                </button>
              );
            })}
          </div>
        </div>

        {/* O'ng tomon: Shablon komponenti orqali yuklanadi */}
        <TopicTemplate module={activeModule} theme="postgres" />
      </div>
    </div>
  );
}
