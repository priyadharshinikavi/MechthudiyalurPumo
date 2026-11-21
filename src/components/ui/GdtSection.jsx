import { useState, useEffect } from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const CYCLE_MS = 2200;

// Position symbol (circle + cross)
const PositionSym = () => (
  <svg viewBox="0 0 24 24" className="gd-pos" aria-hidden="true">
    <circle cx="12" cy="12" r="6.5" />
    <path d="M12 2v20M2 12h20" />
  </svg>
);
const Mmc = () => <span className="gd-mmc" aria-label="maximum material condition">M</span>;

// Cells of the feature control frame, left → right
const CELLS = [
  { key: 'char', content: <PositionSym />, label: 'Geometric Characteristic', desc: 'Position: controls the location of the feature.' },
  { key: 'tol', content: <><span className="gd-dia">Ø</span>1.5<Mmc /></>, label: 'Tolerance Value', desc: 'Ø = cylindrical tolerance zone of 1.5 mm; Ⓜ = at maximum material condition.' },
  { key: 'a', content: 'A', label: 'Primary Datum', desc: 'First datum the part is located on: 3 points of contact.' },
  { key: 'b', content: <>B<Mmc /></>, label: 'Secondary Datum', desc: 'Second datum, with a material modifier: 2 points of contact.' },
  { key: 'c', content: 'C', label: 'Tertiary Datum', desc: 'Third datum that completes the reference frame: 1 point.' },
];

const CATEGORIES = [
  { name: 'Form', count: 4, note: 'No datum' },
  { name: 'Orientation', count: 3, note: 'Datum required' },
  { name: 'Location', count: 4, note: 'Position · Profile' },
  { name: 'Runout', count: 2, note: 'Coaxiality' },
];

function FeatureControlFrame({ visible }) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (!visible || paused) return undefined;
    const t = setTimeout(() => setActive((a) => (a + 1) % CELLS.length), CYCLE_MS);
    return () => clearTimeout(t);
  }, [visible, paused, active]);

  const cell = CELLS[active];

  return (
    <div className="gd-fcf-card" onMouseLeave={() => setPaused(false)}>
      <div className="gd-fcf-head">Feature Control Frame</div>

      <div className="gd-fcf" role="group" aria-label="Feature control frame: position, diameter 1.5 at MMC, datums A, B at MMC, C">
        {CELLS.map((c, i) => (
          <button
            key={c.key}
            type="button"
            className={`gd-cell gd-cell-${c.key} ${i === active ? 'active' : ''}`}
            style={{ '--i': i }}
            onMouseEnter={() => { setPaused(true); setActive(i); }}
            onFocus={() => { setPaused(true); setActive(i); }}
            aria-label={c.label}
          >
            {c.content}
          </button>
        ))}
      </div>

      {/* pointer + explanation */}
      <div className="gd-explain" key={cell.key}>
        <span className="gd-explain-label">{cell.label}</span>
        <span className="gd-explain-desc">{cell.desc}</span>
      </div>

      <div className="gd-dots" aria-hidden="true">
        {CELLS.map((c, i) => <i key={c.key} className={i === active ? 'on' : ''} />)}
      </div>
    </div>
  );
}

export default function GdtSection({ symbolsImage, drawingImage }) {
  const [ref, visible] = useScrollReveal(0.12);

  return (
    <section id="cd-gdt" ref={ref} className={`gd-section ${visible ? 'in' : ''}`}>
      <div className="container">
        <div className="gd-head">
          <span className="gd-eyebrow">ASME Y14.5 · Geometric Dimensioning &amp; Tolerancing</span>
          <h2 className="gd-title">Study Of <span>GD&amp;T</span></h2>
        </div>

        <div className="gd-grid">
          {/* symbols table */}
          <figure className="gd-card gd-card-table" style={{ '--i': 0 }}>
            <div className="gd-card-img">
              <img src={symbolsImage} alt="GD&T symbols, characteristics, tolerance types and control summary" loading="lazy" />
            </div>
            <figcaption>14 GD&amp;T Symbols &amp; Their Controls</figcaption>
          </figure>

          <div className="gd-right">
            <FeatureControlFrame visible={visible} />

            <figure className="gd-card gd-card-draw" style={{ '--i': 1 }}>
              <div className="gd-card-img">
                <img src={drawingImage} alt="Flanged part drawing with GD&T feature control frames applied" loading="lazy" />
              </div>
              <figcaption>GD&amp;T Applied on a Detailed Drawing</figcaption>
            </figure>
          </div>
        </div>

        <div className="gd-foot">
          <ul className="gd-cats">
            {CATEGORIES.map((c, i) => (
              <li key={c.name} style={{ '--i': i }}>
                <strong>{c.count}</strong>
                <span>{c.name}<small>{c.note}</small></span>
              </li>
            ))}
          </ul>
          <p className="gd-point">Understanding &amp; Applying GD&amp;T in Detailed Drawings</p>
        </div>
      </div>
    </section>
  );
}
