import React from 'react';
import './UF4Page.css';

const UF4Page = () => {
  return (
    <div className="glass-card">
      <h1 className="section-title">🤝 UF4 : Engagement étudiant</h1>
      
      <div className="engagement-card">
        <p style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>
          "S'engager pour partager et grandir ensemble"
        </p>
      </div>

      <h2 className="subtitle">Mes engagements</h2>
      <ul>
        <li>🎤 Participation à des ateliers cybersécurité pour les lycéens</li>
        <li>👥 Membre actif de la communauté technologique</li>
        <li>📢 Suivi de conférences (Forum International de la Cybersécurité)</li>
        <li>💡 Contribution à des projets open-source</li>
        <li>🤝 Mentorat auprès des nouveaux étudiants BTS SIO</li>
      </ul>

      <hr />

      <h2 className="subtitle">Compétences développées</h2>
      <div>
        <span className="badge">Communication</span>
        <span className="badge">Travail d'équipe</span>
        <span className="badge">Sensibilisation</span>
        <span className="badge">Veille active</span>
        <span className="badge">Partage de connaissances</span>
      </div>
    </div>
  );
};

export default UF4Page;