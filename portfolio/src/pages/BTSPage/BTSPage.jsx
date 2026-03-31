import React from 'react';
import './BTSPage.css';

const BTSPage = () => {
  return (
    <div>
      <div className="glass-card">
        <h1 className="section-title">🎓 BTS SIO – Services Informatiques aux Organisations</h1>
        <p>
          Le Brevet de Technicien Supérieur en Services Informatiques aux Organisations est une formation
          en deux ans qui prépare aux métiers de l'informatique. Il vise à former des techniciens capables
          de répondre aux besoins des entreprises en matière de développement, d'administration des réseaux
          et de cybersécurité.
        </p>
      </div>

      <div className="glass-card">
        <h2 className="section-title">Les deux spécialités</h2>
        <div className="grid-2col">
          <div className="option-card">
            <div className="option-title">🖧 Option SISR</div>
            <p><strong>Solutions d'Infrastructure, Systèmes et Réseaux</strong></p>
            <p style={{ marginTop: '0.5rem' }}>
              Administration des réseaux, gestion des infrastructures, cybersécurité,
              support technique et maintenance.
            </p>
            <ul className="debouches-list">
              <li>✓ Administrateur système et réseau</li>
              <li>✓ Technicien support</li>
              <li>✓ Ingénieur en cybersécurité</li>
              <li>✓ Consultant en infrastructure IT</li>
            </ul>
          </div>

          <div className="option-card">
            <div className="option-title">💻 Option SLAM</div>
            <p><strong>Solutions Logicielles et Applications Métier</strong></p>
            <p style={{ marginTop: '0.5rem' }}>
              Développement d'applications, gestion de bases de données,
              analyse des besoins et solutions logicielles.
            </p>
            <ul className="debouches-list">
              <li>✓ Développeur web/mobile</li>
              <li>✓ Analyste programmeur</li>
              <li>✓ Chef de projet informatique</li>
              <li>✓ Ingénieur en développement logiciel</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BTSPage;