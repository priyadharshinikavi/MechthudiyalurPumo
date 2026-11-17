import { useState } from 'react';
import { FiCheckCircle, FiAlertCircle } from 'react-icons/fi';

export default function EnquiryForm({ selectedCourse = '' }) {
  const [form, setForm] = useState({
    name: '', phone: '', email: '', course: selectedCourse,
    qualification: '', message: '',
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const courseOptions = [
    'Masters in Industrial Design',
    'Certified in Industrial Design',
    'Masters in Automotive Design',
    'Certified in Automotive Design',
  ];

  const validate = () => {
    const e = {};
    if (!form.name.trim() || form.name.trim().length < 2)
      e.name = 'Please enter your full name (min 2 characters).';
    if (!form.phone.trim() || !/^[6-9]\d{9}$/.test(form.phone.trim()))
      e.phone = 'Enter a valid 10-digit Indian mobile number.';
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()))
      e.email = 'Enter a valid email address.';
    if (!form.course)
      e.course = 'Please select a course.';
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (errors[name]) setErrors((er) => ({ ...er, [name]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  if (submitted) {
    return (
      <div className="enquiry-card text-center py-5">
        <div style={{ fontSize: '3.5rem', color: '#28a745', marginBottom: '16px' }}>
          <FiCheckCircle />
        </div>
        <h4 className="fw-bold mb-3" style={{ color: '#1a1a2e' }}>
          Enquiry Received! 🎉
        </h4>
        <p className="text-muted mb-4">
          Thank you, <strong>{form.name}</strong>! Our team will contact you at{' '}
          <strong>{form.phone}</strong> within 24 hours.
        </p>
        <div
          className="p-3 rounded mb-4"
          style={{ background: '#e3f2fd', border: '1px solid #90caf9' }}
        >
          <p className="mb-1 text-muted" style={{ fontSize: '0.82rem' }}>
            <strong>Selected Course:</strong> {form.course}
          </p>
          <p className="mb-0 text-muted" style={{ fontSize: '0.78rem' }}>
            ⚠️ This is a demo form — no data has been submitted to a server.
          </p>
        </div>
        <button
          className="btn btn-primary"
          onClick={() => { setSubmitted(false); setForm({ name: '', phone: '', email: '', course: selectedCourse, qualification: '', message: '' }); }}
        >
          Submit Another Enquiry
        </button>
      </div>
    );
  }

  return (
    <div className="enquiry-card">
      <h4 className="fw-bold mb-1" style={{ color: '#1a1a2e', fontFamily: 'var(--font-heading)' }}>
        Enquire Now
      </h4>
      <p className="text-muted mb-4" style={{ fontSize: '0.88rem' }}>
        Fill in your details and our counsellor will call you back within 24 hours.
      </p>
      <form onSubmit={handleSubmit} noValidate>
        <div className="row g-3">
          {/* Name */}
          <div className="col-12">
            <label>Full Name *</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className={`form-control ${errors.name ? 'is-invalid' : ''}`}
              placeholder="Enter your full name"
            />
            {errors.name && (
              <div className="d-flex align-items-center gap-1 mt-1" style={{ color: '#dc3545', fontSize: '0.8rem' }}>
                <FiAlertCircle /> {errors.name}
              </div>
            )}
          </div>

          {/* Phone */}
          <div className="col-md-6">
            <label>Mobile Number *</label>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
              placeholder="10-digit mobile number"
              maxLength={10}
            />
            {errors.phone && (
              <div className="d-flex align-items-center gap-1 mt-1" style={{ color: '#dc3545', fontSize: '0.8rem' }}>
                <FiAlertCircle /> {errors.phone}
              </div>
            )}
          </div>

          {/* Email */}
          <div className="col-md-6">
            <label>Email Address *</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className={`form-control ${errors.email ? 'is-invalid' : ''}`}
              placeholder="your@email.com"
            />
            {errors.email && (
              <div className="d-flex align-items-center gap-1 mt-1" style={{ color: '#dc3545', fontSize: '0.8rem' }}>
                <FiAlertCircle /> {errors.email}
              </div>
            )}
          </div>

          {/* Course */}
          <div className="col-md-6">
            <label>Course of Interest *</label>
            <select
              name="course"
              value={form.course}
              onChange={handleChange}
              className={`form-select ${errors.course ? 'is-invalid' : ''}`}
            >
              <option value="">-- Select a Course --</option>
              {courseOptions.map((c) => <option key={c} value={c}>{c}</option>)}
            </select>
            {errors.course && (
              <div className="d-flex align-items-center gap-1 mt-1" style={{ color: '#dc3545', fontSize: '0.8rem' }}>
                <FiAlertCircle /> {errors.course}
              </div>
            )}
          </div>

          {/* Qualification */}
          <div className="col-md-6">
            <label>Qualification</label>
            <select
              name="qualification"
              value={form.qualification}
              onChange={handleChange}
              className="form-select"
            >
              <option value="">-- Select --</option>
              <option>B.E. / B.Tech (Mechanical)</option>
              <option>Diploma (Mechanical)</option>
              <option>Working Professional</option>
              <option>Other Engineering Graduate</option>
            </select>
          </div>

          {/* Message */}
          <div className="col-12">
            <label>Message (Optional)</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              className="form-control"
              rows={3}
              placeholder="Any specific questions or requirements..."
            />
          </div>

          {/* Submit */}
          <div className="col-12">
            <button
              type="submit"
              className="btn btn-primary w-100 py-3"
              disabled={loading}
              style={{ fontSize: '1rem', fontWeight: 700 }}
            >
              {loading ? (
                <span className="d-flex align-items-center justify-content-center gap-2">
                  <span className="spinner-border spinner-border-sm" />
                  Sending…
                </span>
              ) : 'Submit Enquiry'}
            </button>
            <p className="text-muted text-center mt-2" style={{ fontSize: '0.75rem' }}>
              🔒 Demo form — no data is transmitted to any server.
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}
