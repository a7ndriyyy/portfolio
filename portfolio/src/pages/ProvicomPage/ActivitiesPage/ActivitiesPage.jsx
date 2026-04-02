import React from 'react';
import { FiArrowLeft, FiDownload, FiEye } from 'react-icons/fi';
import './ActivitiesPage.css';

const ActivitiesPage = ({ setCurrentPage }) => {
  const activities = [
    {
      id: 1,
      title: "Installation Debian 12",
      description: "Installation et configuration de Debian 12 comme système d'exploitation serveur",
      pdfFile: "Installation_Debian.pdf"
    },
    {
      id: 2,
      title: "Installation GLPI",
      description: "Mise en place de GLPI pour la gestion des incidents et du parc informatique",
      pdfFile: "Installation_GLPI.pdf"
    },
    {
      id: 3,
      title: "Installation Serveur NAS",
      description: "Configuration d'un serveur NAS pour le stockage centralisé",
      pdfFile: "Installation_Nas.pdf"
    },
    {
      id: 4,
      title: "Active Directory Domain Services",
      description: "Installation et configuration d'un contrôleur de domaine Active Directory",
      pdfFile: "Active_Directory.pdf"
    },
    {
      id: 5,
      title: "Documentation Technique - GLPI",
      description: "Documentation complète pour l'installation et la configuration de GLPI",
      pdfFile: "Installation_GLPI.pdf"
    }
  ];

  return (
    <div className="activities-page">
      <div className="glass-card">
        <button className="back-link" onClick={() => setCurrentPage("Provicom")}>
          <FiArrowLeft /> Retour à Provicom
        </button>
        
        <h1 className="section-title">📄 Activités en entreprise</h1>
        <p className="activities-intro">
          Voici les 5 missions que j'ai réalisées chez Provicom dans le cadre de mon alternance.
          Cliquez sur chaque document pour visualiser ou télécharger la documentation technique.
        </p>
      </div>

      <div className="activities-grid-page">
        {activities.map((activity) => (
          <div className="activity-card glass-card" key={activity.id}>
            <div className="activity-number">0{activity.id}</div>
            <h2 className="activity-title">{activity.title}</h2>
            <p className="activity-description">{activity.description}</p>
            
            <div className="activity-actions">
              <a 
                href={`/documents/${activity.pdfFile}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="activity-btn view"
              >
                <FiEye /> Visualiser
              </a>
              <a 
                href={`/documents/${activity.pdfFile}`} 
                download
                className="activity-btn download"
              >
                <FiDownload /> Télécharger
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivitiesPage;