import React, { useState } from 'react';
import { nodeAllModules } from '../data/Node.js/AllNodeData';
import TopicTemplate from '../components/TopicTemplate';

export default function NodeJsPage({ onBack }) {
  const [activeModule, setActiveModule] = useState(nodeAllModules[0]);

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
            color: '#00ff88',
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
        <div style={{ 
          flex: '0 0 320px', 
          background: 'rgba(13, 20, 33, 0.95)', 
          border: '2px solid #10b981', 
          borderRadius: '18px', 
          padding: '24px',
          backdropFilter: 'blur(10px)',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '0 0 25px rgba(16, 185, 129, 0.2)'
        }}>
          <h3 style={{ color: '#00ff88', marginBottom: '20px', fontSize: '1.4rem', borderBottom: '1px solid #10b981', paddingBottom: '12px' }}>
            Mavzular
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {nodeAllModules.map((mod) => {
              const isSelected = activeModule.id === mod.id;
              return (
                <button
                  key={mod.id}
                  onClick={() => setActiveModule(mod)}
                  style={{
                    textAlign: 'left',
                    background: isSelected ? 'rgba(6, 78, 59, 0.95)' : 'transparent',
                    border: isSelected ? '2px solid #00ff88' : '2px solid transparent',
                    color: isSelected ? '#00ff88' : '#cbd5e1',
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

        <TopicTemplate module={activeModule} />
      </div>
    </div>
  );
}
