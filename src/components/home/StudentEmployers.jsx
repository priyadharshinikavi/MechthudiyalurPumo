import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import AnimatedSection from '../ui/AnimatedSection';
import { asset } from '../../utils/asset';

// ── Companies where our students work ──────────────────────
// Only companies with a `logo` are shown on the page.
// To add a missing one, put the image in /public/companies/
// and set `logo: asset('/companies/<file>')`.
// `invert: true` is for white logos (made for dark headers) —
// it renders them in dark ink so they show on the white cards.
const COMPANIES = [
  { name: 'Hyundai', logo: asset('/logos/hyundai.png') },
  { name: 'Lokesh Machines Limited', logo: asset('/companies/lokesh.gif') },
  { name: 'Hinduja Tech', logo: asset('/companies/hindujatech.png'), invert: true },
  { name: 'Cognizant', logo: asset('/companies/cognizant.png') },
  { name: 'TCS (Tata Consultancy Services)', logo: asset('/companies/tcs.svg'), invert: true },
  { name: 'Skava' },
  { name: 'Wipro', logo: asset('/companies/wipro.png') },
  { name: 'Tech Mahindra', logo: asset('/companies/techmahindra.png') },
  { name: 'Petrus' },
  { name: 'Bradken', logo: asset('/companies/bradken.png') },
  { name: 'Capgemini', logo: asset('/companies/capgemini.png') },
  { name: 'GECO Legend', logo: asset('/logos/geco.png') },
  { name: 'JBM Group', logo: asset('/logos/jbm.png') },
  { name: 'AxisCades', logo: asset('/companies/axiscades.png'), invert: true },
  { name: 'LMW', logo: asset('/companies/lmw.png') },
  { name: 'Pricol', logo: asset('/companies/pricol.png') },
  { name: 'Krykard', logo: asset('/companies/krykard.png') },
  { name: 'Motherson' },
  { name: 'Valeo', logo: asset('/companies/valeo.png') },
  { name: 'Royal Enfield', logo: asset('/companies/royal-enfield.png') },
  { name: 'CADOpt Technologies' },
  { name: 'Texmo Precision Castings' },
  { name: 'Dharani Pumps & Motors', logo: asset('/companies/dharani.png') },
  { name: 'Sandfits', logo: asset('/companies/sandfits.png') },
  { name: 'Hofincons', logo: asset('/companies/hofincons.svg') },
  { name: 'Prasad Group' },
  { name: 'Samyak' },
  { name: 'ELROI Software Solution' },
  { name: 'MAG' },
  { name: 'Milacron', logo: asset('/companies/milacron.png') },
  { name: 'Servion', logo: asset('/companies/servion.svg'), invert: true },
];

const WITH_LOGOS = COMPANIES.filter(c => c.logo);
const half = Math.ceil(WITH_LOGOS.length / 2);
const ROW_ONE = WITH_LOGOS.slice(0, half);
const ROW_TWO = WITH_LOGOS.slice(half);

function LogoCard({ company, hidden }) {
  return (
    <div
      className="employer-card"
      title={company.name}
      role={hidden ? undefined : 'listitem'}
      aria-hidden={hidden || undefined}
    >
      <img
        src={company.logo}
        alt={hidden ? '' : company.name}
        className={company.invert ? 'invert' : undefined}
        draggable="false"
      />
    </div>
  );
}

function MarqueeRow({ items, reverse }) {
  return (
    <div className="employer-row">
      <div className={`employer-track ${reverse ? 'reverse' : ''}`}>
        {[0, 1].map(copy =>
          items.map(company => (
            <LogoCard key={`${copy}-${company.name}`} company={company} hidden={copy === 1} />
          ))
        )}
      </div>
    </div>
  );
}

export default function StudentEmployers() {
  return (
    <section className="employers-section">
      <div className="container">
        <AnimatedSection>
          <div className="employers-heading">
            <div>
              <span className="eyebrow">Placements</span>
              <h2>Where Do Our Students Work?</h2>
              <p>
                From automotive OEMs to global IT and engineering leaders, our students build
                their careers at companies across every core industry.
              </p>
            </div>
            <div className="employers-stat">
              <strong>{COMPANIES.length}+</strong>
              <span>Hiring<br />companies</span>
            </div>
          </div>
        </AnimatedSection>
      </div>

      <AnimatedSection delay={0.1}>
        <div className="employer-marquee" role="list" aria-label="Companies where our students work">
          <MarqueeRow items={ROW_ONE} />
          <MarqueeRow items={ROW_TWO} reverse />
        </div>
      </AnimatedSection>

      <div className="container">
        <AnimatedSection delay={0.15}>
          <div className="employers-cta">
            <span>Your name could be on the next offer letter.</span>
            <Link to="/courses" className="employers-cta-link">
              Explore Courses <FiArrowRight size={15} />
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
