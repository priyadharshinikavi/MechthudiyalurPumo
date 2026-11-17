import AnimatedSection from '../ui/AnimatedSection';

const LOGOS = [
  { src: '/logos/hyundai.png',   alt: 'Hyundai' },
  { src: '/logos/schneider.png', alt: 'Schneider Electric' },
  { src: '/logos/bull.png',      alt: 'Bull' },
  { src: '/logos/lmw.png',       alt: 'LMW' },
  { src: '/logos/messer.png',    alt: 'Messer Cutting Systems' },
  { src: '/logos/geco.png',      alt: 'Geco Legend' },
  { src: '/logos/jbm.png',       alt: 'JBM Group' },
  { src: '/logos/tvs.png',       alt: 'Sundram Fasteners Limited' },
  { src: '/logos/simpton1.png',  alt: 'Simpton & Co' },
  { src: '/logos/labkarts.png',  alt: 'Labkarts' },
  { src: '/logos/nasscom.jpeg', alt: 'NASSCOM' },
  { src: '/logos/national-career-service.jpeg', alt: 'National Career Service' },
  { src: '/logos/nsdc.jpeg', alt: 'National Skill Development Corporation (NSDC)' },
  { src: '/logos/autodesk-authorized-training-center.jpeg', alt: 'Autodesk Authorized Training Center' },
  { src: '/logos/catia-authorized-partner.jpeg', alt: 'CATIA Authorized Licensed Partner' },
  { src: '/logos/hrdf-malaysia.jpeg', alt: 'HRDF Malaysia' },
  { src: '/logos/iaf.jpeg', alt: 'International Accreditation Forum (IAF)' },
  { src: '/logos/dubai-knowledge.jpeg', alt: 'Dubai Knowledge' },
  { src: '/logos/creo-authorized-partner.jpeg', alt: 'Creo (PTC) Authorized Licensed Partner' },
  { src: '/logos/startup-india.jpeg', alt: 'Startup India' },
];

export default function ClientLogos() {
  return (
    <section className="client-logos-section">
      <div className="container">
        <AnimatedSection>
          <div className="section-header">
            <span className="eyebrow">Trusted By Industry Leaders</span>
            <h2>Our Clients &amp; Partners</h2>
            <div className="underline-bar" />
            <p>Companies that hire our graduates and partner with us for training and staffing solutions.</p>
          </div>
        </AnimatedSection>

        {/* Scrolling logo strip */}
        <AnimatedSection delay={0.1}>
          <div className="logo-marquee-wrap">
            <div className="logo-marquee">
              {/* Duplicate for seamless loop */}
              {[...LOGOS, ...LOGOS].map((logo, i) => (
                <div key={i} className="logo-marquee-item">
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="client-logo-img"
                    loading="lazy"
                    onLoad={event => event.currentTarget.classList.add('loaded')}
                    title={logo.alt}
                  />
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Grid view below marquee */}
        <div className="row g-3 mt-4 justify-content-center">
          {LOGOS.map((logo, i) => (
            <div key={i} className="col-6 col-sm-4 col-md-3 col-lg-2">
              <AnimatedSection delay={i * 0.05}>
                <div className="client-logo-card">
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="client-logo-grid-img"
                    loading="lazy"
                    onLoad={event => event.currentTarget.classList.add('loaded')}
                    title={logo.alt}
                  />
                  <div className="client-logo-name">{logo.alt}</div>
                </div>
              </AnimatedSection>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
