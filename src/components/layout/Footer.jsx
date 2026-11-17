// styles imported globally via App.jsx
import { Link } from 'react-router-dom';
import {
  FaPhone, FaEnvelope, FaMapMarkerAlt,
  FaFacebookF, FaLinkedinIn, FaYoutube, FaInstagram,
} from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="main-footer">
      <div className="container">
        <div className="row g-5">

          {/* Brand Column — Logo Image */}
          <div className="col-lg-4 col-md-6">
            <div className="footer-brand">
              {/* Logo Image */}
              <div className="mb-3">
                <img
                  src="/logo.png"
                  alt="Pumo Technovation"
                  style={{
                    height: '52px',
                    width: 'auto',
                    objectFit: 'contain',
                    filter: 'brightness(0) invert(1)',  /* white logo on dark bg */
                    opacity: 0.92,
                  }}
                />
              </div>
              <div className="brand-tagline">India's Advanced AI Integrated Tech Campus</div>
              <p style={{ marginTop: 12 }}>
                India's premier engineering design training institute delivering
                industry-ready skills in Industrial Design, Automotive Design,
                and advanced CAD technologies.
              </p>
              {/* Social */}
              <div className="footer-social">
                <div className="social-btn" title="Facebook"><FaFacebookF /></div>
                <div className="social-btn" title="LinkedIn"><FaLinkedinIn /></div>
                <div className="social-btn" title="YouTube"><FaYoutube /></div>
                <div className="social-btn" title="Instagram"><FaInstagram /></div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-lg-2 col-md-6 col-sm-6">
            <h6 className="footer-heading">Quick Links</h6>
            <div className="footer-links">
              <Link to="/">Home</Link>
              <Link to="/courses">All Courses</Link>
              <Link to="/industrial-design">Industrial Design</Link>
              <Link to="/automotive-design">Automotive Design</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/about">About Us</Link>
              <Link to="/contact">Contact Us</Link>
            </div>
          </div>

          {/* Courses */}
          <div className="col-lg-3 col-md-6 col-sm-6">
            <h6 className="footer-heading">Our Courses</h6>
            <div className="footer-links">
              <Link to="/courses/masters-industrial-design">Masters in Industrial Design</Link>
              <Link to="/courses/certified-industrial-design">Certified in Industrial Design</Link>
              <Link to="/courses/masters-automotive-design">Masters in Automotive Design</Link>
              <Link to="/courses/certified-automotive-design">Certified in Automotive Design</Link>
            </div>
            <div className="mt-4">
              <h6 className="footer-heading">Software We Teach</h6>
              <div className="footer-software-tags">
                {['AutoCAD', 'SolidWorks', 'Creo', 'CATIA', 'NX CAD'].map(s => (
                  <span key={s} className="footer-sw-tag">{s}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="col-lg-3 col-md-6">
            <h6 className="footer-heading">Contact Us</h6>
            <div className="footer-contact-item">
              <FaMapMarkerAlt className="fc-icon" />
              <span>[Your Institute Address]<br />City, State – PIN Code</span>
            </div>
            <div className="footer-contact-item">
              <FaPhone className="fc-icon" />
              <span>+91 00000 00000</span>
            </div>
            <div className="footer-contact-item">
              <FaEnvelope className="fc-icon" />
              <span>info@pumotechnovation.com</span>
            </div>
            <div className="mt-4">
              <Link to="/contact">
                <button className="btn btn-primary w-100" style={{ fontSize: '0.88rem' }}>
                  Send Enquiry
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="container">
          <p>
            © {currentYear} Pumo Technovation — India's Advanced AI Integrated Tech Campus. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
