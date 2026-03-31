import React from 'react';
import './InfraSystemPage.css';

const InfraSystemPage = () => {
  return (
    <div className="glass-card">
      <h1 className="section-title">⚙️ Infrastructures Systèmes</h1>
      <h2 className="subtitle">Mise en place d'un serveur Helpdesk et Gestion des Configurations</h2>
      <p>
        Installation et configuration d'une solution de ticketing (GLPI) et d'inventaire
        pour la gestion du parc informatique.
      </p>
      <hr />
      <h3 className="subtitle">Technologies utilisées</h3>
      <div className="tech-stack">
        <span className="badge">GLPI</span>
        <span className="badge">OCS Inventory</span>
        <span className="badge">Debian/Ubuntu</span>
        <span className="badge">Apache2</span>
        <span className="badge">MySQL/MariaDB</span>
        <span className="badge">PHP</span>
      </div>
      <hr />
      <h3 className="subtitle">Résultats</h3>
      <ul>
        <li>Centralisation des demandes d'assistance</li>
        <li>Suivi des incidents et des changements</li>
        <li>Inventaire automatisé du parc informatique</li>
      </ul>
    </div>
  );
};

export default InfraSystemPage;