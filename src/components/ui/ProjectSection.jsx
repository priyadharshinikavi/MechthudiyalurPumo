import { useState, useEffect } from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const HOTSPOT_MS = 2600;
const RUN_MS = 6000; // one simulated analysis run

function Ico({ children }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"
      strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {children}
    </svg>
  );
}

// Two meshing gears (decor next to the title)
function GearPair() {
  const gear = (teeth, r, rIn) => {
    let d = '';
    for (let i = 0; i < teeth; i++) {
      const a0 = (i / teeth) * Math.PI * 2;
      const a1 = a0 + (Math.PI / teeth) * 0.55;
      const a2 = a0 + (Math.PI / teeth) * 1.0;
      const a3 = a0 + (Math.PI / teeth) * 1.45;
      const p = (a, rad) => `${(Math.cos(a) * rad).toFixed(2)} ${(Math.sin(a) * rad).toFixed(2)}`;
      d += `${i === 0 ? 'M' : 'L'}${p(a0, rIn)} L${p(a1, r)} L${p(a2, r)} L${p(a3, rIn)} `;
    }
    return `${d}Z`;
  };
  return (
    <svg className="pj-gears" viewBox="0 0 120 70" aria-hidden="true">
      <g transform="translate(38 36)"><g className="pj-gear-a"><path d={gear(12, 28, 22)} /><circle r="7" /></g></g>
      <g transform="translate(86 36)"><g className="pj-gear-b"><path d={gear(8, 19.5, 14)} /><circle r="5" /></g></g>
    </svg>
  );
}

const FEATURES = [
  { title: 'Complete Gearbox Assembly', desc: 'Every housing, shaft, gear and fork modelled and assembled in Creo Parametric.', icon: <Ico><circle cx="12" cy="12" r="3" /><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M5 19l2-2M17 7l2-2" /></Ico> },
  { title: 'Section (Clipping) View', desc: 'Housing cut open to reveal the internal gear train and shift mechanism.', icon: <Ico><rect x="3" y="4" width="18" height="16" rx="2" /><path d="M3 4l18 16" strokeDasharray="2.5 2" /></Ico> },
  { title: 'Mechanism Connections', desc: 'Gear pairs, servo motors and joint connections defined in the Mechanism tree.', icon: <Ico><circle cx="7" cy="12" r="4" /><circle cx="17" cy="12" r="4" /><path d="M11 12h2" /></Ico> },
  { title: 'Kinematic Analysis', desc: 'Motion analysis run and played back to verify the shifting and gear meshing.', icon: <Ico><path d="M3 18l5-6 4 3 5-8 4 5" /><path d="M3 21h18" /></Ico> },
];

export default function ProjectSection({ image, hotspots, windowTitle }) {
  const [ref, visible] = useScrollReveal(0.12);
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [progress, setProgress] = useState(0);

  // cycle hotspots
  useEffect(() => {
    if (!visible || paused) return undefined;
    const t = setTimeout(() => setActive((a) => (a + 1) % hotspots.length), HOTSPOT_MS);
    return () => clearTimeout(t);
  }, [visible, paused, active, hotspots.length]);

  // simulated kinematic analysis progress (loops)
  useEffect(() => {
    if (!visible) return undefined;
    let raf;
    const start = performance.now();
    const tick = (now) => {
      const t = ((now - start) % (RUN_MS + 1200)) / RUN_MS;
      setProgress(Math.min(100, Math.round(t * 100)));
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [visible]);

  const done = progress >= 100;

  return (
    <section id="cd-project" ref={ref} className={`pj-section ${visible ? 'in' : ''}`}>
      <div className="container">
        <div className="pj-head">
          <div>
            <span className="pj-eyebrow">Capstone Project · Creo Parametric · Mechanism</span>
            <h2 className="pj-title">Project</h2>
          </div>
          <GearPair />
        </div>

        <div className="pj-window">
          {/* title bar */}
          <div className="pj-bar">
            <span className="pj-dots" aria-hidden="true"><i /><i /><i /></span>
            <span className="pj-bar-title">{windowTitle}</span>
            <span className={`pj-live ${done ? 'done' : ''}`}><i aria-hidden="true" />{done ? 'Analysis complete' : 'Running'}</span>
          </div>

          {/* screen */}
          <div
            className="pj-screen"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <img src={image} alt="Gearbox assembly in Creo Parametric with section view and mechanism tree" />
            <span className="pj-scan" aria-hidden="true" />

            {hotspots.map((h, i) => (
              <button
                key={h.label}
                type="button"
                className={`pj-hot ${i === active ? 'active' : ''} ${h.x > 60 ? 'left' : ''}`}
                style={{ left: `${h.x}%`, top: `${h.y}%`, '--i': i }}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                aria-label={h.label}
              >
                <span className="pj-hot-dot" />
                <span className="pj-hot-label">{h.label}</span>
              </button>
            ))}
          </div>

          {/* status bar */}
          <div className="pj-status">
            <span className="pj-status-name">Kinematic Analysis · 01_first_motion</span>
            <span className="pj-track" aria-hidden="true"><span style={{ width: `${progress}%` }} /></span>
            <span className="pj-pct">{progress}%</span>
          </div>
        </div>

        <ul className="pj-features">
          {FEATURES.map((f, i) => (
            <li key={f.title} style={{ '--i': i }}>
              <span className="pj-feat-ico">{f.icon}</span>
              <div>
                <h4>{f.title}</h4>
                <p>{f.desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
