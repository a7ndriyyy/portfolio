import React from 'react';
import { 
  FiMapPin, FiBriefcase, FiUsers, FiTrendingUp, FiShield, 
  FiCpu, FiServer, FiTool, FiAward, FiArrowRight, FiCalendar,
   FiEye, FiLock, FiVideo, FiHardDrive, FiCloud,FiFileText
} from 'react-icons/fi';
import './ProvicomPage.css';

const ProvicomPage = ({ setCurrentPage }) => {
  return (
    <div className="provicom-page">
      {/* Hero Section */}
      <div className="glass-card hero-card">
        <h1 className="section-title">PROVICOM</h1>
        <img src="/images/LogoProvicom.png" alt="Logo Provicom" className="company-logo" />
        <p className="hero-subtitle">
          Entreprise spécialisée dans les systèmes de sécurité et la protection des biens et des personnes
        </p>
        <div className="company-badges">
          <span className="badge">Télésurveillance</span>
          <span className="badge">Contrôle d'accès</span>
          <span className="badge">Vidéosurveillance</span>
          <span className="badge">Alarmes anti-intrusion</span>
        </div>
      </div>


{/* Quick Access Floating Button - Add after Hero section */}
<div className="quick-access">
  <button 
    className="quick-access-btn"
    onClick={() => setCurrentPage("Activites")}
  >
    <FiFileText size={18} />
    Accéder aux activités
    <FiArrowRight size={16} />
  </button>
</div>


      {/* Section: Présentation de l'entreprise */}
      <div className="glass-card">
        <h2 className="section-title-secondary">_presentation</h2>
        
        <div className="info-grid">
          <div className="info-item">
            <FiBriefcase className="info-icon" />
            <div>
              <h3>Secteur d'activité</h3>
              <p>Provicom est une entreprise spécialisée dans les <strong>systèmes de sécurité</strong> et la <strong>protection des biens et des personnes</strong>. Elle propose des solutions de télésurveillance, contrôle d'accès, vidéosurveillance et alarmes anti-intrusion pour les particuliers et les professionnels.</p>
            </div>
          </div>
          
          <div className="info-item">
            <FiCalendar className="info-icon" />
            <div>
              <h3>Historique du secteur</h3>
              <p>Le secteur de la sécurité électronique s'est fortement développé avec l'évolution des technologies numériques. Autrefois dominé par des systèmes analogiques simples, il a intégré l'IA, l'IoT et la cybersécurité.</p>
            </div>
          </div>
          
          <div className="info-item">
            <FiAward className="info-icon" />
            <div>
              <h3>Statut juridique</h3>
              <p>Provicom est une <strong>Société à Responsabilité Limitée (SARL)</strong> enregistrée en France, permettant une gestion souple tout en protégeant le patrimoine personnel des associés.</p>
            </div>
          </div>
          
          <div className="info-item">
            <FiTrendingUp className="info-icon" />
            <div>
              <h3>Chiffre d'affaires</h3>
              <p>Croissance constante portée par la demande accrue en solutions de sécurité. Progression annuelle grâce à l'expansion du portefeuille clients et l'innovation des services.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Localisation avec image */}
      <div className="glass-card">
        <h2 className="section-title-secondary">_Localisation</h2>
        <div className="location-container">
          <div className="location-info">
            <FiMapPin className="location-icon" />
            <h3>51 avenue de l'Europe</h3>
            <p>77184 - Emerainville</p>
            <p className="location-desc">Situé en région Île-de-France, cette localisation stratégique permet de couvrir efficacement la région parisienne et ses environs. L'entreprise travaille avec des clients dans toute la France.</p>
          </div>
          <div className="location-image">
            <img src="/images/geo_provicom.png" alt="Localisation Provicom" className="map-image" />
          </div>
        </div>
      </div>

      {/* Zone d'intervention - Cartes */}
<div className="glass-card">
  <h2 className="section-title-secondary">_zone-intervention</h2>
  <p className="zone-description">
    Provicom intervient principalement en Île-de-France, avec des clients répartis dans toute la région.
    Voici la localisation des principaux sites clients.
  </p>
  
  {/* Carte de France avec focus Île-de-France */}
  <div className="map-container">
    <h3 className="map-title">📍 France - Zone d'intervention principale</h3>
   {/* Carte France avec image */}
<div className="france-map-img">
  <img src="/images/france.webp" alt="Carte France" className="map-img" />
  <div className="map-overlay">
    <div className="region-highlight">Île-de-France</div>
  </div>
</div>
  </div>

  {/* Carte Île-de-France détaillée avec clients */}
  <div className="map-container">
    <h3 className="map-title">📍 Île-de-France - Sites clients</h3>
    {/* Carte Île-de-France avec image */}
<div className="idf-map-img">
  <img src="/images/ile-de-france.webp" alt="Carte Île-de-France clients" className="map-img" />
</div>
    
    {/* Liste des clients */}
    <div className="clients-list">
      <h4>Clients principaux en Île-de-France</h4>
      <div className="clients-grid">
        <div className="client-item">
          <span className="client-dot"></span>
          <span>Paris (75) - Centre ville</span>
        </div>
        <div className="client-item">
          <span className="client-dot"></span>
          <span>Boulogne-Billancourt (92)</span>
        </div>
        <div className="client-item">
          <span className="client-dot"></span>
          <span>Saint-Denis (93)</span>
        </div>
        <div className="client-item">
          <span className="client-dot"></span>
          <span>Créteil (94)</span>
        </div>
        <div className="client-item">
          <span className="client-dot"></span>
          <span>Versailles (78)</span>
        </div>
        <div className="client-item">
          <span className="client-dot"></span>
          <span>Évry-Courcouronnes (91)</span>
        </div>
        <div className="client-item">
          <span className="client-dot"></span>
          <span>Meaux (77)</span>
        </div>
        <div className="client-item">
          <span className="client-dot"></span>
          <span>Melun (77)</span>
        </div>
        <div className="client-item">
          <span className="client-dot"></span>
          <span>Cergy (95)</span>
        </div>
        <div className="client-item">
          <span className="client-dot"></span>
          <span>Nanterre (92)</span>
        </div>
      </div>
    </div>
  </div>
</div>

      {/* Structure et Organigramme */}
      <div className="glass-card">
        <h2 className="section-title-secondary">_Structure</h2>
        
        <div className="structure-grid">
          <div className="structure-item">
            <h3><FiUsers /> Pôles d'activité</h3>
            <ul>
              <li><strong>Département technique</strong> : Installation et maintenance</li>
              <li><strong>Département commercial</strong> : Relations clients, vente</li>
              <li><strong>Département administratif</strong> : Gestion, finance</li>
            </ul>
          </div>
          
          <div className="structure-item">
            <h3><FiTool /> Processus de travail</h3>
            <ol>
              <li>Analyse des besoins du client</li>
              <li>Proposition de solutions adaptées</li>
              <li>Installation et configuration</li>
              <li>Suivi et maintenance</li>
            </ol>
          </div>
        </div>

        <div className="organigramme-container">
          <h3>Organigramme fonctionnel</h3>
          <img src="/images/organigramme.png" alt="Organigramme Provicom" className="organigramme-image" />
          <div className="organigramme-text">
            <p><strong>Personnels Cadres :</strong> 2</p>
            <p><strong>Personnels Employés :</strong> 3</p>
            <p><strong>Apprenti :</strong> 1</p>
          </div>
        </div>
      </div>

      {/* Secteur économique et concurrence */}
      <div className="glass-card">
        <h2 className="section-title-secondary">_Marche & concurrence</h2>
        
        <div className="market-factors">
          <h3>Facteurs de croissance du marché</h3>
          <div className="factors-grid">
            <div className="factor">📈 Augmentation des cambriolages</div>
            <div className="factor">⚖️ Réglementation plus stricte</div>
            <div className="factor">💡 Essor des nouvelles technologies</div>
            <div className="factor">🎯 Prise de conscience accrue</div>
          </div>
        </div>
        
        <div className="competitive-advantages">
          <h3>Atouts concurrentiels de Provicom</h3>
          <ul className="advantages-list">
            <li>Service client réactif et personnalisé</li>
            <li>Technologies de pointe</li>
            <li>Expertise reconnue dans le domaine</li>
            <li>Forte présence locale avec couverture nationale</li>
            <li>Proximité avec les clients et approche sur-mesure</li>
          </ul>
        </div>
      </div>

      {/* Activités et Projets */}
      <div className="glass-card">
        <h2 className="section-title-secondary">_Activites</h2>
        <div className="activities-grid">
          <div className="activity-item">
            <FiShield size={24} />
            <span>Détection vol</span>
          </div>
          <div className="activity-item">
            <FiEye size={24} />
            <span>Télésurveillance</span>
          </div>
          <div className="activity-item">
            <FiVideo size={24} />
            <span>Surveillance vidéo</span>
          </div>
          <div className="activity-item">
            <FiLock size={24} />
            <span>Contrôle d'accès</span>
          </div>
        </div>
        <div className="activities-image">
          <img src="/images/activites.png" alt="Activités Provicom" className="activities-img" />
        </div>
      </div>

      {/* Section: Cadre de l'apprentissage */}
      <div className="glass-card">
        <h2 className="section-title-secondary">_Cadre d'apprentissage</h2>
        
        <div className="apprentissage-section">
          <h3>Structure du service informatique</h3>
          <div className="service-grid">
            <div className="service-card">
              <FiServer size={20} />
              <strong>Support informatique</strong>
              <p>Gestion des incidents, assistance utilisateurs, maintenance</p>
            </div>
            <div className="service-card">
              <FiCloud size={20} />
              <strong>Gestion d'infrastructure</strong>
              <p>Administration réseaux, cybersécurité, gestion serveurs</p>
            </div>
            <div className="service-card">
              <FiCpu size={20} />
              <strong>Développement logiciel</strong>
              <p>Création/maintenance logiciels, automatisation</p>
            </div>
          </div>
        </div>

        <div className="organisation-service">
          <h3>Organisation du service informatique</h3>
          <div className="org-tree">
            <div className="tree-node root">Chef de service informatique</div>
            <div className="tree-children">
              <div className="tree-node">🖥️ Équipe matériel<br/><span>Techniciens & administrateurs</span></div>
              <div className="tree-node">💻 Équipe logiciels<br/><span>Développeurs & ingénieurs</span></div>
            </div>
          </div>
        </div>

        <div className="missions-service">
          <h3>Missions du service informatique</h3>
          <ul className="missions-list">
            <li>Installation et maintenance des systèmes de surveillance</li>
            <li>Développement et intégration de logiciels internes</li>
            <li>Gestion des réseaux et sécurisation des infrastructures</li>
            <li>Support technique aux employés et clients</li>
            <li>Veille technologique</li>
          </ul>
        </div>

        <div className="maitre-apprentissage">
          <h3>Maître d'apprentissage</h3>
          <p><strong>Rôle :</strong> Tuteur expérimenté chargé d'accompagner l'apprenti</p>
          <ul>
            <li>Former et guider sur les technologies</li>
            <li>Superviser les missions confiées</li>
            <li>Faciliter l'intégration au sein de l'équipe</li>
            <li>Évaluer les compétences</li>
          </ul>
        </div>

        <div className="apprentice-place">
          <h3>Ma place au sein du service</h3>
          <p>L'apprenti joue un rôle <strong>actif</strong> avec des missions concrètes :</p>
          <div className="tasks-grid">
            <span className="task-tag">Assistance technique</span>
            <span className="task-tag">Maintenance configuration</span>
            <span className="task-tag">Développement scripts</span>
            <span className="task-tag">Participation réunions</span>
          </div>
        </div>
      </div>

      {/* Section: Système d'Information */}
      <div className="glass-card">
        <h2 className="section-title-secondary">_Système d'Information</h2>
        
        <div className="si-section">
          <h3>Fonctions principales du SI</h3>
          <ul>
            <li>Collecter et stocker les données de l'entreprise</li>
            <li>Traiter et analyser les informations</li>
            <li>Diffuser l'information aux bonnes personnes</li>
            <li>Garantir la sécurité et l'intégrité des données</li>
          </ul>
        </div>

        <div className="si-resources">
          <h3>Ressources du Système d'Information</h3>
          <div className="resources-grid">
            <div className="resource">
              <FiHardDrive />
              <strong>Matérielles</strong>
              <p>Serveurs, postes de travail, équipements réseau, caméras, alarmes</p>
            </div>
            <div className="resource">
              <FiCloud />
              <strong>Logiciels</strong>
              <p>GLPI, logiciels de supervision, outils de ticketing, applications métier</p>
            </div>
            <div className="resource">
              <FiUsers />
              <strong>Humaines</strong>
              <p>Techniciens, administrateurs, développeurs, support utilisateur</p>
            </div>
          </div>
        </div>
      </div>

   {/* Link to Activities Page */}
{/* Link to Activities Page */}
<div className="glass-card activities-link-card">
  <div className="activities-link-content">
    <div className="activities-link-text">
      <h2>📄 Activités en entreprise</h2>
      <p>Consultez mes 5 missions réalisées chez Provicom :</p>
      <ul>
        <li>Installation d'une caméra IP Dahua</li>
        <li>Pose d'un Bouton Anti-Agression</li>
        <li>Installation et câblage d'une sirène</li>
        <li>Procédure d'installation – Clavier TSA ALCEA</li>
        <li>Migration vers une centrale Risco Lightsys</li>
      </ul>
    </div>
    <button 
      className="activities-link-btn"
      onClick={() => setCurrentPage("Activites")}
    >
      Voir mes activités <FiArrowRight />
    </button>
  </div>
</div>
    </div>
  );
};

export default ProvicomPage;