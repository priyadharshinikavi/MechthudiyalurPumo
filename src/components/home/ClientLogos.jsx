import AnimatedSection from '../ui/AnimatedSection';
import { asset } from '../../utils/asset';

const LOGOS = [
  { src: asset('/logos/hyundai.png'),   alt: 'Hyundai' },
  { src: asset('/logos/schneider.png'), alt: 'Schneider Electric' },
  { src: asset('/logos/bull.png'),      alt: 'Bull' },
  { src: asset('/logos/lmw.png'),       alt: 'LMW' },
  { src: asset('/logos/messer.png'),    alt: 'Messer Cutting Systems' },
  { src: asset('/logos/geco.png'),      alt: 'Geco Legend' },
  { src: asset('/logos/jbm.png'),       alt: 'JBM Group' },
  { src: asset('/logos/tvs.png'),       alt: 'Sundram Fasteners Limited' },
  { src: asset('/logos/simpton1.png'),  alt: 'Simpton & Co' },
  { src: asset('/logos/labkarts.png'),  alt: 'Labkarts' },
  { src: asset('/logos/nasscom.jpeg'), alt: 'NASSCOM' },
  { src: asset('/logos/national-career-service.jpeg'), alt: 'National Career Service' },
  { src: asset('/logos/nsdc.jpeg'), alt: 'National Skill Development Corporation (NSDC)' },
  { src: asset('/logos/autodesk-authorized-training-center.jpeg'), alt: 'Autodesk Authorized Training Center' },
  { src: asset('/logos/catia-authorized-partner.jpeg'), alt: 'CATIA Authorized Licensed Partner' },
  { src: asset('/logos/hrdf-malaysia.jpeg'), alt: 'HRDF Malaysia' },
  { src: asset('/logos/iaf.jpeg'), alt: 'International Accreditation Forum (IAF)' },
  { src: asset('/logos/dubai-knowledge.jpeg'), alt: 'Dubai Knowledge' },
  { src: asset('/logos/creo-authorized-partner.jpeg'), alt: 'Creo (PTC) Authorized Licensed Partner' },
  { src: asset('/logos/startup-india.jpeg'), alt: 'Startup India' },
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
