import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import { asset } from '../../utils/asset';

// ── International placement achievers shown on the first hero slide ──
// To add another achiever, put the poster in /public/placements/
// and add an entry here (two fit best on wide screens).
const ACHIEVERS = [
  {
    name: 'Mr. Pavuluri Sai Krishna',
    company: 'Trelleborg',
    country: 'Switzerland',
    lpa: 24,
    poster: asset('/placements/sai-krishna-trelleborg.jpg'),
  },
  {
    name: 'Mr. Mohammed Ayan',
    company: 'Simple Solutions',
    country: 'Saudi Arabia',
    lpa: 12,
    poster: asset('/placements/mohammed-ayan-simple-solutions.jpg'),
  },
];

export default function PlacementBanner() {
  return (
    <div className="pb-banner">
      <div className="pb-glow" aria-hidden="true" />

      <div className="pb-copy">
        <span className="pb-eyebrow">🌍 Creating Pathways to Top Careers</span>
        <h2 className="pb-title">
          International <span>Placement</span> Achievers
        </h2>
        <p className="pb-sub">
          Our students are now working as Design Engineers abroad.
        </p>

        <ul className="pb-chips">
          {ACHIEVERS.map(a => (
            <li key={a.name} className="pb-chip">
              <strong>{a.lpa} LPA</strong>
              <span>{a.company}<br />{a.country}</span>
            </li>
          ))}
        </ul>

        <Link to="/courses" className="pb-cta">
          Start Your Journey <FiArrowRight size={16} />
        </Link>
      </div>

      <div className="pb-posters">
        {ACHIEVERS.map((a, i) => (
          <figure key={a.name} className={`pb-poster pb-poster-${i + 1}`}>
            <img
              src={a.poster}
              alt={`${a.name}, placed at ${a.company}, ${a.country} — ${a.lpa} LPA`}
              draggable="false"
            />
          </figure>
        ))}
      </div>
    </div>
  );
}
