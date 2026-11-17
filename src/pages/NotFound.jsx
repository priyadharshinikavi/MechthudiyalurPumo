import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div
      className="d-flex flex-column align-items-center justify-content-center text-center"
      style={{ minHeight: '70vh', padding: '60px 20px' }}
    >
      <div style={{ fontSize: '5rem', marginBottom: 16 }}>⚙️</div>
      <h1
        style={{
          fontFamily: 'var(--font-heading)',
          fontSize: '5rem',
          fontWeight: 900,
          color: 'var(--primary-blue)',
          lineHeight: 1,
          marginBottom: 8,
        }}
      >
        404
      </h1>
      <h2
        style={{
          fontFamily: 'var(--font-heading)',
          fontWeight: 700,
          fontSize: '1.5rem',
          color: 'var(--dark-text)',
          marginBottom: 12,
        }}
      >
        Page Not Found
      </h2>
      <p style={{ color: 'var(--gray-text)', maxWidth: 400, marginBottom: 32, lineHeight: 1.75 }}>
        The page you're looking for doesn't exist or may have been moved. Let's get you back on track.
      </p>
      <div className="d-flex gap-3 flex-wrap justify-content-center">
        <Link to="/" className="btn btn-primary px-4 py-2">Go to Home</Link>
        <Link to="/courses" className="btn btn-outline-primary px-4 py-2">Browse Courses</Link>
        <Link to="/contact" className="btn btn-outline-primary px-4 py-2">Contact Us</Link>
      </div>
    </div>
  );
}
