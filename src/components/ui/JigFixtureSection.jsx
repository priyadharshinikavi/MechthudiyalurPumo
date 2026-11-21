import { useScrollReveal } from '../../hooks/useScrollReveal';

const POINTS = [
  'Manual Clamp & Hydraulic Clamp Design',
  'Design Holder Calculations',
  'Design Base Pad, Poka-Yoke Routing',
  'Design Pressure Calculation',
];

// Drill bit spinning & plunging through a bush (JIG tag)
function DrillAnim() {
  return (
    <svg className="jf-anim" viewBox="0 0 32 32" aria-hidden="true">
      <g className="jf-drill">
        <rect x="13" y="0" width="6" height="16" rx="1" className="jf-drill-body" />
        <path d="M13 3l6 3M13 8l6 3M13 13l6 3" className="jf-flutes" />
        <path d="M13 16h6l-3 5z" className="jf-drill-body" />
      </g>
      <rect x="9" y="20" width="4" height="4" className="jf-bush" />
      <rect x="19" y="20" width="4" height="4" className="jf-bush" />
      <rect x="4" y="24" width="24" height="6" rx="1" className="jf-plate" />
    </svg>
  );
}

// Toggle clamp lever swinging down to clamp (FIXTURE tag)
function ToggleClampAnim() {
  return (
    <svg className="jf-anim" viewBox="0 0 32 32" aria-hidden="true">
      <rect x="2" y="26" width="28" height="4" rx="1" className="jf-plate" />
      <rect x="6" y="18" width="6" height="8" className="jf-bush" />
      <rect x="18" y="22" width="10" height="4" className="jf-work" />
      <g className="jf-lever">
        <rect x="8" y="13" width="18" height="3.5" rx="1.5" className="jf-lever-arm" />
        <rect x="23" y="16" width="3" height="5" className="jf-lever-arm" />
        <circle cx="9" cy="15" r="2" className="jf-pivot" />
      </g>
    </svg>
  );
}

function ClampCard({ item, i, visible, tag, anim, tagClass }) {
  return (
    <figure className={`jf-card ${visible ? 'in' : ''}`} style={{ '--i': i }}>
      <span className="jf-jaw jf-jaw-l" aria-hidden="true" />
      <span className="jf-jaw jf-jaw-r" aria-hidden="true" />
      <div className="jf-card-img">
        <img src={item.src} alt={item.alt} loading="lazy" />
        {tag && (
          <span className={`jf-tag ${tagClass || ''}`}>
            {anim}
            {tag}
          </span>
        )}
      </div>
      <figcaption>{item.label}</figcaption>
    </figure>
  );
}

export default function JigFixtureSection({ images }) {
  const [ref, visible] = useScrollReveal(0.12);
  const [compare, jig, fixture] = images;

  return (
    <section id="cd-jig-fixture" ref={ref} className={`jf-section ${visible ? 'in' : ''}`}>
      <div className="container">
        <h2 className="jf-title">Jig &amp; Fixture <span>Design Concept</span></h2>

        <div className="jf-grid">
          <div className="jf-left">
            <ClampCard item={compare} i={0} visible={visible} />

            <ul className="jf-points">
              {POINTS.map((p, i) => (
                <li key={p} style={{ '--i': i }}>
                  <span className="jf-lock" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="5" y="11" width="14" height="10" rx="2" />
                      <path className="jf-shackle" d="M8 11V8a4 4 0 0 1 8 0v3" />
                    </svg>
                  </span>
                  {p}
                </li>
              ))}
            </ul>
          </div>

          <div className="jf-right">
            <ClampCard item={jig} i={1} visible={visible} tag="JIG" anim={<DrillAnim />} />
            <ClampCard item={fixture} i={2} visible={visible} tag="FIXTURE" anim={<ToggleClampAnim />} tagClass="jf-tag-fixture" />
          </div>
        </div>
      </div>
    </section>
  );
}
