import { useScrollReveal } from '../../hooks/useScrollReveal';

function Ico({ children }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"
      strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {children}
    </svg>
  );
}

const TOOLS = [
  { name: 'Extrude', icon: <Ico><path d="M4 17c3-2 5 2 8 0s5 2 8 0" /><path d="M4 9c3-2 5 2 8 0s5 2 8 0" opacity="0.55" /><path d="M4 9v8M20 9v8" /></Ico> },
  { name: 'Revolve', icon: <Ico><ellipse cx="12" cy="6" rx="7" ry="2.5" /><path d="M5 6c0 6 3 9 7 12M19 6c0 6-3 9-7 12" /></Ico> },
  { name: 'Planar Surface', icon: <Ico><path d="M3 15l6-8h12l-6 8z" /><path d="M9 7v0" /></Ico> },
  { name: 'Trim', icon: <Ico><path d="M3 15l6-8h12l-6 8z" opacity="0.5" /><path d="M8 4l8 14" /><circle cx="7" cy="19" r="2" /><circle cx="17" cy="19" r="2" /></Ico> },
  { name: 'Knit Surface', icon: <Ico><path d="M3 14l5-6h6l-5 6z" /><path d="M10 14l5-6h6l-5 6z" opacity="0.55" /><path d="M9 14l1 0" strokeWidth="3" /></Ico> },
  { name: 'Thicken', icon: <Ico><path d="M3 10c4-3 8 3 18 0" /><path d="M3 15c4-3 8 3 18 0" /><path d="M3 10v5M21 10v5" /></Ico> },
];

// Wavy wireframe mesh that drifts sideways (surface patch)
function SurfaceMesh() {
  const rows = Array.from({ length: 9 }, (_, i) => i);
  return (
    <svg className="sf-mesh" viewBox="0 0 1600 300" preserveAspectRatio="none" aria-hidden="true">
      <g className="sf-mesh-flow">
        {rows.map((i) => {
          const y = 40 + i * 28;
          const a = 18 + i * 2;
          // 200-unit wavelength, drawn 400 units past the edge so the -400 slide loops seamlessly
          let d = `M0 ${y}`;
          for (let x = 0; x < 2000; x += 200) {
            d += ` q50 ${-a} 100 0 t100 0`;
          }
          return <path key={i} d={d} />;
        })}
      </g>
    </svg>
  );
}

function SurfaceCard({ item, i, visible }) {
  return (
    <figure className={`sf-card ${visible ? 'in' : ''}`} style={{ '--i': i, '--ox': item.origin?.[0] ?? '50%', '--oy': item.origin?.[1] ?? '50%' }}>
      <div className="sf-card-img">
        <img src={item.src} alt={item.alt} loading="lazy" />
        <span className="sf-sheen" aria-hidden="true" />
        <span className="sf-ripple" aria-hidden="true" />
      </div>
      <figcaption>{item.label}</figcaption>
    </figure>
  );
}

export default function SurfaceSection({ images }) {
  const [ref, visible] = useScrollReveal(0.15);

  return (
    <section id="cd-surface" ref={ref} className={`sf-section ${visible ? 'in' : ''}`}>
      <SurfaceMesh />
      <div className="container sf-inner">
        <h2 className="sf-title">Concept Of <span>Surface</span></h2>

        <div className="sf-grid">
          {images.map((item, i) => (
            <SurfaceCard key={item.src} item={item} i={i} visible={visible} />
          ))}
        </div>

        <div className="sf-info">
          <h3 className="sf-lead">Advance Surface Modeling</h3>
          <ul className="sf-tools">
            {TOOLS.map((t, i) => (
              <li key={t.name} style={{ '--i': i }}>
                <span className="sf-tool-ico">{t.icon}</span>
                {t.name}
              </li>
            ))}          </ul>
        </div>
      </div>
    </section>
  );
}
