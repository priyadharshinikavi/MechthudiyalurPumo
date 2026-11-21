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
    title: 'Creating New Drawings',
    desc: 'Sheet formats, title blocks, standard and projected views from 3D models.',
    icon: <Ico><rect x="4" y="3" width="16" height="18" rx="1.5" /><path d="M4 16h16M12 16v5" /><path d="M8 7h8M8 10h5" /></Ico>,
  },
  {
    title: 'Adding Details, Dimensioning & GD&T',
    desc: 'Section and detail views, smart dimensions, tolerances and feature control frames.',
    icon: <Ico><path d="M3 18h18" /><path d="M3 15v6M21 15v6" /><path d="M6 18l-3-2v4zM18 18l3-2v4z" fill="currentColor" /><circle cx="12" cy="8" r="4" /><path d="M12 4v8M8 8h8" strokeWidth="1.2" /></Ico>,
  },
  {
    title: 'Creating Reports & BOM',
    desc: 'Balloons, bills of materials, revision tables and print-ready PDF / DXF output.',
    icon: <Ico><rect x="3" y="4" width="18" height="16" rx="1.5" /><path d="M3 9h18M3 14h18M9 4v16" /></Ico>,
  },
];

function Sheet({ item, i, visible }) {
  return (
    <figure className={`dr-sheet ${visible ? 'in' : ''}`} style={{ '--i': i }}>
      {/* dimension line above the sheet */}
      <div className="dr-dim" aria-hidden="true">
        <span className="dr-dim-line" />
        <span className="dr-dim-ext dr-dim-ext-l" />
        <span className="dr-dim-ext dr-dim-ext-r" />
      </div>
      <figcaption className="dr-label">{item.label}</figcaption>

      <div className="dr-paper">
        <span className="dr-corner tl" /><span className="dr-corner tr" />
        <span className="dr-corner bl" /><span className="dr-corner br" />
        <div className="dr-img">
          <img src={item.src} alt={item.alt} loading="lazy" />
          <span className="dr-scan" aria-hidden="true" />
        </div>
        <div className="dr-titleblock">
          <span>SHEET 0{i + 1}</span>
          <span>{item.block}</span>
          <span>SCALE 1:1</span>
        </div>
      </div>
    </figure>
  );
}

export default function DraftingSection({ images }) {
  const [ref, visible] = useScrollReveal(0.12);

  return (
    <section id="cd-drafting" ref={ref} className={`dr-section ${visible ? 'in' : ''}`}>
      <div className="container">
        <div className="dr-head">
          <span className="dr-eyebrow">Drawings · Detailing · Documentation</span>
          <h2 className="dr-title">Concept of <span>Drafting</span></h2>
        </div>

        <div className="dr-grid">
          {images.map((item, i) => (
            <Sheet key={item.src} item={item} i={i} visible={visible} />
          ))}
        </div>

        <ol className="dr-steps">
          <span className="dr-steps-line" aria-hidden="true" />
          {STEPS.map((s, i) => (
            <li key={s.title} style={{ '--i': i }}>
              <span className="dr-step-num">{i + 1}</span>
              <span className="dr-step-ico">{s.icon}</span>
              <h4>{s.title}</h4>
              <p>{s.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
