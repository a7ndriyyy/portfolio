import React from 'react';
import './ProvicomPage.css';
import ActivitiesPage from './ActivitiesPage/ActivitiesPage';

const ProvicomPage = () => {
  return (
    <div>
      <div className="glass-card">
        <h1 className="section-title">🏢 PROVICOM – Entreprise d'accueil</h1>
        <p><strong>📍 Adresse :</strong> 51 Avenue de l'Europe, 77184 Emerainville</p>
        <p><strong>📞 Tél :</strong> 01 60 95 17 42</p>
        <p><strong>🔧 Secteur d'activité :</strong> Systèmes de sécurité, télésurveillance, contrôle d'accès, vidéosurveillance, alarmes anti-intrusion.</p>
        <hr />
        <p><strong>📜 Historique :</strong> Provicom a été fondée pour répondre aux besoins croissants de sécurité. L'entreprise s'est imposée comme un acteur clé grâce à une expertise technique pointue et une veille technologique constante.</p>
        <p><strong>⚖️ Statut juridique :</strong> SARL (Société à Responsabilité Limitée)</p>
      </div>

      <div className="glass-card">
        <h2 className="section-title">📊 Structure de l'entreprise</h2>
        <div className="org-chart">
          <p><strong>Organigramme fonctionnel :</strong></p>
          <p style={{ marginTop: '0.5rem' }}>📍 Direction PROVICOM</p>
          <p style={{ marginLeft: '1rem' }}>├─ Responsable Travaux & Maintenance – Samuel LECLERCQ</p>
          <p style={{ marginLeft: '2rem' }}>│  ├─ Sofiane KHEDIRI – Technicien</p>
          <p style={{ marginLeft: '2rem' }}>│  ├─ Thomas DUVAL – Technicien</p>
          <p style={{ marginLeft: '2rem' }}>│  └─ Andrii NASTYCH – Apprenti</p>
          <p style={{ marginLeft: '1rem' }}>└─ Responsable Commercial & Administratif – Christophe POUZET</p>
          <p style={{ marginLeft: '2rem' }}>   └─ Marine COQUEL – Assistante</p>
        </div>
        <div style={{ marginTop: '1rem' }}>
          <span className="stats-badge">👥 Cadres: 2</span>
          <span className="stats-badge">👨‍💻 Employés: 3</span>
          <span className="stats-badge">🎓 Apprenti: 1</span>
        </div>
      </div>

      <ActivitiesPage />
    </div>
  );
};

export default ProvicomPage;