const VENDOR_LOGOS = [
  { src: '/logos/hyundai.png',   alt: 'Hyundai' },
  { src: '/logos/schneider.png', alt: 'Schneider Electric' },
  { src: '/logos/bull.png',      alt: 'Bull' },
  { src: '/logos/lmw.png',       alt: 'LMW' },
  { src: '/logos/messer.png',    alt: 'Messer Cutting Systems' },
  { src: '/logos/geco.png',      alt: 'Geco Legend' },
  { src: '/logos/jbm.png',       alt: 'JBM Group' },
  { src: '/logos/tvs.png',       alt: 'Sundram Fasteners' },
  { src: '/logos/simpton1.png',  alt: 'Simpton & Co' },
  { src: '/logos/labkarts.png',  alt: 'Labkarts' },
];

const CLIENT_PARTNER_LOGOS = [
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
