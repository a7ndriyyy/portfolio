import React from 'react';
import './ProjetsPage.css';

const ProjetsPage = () => {
  const projets = [
    {
      title: "📡 Serveur Helpdesk GLPI",
      desc: "Installation et configuration complète d'une solution de ticketing et d'inventaire pour la gestion du parc informatique.",
      tech: ["GLPI", "Debian", "Apache", "MySQL"]
    },
    {
      title: "🌐 Infrastructure Réseau LG12A",
      desc: "Configuration de commutateurs d'accès avec VLAN, ACL et sécurisation 802.1X.",
      tech: ["Cisco", "VLAN", "STP", "802.1X"]
    },
    {
      title: "🔐 Veille Cybersécurité",
      desc: "Mise en place d'un tableau de veille sur les menaces réseau et solutions de protection (Zero Trust, SIEM).",
      tech: ["Wazuh", "Suricata", "ELK Stack"]
    }
  ];

  return (
    <div>
      <div className="glass-card">
        <h1 className="section-title">🚀 Projets réalisés</h1>
        <div className="grid-2col">
          {projets.map((projet, idx) => (
            <div key={idx} className="projet-card">
              <h3 className="subtitle">{projet.title}</h3>
              <p>{projet.desc}</p>
              <div style={{ marginTop: '0.8rem' }}>
                {projet.tech.map((t, i) => (
                  <span key={i} className="badge">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjetsPage;