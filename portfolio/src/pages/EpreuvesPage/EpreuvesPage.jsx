import React from 'react';
import './EpreuvesPage.css';

const EpreuvesPage = () => {
  return (
    <div className="glass-card">
      <h1 className="section-title">⏱️ Épreuves BTS SIO</h1>
      
      <div className="epreuve-card">
        <h2 className="subtitle">📄 Épreuve E5</h2>
        <p><strong>Analyse et conception de solutions informatiques</strong></p>
        <p>Support et mise à disposition de services informatiques. Évaluation des compétences en analyse, conception et mise en œuvre de solutions techniques.</p>
      </div>

      <div className="epreuve-card">
        <h2 className="subtitle">📄 Épreuve E6</h2>
        <p><strong>Parcours de professionnalisation</strong></p>
        <p>Présentation du projet réalisé en alternance chez Provicom. Démonstration des compétences acquises en milieu professionnel.</p>
      </div>

      <div className="epreuve-card">
        <h2 className="subtitle">🎯 Bloc de compétences</h2>
        <ul>
          <li>Gestion du patrimoine informatique</li>
          <li>Mise à disposition de services informatiques</li>
          <li>Cybersécurit é des services</li>
          <li>Support et veille technologique</li>
        </ul>
      </div>
    </div>
  );
};

export default EpreuvesPage;