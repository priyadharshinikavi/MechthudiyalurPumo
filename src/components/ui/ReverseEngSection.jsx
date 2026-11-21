import { useEffect, useState } from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

function Ico({ children }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"
      strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {children}
    </svg>
  );
}

const STEPS = [
  {
    tag: 'Measure',
    text: 'Handling Quality Control Instruments & Gauges',
    icon: <Ico><path d="M3 6h18v4H3z" /><path d="M6 6v2M9 6v3M12 6v2M15 6v3M18 6v2" /><path d="M5 10v8h3v-8M16 10v8h3v-8" /></Ico>,
  },
  {
    tag: 'Inspect',
    text: 'Inspection Metrology',
    icon: <Ico><circle cx="10" cy="10" r="6" /><path d="M14.5 14.5 20 20" /><path d="M7.5 10l2 2 3.5-4" /></Ico>,
  },
  {
    tag: 'Reverse Design',
    text: 'Reverse Design a Component Using Instruments',
    icon: <Ico><path d="M12 3l8 4.5v9L12 21l-8-4.5v-9z" /><path d="M12 12l8-4.5M12 12v9M12 12L4 7.5" /></Ico>,
  },
];

// Vernier caliper whose jaw opens/closes on a part, with a live reading
// [open reading, clamped reading] — 44 SVG units = 25.40 mm, open = +14 units
const READINGS = [33.48, 25.4];
function CaliperAnim({ running }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!running) return undefined;
    let raf;
    const start = performance.now();
    const CYCLE = 3200; // matches CSS animation
    const tick = (now) => {
      const t = ((now - start) % CYCLE) / CYCLE;
      // open (0→0.35), hold on part (0.35→0.7), close (0.7→1)
      let p;
      if (t < 0.35) p = t / 0.35;
      else if (t < 0.7) p = 1;
      else p = 1 - (t - 0.7) / 0.3;
      const eased = p < 0.5 ? 2 * p * p : 1 - (-2 * p + 2) ** 2 / 2;
      setValue(READINGS[0] + (READINGS[1] - READINGS[0]) * eased);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [running]);

  return (
    <div className="re-caliper" aria-hidden="true">
      <svg viewBox="0 0 160 70">
        {/* main beam + fixed jaw */}
        <rect x="6" y="14" width="150" height="10" rx="2" className="re-beam" />
        {Array.from({ length: 14 }, (_, i) => (
          <line key={i} x1={22 + i * 10} y1="14" x2={22 + i * 10} y2={i % 2 ? 18 : 20} className="re-tick" />
        ))}
        <path d="M6 14h12v44l-6 6V24H6z" className="re-jaw" />
        {/* part being measured */}
        <rect x="18" y="38" width="44" height="18" rx="3" className="re-part" />
        {/* sliding jaw */}
        <g className={`re-slider ${running ? 'run' : ''}`}>
          <rect x="62" y="10" width="26" height="18" rx="3" className="re-slider-body" />
          <path d="M62 24h8v34l-6 6V24z" className="re-jaw" />
        </g>
      </svg>
      <span className="re-readout">{value.toFixed(2)}<small>mm</small></span>
    </div>
  );
}

function ScanCard({ item, i, visible, badge, className = '' }) {
  return (
    <figure className={`re-card ${className} ${visible ? 'in' : ''}`} style={{ '--i': i }}>
      <div className="re-card-img">
        <img src={item.src} alt={item.alt} loading="lazy" />
        <span className="re-laser" aria-hidden="true" />
        {badge && <span className="re-badge"><i aria-hidden="true" />{badge}</span>}
      </div>
      <figcaption>{item.label}</figcaption>
    </figure>
  );
}

export default function ReverseEngSection({ images }) {
  const [ref, visible] = useScrollReveal(0.12);
  const [instruments, lab] = images;

  return (
    <section id="cd-reverse" ref={ref} className={`re-section ${visible ? 'in' : ''}`}>
      <div className="container">
        <div className="re-head">
          <h2 className="re-title">Reverse <span>Engineering</span></h2>
          <CaliperAnim running={visible} />
        </div>

        <div className="re-grid">
          <ScanCard item={instruments} i={0} visible={visible} />
          <ScanCard item={lab} i={1} visible={visible} badge="Hands-on at Pumo Lab" className="re-card-lab" />
        </div>

        <ol className="re-steps">
          {STEPS.map((s, i) => (
            <li key={s.tag} style={{ '--i': i }}>
              <span className="re-step-ico">{s.icon}</span>
              <span className="re-step-tag">{String(i + 1).padStart(2, '0')} · {s.tag}</span>
              <p>{s.text}</p>
              {i < STEPS.length - 1 && (
                <svg className="re-arrow" viewBox="0 0 40 16" aria-hidden="true">
                  <path d="M2 8h30" />
                  <path d="M30 3l8 5-8 5z" />
                </svg>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
