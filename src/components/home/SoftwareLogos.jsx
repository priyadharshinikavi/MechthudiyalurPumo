const software = [
  {
    name: 'AutoCAD',
    logo: '📐',
    desc: '2D & 3D Drafting',
    color: '#e63946',
  },
  {
    name: 'SolidWorks',
    logo: '🔧',
    desc: 'Part & Assembly',
    color: '#e76f51',
  },
  {
    name: 'Creo (PTC)',
    logo: '⚙️',
    desc: 'Parametric Design',
    color: '#2a9d8f',
  },
  {
    name: 'CATIA',
    logo: '🚗',
    desc: 'Automotive Design',
    color: '#264653',
  },
  {
    name: 'NX CAD',
    logo: '🏭',
    desc: 'Advanced Modelling',
    color: '#6a4c93',
  },
];

export default function SoftwareLogos() {
  return (
    <section className="section-pad">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">Software Training</span>
          <h2>Industry-Standard Software We Teach</h2>
          <div className="underline-bar" />
          <p>Get certified and proficient in the exact tools used by OEM and Tier-1 engineering companies.</p>
        </div>

        <div className="row g-4 justify-content-center">
          {software.map((sw, i) => (
            <div key={i} className="col-lg-2 col-md-4 col-6">
              <div
                className="text-center p-4 eng-card"
                style={{ borderTop: `4px solid ${sw.color}` }}
              >
                <div style={{ fontSize: '3rem', marginBottom: '12px' }}>{sw.logo}</div>
                <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.9rem', color: 'var(--dark-text)', marginBottom: '4px' }}>
                  {sw.name}
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--gray-text)' }}>{sw.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
