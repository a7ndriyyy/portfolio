import React from 'react';
import { FiFileText, FiDownload, FiEye } from 'react-icons/fi';
import './EpreuvesPage.css';

const EpreuvesPage = () => {
  return (
    <div className="epreuves-page">
      {/* Epreuve E4 - Tableau de synthèse */}
      <div className="glass-card">
        <h1 className="section-title">Épreuve E4 - Tableau de synthèse</h1>
        <p className="epreuve-description">
          Tableau de synthèse des compétences acquises durant ma formation BTS SIO,
          présentant les différentes réalisations professionnelles et leur contexte.
        </p>
        
        <div className="pdf-actions">
          <a 
            href="" 
            target="_blank" 
            rel="noopener noreferrer"
            className="pdf-btn view"
          >
            <FiEye size={16} />
            Visualiser le tableau
          </a>
          <a 
            href="" 
            download
            className="pdf-btn download"
          >
            <FiDownload size={16} />
            Télécharger le PDF
          </a>
        </div>
        
        {/* PDF Viewer */}
        <div className="pdf-viewer-container-epreuves">
          <iframe
            src="/documents/Tableau_Synthese_E4.pdf"
            title="Tableau de synthèse E4 - Nastych Andrii"
            className="pdf-iframe"
            frameBorder="0"
          />
        </div>
      </div>
    </div>
  );
};

export default EpreuvesPage;