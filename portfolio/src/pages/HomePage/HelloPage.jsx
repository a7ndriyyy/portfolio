import React from 'react';
import { FiCpu, FiShield, FiGlobe, FiArrowDown } from 'react-icons/fi';
import './HelloPage.css';

const HelloPage = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about-section');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="hello-page">
      <div className="hero-content">
        <div className="terminal-glow"></div>
        
        <div className="hero-badge">
          <span className="badge-glitch">$ whoami</span>
        </div>
        
        <h1 className="hero-name">
          <span className="bracket">{'<'}</span>
          Andrii Nastych
          <span className="bracket">{'/>'}</span>
        </h1>
        
        <p className="hero-tagline">
          Passionné par l'infrastructure IT & la cybersécurité
        </p>
        
        <p className="hero-description">
          Étudiant en BTS SIO SISR au Lycée Paul Bert (Maison-Alfort), je développe mes compétences en
          <span className="highlight"> administration système</span>,
          <span className="highlight"> sécurité réseau</span> et
          <span className="highlight"> infrastructure informatique</span>.
        </p>
        
        <div className="hero-stats">
          <div className="stat-item">
            <FiCpu size={18} />
            <div>
              <span className="stat-value">2024-2026</span>
              <span className="stat-label">BTS SIO SISR</span>
            </div>
          </div>
          <div className="stat-item">
            <FiShield size={18} />
            <div>
              <span className="stat-value">92%</span>
              <span className="stat-label">ANSSI Certification</span>
            </div>
          </div>
          <div className="stat-item">
            <FiGlobe size={18} />
            <div>
              <span className="stat-value">2 ans</span>
              <span className="stat-label">Alternance</span>
            </div>
          </div>
        </div>
        
        <button className="cta-button" onClick={scrollToAbout}>
          <span>_explore</span>
          <FiArrowDown size={16} />
        </button>
      </div>
      
      <div className="scroll-indicator">
        <div className="mouse"></div>
        <p>scroll down</p>
      </div>
    </div>
  );
};

export default HelloPage;