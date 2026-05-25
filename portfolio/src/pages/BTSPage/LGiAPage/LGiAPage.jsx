import React from 'react';
import './LGiAPage.css';

const LGiAPage = () => {
  return (
    <div>
      <div className="glass-card">
        <h1 className="section-title">🌐 LGI2A – Réseaux de laboratoires gouvernementaux</h1>
        <div className="mission-header">
          <h2>LE RÉSEAU DES LABORATOIRES GOUVERNEMENTAUX POUR L'INDUSTRIE AGRO-ALIMENTAIRE</h2>
        </div>
        <p>
          Objectif : configurer et sécuriser l'infrastructure réseau pour répondre aux besoins
          des laboratoires gouvernementaux.
        </p>
      </div>

       <div className="glass-card pdf-viewer-container">
        <h3 className="subtitle">Documentation technique - Contexte LGI2A</h3>
        <div className="pdf-wrapper">
          <iframe
            src="../../../../public/documents/Contexte_LGI2A_session2021_Rev10.pdf"
            title="Contexte LGI2A"
            className="pdf-iframe"
            frameBorder="0"
          />
        </div>
      </div>
    </div>
  );
};

export default LGiAPage;