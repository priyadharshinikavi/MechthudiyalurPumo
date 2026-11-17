import { useState } from 'react';
import { FiPlus, FiMinus } from 'react-icons/fi';

export default function FAQ({ faqs, title = 'Frequently Asked Questions' }) {
  const [openId, setOpenId] = useState(null);

  return (
    <div>
      <div className="section-header">
        <span className="eyebrow">FAQ</span>
        <h2>{title}</h2>
        <div className="underline-bar" />
      </div>

      <div style={{ maxWidth: '820px', margin: '0 auto' }}>
        {faqs.map((faq) => (
          <div
            key={faq.id}
            className="mb-3"
            style={{
              borderRadius: '12px',
              border: '1.5px solid var(--gray-mid)',
              overflow: 'hidden',
              transition: 'all 0.3s ease',
              boxShadow: openId === faq.id ? 'var(--shadow-hover)' : 'none',
            }}
          >
            <button
              className="w-100 d-flex align-items-center justify-content-between p-4"
              style={{
                background: openId === faq.id ? 'var(--light-blue)' : 'var(--white)',
                border: 'none',
                cursor: 'pointer',
                textAlign: 'left',
                transition: 'background 0.3s ease',
              }}
              onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
            >
              <span
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 700,
                  fontSize: '0.95rem',
                  color: openId === faq.id ? 'var(--primary-blue)' : 'var(--dark-text)',
                  paddingRight: '16px',
                }}
              >
                {faq.question}
              </span>
              <span
                style={{
                  width: 28, height: 28, borderRadius: '50%', flexShrink: 0,
                  background: openId === faq.id ? 'var(--primary-blue)' : 'var(--light-blue)',
                  color: openId === faq.id ? '#fff' : 'var(--primary-blue)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1rem', transition: 'all 0.3s ease',
                }}
              >
                {openId === faq.id ? <FiMinus size={14} /> : <FiPlus size={14} />}
              </span>
            </button>
            {openId === faq.id && (
              <div
                className="px-4 pb-4"
                style={{
                  fontSize: '0.9rem',
                  color: 'var(--gray-text)',
                  lineHeight: '1.75',
                  borderTop: '1px solid var(--gray-mid)',
                  paddingTop: '16px',
                  background: '#fff',
                }}
              >
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
