import AnimatedSection from './AnimatedSection';
import { FiBriefcase, FiMapPin, FiStar } from 'react-icons/fi';

// ── Placement Card ─────────────────────────────────────────
function PlacementCard({ placement, delay }) {
  return (
    <AnimatedSection delay={delay}>
      <div className="placement-card">
        <div className="placement-photo-wrap">
          <img
            src={placement.photo}
            alt={placement.name}
            className="placement-photo"
            loading="lazy"
          />
          <div className="placement-company-badge">
            <img
              src={placement.companyLogo}
              alt={placement.company}
              className="placement-company-logo"
              loading="lazy"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'block';
              }}
            />
            <span className="placement-company-fallback" style={{ display: 'none' }}>
              {placement.company}
            </span>
          </div>
        </div>

        <div className="placement-info">
          <h4 className="placement-name">{placement.name}</h4>
          <div className="placement-role">
            <FiBriefcase size={13} />
            <span>{placement.role}</span>
          </div>
          <div className="placement-company-row">
            <FiMapPin size={12} />
            <span>{placement.company} · {placement.location}</span>
          </div>
          <div className="placement-package">
            <FiStar size={12} />
            <span>Package: <strong>{placement.package}</strong></span>
          </div>
          <blockquote className="placement-quote">"{placement.quote}"</blockquote>
          <div className="placement-batch">Batch: {placement.batch}</div>
        </div>
      </div>
    </AnimatedSection>
  );
}

// ── Main Section ───────────────────────────────────────────
export default function PlacementSection({ placements, courseTitle }) {
  if (!placements || placements.length === 0) return null;

  return (
    <section id="cd-placements" className="cd-placements">
      <div className="container">
        <AnimatedSection>
          <div className="section-header">
            <span className="eyebrow" style={{ color: 'var(--accent-blue)' }}>Our Achievers</span>
            <h2>Placement Success Stories</h2>
            <div className="underline-bar" />
            <p>
              Real students. Real companies. Real careers built through{' '}
              <strong>{courseTitle}</strong>.
            </p>
          </div>
        </AnimatedSection>

        {/* Stats strip */}
        <AnimatedSection delay={0.1}>
          <div className="placement-stats-strip">
            <div className="placement-stat">
              <span className="ps-number">95%</span>
              <span className="ps-label">Placement Rate</span>
            </div>
            <div className="placement-stat-divider" />
            <div className="placement-stat">
              <span className="ps-number">₹3.5L+</span>
              <span className="ps-label">Average Package</span>
            </div>
            <div className="placement-stat-divider" />
            <div className="placement-stat">
              <span className="ps-number">60 Days</span>
              <span className="ps-label">Avg. Time to Hire</span>
            </div>
            <div className="placement-stat-divider" />
            <div className="placement-stat">
              <span className="ps-number">50+</span>
              <span className="ps-label">Hiring Partners</span>
            </div>
          </div>
        </AnimatedSection>

        {/* Cards grid */}
        <div className="row g-4 mt-2">
          {placements.map((p, i) => (
            <div key={i} className="col-xl-3 col-lg-4 col-md-6">
              <PlacementCard placement={p} delay={i * 0.08} />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <AnimatedSection delay={0.2}>
          <div className="placement-cta-strip">
            <span>🎯 Want to be our next placement success story?</span>
            <a href="#cd-enquiry" className="btn btn-primary-custom btn-sm ms-3">
              Enrol Now →
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
