import React from 'react';
import './InfraNetworkPage.css';

const InfraNetworkPage = () => {
  return (
    <div className="glass-card">
      <h1 className="section-title">🌍 Infrastructures Réseaux</h1>
      <h2 className="subtitle">Mission : Préparation d'un commutateur d'accès</h2>
      <p>
        Configuration et déploiement d'équipements réseau pour assurer la connectivité
        et la sécurité des infrastructures.
      </p>
      <div className="tech-stack">
        <span className="badge">Cisco Packet Tracer</span>
        <span className="badge">VLAN</span>
        <span className="badge">STP</span>
        <span className="badge">OSPF</span>
        <span className="badge">ACL</span>
        <span className="badge">802.1X</span>
      </div>
      <hr />
      <h3 className="subtitle">Compétences développées</h3>
      <ul>
        <li>Configuration de commutateurs Cisco</li>
        <li>Mise en place de la redondance réseau</li>
        <li>Sécurisation des accès au niveau switch</li>
      </ul>
    </div>
  );
};

export default InfraNetworkPage;