import Hero from '../components/home/Hero';
import AccreditationsBar from '../components/home/AccreditationsBar';
import LeadershipVision from '../components/home/LeadershipVision';
import ServicesSection from '../components/home/ServicesSection';
import CourseChooser from '../components/home/CourseChooser';
import EnquiryForm from '../components/ui/EnquiryForm';

export default function Home() {
  return (
    <main>
      <Hero />
      <AccreditationsBar />
      <LeadershipVision />

      <ServicesSection />
      <CourseChooser />

      {/* Enquiry Section */}
      <section className="enquiry-section">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-5">
              <span className="eyebrow" style={{ color: 'var(--accent-blue)', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', display: 'block', marginBottom: 12 }}>
                Start Your Journey
              </span>
              <h2 style={{ color: '#fff', fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', marginBottom: 16 }}>
                Ready to Launch Your Engineering Design Career?
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.75)', marginBottom: 24, lineHeight: 1.75 }}>
                Fill in the form and our course counsellor will help you pick the right program and answer all your questions within 24 hours.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                {['Industry-aligned curriculum', 'Software training included', 'Practical project-based learning', 'Completion certificate'].map((pt, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, color: 'rgba(255,255,255,0.85)', fontSize: '0.9rem' }}>
                    <span style={{ color: '#4ade80', fontSize: '1.1rem' }}>✔</span>
                    {pt}
                  </div>
                ))}
              </div>
            </div>
            <div className="col-lg-7">
              <EnquiryForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
