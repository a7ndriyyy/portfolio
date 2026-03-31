import React from 'react';
import './LGiAPage.css';

const LGiAPage = () => {
  return (
    <div>
      <div className="glass-card">
        <h1 className="section-title">🌐 LG12A – Réseaux de laboratoires gouvernementaux</h1>
        <div className="mission-header">
          <h2>LE RÉSEAU DES LABORATOIRES GOUVERNEMENTAUX POUR L'INDUSTRIE AGRO-ALIMENTAIRE</h2>
        </div>
        <p>
          Projet de préparation d'un commutateur d'accès dans le cadre de la formation BTS SIO.
          Objectif : configurer et sécuriser l'infrastructure réseau pour répondre aux besoins
          des laboratoires gouvernementaux.
        </p>
      </div>

      <div className="glass-card">
        <h2 className="section-title">📋 Mission réalisée</h2>
        <ul className="mission-list">
          <li>✔ Analyse des besoins réseau</li>
          <li>✔ Configuration VLAN et segmentation</li>
          <li>✔ Sécurisation des accès (ACL, 802.1X)</li>
          <li>✔ Documentation technique complète</li>
        </ul>
      </div>
    </div>
  );
};

export default LGiAPage;