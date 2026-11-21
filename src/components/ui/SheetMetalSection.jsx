import { useScrollReveal } from '../../hooks/useScrollReveal';

function Ico({ children }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"
      strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {children}
    </svg>
  );
}

const TOPICS = [
  { name: 'Sheet Metal Calculations', sub: 'K-factor · Bend allowance', icon: <Ico><rect x="4" y="3" width="16" height="18" rx="2" /><path d="M8 7h8M8 12h2M14 12h2M8 16h2M14 16h2" /></Ico> },
  { name: 'Wall Features', sub: 'Base · Edge · Miter flange', icon: <Ico><path d="M4 18h12V8" /><path d="M16 8l4-3" /><path d="M4 18l4-3h12" opacity="0.5" /></Ico> },
  { name: 'Forming', sub: 'Louvres · Ribs · Embosses', icon: <Ico><path d="M3 16h4c1 0 1.5-6 5-6s4 6 5 6h4" /><path d="M3 20h18" opacity="0.5" /></Ico> },
  { name: 'Bending / Unbending', sub: 'Flat pattern · DXF', icon: <Ico><path d="M4 18h8a4 4 0 0 0 4-4V5" /><path d="M13 8l3-3 3 3" /></Ico> },
];

// Sheet that bends up and flattens again
function BendDemo() {
  return (
    <svg className="sm-bend" viewBox="0 0 120 70" aria-hidden="true">
      <line x1="4" y1="56" x2="116" y2="56" className="sm-bend-ground" />
      <rect x="10" y="50" width="56" height="6" rx="1" className="sm-bend-base" />
      <g className="sm-bend-flange">
        <rect x="66" y="50" width="46" height="6" rx="1" />
      </g>
      <path d="M66 44a12 12 0 0 1 10 10" className="sm-bend-arc" />
    </svg>
  );
}

function Card({ item, i, visible, className = '' }) {
  return (
    <figure className={`sm-card ${className} ${visible ? 'in' : ''}`} style={{ '--i': i }}>
      <div className="sm-card-img">
        <img src={item.src} alt={item.alt} loading="lazy" />
        <span className="sm-shine" aria-hidden="true" />
      </div>
      <figcaption>{item.label}</figcaption>
    </figure>
  );
}

export default function SheetMetalSection({ images }) {
  const [ref, visible] = useScrollReveal(0.12);
  const [materials, flat, enclosure, parts, vented, formed] = images;

  return (
    <section id="cd-sheet-metal" ref={ref} className={`sm-section ${visible ? 'in' : ''}`}>
      <div className="container">
        <h2 className="sm-title">Concept of <span>Sheet Metal</span></h2>

        <div className="sm-grid">
          <Card item={materials} i={0} visible={visible} />
          <div className="sm-pair">
            <Card item={flat} i={1} visible={visible} />
            <div className={`sm-fold ${visible ? 'in' : ''}`} aria-hidden="true">
              <svg viewBox="0 0 60 24">
                <path className="sm-fold-line" d="M2 12h44" />
                <path d="M44 5l10 7-10 7z" fill="currentColor" />
              </svg>
              <span>Fold</span>
            </div>
            <Card item={enclosure} i={2} visible={visible} />
          </div>
          <Card item={parts} i={3} visible={visible} />
          <Card item={vented} i={4} visible={visible} />
          <Card item={formed} i={5} visible={visible} />
        </div>

        <div className="sm-topics">
          <BendDemo />
          <ul>
            {TOPICS.map((t, i) => (
              <li key={t.name} style={{ '--i': i }}>
                <span className="sm-topic-ico">{t.icon}</span>
                <div>
                  <strong>{t.name}</strong>
                  <small>{t.sub}</small>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
