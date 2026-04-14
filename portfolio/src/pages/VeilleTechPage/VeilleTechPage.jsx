import React, { useEffect } from 'react';
import { 
  FaShieldAlt, FaLock, FaNetworkWired, FaServer, FaDatabase,
  FaFire, FaVirus, FaKey, FaChartLine, FaUserSecret,
  FaExternalLinkAlt, FaArrowRight, FaRobot, FaEye,
  FaWifi, FaCloud, FaUserLock, FaClipboardList
} from 'react-icons/fa';
import { MdPhishing, MdSecurity, MdVpnKey } from 'react-icons/md';
import { SiCisco, SiWireshark } from 'react-icons/si';
import { GiCyberEye, GiPadlock } from 'react-icons/gi';
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

  const threats = [
    {
      icon: <FaFire className="threat-icon" />,
      title: "Attaques DDoS",
      description: "Saturation des infrastructures réseau pour rendre les services indisponibles.",
      color: "#ff4757",
      solution: "Protection anti-DDoS, rate limiting, CDN"
    },
    {
      icon: <FaVirus className="threat-icon" />,
      title: "Malwares & Ransomwares",
      description: "Logiciels malveillants qui infectent les postes et les serveurs.",
      color: "#ff6b35",
      solution: "Antivirus, EDR, sauvegardes régulières"
    },
    {
      icon: <MdPhishing className="threat-icon" />,
      title: "Hameçonnage",
      description: "Tentatives de vol d'identifiants via des emails frauduleux.",
      color: "#ffa502",
      solution: "Filtres anti-spam, sensibilisation, MFA"
    },
    {
      icon: <FaUserSecret className="threat-icon" />,
      title: "Menaces internes",
      description: "Risques provenant d'utilisateurs ou de comptes compromis.",
      color: "#e84118",
      solution: "Principe du moindre privilège, supervision"
    }
  ];

  const securityLayers = [
    {
      icon: <FaShieldAlt />,
      title: "Pare-feu nouvelle génération",
      description: "Filtrage avancé du trafic, inspection SSL, prévention d'intrusions.",
      tech: "Fortinet, Palo Alto, pfSense"
    },
    {
      icon: <MdVpnKey />,
      title: "VPN & Accès sécurisé",
      description: "Accès distant chiffré pour les télétravailleurs et sites distants.",
      tech: "IPsec, OpenVPN, WireGuard"
    },
    {
      icon: <GiCyberEye />,
      title: "SIEM & Supervision",
      description: "Centralisation des logs et détection d'anomalies en temps réel.",
      tech: "Wazuh, Splunk, ELK Stack"
    },
    {
      icon: <FaUserLock />,
      title: "Authentification forte",
      description: "MFA, SSO, gestion des identités et des accès.",
      tech: "Active Directory, LDAP, OAuth"
    },
    {
      icon: <SiWireshark />,
      title: "Analyse réseau",
      description: "Capture et analyse du trafic pour détecter les comportements suspects.",
      tech: "Wireshark, tcpdump, Zeek"
    },
    {
      icon: <FaDatabase />,
      title: "Sauvegardes & PRA",
      description: "Protection des données et continuité d'activité.",
      tech: "Backup, RAID, Site de secours"
    }
  ];

  const bestPractices = [
    {
      title: "Segmentation réseau",
      desc: "Isoler les différents services avec des VLANs et des ACLs",
      icon: <FaNetworkWired />
    },
    {
      title: "Principe du moindre privilège",
      desc: "Limiter les accès utilisateurs au strict nécessaire",
      icon: <FaLock />
    },
    {
      title: "Mise à jour régulière",
      desc: "Patcher les vulnérabilités dès que possible",
      icon: <FaCloud />
    },
    {
      title: "Journalisation centralisée",
      desc: "Centraliser et analyser les logs pour détecter les incidents",
      icon: <FaClipboardList />
    }
  ];

  const newsSources = [
    {
      name: "ANSSI",
      url: "https://www.ssi.gouv.fr",
      description: "Recommandations officielles de l'agence cyber française",
      icon: "🇫🇷"
    },
    {
      name: "CERT-FR",
      url: "https://www.cert.ssi.gouv.fr",
      description: "Alertes et bulletins de vigilance",
      icon: "⚠️"
    },
    {
      name: "The Hacker News",
      url: "https://thehackernews.com",
      description: "Actualités sur les cybermenaces",
      icon: "📰"
    },
    {
      name: "Bleeping Computer",
      url: "https://www.bleepingcomputer.com",
      description: "Actualités techniques et correctifs",
      icon: "💻"
    }
  ];

  return (
    <div className="veille-page">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content fade-in">
          <div className="hero-badge">
            <FaShieldAlt size={24} />
            <span>Veille Technologique BTS SIO SISR</span>
          </div>
          <h1 className="hero-title">
            <span className="hero-accent">Sécurisation des</span>
            <br />
            Réseaux d'Entreprise
          </h1>
          <p className="hero-subtitle">
            Protéger les infrastructures critiques contre les cybermenaces modernes.
            Découvrez les meilleures pratiques, solutions et actualités pour sécuriser votre réseau.
          </p>
          <div className="hero-stats">
            <div className="hero-stat">
              <span className="stat-number">70%</span>
              <span className="stat-label">des attaques ciblent le réseau</span>
            </div>
            <div className="hero-stat">
              <span className="stat-number">45%</span>
              <span className="stat-label">des entreprises ont subi un ransomware</span>
            </div>
            <div className="hero-stat">
              <span className="stat-number">200j</span>
              <span className="stat-label">temps moyen pour détecter une intrusion</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        {/* Introduction */}
        <div className="glass-card fade-in">
          <div className="intro-section">
            <div className="intro-icon">
              <MdSecurity size={48} />
            </div>
            <div className="intro-text">
              <h2 className="section-title">Pourquoi sécuriser son réseau ?</h2>
              <p>
                Le réseau d'entreprise est l'épine dorsale de l'infrastructure informatique. 
                Sans sécurité réseau adéquate, les données sensibles, les systèmes critiques 
                et la continuité des activités sont exposés à des risques majeurs.
              </p>
              <p>
                Avec la généralisation du télétravail, du cloud et de l'IoT, la surface d'attaque 
                n'a jamais été aussi large. Une stratégie de sécurité réseau efficace doit être 
                globale, proactive et en constante évolution.
              </p>
              <div className="intro-highlight">
                <FaShieldAlt />
                <span>"La sécurité réseau n'est pas un projet, c'est un processus continu."</span>
              </div>
            </div>
          </div>
        </div>

        {/* Menaces actuelles */}
        <div className="glass-card fade-in">
          <h2 className="section-title">
            <FaFire className="title-icon" />
            Menaces actuelles sur les réseaux d'entreprise
          </h2>
          <div className="threats-grid">
            {threats.map((threat, index) => (
              <div className="threat-card" key={index}>
                <div className="threat-icon-wrapper" style={{ backgroundColor: `${threat.color}20` }}>
                  {threat.icon}
                </div>
                <h3 className="threat-title">{threat.title}</h3>
                <p className="threat-description">{threat.description}</p>
                <div className="threat-solution">
                  <FaLock size={12} />
                  <span>{threat.solution}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stratégies de protection */}
        <div className="glass-card fade-in">
          <h2 className="section-title">
            <GiPadlock className="title-icon" />
            Stratégies de protection du réseau
          </h2>
          <div className="defense-grid">
            {securityLayers.map((layer, index) => (
              <div className="defense-card" key={index}>
                <div className="defense-icon">{layer.icon}</div>
                <h3 className="defense-title">{layer.title}</h3>
                <p className="defense-description">{layer.description}</p>
                <div className="defense-tech">
                  <span>{layer.tech}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bonnes pratiques */}
        <div className="glass-card fade-in">
          <h2 className="section-title">
            <FaChartLine className="title-icon" />
            Bonnes pratiques de sécurisation
          </h2>
          <div className="practices-grid">
            {bestPractices.map((practice, index) => (
              <div className="practice-card" key={index}>
                <div className="practice-icon">{practice.icon}</div>
                <div className="practice-content">
                  <h3>{practice.title}</h3>
                  <p>{practice.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Architecture Zero Trust */}
        <div className="glass-card highlight-card fade-in">
          <div className="zero-trust-section">
            <div className="zero-trust-icon">
              <SiCisco size={48} />
            </div>
            <div className="zero-trust-content">
              <h2>Architecture Zero Trust</h2>
              <p>
                Le modèle Zero Trust repose sur le principe "ne jamais faire confiance, toujours vérifier". 
                Chaque requête est authentifiée, autorisée et chiffrée avant d'être traitée, 
                quel que soit son origine (interne ou externe).
              </p>
              <div className="zero-trust-features">
                <span>✓ Vérification continue</span>
                <span>✓ Micro-segmentation</span>
                <span>✓ Accès au plus juste</span>
                <span>✓ Chiffrement systématique</span>
              </div>
            </div>
          </div>
        </div>

        {/* Sources de veille */}
        <div className="glass-card fade-in">
          <h2 className="section-title">
            <FaEye className="title-icon" />
            Sources de veille technologique
          </h2>
          <p className="veille-intro">
            Pour rester informé des dernières menaces et solutions de sécurité réseau,
            je consulte régulièrement ces sources :
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
            <h3>Ma méthodologie de veille :</h3>
            <div className="methods-grid">
              <div className="method-item">
                <FaRobot />
                <span>Alertes RSS personnalisées</span>
              </div>
              <div className="method-item">
                <FaNetworkWired />
                <span>Communautés techniques (Reddit, LinkedIn)</span>
              </div>
              <div className="method-item">
                <FaServer />
                <span>Labo de test personnel</span>
              </div>
              <div className="method-item">
                <FaArrowRight />
                <span>Revue quotidienne des CVE</span>
              </div>
            </div>
          </div>
        </div>

        {/* Conclusion */}
        <div className="glass-card conclusion-card fade-in">
          <div className="conclusion-content">
            <h2 className="section-title">L'avenir de la sécurité réseau</h2>
            <p>
              La cybersécurité réseau est un domaine en constante évolution. L'IA, l'automatisation 
              et le Zero Trust sont les grandes tendances qui façonnent l'avenir de la protection 
              des infrastructures. En tant que futur administrateur systèmes et réseaux, 
              je m'engage à rester à la pointe de ces technologies pour garantir la sécurité 
              des entreprises de demain.
            </p>
            <div className="conclusion-quote">
              <FaShieldAlt size={24} />
              <span>"La meilleure cyberdéfense est une défense proactive et continue."</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VeilleTechPage;