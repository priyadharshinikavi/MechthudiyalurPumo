import AnimatedSection from '../ui/AnimatedSection';
import StudentEmployers from './StudentEmployers';
import { asset } from '../../utils/asset';

// ── Service Data ───────────────────────────────────────────
const SERVICES = [
  {
    icon: 'https://pumotechnovation.com/assets/icons/engineering.png',
    title: 'Engineering Services',
    desc: 'Explore our turnkey solutions across automation and software, backed by an expanding engineering services catalog.',
    color: '#1565c0',
  },
  {
    icon: 'https://pumotechnovation.com/assets/icons/training.png',
    title: 'Staffing Solution',
    desc: 'We have deployed 350+ engineers at TVS SFL for auto-component manufacturing.',
    color: '#0d6b3f',
  },
  {
    icon: 'https://pumotechnovation.com/assets/icons/manufacturing.png',
    title: 'Training Services',
    desc: 'India’s first advanced technical campus features robots, CNC machines, industrial PLC panels and a technology computer lab.',
    color: '#b45309',
  },
  {
    icon: 'https://pumotechnovation.com/assets/icons/engineering.png',
    title: 'Manufacturing',
    desc: 'We develop products across automation, software and hardware, and manufacture CON RODS for Ashok Leyland.',
    color: '#6d28d9',
  },
];

export default function ServicesSection() {
  return (
    <>
      {/* ── SERVICES SECTION ──────────────────────────────── */}
      <section className="services-section">
        <div className="container">
          <AnimatedSection>
            <div className="services-heading">
              <div className="services-heading-copy">
                <span className="eyebrow">Our</span>
                <h2>Services</h2>
                <p>Practical expertise, skilled teams and industry-ready solutions to help businesses and careers move forward.</p>
              </div>
              <div className="services-stat" aria-label="Four career upgrade activities">
                <strong>4+</strong>
                <span>Career upgrade<br />activities</span>
              </div>
            </div>
          </AnimatedSection>

          <div className="row g-4">
            {SERVICES.map((svc, i) => (
              <div key={svc.title} className="col-xl-3 col-md-6">
                <AnimatedSection delay={i * 0.1}>
                  <div
                    className="service-card"
                    style={{ '--svc-color': svc.color }}
                  >
                    <div className="svc-icon-wrap">
                      <img
                        className="svc-icon"
                        src={svc.icon}
                        alt=""
                      />
                    </div>
                    <h3 className="svc-title">{svc.title}</h3>
                    <p className="svc-desc">{svc.desc}</p>
                  </div>
                </AnimatedSection>
              </div>
            ))}
          </div>

          <div className="engineering-feature">
            <AnimatedSection className="engineering-feature-copy">
              <span className="engineering-feature-eyebrow">Engineering Services</span>
              <h3>Built to compete. Ready to lead.</h3>
              <p>
                Our students actively participate in a wide variety of competitions and challenges
                conducted at the state, national and international levels. We feel proud when our
                students make a mark in global challenges and hackathons.
              </p>
              <blockquote>
                “The will to win, the desire to succeed, and the urge to reach one’s full potential
                is in the DNA of Eshwarites!”
              </blockquote>
            </AnimatedSection>
            <AnimatedSection animation="reveal-scale" className="engineering-logo-reveal">
              <div className="engineering-logo-stage">
                <span className="engineering-logo-orbit engineering-logo-orbit-outer" aria-hidden="true" />
                <span className="engineering-logo-orbit engineering-logo-orbit-inner" aria-hidden="true" />
                <img src={asset('/pumo-logo.png')} alt="Pumo Technovation" />
              </div>
            </AnimatedSection>
          </div>

          <div className="engineering-feature engineering-feature--reverse">
            <AnimatedSection className="engineering-feature-copy">
              <span className="engineering-feature-eyebrow">Staffing Solution</span>
              <h3>Trained by us. Employed by us.</h3>
              <p>
                Our students are employed in our various projects in our payroll by extensively
                getting skills upgraded by our Real Time Projects and indigenously participating
                in all tech events organised by our IQAC team.
              </p>
              <blockquote>
                “Learning or facing new tech queries are inculcated into the DNA of Pumo Technovates!”
              </blockquote>
            </AnimatedSection>
            <AnimatedSection animation="reveal-scale" className="engineering-logo-reveal">
              <div className="engineering-logo-stage">
                <span className="engineering-logo-orbit engineering-logo-orbit-outer" aria-hidden="true" />
                <span className="engineering-logo-orbit engineering-logo-orbit-inner" aria-hidden="true" />
                <img src={asset('/pumo-logo.png')} alt="Pumo Technovation" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── WHERE DO OUR STUDENTS WORK ────────────────────── */}
      <StudentEmployers />
    </>
  );
}
