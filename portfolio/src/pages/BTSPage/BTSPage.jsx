import React, { useState } from 'react';
import { FiServer, FiCpu, FiGlobe, FiShield, FiBookOpen} from 'react-icons/fi';
import './BTSPage.css';

// Tab Components
const PresentationTab = () => (
  <div>
    <div className="glass-card">
      <h2 className="section-title">Qu'est-ce que le BTS SIO ?</h2>
      <p>
        Le Brevet de Technicien Supérieur en Services Informatiques aux Organisations est une formation 
        en deux ans qui prépare aux métiers de l'informatique. Il vise à former des techniciens capables 
        de répondre aux besoins des entreprises en matière de développement, d'administration des réseaux 
        et de cybersécurité.
      </p>
      <p style={{ marginTop: '1rem' }}>
        Ce diplôme permet d'acquérir des compétences dans la gestion des systèmes d'information, 
        la programmation, la maintenance des infrastructures et la sécurité informatique.
      </p>
    </div>

    <div className="glass-card">
      <h2 className="section-title">Les deux spécialités</h2>
      <div className="grid-2col">
        <div className="option-card">
          <div className="option-title">
            <FiServer size={20} />
            Option SISR
          </div>
          <p><strong>Solutions d'Infrastructure, Systèmes et Réseaux</strong></p>
          <p style={{ marginTop: '0.5rem' }}>
            Administration des réseaux, gestion des infrastructures, cybersécurité,
            support technique et maintenance.
          </p>
          <ul className="debouches-list">
            <li>Administrateur système et réseau</li>
            <li>Technicien support</li>
            <li>Ingénieur en cybersécurité</li>
            <li>Consultant en infrastructure IT</li>
          </ul>
        </div>

        <div className="option-card">
          <div className="option-title">
            <FiCpu size={20} />
            Option SLAM
          </div>
          <p><strong>Solutions Logicielles et Applications Métier</strong></p>
          <p style={{ marginTop: '0.5rem' }}>
            Développement d'applications, gestion de bases de données,
            analyse des besoins et solutions logicielles.
          </p>
          <ul className="debouches-list">
            <li>Développeur web/mobile</li>
            <li>Analyste programmeur</li>
            <li>Chef de projet informatique</li>
            <li>Ingénieur en développement logiciel</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

const LGiATab = () => (
  <div>
    <div className="glass-card">
      <h2 className="section-title">
        <FiGlobe size={24} />
        LG12A – Réseaux de laboratoires gouvernementaux
      </h2>
      <div className="mission-header">
        <h3>LE RÉSEAU DES LABORATOIRES GOUVERNEMENTAUX POUR L'INDUSTRIE AGRO-ALIMENTAIRE</h3>
      </div>
      <p>
        Projet de préparation d'un commutateur d'accès dans le cadre de la formation BTS SIO.
        Objectif : configurer et sécuriser l'infrastructure réseau pour répondre aux besoins
        des laboratoires gouvernementaux.
      </p>
    </div>


     <div className="glass-card pdf-viewer-container">
        <h3 className="subtitle">Documentation technique - Contexte LG12A</h3>
        <div className="pdf-wrapper">
          <iframe
            src="/documents/Contexte_LGI2A_session2021_Rev10.pdf"
            title="Contexte LG12A"
            className="pdf-iframe"
            frameBorder="0"
          />
        </div>
      </div>
  </div>
  
);

const InfraReseauTab = () => {
  return (
    <div>
      {/* Mission 1 - Préparation d'un commutateur d'accès */}
      <div className="glass-card">
        <div className="mission-badge">MISSION 1</div>
        <h2 className="section-title">Préparation d'un commutateur d'accès</h2>
        <p>
          Configuration et préparation d'un commutateur d'accès Cisco Catalyst 2960G 
          pour l'infrastructure réseau des laboratoires gouvernementaux LG12A.
        </p>
        
        <h3 className="subtitle" style={{ marginTop: '1.5rem' }}>Objectifs</h3>
        <ul className="mission-list">
          <li>Étudier la documentation technique du constructeur (Cisco Catalyst 2960G)</li>
          <li>Accéder à l'interface de ligne de commande (CLI) via le port console</li>
          <li>Récupérer les mots de passe et accéder au menu bootloader</li>
          <li>Réinitialiser le commutateur aux paramètres d'usine</li>
          <li>Configurer les paramètres de base (nom, mots de passe, bannière)</li>
        </ul>
        
        <h3 className="subtitle" style={{ marginTop: '1.5rem' }}>Compétences développées</h3>
        <div className="skill-tags">
          <span className="badge">Cisco IOS</span>
          <span className="badge">CLI Console</span>
          <span className="badge">PuTTY</span>
          <span className="badge">Configuration de base</span>
          <span className="badge">Récupération mot de passe</span>
        </div>
        
        {/* PDF Viewer for Mission 1 */}
        <div className="pdf-viewer-container" style={{ marginTop: '1.5rem' }}>
          <h4 className="subtitle">Documentation - Mission 1</h4>
          <div className="pdf-wrapper">
            <iframe
              src="/documents/LGI2A_Mission1.pdf"
              title="Mission 1 - Préparation d'un commutateur d'accès"
              className="pdf-iframe"
              frameBorder="0"
            />
          </div>
        </div>
      </div>

      {/* Mission 2 - Plan d'adressage et réseau LG12A */}
      <div className="glass-card">
        <div className="mission-badge">MISSION 2</div>
        <h2 className="section-title">Plan d'adressage et réseau LG12A</h2>
        <p>
          Élaboration du plan d'adressage pour l'ensemble des laboratoires LG12A 
          en France et en Europe, avec mise en place d'une structure d'adressage hiérarchisée.
        </p>
        
        <h3 className="subtitle" style={{ marginTop: '1.5rem' }}>Objectifs</h3>
        <ul className="mission-list">
          <li>Déterminer le masque de sous-réseau personnalisé pour l'adresse 10.0.0.0</li>
          <li>Calculer le nombre de bits pour les divisions Europe (D), LNR (L), VLANs (V) et hôtes (H)</li>
          <li>Élaborer le plan d'adressage du siège LG12A à Paris</li>
          <li>Créer le plan d'adressage pour le LNR 30 à Genève</li>
          <li>Déterminer les adresses des VLANs (DSI, Communication, ToIP)</li>
          <li>Localiser les équipements du groupe grâce aux adresses IP</li>
        </ul>
        
        <h3 className="subtitle" style={{ marginTop: '1.5rem' }}>Compétences développées</h3>
        <div className="skill-tags">
          <span className="badge">Adressage IP</span>
          <span className="badge">CIDR / VLSM</span>
          <span className="badge">Plan d'adressage</span>
          <span className="badge">Sous-réseaux</span>
          <span className="badge">RFC 1918 / 1878</span>
        </div>
        
        {/* PDF Viewer for Mission 2 */}
        <div className="pdf-viewer-container" style={{ marginTop: '1.5rem' }}>
          <h4 className="subtitle">Documentation - Mission 2</h4>
          <div className="pdf-wrapper">
            <iframe
              src="/documents/LGI2A_Mission2.pdf"
              title="Mission 2 - Plan d'adressage et réseau LG12A"
              className="pdf-iframe"
              frameBorder="0"
            />
          </div>
        </div>
      </div>

      {/* Mission 3 - Mise en place des VLANs et routage inter-VLAN */}
      <div className="glass-card">
        <div className="mission-badge">MISSION 3</div>
        <h2 className="section-title">Mise en place des VLANs et routage inter-VLAN</h2>
        <p>
          Configuration des réseaux locaux virtuels (VLANs) associés aux différents services 
          et mise en œuvre du routage inter-VLAN avec un commutateur de niveau 3.
        </p>
        
        <h3 className="subtitle" style={{ marginTop: '1.5rem' }}>Objectifs</h3>
        <ul className="mission-list">
          <li>Préparer le matériel et étudier la documentation technique</li>
          <li>Configurer la base du commutateur (bannière MOTD, messages console)</li>
          <li>Configurer l'accès à distance via Telnet</li>
          <li>Créer et nommer les VLANs (resyst, ddsi, com, labor, server)</li>
          <li>Affecter les ports commutateurs aux VLANs</li>
          <li>Configurer un trunk 802.1Q entre commutateurs</li>
          <li>Configurer le routage inter-VLAN</li>
          <li>Mettre en place une gestion des configurations via serveur TFTP</li>
        </ul>
        
        <h3 className="subtitle" style={{ marginTop: '1.5rem' }}>Compétences développées</h3>
        <div className="skill-tags">
          <span className="badge">VLAN / 802.1Q</span>
          <span className="badge">Trunk</span>
          <span className="badge">Routage inter-VLAN</span>
          <span className="badge">Telnet / SSH</span>
          <span className="badge">TFTP</span>
          <span className="badge">Port Security</span>
        </div>
        
        {/* PDF Viewer for Mission 3 */}
        <div className="pdf-viewer-container" style={{ marginTop: '1.5rem' }}>
          <h4 className="subtitle">Documentation - Mission 3</h4>
          <div className="pdf-wrapper">
            <iframe
              src="/documents/LGI2A_Mission3.pdf"
              title="Mission 3 - VLANs et routage inter-VLAN"
              className="pdf-iframe"
              frameBorder="0"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const InfraSystemeTab = () => {
  const missions = [
    {
      id: 1,
      title: "Installation Debian 12",
      description: "Installation et configuration de Debian 12 comme système d'exploitation de base pour les serveurs d'infrastructure.",
      objectives: [
        "Télécharger l'ISO Debian 12 depuis le site officiel",
        "Créer une machine virtuelle dans Proxmox/VMware",
        "Configurer la mémoire (4Go) et le processeur (2 cores)",
        "Installer Debian avec la langue française",
        "Configurer le nom de machine et le nom de domaine",
        "Créer l'utilisateur et le mot de passe root",
        "Finaliser l'installation et redémarrer le système"
      ],
      technologies: ["Debian 12", "Proxmox", "VMware", "Linux", "CLI"],
      pdfFile: "Installation_Debian.pdf",
      steps: [
        { step: "1", desc: "Bootstrap / Mise à disposition de service informatique" },
        { step: "2", desc: "Mise en place et installation d'un serveur de helpdesk et de gestion des configurations" },
        { step: "3", desc: "Apprenti : Nastych Andrii" },
        { step: "4", desc: "Session : 2026" }
      ]
    },
    {
      id: 2,
      title: "Installation GLPI",
      description: "Installation de GLPI (Gestionnaire Libre de Parc Informatique) sur Debian 12 pour la gestion des tickets et de l'inventaire.",
      objectives: [
        "Mettre à jour les paquets Debian",
        "Installer le socle LAMP (Apache2, MariaDB, PHP 8.2)",
        "Installer les extensions PHP nécessaires",
        "Créer une base de données MariaDB pour GLPI",
        "Télécharger et décompresser GLPI dans /var/www/",
        "Configurer Apache2 avec un VirtualHost dédié",
        "Configurer PHP-FPM pour de meilleures performances",
        "Finaliser l'installation via l'interface web"
      ],
      technologies: ["GLPI", "Debian 12", "Apache2", "MariaDB", "PHP 8.2"],
      pdfFile: "Installation_GLPI.pdf",
      steps: [
        { step: "1", desc: "Installation du socle LAMP" },
        { step: "2", desc: "Configuration de la base de données" },
        { step: "3", desc: "Téléchargement et décompression de GLPI" },
        { step: "4", desc: "Configuration Apache2 et PHP-FPM" }
      ]
    },
    {
      id: 3,
      title: "Installation Serveur NAS",
      description: "Installation et configuration d'un serveur NAS (Network Attached Storage) pour le stockage centralisé des données.",
      objectives: [
        "Lancer l'installation du système",
        "Sélectionner la langue et la configuration régionale",
        "Configurer le nom de machine (NAS-LNR30)",
        "Définir le mot de passe root",
        "Configurer le partitionnement du disque",
        "Installer le GRUB sur le disque principal",
        "Redémarrer et se connecter au système"
      ],
      technologies: ["NAS", "Linux", "Stockage", "OpenMediaVault", "Samba"],
      pdfFile: "Installation_Nas.pdf",
      steps: [
        { step: "1", desc: "Installation du système de base" },
        { step: "2", desc: "Configuration réseau et nommage" },
        { step: "3", desc: "Partitionnement et stockage" },
        { step: "4", desc: "Finalisation et redémarrage" }
      ]
    },
    {
      id: 4,
      title: "Active Directory Domain Services",
      description: "Installation et configuration d'un contrôleur de domaine Active Directory sur Windows Server 2019/2022.",
      objectives: [
        "Ajouter le rôle Active Directory Domain Services",
        "Ajouter les fonctionnalités requises (Outils AD DS, GPO)",
        "Promouvoir le serveur en contrôleur de domaine",
        "Créer une nouvelle forêt avec un nom de domaine",
        "Configurer le niveau fonctionnel de la forêt",
        "Définir les chemins de stockage de l'AD",
        "Configurer le DNS (création automatique de la zone)",
        "Vérifier l'installation et redémarrer le serveur"
      ],
      technologies: ["Windows Server 2019", "Active Directory", "DNS", "GPO"],
      pdfFile: "Active_Directory.pdf",
      steps: [
        { step: "1", desc: "Installation du rôle AD DS" },
        { step: "2", desc: "Promotion en contrôleur de domaine" },
        { step: "3", desc: "Création de la forêt et du domaine" },
        { step: "4", desc: "Configuration DNS et finalisation" }
      ]
    }
  ];

  return (
    <div className="infra-systeme-grid">
      {missions.map((mission) => (
        <div className="mission-card-clean" key={mission.id}>
          <h2 className="mission-title-clean">{mission.title}</h2>
          <p className="mission-description-clean">{mission.description}</p>
          
          <hr className="mission-divider" />
          
          <h3 className="subtitle-clean">{/* Objectifs */}</h3>
          <ul className="objectives-list-clean">
            {mission.objectives.map((obj, idx) => (
              <li key={idx}>{obj}</li>
            ))}
          </ul>
          
          <h3 className="subtitle-clean">{/* Documentations technique */}</h3>
          
          {/* Steps Table */}
          <div className="steps-table">
            {mission.steps.map((step, idx) => (
              <div className="step-row" key={idx}>
                <span className="step-number">{step.step}</span>
                <span className="step-desc">{step.desc}</span>
              </div>
            ))}
          </div>
          
          {/* Technology Buttons */}
          <div className="tech-buttons">
            {mission.technologies.map((tech, idx) => (
              <span className="tech-btn" key={idx}>{tech}</span>
            ))}
          </div>
          
          {/* PDF Button */}
          <a 
            href={`/documents/${mission.pdfFile}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="pdf-btn-clean"
          >
            Voir la documentation →
          </a>
        </div>
      ))}
    </div>
  );
};

const BTSPage = () => {
  const [activeTab, setActiveTab] = useState('presentation');

  const tabs = [
    { id: 'presentation', label: 'Présentation', icon: FiBookOpen },
    { id: 'lgia', label: 'LG12A', icon: FiGlobe },
    { id: 'infra-reseau', label: 'Infra Réseau', icon: FiServer },
    { id: 'infra-systeme', label: 'Infra Système', icon: FiShield }
  ];

  const renderTabContent = () => {
    switch(activeTab) {
      case 'presentation':
        return <PresentationTab />;
      case 'lgia':
        return <LGiATab />;
      case 'infra-reseau':
        return <InfraReseauTab />;
      case 'infra-systeme':
        return <InfraSystemeTab />;
      default:
        return <PresentationTab />;
    }
  };

  return (
    <div className="bts-page">
      <div className="tabs-container">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            <tab.icon size={16} />
            <span>{tab.label}</span>
          </button>
        ))}
      </div>
      
      <div className="tab-content">
        {renderTabContent()}
      </div>
    </div>
  );
};

export default BTSPage;