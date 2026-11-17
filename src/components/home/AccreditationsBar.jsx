import { asset } from '../../utils/asset';

const VENDOR_LOGOS = [
  { src: asset('/logos/hyundai.png'),   alt: 'Hyundai' },
  { src: asset('/logos/schneider.png'), alt: 'Schneider Electric' },
  { src: asset('/logos/bull.png'),      alt: 'Bull' },
  { src: asset('/logos/lmw.png'),       alt: 'LMW' },
  { src: asset('/logos/messer.png'),    alt: 'Messer Cutting Systems' },
  { src: asset('/logos/geco.png'),      alt: 'Geco Legend' },
  { src: asset('/logos/jbm.png'),       alt: 'JBM Group' },
  { src: asset('/logos/tvs.png'),       alt: 'Sundram Fasteners' },
  { src: asset('/logos/simpton1.png'),  alt: 'Simpton & Co' },
  { src: asset('/logos/labkarts.png'),  alt: 'Labkarts' },
];

const CLIENT_PARTNER_LOGOS = [
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

export default function AccreditationsBar() {
  return (
    <section className="accreditations-section">
      <div className="container">
        <div className="text-center mb-4">
          <h2>Our Clients &amp; Partners</h2>
          <p className="acc-subtitle">
            Trusted by our authorised training, accreditation, and industry partners
          </p>
        </div>
        <div className="acc-logo-grid">
          {CLIENT_PARTNER_LOGOS.map(logo => (
            <div key={logo.src} className="acc-logo-box">
              <img
                src={logo.src}
                alt={logo.alt}
                title={logo.alt}
                className="acc-logo-img"
                loading="lazy"
                onLoad={event => event.currentTarget.classList.add('loaded')}
              />
            </div>
          ))}
        </div>

        <div className="text-center mb-4 mt-5">
          <h2>Our Vendors</h2>
          <p className="acc-subtitle">
            Industry leaders supporting our engineering training and placements
          </p>
        </div>
        <div className="acc-logo-grid">
          {VENDOR_LOGOS.map(logo => (
            <div key={logo.src} className="acc-logo-box">
              <img
                src={logo.src}
                alt={logo.alt}
                title={logo.alt}
                className="acc-logo-img"
                loading="lazy"
                onLoad={event => event.currentTarget.classList.add('loaded')}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
