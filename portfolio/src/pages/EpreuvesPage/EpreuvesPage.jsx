import React from 'react';
import { FiExternalLink } from 'react-icons/fi';
import './EpreuvesPage.css';

const EpreuvesPage = () => {
  // Met ici l'URL de ton Google Sheet
  const sheetUrl = "https://docs.google.com/spreadsheets/d/1KsWwEqmZWtMXjHHOmFEoqW8ZJ4hvG_rl/edit?usp=sharing&ouid=101058459909286330758&rtpof=true&sd=true";
  
  // Extrait l'ID pour l'embed
  const sheetId = sheetUrl.split('/d/')[1]?.split('/')[0];

  return (
    <div className="epreuves-page">
      <div className="glass-card">
        <h1 className="section-title">_epreuves-bts-sio</h1>
        <div className="mission-header">
          <h3>Tableau de synthèse des réalisations professionnelles</h3>
          <p>Session 2024 - 2026 | Option SISR</p>
        </div>
        <p>
          Tableau de synthèse des compétences validées durant ma formation BTS SIO SISR.
        </p>
      </div>

      {/* Google Sheets Viewer */}
      <div className="glass-card pdf-viewer-container">
        <h3 className="subtitle">Tableau de synthèse</h3>
        <div className="pdf-actions">
          <a href={sheetUrl} target="_blank" rel="noopener noreferrer" className="pdf-btn view">
            <FiExternalLink size={16} />
            Ouvrir dans Google Sheets
          </a>
        </div>
        <div className="pdf-wrapper">
          <iframe
            src={`https://docs.google.com/spreadsheets/d/${sheetId}/preview`}
            title="Tableau de synthèse BTS SIO"
            className="pdf-iframe"
            frameBorder="0"
          />
        </div>
      </div>
    </div>
  );
};

export default EpreuvesPage;