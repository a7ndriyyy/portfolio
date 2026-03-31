import React from 'react';

const ActivitiesPage = () => {
  return (
    <div className="glass-card">
      <h2 className="section-title">💻 Service Informatique & Apprentissage</h2>
      
      <h3 className="subtitle">📌 Missions du service IT</h3>
      <ul className="mission-list">
        <li>✔ Installation et maintenance des systèmes de surveillance et de sécurité</li>
        <li>✔ Développement et intégration de logiciels internes</li>
        <li>✔ Gestion des réseaux et sécurisation des infrastructures</li>
        <li>✔ Support technique aux employés et clients</li>
        <li>✔ Veille technologique pour innover</li>
      </ul>

      <h3 className="subtitle">👨‍🏫 Maître d'apprentissage</h3>
      <p>Tuteur expérimenté chargé de former et guider l'apprenti, superviser les missions et évaluer les compétences.</p>

      <h3 className="subtitle">🎯 Mes missions en tant qu'apprenti</h3>
      <ul className="mission-list">
        <li>✔ Assistance technique et support utilisateur</li>
        <li>✔ Maintenance et configuration des équipements</li>
        <li>✔ Développement de scripts pour automatisation</li>
        <li>✔ Participation aux réunions techniques</li>
      </ul>
    </div>
  );
};

export default ActivitiesPage;