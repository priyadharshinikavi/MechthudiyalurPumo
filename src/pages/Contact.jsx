import { asset } from '../utils/asset';
import { FiPhone, FiMail, FiMapPin, FiClock } from 'react-icons/fi';
import EnquiryForm from '../components/ui/EnquiryForm';

export default function Contact() {
  return (
    <main>
      {/* Banner */}
      <div className="page-banner">
        <div className="container">
          <span className="eyebrow">Get in Touch</span>
          <h1>Contact Us</h1>
          <p>Have a question about our programs? Our team is ready to help you choose the right course.</p>
        </div>
      </div>

      {/* Contact Section */}
      <section className="section-pad">
        <div className="container">
          <div className="row g-5">
            {/* Info Card */}
            <div className="col-lg-5">
              <div className="contact-info-card">
                <h4>Get in Touch</h4>
                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', marginBottom: 28, lineHeight: 1.75 }}>
                  Fill in the form or use the contact details below. Our team will respond within 24 hours.
                </p>

                <div className="contact-info-item">
                  <div className="ci-icon"><FiPhone /></div>
                  <div>
                    <div className="ci-label">Phone</div>
                    <div className="ci-value">+91 00000 00000</div>
                    <div className="ci-value" style={{ opacity: 0.6, fontSize: '0.8rem' }}>Placeholder — Replace with actual number</div>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="ci-icon"><FiMail /></div>
                  <div>
                    <div className="ci-label">Email</div>
                    <div className="ci-value">info@yourinstitute.com</div>
                    <div className="ci-value" style={{ opacity: 0.6, fontSize: '0.8rem' }}>Placeholder — Replace with actual email</div>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="ci-icon"><FiMapPin /></div>
                  <div>
                    <div className="ci-label">Location</div>
                    <div className="ci-value">[Your Institute Address]</div>
                    <div className="ci-value" style={{ opacity: 0.6, fontSize: '0.8rem' }}>City, State – PIN Code (Placeholder)</div>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="ci-icon"><FiClock /></div>
                  <div>
                    <div className="ci-label">Working Hours</div>
                    <div className="ci-value">Monday – Saturday</div>
                    <div className="ci-value">9:00 AM – 7:00 PM</div>
                  </div>
                </div>

                {/* Quick Course Links */}
                <div style={{ marginTop: 24, paddingTop: 24, borderTop: '1px solid rgba(255,255,255,0.12)' }}>
                  <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 12 }}>
                    Quick Course Links
                  </p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                    {[
                      'Masters in Industrial Design',
                      'Certified in Industrial Design',
                      'Masters in Automotive Design',
                      'Certified in Automotive Design',
                    ].map((c, i) => (
                      <a key={i} href={asset('/courses')} style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.85rem', transition: 'color 0.3s' }}>
                        → {c}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="col-lg-7">
              <EnquiryForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="section-pad-sm">
        <div className="container">
          <div className="map-placeholder">
            <FiMapPin />
            <p style={{ margin: 0, fontWeight: 600 }}>Map Placeholder</p>
            <p style={{ margin: 0, fontSize: '0.85rem' }}>Replace this with an embedded Google Maps iframe of your institute location.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
