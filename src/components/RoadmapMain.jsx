import React, { useEffect, useState } from 'react';

export default function RoadmapMain({ nodes, onNodeClick }) {
  const [items, setItems] = useState([]);
  const [stageHeight, setStageHeight] = useState(300);

  useEffect(() => {
    const bgCanvas = document.getElementById('bgCanvas');
    if (!bgCanvas) return;
    const ctx = bgCanvas.getContext('2d');
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let stars = [];
    let animationFrameId;

    class Star {
      constructor(w, h) {
        this.cx = Math.random() * w;
        this.cy = Math.random() * h;
        this.size = Math.random() * 2 + 0.5;
        this.angle = Math.random() * Math.PI * 2;
        this.speed = Math.random() * 0.2 + 0.05;
        this.orbit = Math.random() * 40 + 10;
        this.alpha = Math.random() * 0.7 + 0.2;
        this.alphaSpd = (Math.random() - 0.5) * 0.015;
        this.x = this.cx;
        this.y = this.cy;
      }
      update() {
        this.angle += this.speed * 0.03;
        this.x = this.cx + Math.cos(this.angle) * this.orbit;
        this.y = this.cy + Math.sin(this.angle) * this.orbit;
        this.alpha += this.alphaSpd;
        if (this.alpha > 1 || this.alpha < 0.2) this.alphaSpd = -this.alphaSpd;
      }
      draw() {
        ctx.globalAlpha = Math.max(0, Math.min(1, this.alpha));
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    function resizeBg() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = window.innerWidth;
      const h = window.innerHeight;
      bgCanvas.width = w * dpr;
      bgCanvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.fillStyle = '#00ff88';
      ctx.shadowColor = '#10b981';
      ctx.shadowBlur = 8;

      const count = Math.min(80, Math.max(25, Math.floor((w * h) / 14000)));
      stars = Array.from({ length: count }, () => new Star(w, h));
      if (reduceMotion) drawFrame();
    }

    function drawFrame() {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      stars.forEach(s => { s.update(); s.draw(); });
      ctx.globalAlpha = 1;
    }

    function animateBg() {
      drawFrame();
      animationFrameId = requestAnimationFrame(animateBg);
    }

    window.addEventListener('resize', resizeBg);
    resizeBg();
    if (!reduceMotion) animateBg();

    return () => {
      window.removeEventListener('resize', resizeBg);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  useEffect(() => {
    function updateLayout() {
      const stage = document.getElementById('roadmapStage');
      if (!stage) return;
      const W = stage.clientWidth;
      if (!W) return;

      const cols = W >= 1000 ? 4 : W >= 640 ? 3 : 2;
      const small = cols === 2;

      const margin = small ? 26 : 64;
      const minGap = small ? 24 : 48;
      const avail = W - margin * 2;

      const cw = Math.max(88, Math.min(190, (avail - (cols - 1) * minGap) / cols));
      const ch = small ? 54 : 66;
      const rowGap = small ? 56 : 72;
      const padY = 20;

      const step = cols > 1 ? (avail - cw) / (cols - 1) : 0;
      const rows = Math.ceil(nodes.length / cols);
      const H = padY * 2 + rows * ch + (rows - 1) * rowGap;
      const fontSize = Math.max(10, Math.min(16, cw / 9.5));

      const calculatedItems = nodes.map((n, k) => {
        const row = Math.floor(k / cols);
        const i = k % cols;
        const col = row % 2 === 0 ? i : cols - 1 - i;
        return {
          ...n,
          row,
          cw,
          ch,
          fontSize,
          x: margin + cw / 2 + col * step,
          y: padY + ch / 2 + row * (ch + rowGap)
        };
      });

      setItems(calculatedItems);
      setStageHeight(H);
    }

    updateLayout();
    window.addEventListener('resize', updateLayout);
    return () => window.removeEventListener('resize', updateLayout);
  }, [nodes]);

  const renderPaths = () => {
    if (items.length === 0) return null;
    const paths = [];
    const margin = items[0].x - items[0].cw / 2;
    const radius = Math.min(margin + 6, 80);

    for (let i = 0; i < items.length - 1; i++) {
      const a = items[i];
      const b = items[i + 1];
      let d;

      if (a.row === b.row) {
        const dir = b.x > a.x ? 1 : -1;
        d = `M ${a.x + dir * a.cw / 2},${a.y} L ${b.x - dir * b.cw / 2},${b.y}`;
      } else {
        const side = a.row % 2 === 0 ? 1 : -1;
        const x = a.x + side * a.cw / 2;
        const cx = x + side * radius;
        d = `M ${x},${a.y} C ${cx},${a.y} ${cx},${b.y} ${x},${b.y}`;
      }
      paths.push(<path key={i} d={d} className="connector-path" />);
    }
    return paths;
  };

  return (
    <div style={{
      width: '100%',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '16px 12px'
    }}>
      <style>{`
        .connector-path {
          fill: none;
          stroke: #10b981;
          stroke-width: 3;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-dasharray: 10 6;
          filter: drop-shadow(0 0 6px rgba(0, 255, 136, 0.8));
          animation: dashMove 25s linear infinite;
        }
        @keyframes dashMove {
          to { stroke-dashoffset: -1000; }
        }
        .node-card {
          position: absolute;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 6px 10px;
          text-align: center;
          text-decoration: none;
          font-weight: 700;
          line-height: 1.2;
          color: #fff;
          background: rgba(13, 20, 33, 0.85);
          border: 2px solid #10b981;
          border-radius: 14px;
          box-shadow: inset 0 0 20px rgba(16, 185, 129, 0.35), 0 0 22px rgba(16, 185, 129, 0.22);
          backdrop-filter: blur(10px);
          transition: transform 0.25s ease, background 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
          cursor: pointer;
          user-select: none;
          -webkit-tap-highlight-color: transparent;
        }
        .node-card:hover, .node-card:focus-visible {
          background: rgba(6, 78, 59, 0.95);
          border-color: #00ff88;
          transform: translateY(-2px) scale(1.06);
          box-shadow: inset 0 0 28px rgba(0, 255, 136, 0.7), 0 0 36px rgba(0, 255, 136, 0.7);
          outline: none;
        }
        .node-card:active { transform: scale(0.97); }
      `}</style>

      <canvas id="bgCanvas" aria-hidden="true" style={{ position: 'fixed', inset: 0, width: '100%', height: '100%', zIndex: 0, pointerEvents: 'none' }}></canvas>

      <main 
        className="roadmap-stage" 
        id="roadmapStage" 
        style={{ 
          position: 'relative', 
          width: '100%', 
          maxWidth: '1200px', 
          minHeight: '300px', 
          height: `${stageHeight}px`, 
          margin: '0 auto', 
          flexShrink: 0, 
          zIndex: 1 
        }}
      >
        <svg className="roadmap-svg" id="svgCanvas" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', overflow: 'visible', pointerEvents: 'none', zIndex: 1 }}>
          <g id="pathsGroup">
            {renderPaths()}
          </g>
        </svg>
        <nav className="nodes-container" id="nodesContainer" aria-label="Roadmap" style={{ position: 'absolute', inset: 0, zIndex: 5 }}>
          {items.map((n, idx) => (
            <div
              key={idx}
              className="node-card"
              onClick={() => onNodeClick(n)}
              style={{
                left: `${n.x - n.cw / 2}px`,
                top: `${n.y - n.ch / 2}px`,
                width: `${n.cw}px`,
                height: `${n.ch}px`,
                fontSize: `${n.fontSize}px`
              }}
            >
              {n.title}
            </div>
          ))}
        </nav>
      </main>
    </div>
  );
}