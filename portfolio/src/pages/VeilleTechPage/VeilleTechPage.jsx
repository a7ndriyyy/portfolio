import React, { useEffect } from 'react';
import { 
  FaShieldAlt, FaLock, FaBug, FaNetworkWired, FaSkull,
  FaFire, FaVirus, FaKey, FaChartLine,
  FaExternalLinkAlt, FaArrowRight, FaUserSecret, FaRobot,
  FaEye, FaShieldVirus
} from 'react-icons/fa';
import {  MdPhishing } from 'react-icons/md';
import { SiWireshark, SiCisco } from 'react-icons/si';
import { GiCyberEye } from 'react-icons/gi';
import './VeilleTechPage.css';

const VeilleTechPage = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const attackTypes = [
    {
      icon: <FaFire className="attack-icon" />,
      title: "Attaques DDoS",
      description: "Inondation des réseaux de trafic pour submerger les systèmes et perturber les infrastructures critiques.",
      color: "#ff4757"
    },
    {
      icon: <FaVirus className="attack-icon" />,
      title: "Malwares",
      description: "Logiciels malveillants conçus pour infiltrer et endommager les systèmes informatiques sans consentement.",
      color: "#ff6b35"
    },
    {
      icon: <FaSkull className="attack-icon" />,
      title: "Ransomwares",
      description: "Chiffrement des données et demande de rançon pour le déchiffrement, paralysant les services essentiels.",
      color: "#e84118"
    },
    {
      icon: <MdPhishing className="attack-icon" />,
      title: "Hameçonnage",
      description: "Messages trompeurs incitant les utilisateurs à révéler des informations sensibles.",
      color: "#ffa502"
    }
  ];

  const defenseLayers = [
    {
      icon: <FaShieldVirus />,
      title: "Pare-feu",
      description: "Systèmes de sécurité réseau surveillant le trafic entrant/sortant selon des règles de sécurité."
    },
    {
      icon: <SiWireshark />,
      title: "IDS/IPS",
      description: "Systèmes de détection/prévention d'intrusion qui identifient et bloquent les activités malveillantes."
    },
    {
      icon: <FaKey />,
      title: "Chiffrement",
      description: "Protection de la confidentialité des données en convertissant les informations en code illisible."
    },
    {
      icon: <GiCyberEye />,
      title: "Systèmes de Monitoring",
      description: "Surveillance continue du trafic réseau et du comportement des systèmes pour détecter les anomalies."
    }
  ];

  const newsSources = [
    {
      name: "Bleeping Computer",
      url: "https://www.bleepingcomputer.com",
      description: "Actualités cybersécurité et mises à jour techniques",
      icon: "💻"
    },
    {
      name: "Kaspersky Blog",
      url: "https://www.kaspersky.com/blog",
      description: "Analyses d'experts sur les menaces et la protection",
      icon: "🔒"
    },
    {
      name: "Cybersecurity Insiders",
      url: "https://www.cybersecurity-insiders.com",
      description: "Plateforme d'actualités sécurité animée par la communauté",
      icon: "👥"
    },
    {
      name: "The Hacker News",
      url: "https://thehackernews.com",
      description: "Actualités sur les cybermenaces et la sécurité",
      icon: "📰"
    }
  ];

  return (
    <div className="veille-page">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content fade-in">
          <h1 className="hero-title">
            <span className="hero-accent">Le Rôle de la</span>
            <br />
            Cybersécurité dans les Conflits Modernes
          </h1>
          <p className="hero-subtitle">
            À l'ère du numérique, les guerres ne se livrent plus uniquement sur les champs de bataille physiques. 
            Le cyberespace est devenu la nouvelle frontière où les nations s'affrontent, les infrastructures sont ciblées 
            et l'information est utilisée comme une arme.
          </p>
          <div className="hero-stats">
            <div className="hero-stat">
              <span className="stat-number">5,4 Mds+</span>
              <span className="stat-label">Attaques informatiques par jour</span>
            </div>
            <div className="hero-stat">
              <span className="stat-number">10 500 Mds $</span>
              <span className="stat-label">Coût annuel de la cybercriminalité d'ici 2025</span>
            </div>
          </div>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="container">
        <div className="glass-card fade-in">
          <div className="intro-section">
            <div className="intro-icon">
              <FaShieldAlt size={48} />
            </div>
            <div className="intro-text">
              <h2 className="section-title">La Cybersécurité dans la Guerre Moderne</h2>
              <p>
                Les conflits modernes ont évolué au-delà des engagements militaires traditionnels. La cyber-guerre 
                est devenue une composante essentielle des stratégies de défense nationale, les nations développant 
                des capacités sophistiquées pour protéger les infrastructures critiques, mener des opérations d'espionnage 
                et lancer des attaques offensives.
              </p>
              <p>
                Le champ de bataille numérique est invisible mais dévastateur, capable de perturber les réseaux électriques, 
                les systèmes financiers et les réseaux de communication sans qu'un seul coup de feu ne soit tiré.
              </p>
              <p className="intro-highlight">
                "La prochaine guerre mondiale ne se déroulera pas sur terre, mer ou air, mais dans le cyberespace."
              </p>
            </div>
          </div>
        </div>

        {/* Types of Cyber Attacks */}
        <div className="glass-card fade-in">
          <h2 className="section-title">
            <FaBug className="title-icon" />
            Types d'Attaques Informatiques dans les Zones de Conflit
          </h2>
          <div className="attacks-grid">
            {attackTypes.map((attack, index) => (
              <div className="attack-card" key={index}>
                <div className="attack-icon-wrapper" style={{ backgroundColor: `${attack.color}20` }}>
                  {attack.icon}
                </div>
                <h3 className="attack-title">{attack.title}</h3>
                <p className="attack-description">{attack.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Real Example Section - Ukraine-Russia */}
        <div className="glass-card fade-in">
          <h2 className="section-title">
            <FaUserSecret className="title-icon" />
            Exemple Réel : Le Conflit Cyber entre l'Ukraine et la Russie
          </h2>
          <div className="example-container">
            <div className="example-text">
              <p>
                Le conflit entre la Russie et l'Ukraine a démontré le rôle critique de la cyber-guerre dans 
                les opérations militaires modernes. Depuis 2014, l'Ukraine a été un terrain d'essai pour des 
                attaques informatiques sophistiquées, notamment :
              </p>
              <ul className="example-list">
                <li><strong>2015 et 2016</strong> - Attaques du réseau électrique privant des centaines de milliers de personnes d'électricité</li>
                <li><strong>2017</strong> - Ransomware NotPetya causant 10 milliards de dollars de dégâts mondiaux</li>
                <li><strong>2022</strong> - Attaques cyber pré-invasion ciblant les communications satellites et les systèmes financiers</li>
                <li><strong>En cours</strong> - Attaques DDoS continues contre les sites gouvernementaux et les infrastructures critiques</li>
              </ul>
              <p>
                Ces attaques montrent comment les opérations cyber sont devenues une composante essentielle de la guerre hybride, 
                utilisées pour perturber la vie civile, semer la confusion et affaiblir la résilience nationale avant et pendant 
                les actions militaires conventionnelles.
              </p>
            </div>
            <div className="example-image">
              <img src="/images/cyber-warfare.webp" alt="Cyber Warfare Concept" />
              <div className="image-caption">Le champ de bataille numérique dans les conflits modernes</div>
            </div>
          </div>
        </div>

        {/* Defense & Protection */}
        <div className="glass-card fade-in">
          <h2 className="section-title">
            <FaLock className="title-icon" />
            Stratégies de Défense et Protection
          </h2>
          <div className="defense-grid">
            {defenseLayers.map((defense, index) => (
              <div className="defense-card" key={index}>
                <div className="defense-icon">{defense.icon}</div>
                <h3 className="defense-title">{defense.title}</h3>
                <p className="defense-description">{defense.description}</p>
              </div>
            ))}
          </div>
          <div className="defense-badge">
            <SiCisco size={24} />
            <span>Architecture Zero Trust | Défense en Profondeur | Surveillance Continue</span>
          </div>
        </div>

        {/* Technology Watch Section */}
        <div className="glass-card fade-in">
          <h2 className="section-title">
            <FaEye className="title-icon" />
            Veille Technologique
          </h2>
          <p className="veille-intro">
            Pour rester informé des menaces cyber évolutives et des stratégies de défense, je maintiens une 
            veille technologique active en utilisant les sources fiables suivantes :
          </p>
          <div className="sources-grid">
            {newsSources.map((source, index) => (
              <a 
                href={source.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="source-card"
                key={index}
              >
                <div className="source-icon">{source.icon}</div>
                <div className="source-info">
                  <h3 className="source-title">{source.name}</h3>
                  <p className="source-description">{source.description}</p>
                </div>
                <FaExternalLinkAlt className="source-link-icon" />
              </a>
            ))}
          </div>
          <div className="veille-methods">
            <h3>Mes méthodes de veille :</h3>
            <div className="methods-grid">
              <div className="method-item">
                <FaChartLine />
                <span>Aggregation Flux RSS</span>
              </div>
              <div className="method-item">
                <FaRobot />
                <span>Alertes Automatisées</span>
              </div>
              <div className="method-item">
                <FaNetworkWired />
                <span>Forums Communautaires & CTF</span>
              </div>
              <div className="method-item">
                <FaArrowRight />
                <span>Revues Quotidiennes</span>
              </div>
            </div>
          </div>
        </div>

        {/* Conclusion */}
        <div className="glass-card conclusion-card fade-in">
          <div className="conclusion-content">
            <h2 className="section-title">L'Avenir de la Cybersécurité</h2>
            <p>
              À mesure que la technologie progresse, les menaces évoluent également. L'intelligence artificielle, 
              l'informatique quantique et l'expansion de l'IoT créeront à la fois de nouvelles vulnérabilités 
              et de nouvelles capacités de défense. Les professionnels de la cybersécurité de demain doivent 
              être préparés à un paysage en constante évolution où l'adaptabilité, l'apprentissage continu et 
              les stratégies de défense proactive sont primordiaux.
            </p>
            <div className="conclusion-quote">
              <FaSkull size={24} />
              <span>"La sécurité n'est pas un produit, mais un processus." — Bruce Schneier</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VeilleTechPage;