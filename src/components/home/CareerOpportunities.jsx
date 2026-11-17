const industries = [
  { icon: '🏭', title: 'Manufacturing Industry', desc: 'OEM factories, tier suppliers, component manufacturers' },
  { icon: '🚗', title: 'Automotive Industry', desc: 'Car manufacturers, body designers, harness teams' },
  { icon: '🔩', title: 'Fabrication Industry', desc: 'Steel fabricators, structural design, welding shops' },
  { icon: '⚗️', title: 'Valve & Pump Industry', desc: 'Industrial fluid systems, process equipment design' },
  { icon: '🛠️', title: 'Tool Room Industry', desc: 'Mould makers, die designers, precision tooling' },
  { icon: '🔬', title: 'Product Design Companies', desc: 'Consumer products, industrial equipment, R&D' },
];

const careers = [
  'CAD Design Engineer',
  'Product Design Engineer',
  'Mechanical Design Engineer',
  'Automotive Design Engineer',
  'BIW Design Engineer',
  'Wiring Harness Designer',
  'Tool Design Engineer',
  'Jig & Fixture Engineer',
  'Surface Modelling Engineer',
  'Reverse Engineering Specialist',
];

export default function CareerOpportunities() {
  return (
    <>
      {/* Industry Applications */}
      <section className="section-pad">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Industry Applications</span>
            <h2>Where Our Graduates Work</h2>
            <div className="underline-bar" />
            <p>Our programs are designed to prepare you for roles across a broad range of engineering industries.</p>
          </div>
          <div className="row g-4">
            {industries.map((ind, i) => (
              <div key={i} className="col-lg-4 col-md-6">
                <div className="industry-card">
                  <span className="ind-icon">{ind.icon}</span>
                  <h6>{ind.title}</h6>
                  <p>{ind.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Opportunities */}
      <section className="section-pad section-bg-dark">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow" style={{ color: 'var(--accent-blue)' }}>Career Outcomes</span>
            <h2 style={{ color: '#fff' }}>Engineering Career Opportunities</h2>
            <div className="underline-bar" />
            <p style={{ color: 'rgba(255,255,255,0.7)' }}>
              Qualified engineers can apply for these high-demand roles across OEM, Tier-1 and core manufacturing sectors.
            </p>
          </div>
          <div className="text-center">
            {careers.map((c, i) => (
              <span key={i} className="career-tag m-2">{c}</span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
