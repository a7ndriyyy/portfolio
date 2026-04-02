import React, { useState } from 'react';
import { 
  FiMail, FiLinkedin, FiGithub, FiCopy, FiCheck, 
  FiSend, FiMessageCircle, FiUser, 
  FiMapPin, FiGlobe, FiArrowRight
} from 'react-icons/fi';
import './ContactsPage.css';

const ContactsPage = () => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState(null);

  const handleCopyEmail = async () => {
    await navigator.clipboard.writeText('andrii.nastych@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Open mail client with pre-filled message
    window.location.href = `mailto:andrii.nastych@gmail.com?subject=Contact depuis votre portfolio de ${formData.name}&body=${formData.message}%0A%0A---%0AEmail: ${formData.email}`;
    setFormStatus('success');
    setTimeout(() => setFormStatus(null), 3000);
    setFormData({ name: '', email: '', message: '' });
  };

  const contactInfo = [
    {
      icon: <FiMail size={20} />,
      title: "Email",
      value: "andrii.nastych@gmail.com",
      action: "mailto:andrii.nastych@gmail.com",
      copyable: true
    },
    {
      icon: <FiLinkedin size={20} />,
      title: "LinkedIn",
      value: "linkedin.com/in/andrii-nastych",
      action: "https://linkedin.com/in/andrii-nastych",
      copyable: false
    },
    {
      icon: <FiGithub size={20} />,
      title: "GitHub",
      value: "github.com/a7ndriyyy",
      action: "https://github.com/a7ndriyyy",
      copyable: false
    },
    {
      icon: <FiMapPin size={20} />,
      title: "Localisation",
      value: "France",
      action: null,
      copyable: false
    }
  ];

  return (
    <div className="contacts-page">
      {/* Hero Section */}
      <div className="glass-card hero-contact">
        <div className="hero-icon">
          <FiMessageCircle size={48} />
        </div>
        <h1 className="section-title">_Contact-me</h1>
        <p className="hero-subtitle">
          Je suis toujours ouvert aux nouvelles opportunités, collaborations et échanges.
          N'hésitez pas à me contacter !
        </p>
      </div>

      <div className="contacts-grid">
        {/* Contact Information Card */}
        <div className="glass-card info-card">
          <h2 className="card-title">
            <FiUser size={20} />
            Informations
          </h2>
          
          <div className="contact-list">
            {contactInfo.map((info, index) => (
              <div className="contact-item" key={index}>
                <div className="contact-icon">{info.icon}</div>
                <div className="contact-details">
                  <span className="contact-label">{info.title}</span>
                  <span className="contact-value">{info.value}</span>
                </div>
                {info.action && (
                  <a 
                    href={info.action} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="contact-action"
                  >
                    <FiArrowRight size={16} />
                  </a>
                )}
                {info.copyable && (
                  <button 
                    className="contact-copy" 
                    onClick={handleCopyEmail}
                    title="Copier l'email"
                  >
                    {copied ? <FiCheck size={16} /> : <FiCopy size={16} />}
                  </button>
                )}
              </div>
            ))}
          </div>

          <div className="availability">
            <div className="status-dot"></div>
            <span>Disponible pour des opportunités</span>
          </div>
        </div>

        {/* Contact Form Card */}
        <div className="glass-card form-card">
          <h2 className="card-title">
            <FiSend size={20} />
            Envoyer un message
          </h2>
          
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">
                <FiUser size={14} />
                Nom
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Votre nom"
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">
                <FiMail size={14} />
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="votre@email.com"
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">
                <FiMessageCircle size={14} />
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Votre message..."
                rows="5"
                required
              />
            </div>
            
            <button type="submit" className="submit-btn">
              <FiSend size={16} />
              Envoyer le message
            </button>
            
            {formStatus === 'success' && (
              <div className="form-success">
                <FiCheck size={16} />
                Message préparé ! Votre client mail va s'ouvrir.
              </div>
            )}
          </form>
        </div>
      </div>

      {/* Quote Section */}
      <div className="glass-card quote-card">
        <div className="quote-icon">"</div>
        <p className="quote-text">
          Sécuriser aujourd'hui pour garantir un numérique de confiance demain.
        </p>
        <p className="quote-author">— Andrii Nastych</p>
        <div className="quote-footer">
          <FiGlobe size={14} />
          <span>À très vite pour travailler ensemble !</span>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="contacts-decoration">
        <div className="decoration-line"></div>
        <div className="decoration-dots">
          <span></span><span></span><span></span>
        </div>
      </div>
    </div>
  );
};

export default ContactsPage;