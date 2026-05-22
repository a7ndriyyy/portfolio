import React, { useState, useEffect } from 'react';
import { 
  FiAward, FiDownload, FiEye, FiShield, FiLock, 
  FiUserCheck, FiGlobe, FiTrendingUp,
  FiCheckCircle} from 'react-icons/fi';
import { MdVerified } from 'react-icons/md';
import { SiTryhackme } from 'react-icons/si';
import './CertificationPage.css';

const CertificationPage = () => {
  const [activeModule, setActiveModule] = useState(null);

  const modules = [
    { name: "Panorama de la SSI", date: "15/01/2025", score: "80.0%", icon: <FiShield />, color: "#00f2ff" },
    { name: "Sécurité de l'authentification", date: "15/01/2025", score: "92.0%", icon: <FiLock />, color: "#0aff9d" },
    { name: "Sécurité sur Internet", date: "15/01/2025", score: "74.0%", icon: <FiGlobe />, color: "#ffd966" },
    { name: "Sécurité du poste de travail et nomadisme", date: "15/01/2025", score: "86.0%", icon: <FiUserCheck />, color: "#00f2ff" }
  ];

  const rgpdModules = [
    { 
      id: 1, 
      name: "Module 1: Les principes fondamentaux du RGPD", 
      description: "Comprendre les bases du règlement général sur la protection des données",
      status: "validé", 
      score: "91%", 
      icon: <FiShield />,
      pdfFile: "Certificat_RGPDmodule1.pdf"
    },
    { 
      id: 2, 
      name: "Module 2: Les droits des personnes concernées", 
      description: "Droit d'accès, de rectification, à l'effacement et à la portabilité",
      status: "validé", 
      score: "97%", 
      icon: <FiUserCheck />,
      pdfFile: "Certificat_RGPDmodule2.pdf"
    },
    { 
      id: 3, 
      name: "Module 3: Le responsable de traitement et le DPO", 
      description: "Rôles, responsabilités et désignation du Délégué à la Protection des Données",
      status: "validé", 
      score: "92%", 
      icon: <FiAward />,
      pdfFile: "Certificat_RGPDmodule3.pdf"
    },
    { 
      id: 4, 
      name: "Module 4: La sécurité des données et les violations", 
      description: "Mesures de sécurité, notification des violations et registre",
      status: "validé", 
      score: "87%", 
      icon: <FiLock />,
      pdfFile: "Certificat_RGPDmodule4.pdf"
    },
    { 
      id: 5, 
      name: "Module 5: Conformité et bonnes pratiques", 
      description: "Mise en conformité, analyse d'impact et documentation",
      status: "validé", 
      score: "89%", 
      icon: <FiCheckCircle />,
      pdfFile: "Certificat_RGPDmodule5.pdf"
    }
  ];

  const certificates = [
    {
      id: 1,
      title: "SecNum Académie - MOOC ANSSI",
      description: "Certification en cybersécurité délivrée par l'ANSSI après la réussite des 4 modules.",
      date: "Février 2025",
      pdfFile: "Attestation-SecNum.pdf",
      icon: <FiShield size={32} />
    },
    {
      id: 2,
      title: "FullStack Developer",
      description: "Certification de développement web FullStack, couvrant les technologies front-end et back-end.",
      date: "2022-2023",
      pdfFile: "certificate_Fullstack.pdf",
      icon: <FiTrendingUp size={32} />
    },
      {
      id: 3,
      title: "try Hack Me - Pentesting",
      description: "En cours de certification en pentesting sur la plateforme TryHackMe, avec plusieurs modules validés.",
      date: "2026-en cours",
      icon: <SiTryhackme size={32} />
    }

  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('card-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.rgpd-card, .certificate-card-animated').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="certification-page">
      {/* ANSSI Certification Section */}
      <div className="glass-card">
        <h1 className="section-title">Certifications Cybersécurité</h1>
        
        <div className="cert-header">
          <FiAward size={32} className="cert-icon" />
          <div>
            <h2 className="subtitle">MOOC ANSSI – SecNumacadémie</h2>
            <p>Formation complète sur les bases de la sécurité numérique, suivie avec succès.</p>
          </div>
        </div>
        
        <div className="modules-container">
          {modules.map((mod, idx) => (
            <div 
              className="module-card" 
              key={idx}
              onMouseEnter={() => setActiveModule(idx)}
              onMouseLeave={() => setActiveModule(null)}
              style={{ borderColor: activeModule === idx ? mod.color : 'var(--border-color)' }}
            >
              <div className="module-icon" style={{ color: mod.color }}>
                {mod.icon}
              </div>
              <div className="module-info">
                <h3 className="module-name">{mod.name}</h3>
                <p className="module-date">{mod.date}</p>
              </div>
              <div className="module-score" style={{ color: mod.color }}>
                {mod.score}
              </div>
            </div>
          ))}
        </div>
        
        <div className="cert-footer">
          <span className="cert-badge">
            <MdVerified size={14} />
            Attestation de suivi obtenue – Février 2025
          </span>
        </div>
      </div>

      {/* RGPD Modules Section - Cartes animées */}
      <div className="glass-card">
        <h2 className="section-title-secondary">
          <FiLock className="title-icon" />
          Certification RGPD - 5 modules
        </h2>
        <p className="rgpd-intro">
          Formation complète sur le Règlement Général sur la Protection des Données (RGPD).
          Survolez chaque carte pour voir la description et accéder au certificat.
        </p>
        
        <div className="rgpd-cards-container">
          {rgpdModules.map((module) => (
            <div className="rgpd-card" key={module.id}>
              <div className="card-front">
                <div className="module-number">{module.id.toString().padStart(2, '0')}</div>
                <div className="module-icon-rgpd">{module.icon}</div>
                <h3 className="module-title-rgpd">{module.name}</h3>
                <div className="module-status">
                  <FiCheckCircle size={14} />
                  <span>{module.status}</span>
                </div>
                <div className="module-score-rgpd">{module.score}</div>
              </div>
              <div className="card-back">
                <p>{module.description}</p>
                <div className="card-back-actions">
                  <a 
                    href={`/certificates/${module.pdfFile}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="module-link view"
                  >
                    <FiEye size={12} />
                    Visualiser
                  </a>
                  <a 
                    href={`/certificates/${module.pdfFile}`} 
                    download
                    className="module-link download"
                  >
                    <FiDownload size={12} />
                    Télécharger
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certificates PDF Section */}
      <div className="glass-card">
        <h2 className="section-title-secondary">_mes-certificats</h2>
        <p className="certificates-intro">
          Retrouvez ci-dessous mes certificats officiels. Cliquez sur "Visualiser" pour les consulter directement 
          ou sur "Télécharger" pour les sauvegarder.
        </p>
        
        <div className="certificates-grid">
          {certificates.map((cert) => (
            <div className="certificate-card-animated" key={cert.id}>
              <div className="certificate-icon-animated">{cert.icon}</div>
              <h3 className="certificate-title">{cert.title}</h3>
              <p className="certificate-description">{cert.description}</p>
              <p className="certificate-date">📅 {cert.date}</p>
              
              <div className="certificate-actions">
                <a 
                  href={`/certificates/${cert.pdfFile}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="cert-btn view"
                >
                  <FiEye size={14} />
                  Visualiser
                </a>
                <a 
                  href={`/certificates/${cert.pdfFile}`} 
                  download
                  className="cert-btn download"
                >
                  <FiDownload size={14} />
                  Télécharger
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CertificationPage;