import { FiChevronRight } from 'react-icons/fi';
import { useScrollReveal } from '../../hooks/useScrollReveal';

// ── small line icons for part-modelling features ──
function Ico({ children }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"
      strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {children}
    </svg>
  );
}

const FEATURES = [
  { name: 'Extrude', icon: <Ico><path d="M4 16l6 3 10-5-6-3z" /><path d="M4 16V9l10-5 6 3v7" opacity="0.5" /><path d="M12 13V5m0 0-2 2m2-2 2 2" /></Ico> },
  { name: 'Cut-Extrude', icon: <Ico><rect x="3" y="6" width="18" height="12" rx="1.5" /><circle cx="12" cy="12" r="3.2" strokeDasharray="2 1.6" /></Ico> },
  { name: 'Rounds / Fillets', icon: <Ico><path d="M5 4v8a7 7 0 0 0 7 7h7" /></Ico> },
  { name: 'Chamfer', icon: <Ico><path d="M5 4v10l5 5h9" /></Ico> },
  { name: 'Reference Planes', icon: <Ico><path d="M3 9l7-4h11l-7 4z" /><path d="M3 17l7-4h11l-7 4z" opacity="0.55" /></Ico> },
  { name: 'Rib', icon: <Ico><path d="M4 20h16M6 20V6M6 12l8 8" /><path d="M6 9l11 11" opacity="0.5" /></Ico> },
  { name: 'Mirror', icon: <Ico><path d="M12 3v18" strokeDasharray="2 2" /><path d="M9 7 4 12l5 5zM15 7l5 5-5 5z" /></Ico> },
  { name: 'Revolve', icon: <Ico><ellipse cx="12" cy="7" rx="7" ry="2.5" /><path d="M5 7v10c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5V7" /></Ico> },
];

// Advanced part-modelling features (row 03)
const ADV_FEATURES = [
  { name: 'Revolve', icon: FEATURES[7].icon },
  { name: 'Ribs', icon: FEATURES[5].icon },
  { name: 'Hole Wizard', icon: <Ico><circle cx="12" cy="12" r="8" /><circle cx="12" cy="12" r="3.5" /><path d="M12 2v3M12 19v3M2 12h3M19 12h3" strokeWidth="1.4" /></Ico> },
  { name: 'Shell', icon: <Ico><rect x="3" y="5" width="18" height="14" rx="2" /><rect x="6.5" y="8.5" width="11" height="7" rx="1" strokeDasharray="2 1.6" /></Ico> },
  { name: 'Draft', icon: <Ico><path d="M6 20 8.5 4h7L18 20z" /><path d="M12 4v16" strokeDasharray="2 2" opacity="0.5" /></Ico> },
  { name: 'Blend / Loft', icon: <Ico><ellipse cx="12" cy="5" rx="5" ry="2" /><rect x="4" y="16" width="16" height="4" rx="1" /><path d="M7 5 4 16M17 5l3 11" /></Ico> },
  { name: 'Sweep', icon: <Ico><path d="M5 18C8 4 16 20 19 6" /><circle cx="5" cy="18" r="2.6" /><circle cx="19" cy="6" r="2.6" opacity="0.55" /></Ico> },
  { name: 'Swept Blend', icon: <Ico><path d="M5 18C8 4 16 20 19 6" strokeDasharray="2.5 2" /><rect x="2.5" y="15.5" width="5" height="5" rx="0.8" /><circle cx="19" cy="6" r="3.2" /></Ico> },
  { name: 'Linear Pattern', icon: <Ico><rect x="3" y="5" width="4" height="4" /><rect x="10" y="5" width="4" height="4" /><rect x="17" y="5" width="4" height="4" /><rect x="3" y="15" width="4" height="4" /><rect x="10" y="15" width="4" height="4" /><rect x="17" y="15" width="4" height="4" /></Ico> },
  { name: 'Circular Pattern', icon: <Ico><circle cx="12" cy="12" r="8" strokeDasharray="2 2.5" opacity="0.5" /><circle cx="12" cy="4" r="1.8" fill="currentColor" /><circle cx="19" cy="15.5" r="1.8" fill="currentColor" /><circle cx="5" cy="15.5" r="1.8" fill="currentColor" /></Ico> },
];

// Image card with pop-in, 3D tilt and shine on hover
function ModelCard({ src, alt, label, i, visible, from }) {
  return (
    <figure className={`pmc-card ${from ? `pmc-from-${from}` : ''} ${visible ? 'in' : ''}`} style={{ '--i': i }}>
      <div className="pmc-card-img">
        <img src={src} alt={alt} loading="lazy" />
        <span className="pmc-shine" aria-hidden="true" />
      </div>
      {label && <figcaption>{label}</figcaption>}
    </figure>
  );
}

function ExtrudeArrow({ visible }) {
  return (
    <div className={`pmc-flow ${visible ? 'in' : ''}`} aria-hidden="true">
      <svg viewBox="0 0 80 24">
        <path className="pmc-flow-line" d="M2 12h66" />
        <path d="M66 5l10 7-10 7z" fill="currentColor" stroke="none" />
      </svg>
      <span>Extrude</span>
    </div>
  );
}

export default function PartModellingSection({ isoImages, partImages, advImages }) {
  const [isoRef, isoVisible] = useScrollReveal(0.18);
  const [partRef, partVisible] = useScrollReveal(0.18);
  const [advRef, advVisible] = useScrollReveal(0.18);

  return (
    <section id="cd-part-modelling" className="pmc-section">
      <div className="container">
        {/* ── Row 1: Concept of Isometric ── */}
        <div ref={isoRef} className={`pmc-row ${isoVisible ? 'in' : ''}`}>
          <div className="pmc-row-head">
            <span className="pmc-step">01</span>
            <h2 className="pmc-title">Concept of <span>Isometric</span></h2>
          </div>

          <div className="pmc-iso-grid">
            <ModelCard src={isoImages[0]} alt="Sketch being extruded into a solid" label="2D sketch → extrude preview" i={0} visible={isoVisible} />
            <ExtrudeArrow visible={isoVisible} />
            <ModelCard src={isoImages[1]} alt="Finished isometric solid part" label="Isometric solid part" i={2} visible={isoVisible} />

            <div className={`pmc-text ${isoVisible ? 'in' : ''}`} style={{ '--i': 3 }}>
              <ul className="pmc-points">
                <li><FiChevronRight /> <span>Introduction to Basic Part Modeling</span></li>
                <li><FiChevronRight /> <span>From 2D sketch to 3D solid in one feature</span></li>
                <li><FiChevronRight /> <span>Reading and visualising isometric views</span></li>
              </ul>
            </div>
          </div>
        </div>

        {/* ── Row 2: Concept of Part Model ── */}
        <div ref={partRef} className={`pmc-row ${partVisible ? 'in' : ''}`}>
          <div className="pmc-row-head">
            <span className="pmc-step">02</span>
            <h2 className="pmc-title">Concept of <span>Part Model</span></h2>
          </div>

          <div className="pmc-part-grid">
            <ModelCard src={partImages[0]} alt="Bracket part with counterbored boss" label="Bracket with counterbore" i={0} visible={partVisible} />
            <ModelCard src={partImages[1]} alt="Slotted clamp body part" label="Slotted clamp body" i={1} visible={partVisible} />

            <div className="pmc-features">
              <p className="pmc-features-head">Features you will create</p>
              <ul>
                {FEATURES.map((f, i) => (
                  <li key={f.name} className={partVisible ? 'in' : ''} style={{ '--i': i }}>
                    <span className="pmc-feat-ico">{f.icon}</span>
                    {f.name}
                  </li>
                ))}
              </ul>
              <p className="pmc-more">…and many more professional modelling tools</p>
            </div>
          </div>
        </div>

        {/* ── Row 3: Concept of Part Model Advanced ── */}
        {advImages && (
          <div ref={advRef} className={`pmc-row pmc-adv ${advVisible ? 'in' : ''}`}>
            <div className="pmc-row-head">
              <span className="pmc-step">03</span>
              <h2 className="pmc-title">Concept of <span>Part Model Advanced</span></h2>
            </div>

            <div className="pmc-adv-grid">
              <div className="pmc-float"><ModelCard src={advImages[0]} alt="Lofted surface link with twisted transition" label="Lofted surface link" i={0} visible={advVisible} from="left" /></div>
              <div className="pmc-float pmc-float-2"><ModelCard src={advImages[1]} alt="Multi-port pipe fitting with threads and flange" label="Multi-port pipe fitting" i={1} visible={advVisible} from="right" /></div>
            </div>

            <div className="pmc-adv-features">
              <span className="pmc-adv-line" aria-hidden="true" />
              <ul>
                {ADV_FEATURES.map((f, i) => (
                  <li key={f.name} className={advVisible ? 'in' : ''} style={{ '--i': i }}>
                    <span className="pmc-feat-ico">{f.icon}</span>
                    {f.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
