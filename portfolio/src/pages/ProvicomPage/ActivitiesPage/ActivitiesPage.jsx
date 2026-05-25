import React, { useState } from 'react';
import { 
  FiArrowLeft, FiDownload, FiEye, 
  FiChevronRight, FiGrid, FiList,
  FiCamera, FiShield, FiZap, FiBell
} from 'react-icons/fi';
import './ActivitiesPage.css';

const ActivitiesPage = ({ setCurrentPage }) => {
  const [viewMode, setViewMode] = useState('grid');

  const activities = [
    {
      id: 1,
      title: "Installation vidéosurveillance chez Givenchy",
      description: "Installation et configuration d'un système de vidéosurveillance complète pour le site Givenchy.",
      pdfFile: "Activité1_Nastych.pdf",
      date: "2025",
      type: "Vidéosurveillance",
      icon: <FiCamera size={32} />,
      client: "Givenchy"
    },
    {
      id: 2,
      title: "Installation des systèmes anti-intrusion chez APESDAMM",
      description: "Installation complète d'un système anti-intrusion pour la société APESDAMM.",
      pdfFile: "Activité2_Nastych.pdf",
      date: "2025",
      type: "Anti-intrusion",
      icon: <FiShield size={32} />,
      client: "APESDAMM"
    },
    {
      id: 3,
      title: "Migration vers une centrale RISCO LightSYS Plus",
      description: "Migration complète du système d'alarme vers une centrale RISCO LightSYS Plus pour Comptoir Richard.",
      pdfFile: "Activité3_Nastych.pdf",
      date: "2026",
      type: "Migration",
      icon: <FiZap size={32} />,
      client: "Comptoir Richard"
    },
    {
      id: 4,
      title: "Installation d'un système d'alarme ALCEA",
      description: "Installation d'un système d'alarme ALCEA pour la gare de Fontenay-le-Fleury.",
      pdfFile: "Activité4_Nastych.pdf",
      date: "2024",
      type: "Alarme",
      icon: <FiBell size={32} />,
      client: "Gare Fontenay-le-Fleury"
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
          Ces missions concernent l'installation et la maintenance de systèmes de sécurité pour divers clients.
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
          <span className="stat-number-act">4</span>
          <span className="stat-label-act">Activités réalisées</span>
        </div>
        <div className="stat-box">
          <span className="stat-number-act">2024-2026</span>
          <span className="stat-label-act">Période</span>
        </div>
        <div className="stat-box">
          <span className="stat-number-act">4</span>
          <span className="stat-label-act">Clients différents</span>
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
              <p className="activity-client">
                <span className="client-label">Client :</span> {activity.client}
              </p>
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

      {/* Clients Section */}
      <div className="glass-card clients-card">
        <h2 className="section-title-secondary">_clients</h2>
        <div className="clients-grid-act">
          <div className="client-item-act">
            <div className="client-icon">👔</div>
            <div className="client-info">
              <h3>Givenchy</h3>
              <p>Installation vidéosurveillance</p>
            </div>
          </div>
          <div className="client-item-act">
            <div className="client-icon">🏢</div>
            <div className="client-info">
              <h3>APESDAMM</h3>
              <p>Système anti-intrusion</p>
            </div>
          </div>
          <div className="client-item-act">
            <div className="client-icon">🍷</div>
            <div className="client-info">
              <h3>Comptoir Richard</h3>
              <p>Migration RISCO LightSYS Plus</p>
            </div>
          </div>
          <div className="client-item-act">
            <div className="client-icon">🚉</div>
            <div className="client-info">
              <h3>Gare Fontenay-le-Fleury</h3>
              <p>Installation alarme ALCEA</p>
            </div>
          </div>
        </div>
      </div>

      {/* Summary Section */}
      <div className="glass-card summary-card">
        <h2 className="section-title-secondary">_resume-activites</h2>
        <div className="summary-content">
          <p>
            Ces 4 activités représentent l'ensemble des missions techniques réalisées chez Provicom.
            Elles couvrent les domaines suivants :
          </p>
          <ul>
            <li>Installation de vidéosurveillance (Givenchy)</li>
            <li>Installation de systèmes anti-intrusion (APESDAMM)</li>
            <li>Migration vers centrale RISCO LightSYS Plus (Comptoir Richard)</li>
            <li>Installation système d'alarme ALCEA (Gare Fontenay-le-Fleury)</li>
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