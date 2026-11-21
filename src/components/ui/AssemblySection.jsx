import { useState, useEffect } from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const CYCLE_MS = 3800;

function Ico({ children }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"
      strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {children}
    </svg>
  );
}

const CONCEPTS = [
  {
    title: 'Top Down',
    heading: <><u>Top Down</u> Assembly Concept</>,
    desc: 'Design parts in the context of the assembly, so they update together.',
    icon: <Ico><rect x="7" y="2.5" width="10" height="6" rx="1.2" /><path d="M12 8.5v4M6 12.5h12M6 12.5v3M18 12.5v3" /><rect x="3" y="15.5" width="6" height="5" rx="1" /><rect x="15" y="15.5" width="6" height="5" rx="1" /></Ico>,
  },
  {
    title: 'Bottom Up',
    heading: <><u>Bottom Up</u> Assembly Concept</>,
    desc: 'Model each part on its own, then bring them together into the assembly.',
    icon: <Ico><rect x="3" y="15.5" width="6" height="5" rx="1" /><rect x="15" y="15.5" width="6" height="5" rx="1" /><path d="M6 15.5v-3h12v3M12 12.5v-3" /><path d="M9.5 6 12 3.5 14.5 6" /><path d="M12 3.5v6" /></Ico>,
  },
  {
    title: 'Constraints',
    heading: <>Assembly With <u>Constraints</u></>,
    desc: 'Coincident, concentric, distance and angle mates position every part.',
    icon: <Ico><circle cx="8" cy="12" r="4.5" /><circle cx="16" cy="12" r="4.5" /><circle cx="12" cy="12" r="1.2" fill="currentColor" /></Ico>,
  },
  {
    title: 'Exploded View',
    heading: <><u>Exploding</u> Assembly</>,
    desc: 'Separate parts along their axes to show the build sequence clearly.',
    icon: <Ico><rect x="9" y="9" width="6" height="6" rx="1" /><path d="M4 4l3 3M20 4l-3 3M4 20l3-3M20 20l-3-3" /><rect x="2" y="2" width="3" height="3" rx="0.6" /><rect x="19" y="19" width="3" height="3" rx="0.6" /></Ico>,
  },
];

// Small animated exploded-assembly mark (parts move apart and back)
function ExplodeMark() {
  return (
    <svg className="asm-mark" viewBox="0 0 120 60" aria-hidden="true">
      <g className="asm-mark-a"><rect x="8" y="22" width="16" height="16" rx="3" /></g>
      <g className="asm-mark-b">
        <circle cx="56" cy="30" r="17" />
        <circle cx="56" cy="30" r="6" className="asm-mark-hole" />
      </g>
      <g className="asm-mark-c"><rect x="92" y="24" width="22" height="12" rx="3" /></g>
      <line x1="0" y1="30" x2="120" y2="30" className="asm-mark-axis" />
    </svg>
  );
}

export default function AssemblySection({ assembledImage, explodedImage, pistonImage }) {
  const [ref, visible] = useScrollReveal(0.15);
  const [exploded, setExploded] = useState(false);
  const [paused, setPaused] = useState(false);
  const [cycle, setCycle] = useState(0); // restarts the progress bar

  // Auto-toggle assembled ↔ exploded while visible and not hovered
  useEffect(() => {
    if (!visible || paused) return undefined;
    const t = setTimeout(() => {
      setExploded((e) => !e);
      setCycle((c) => c + 1);
    }, CYCLE_MS);
    return () => clearTimeout(t);
  }, [visible, paused, cycle]);

  const choose = (value) => {
    setExploded(value);
    setCycle((c) => c + 1);
  };

  return (
    <section id="cd-assembly" ref={ref} className={`asm-section ${visible ? 'in' : ''}`}>
      <div className="container">
        <div className="asm-head">
          <h2 className="asm-title">Concept Of <span>Assembly</span></h2>
          <ExplodeMark />
        </div>

        <div className="asm-grid">
          {/* ── Drone viewer: assembled ↔ exploded ── */}
          <div
            className="asm-viewer"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <div className="asm-stage">
              <img
                src={assembledImage}
                alt="Agricultural drone, final assembly"
                className={`asm-state asm-assembled ${!exploded ? 'on' : ''}`}
              />
              <img
                src={explodedImage}
                alt="Agricultural drone, exploded view of all parts"
                className={`asm-state asm-exploded ${exploded ? 'on' : ''}`}
              />
              <span className="asm-badge">{exploded ? 'Exploded View' : 'Final Assembly'}</span>
            </div>

            <div className="asm-controls">
              <div className="asm-toggle" role="group" aria-label="Drone view">
                <button type="button" className={!exploded ? 'active' : ''} onClick={() => choose(false)}>
                  Assembled
                </button>
                <button type="button" className={exploded ? 'active' : ''} onClick={() => choose(true)}>
                  Exploded
                </button>
                <span className={`asm-toggle-pill ${exploded ? 'right' : ''}`} aria-hidden="true" />
              </div>
              <div className="asm-progress" aria-hidden="true">
                <span key={cycle} className={visible && !paused ? 'run' : ''} style={{ animationDuration: `${CYCLE_MS}ms` }} />
              </div>
            </div>
          </div>

          {/* ── Piston & connecting rod ── */}
          <figure className="asm-piston">
            <div className="asm-piston-img">
              <img src={pistonImage} alt="Piston and connecting rod assembly with labelled parts" loading="lazy" />
            </div>
            <figcaption>Piston &amp; Connecting Rod Assembly</figcaption>
          </figure>
        </div>

        {/* ── Concepts ── */}
        <div className="asm-concepts">
          {CONCEPTS.map((c, i) => (
            <div key={c.title} className="asm-concept" style={{ '--i': i }}>
              <span className="asm-concept-ico">{c.icon}</span>
              <div>
                <h4>{c.heading}</h4>
                <p>{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
