import { FiTarget, FiEye, FiBook, FiMonitor, FiUsers } from 'react-icons/fi';

export default function About() {
  return (
    <main>
      {/* Banner */}
      <div className="page-banner">
        <div className="container">
          <span className="eyebrow">About Us</span>
          <h1>About [Your Institute Name]</h1>
          <p>Engineering Design Academy — Training the next generation of industrial and automotive design engineers.</p>
        </div>
      </div>

      {/* Introduction */}
      <section className="section-pad">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <span className="eyebrow">Who We Are</span>
              <h2 className="mt-2 mb-4">Engineering Design Training Institute</h2>
              <p style={{ color: 'var(--gray-text)', lineHeight: 1.8, marginBottom: 16 }}>
                <strong>[Your Institute Name]</strong> is a specialised engineering design training academy focused on
                delivering industry-ready skills in Industrial Design and Automotive Design. Our programs
                are built around the real tools, workflows and standards used by OEM manufacturers and
                core engineering companies.
              </p>
              <p style={{ color: 'var(--gray-text)', lineHeight: 1.8, marginBottom: 16 }}>
                We believe that engineering education must go beyond theory — which is why all our
                programs are structured around practical software training, real design projects, and
                a deep understanding of manufacturing and industry requirements.
              </p>
              <p style={{ color: 'var(--gray-text)', lineHeight: 1.8 }}>
                Our instructors are practicing engineers with direct industry experience, ensuring that
                every lesson reflects real-world design challenges and industry expectations.
              </p>
            </div>
            <div className="col-lg-6">
              <div style={{ borderRadius: 16, overflow: 'hidden', boxShadow: 'var(--shadow-hover)' }}>
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=700&q=80"
                  alt="Engineering Training Institute"
                  style={{ width: '100%', height: 380, objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="section-pad section-bg-light">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Our Purpose</span>
            <h2>Mission, Vision &amp; Values</h2>
            <div className="underline-bar" />
          </div>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="mv-card">
                <FiTarget className="mv-icon" />
                <h4>Our Mission</h4>
                <p>
                  To deliver practical, software-focused engineering design training that prepares
                  students for immediate employment in OEM, Tier-1, and core manufacturing industries.
                  We bridge the gap between academic knowledge and industry expectations.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="mv-card" style={{ borderLeftColor: 'var(--badge-teal)' }}>
                <FiEye className="mv-icon" style={{ color: 'var(--badge-teal)' }} />
                <h4>Our Vision</h4>
                <p>
                  To become the most trusted engineering design training institute in the region,
                  known for producing work-ready engineers with strong design fundamentals, software
                  proficiency, and real-world project experience.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="mv-card" style={{ borderLeftColor: 'var(--badge-gold)' }}>
                <FiBook className="mv-icon" style={{ color: 'var(--badge-gold)' }} />
                <h4>Our Values</h4>
                <p>
                  Industry relevance. Practical learning. Software proficiency. Project-based education.
                  Real skills for real jobs. We build engineers who are ready to contribute from their
                  first day at work.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Training Approach */}
      <section className="section-pad">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Our Approach</span>
            <h2>How We Train Engineers</h2>
            <div className="underline-bar" />
          </div>
          <div className="row g-4">
            {[
              {
                icon: <FiBook />, title: 'Industry-Oriented Curriculum',
                desc: 'Our syllabus is designed based on what OEM factories, Tier-1 suppliers, tool rooms, fabrication shops, and product design companies actually require from their engineering staff. Every module has direct industry applicability.',
              },
              {
                icon: <FiMonitor />, title: 'Software-First Training',
                desc: 'Students train directly on industry-standard software — AutoCAD, SolidWorks, Creo, CATIA, and NX CAD. No theory-only sessions. Every concept is immediately applied in software with guided practice.',
              },
              {
                icon: <FiTarget />, title: 'Project-Based Learning',
                desc: 'All programs include real engineering projects modelled on actual industrial and automotive design challenges. Students build a strong design portfolio that they can present to employers.',
              },
              {
                icon: <FiUsers />, title: 'Expert Industry Instructors',
                desc: 'Our instructors are practicing design engineers with direct experience in OEM and core manufacturing environments. They bring current industry knowledge, tools, and working practices into every session.',
              },
            ].map((item, i) => (
              <div key={i} className="col-md-6">
                <div className="why-card text-start d-flex gap-4 align-items-start p-4">
                  <div className="icon-wrap" style={{ flexShrink: 0 }}>{item.icon}</div>
                  <div>
                    <h5>{item.title}</h5>
                    <p>{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Placeholder Info Section */}
      <section className="section-pad section-bg-light">
        <div className="container">
          <div
            className="p-5 rounded-4 text-center"
            style={{ background: 'var(--light-blue)', border: '2px dashed rgba(21,101,192,0.3)' }}
          >
            <div style={{ fontSize: '2.5rem', marginBottom: 16 }}>🏫</div>
            <h4 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, marginBottom: 12 }}>
              Institute Information Placeholder
            </h4>
            <p style={{ color: 'var(--gray-text)', maxWidth: 600, margin: '0 auto 16px', lineHeight: 1.75 }}>
              Add your institute's founding story, specific achievements, batch sizes, instructor
              profiles, and any certifications or accreditations here. Replace this section with
              your actual institute information.
            </p>
            <a href="/contact" className="btn btn-primary px-4">Contact Us to Learn More</a>
          </div>
        </div>
      </section>
    </main>
  );
}
