import React from 'react';
import './HomePage.css';

const HomePage = () => {
  return (
    <div>
      <div className="glass-card">
        <h1 className="section-title">⚡ Bonjour, je suis Andrii Nastych</h1>
        <p style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>
          Étudiant en BTS SIO SISR | Passionné Cybersécurité & Infrastructures
        </p>
        <p>
          Je suis étudiant au Lycée Professionnel Paul Bert (Maison-Alfort) en{' '}
          <strong>BTS SIO</strong> (Services Informatiques aux Organisations),
          spécialité <strong>SISR</strong> (Solutions d'Infrastructure, Systèmes et Réseaux).
          J'ai toujours eu une appétence pour l'informatique et une curiosité pour les nouvelles technologies.
        </p>
        <div className="hero-badge">
          <span className="badge">🎓 BTS SIO SISR (2024 - aujourd'hui)</span>
          <span className="badge">🏆 BAC PRO SN - Mention Assez Bien</span>
          <span className="badge">🔐 Cybersécurité</span>
          <span className="badge">🌐 Réseaux & Systèmes</span>
        </div>
      </div>

      <div className="glass-card">
        <h2 className="section-title">✨ Compétences clés</h2>
        <div className="skill-grid">
          <div className="skill-item">🛡️ Administration systèmes (Windows/Linux)</div>
          <div className="skill-item">🌐 Configuration réseaux (Cisco, VLAN, routage)</div>
          <div className="skill-item">🔒 Cybersécurité & bonnes pratiques ANSSI</div>
          <div className="skill-item">📡 Support technique & GLPI</div>
          <div className="skill-item">⚙️ Virtualisation (VMware, Proxmox)</div>
          <div className="skill-item">🐍 Scripting & automatisation</div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;