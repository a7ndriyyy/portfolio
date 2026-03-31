import React from 'react';
import './ContactsPage.css';

const ContactsPage = () => {
  return (
    <div className="glass-card contact-card">
      <h1 className="section-title">📬 Me contacter</h1>
      <p style={{ marginBottom: '1.5rem' }}>
        Tu peux me contacter pour un projet, une collaboration ou simplement pour échanger 😊
      </p>

      <div className="social-grid">
        <a href="mailto:andrii.nastych@gmail.com" className="contact-link">
          📧 andrii.nastych@gmail.com
        </a>
        <a href="https://linkedin.com/in/andrii-nastych" target="_blank" rel="noopener noreferrer" className="contact-link">
          🔗 LinkedIn
        </a>
        <a href="https://github.com/a7ndriyyy" target="_blank" rel="noopener noreferrer" className="contact-link">
          🐙 GitHub
        </a>
      </div>

      <hr style={{ margin: '2rem 0' }} />

      <div style={{ background: '#0b0e14', borderRadius: '20px', padding: '1.5rem' }}>
        <p style={{ fontStyle: 'italic', fontSize: '1.1rem' }}>
          "Sécuriser aujourd'hui pour garantir un numérique de confiance demain."
        </p>
        <p style={{ marginTop: '1rem', color: '#0aff9d' }}>À très vite pour travailler ensemble !</p>
      </div>
    </div>
  );
};

export default ContactsPage;