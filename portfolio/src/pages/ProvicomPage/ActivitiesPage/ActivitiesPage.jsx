import React, { useState } from 'react';
import { 
  FiArrowLeft, FiDownload, FiEye, 
  FiChevronRight, FiGrid, FiList, FiFileText,
  FiCamera, FiAlertCircle, FiBell, FiKey, FiShield
} from 'react-icons/fi';
import './ActivitiesPage.css';

const ActivitiesPage = ({ setCurrentPage }) => {
  const [viewMode, setViewMode] = useState('grid');

  const activities = [
    {
      id: 1,
      title: "Installation d'une caméra IP Dahua",
      description: "Installation et configuration d'une caméra IP Dahua pour la vidéosurveillance d'un site professionnel.",
      pdfFile: "Activité1_Nastych_Provicom.pdf",
      date: "2024",
      type: "Vidéosurveillance",
      icon: <FiCamera size={32} />
    },
    {
      id: 2,
      title: "Pose d'un Bouton Anti-Agression",
      description: "Installation d'un bouton anti-agression pour déclenchement immédiat d'alarme en cas d'urgence.",
      pdfFile: "Activité2_Nastych_Provicom.pdf",
      date: "2024",
      type: "Sécurité",
      icon: <FiAlertCircle size={32} />
    },
    {
      id: 3,
      title: "Installation des système anti-intrusion chez APESDAME",
      description: "Installation des système anti-intrusion chez APESDAME.",
      pdfFile: "Activité3_Nastych_Provicom.pdf",
      date: "2024",
      type: "Alarme",
      icon: <FiBell size={32} />
    },
    {
      id: 4,
      title: "Migration vers une centrale Risco Lightsys",
      description: "Migration complète d'un système d'alarme vers une centrale Risco Lightsys.",
      pdfFile: "Activité5_Nastych_Provicom.pdf",
      date: "2024",
      type: "Migration",
      icon: <FiShield size={32} />
    }
  ];

  const handleBackClick = () => {
    if (setCurrentPage && typeof setCurrentPage === 'function') {
      setCurrentPage("Provicom");
    }
  };

  return (
    <div className="activities-page">
      {/* Header */}
      <div className="glass-card header-card">
        <button className="back-btn" onClick={handleBackClick}>
          <FiArrowLeft size={18} />
          Retour à Provicom
        </button>
        
        <h1 className="section-title">_activites-entreprise</h1>
        <p className="activities-description">
          Découvrez l'ensemble des activités techniques que j'ai réalisées chez Provicom dans le cadre de mon alternance.
          Ces missions concernent l'installation et la maintenance de systèmes de sécurité.
        </p>
        
        {/* View Toggle */}
        <div className="view-toggle">
          <button 
            className={`view-btn ${viewMode === 'grid' ? 'active' : ''}`}
            onClick={() => setViewMode('grid')}
          >
            <FiGrid size={16} />
            Grille
          </button>
          <button 
            className={`view-btn ${viewMode === 'list' ? 'active' : ''}`}
            onClick={() => setViewMode('list')}
          >
            <FiList size={16} />
            Liste
          </button>
        </div>
      </div>

      {/* Activities Stats */}
      <div className="stats-row">
        <div className="stat-box">
          <span className="stat-number-act">5</span>
          <span className="stat-label-act">Activités réalisées</span>
        </div>
        <div className="stat-box">
          <span className="stat-number-act">2024-2025</span>
          <span className="stat-label-act">Période</span>
        </div>
        <div className="stat-box">
          <span className="stat-number-act">100%</span>
          <span className="stat-label-act">Documenté</span>
        </div>
      </div>

      {/* Activities Grid/List */}
      <div className={`activities-container ${viewMode}`}>
        {activities.map((activity) => (
          <div className={`activity-card glass-card ${viewMode}`} key={activity.id}>
            <div className="activity-number">0{activity.id}</div>
            
            <div className="activity-icon-wrapper">
              {activity.icon}
            </div>
            
            <div className="activity-info">
              <h3 className="activity-title-act">{activity.title}</h3>
              <p className="activity-description-act">{activity.description}</p>
              <div className="activity-meta">
                <span className="activity-type">{activity.type}</span>
                <span className="activity-date">{activity.date}</span>
              </div>
            </div>
            
            <div className="activity-actions-act">
              <a 
                href={`/documents/${activity.pdfFile}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="act-btn view"
              >
                <FiEye size={16} />
                Visualiser
              </a>
              <a 
                href={`/documents/${activity.pdfFile}`} 
                download
                className="act-btn download"
              >
                <FiDownload size={16} />
                Télécharger
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Summary Section */}
      <div className="glass-card summary-card">
        <h2 className="section-title-secondary">_Resume-activites</h2>
        <div className="summary-content">
          <p>
            Ces 5 activités représentent l'ensemble des missions techniques réalisées chez Provicom.
            Elles couvrent les domaines suivants :
          </p>
          <ul>
            <li>Installation de caméras IP et vidéosurveillance</li>
            <li>Pose de boutons anti-agression et dispositifs d'urgence</li>
            <li>Installation des système anti-intrusion chez APESDAME</li>
            <li>Migration de systèmes d'alarme vers centrale Risco Lightsys</li>
          </ul>
          <p className="summary-note">
            Chaque document est disponible en PDF pour consultation et téléchargement.
          </p>
        </div>
      </div>

      {/* Back to Top Button */}
      <button 
        className="back-to-top"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <FiChevronRight size={20} />
      </button>
    </div>
  );
};

export default ActivitiesPage;