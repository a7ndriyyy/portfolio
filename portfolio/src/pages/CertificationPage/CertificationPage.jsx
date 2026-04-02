import React from 'react';
import { FiAward, FiDownload, FiEye } from 'react-icons/fi';
import './CertificationPage.css';

const CertificationPage = () => {
  const modules = [
    { name: "Panorama de la SSI", date: "15/01/2025", score: "80.0%" },
    { name: "Sécurité de l'authentification", date: "15/01/2025", score: "92.0%" },
    { name: "Sécurité sur Internet", date: "15/01/2025", score: "74.0%" },
    { name: "Sécurité du poste de travail et nomadisme", date: "15/01/2025", score: "86.0%" }
  ];

  const certificates = [
    {
      id: 1,
      title: "SecNum Académie - MOOC ANSSI",
      description: "Certification en cybersécurité délivrée par l'ANSSI après la réussite des 4 modules.",
      date: "Février 2025",
      pdfFile: "Attestation-SecNum.pdf",
      icon: "🛡️"
    },
    {
      id: 2,
      title: "FullStack Developer",
      description: "Certification de développement web FullStack, couvrant les technologies front-end et back-end.",
      date: "2022-2023",
      pdfFile: "certificate_Fullstack.pdf",
      icon: "💻"
    }
  ];

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
        
        <table className="score-table">
          <thead>
            <tr>
              <th>Module</th>
              <th>Date d'évaluation</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {modules.map((mod, idx) => (
              <tr key={idx}>
                <td>{mod.name}</td>
                <td>{mod.date}</td>
                <td className="score-highlight">{mod.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
        
        <div className="cert-footer">
          <span className="cert-badge">✅ Attestation de suivi obtenue – Février 2025</span>
        </div>
      </div>

      {/* Certificates PDF Section */}
      <div className="glass-card">
        <h2 className="section-title-secondary">_Mes-certificats</h2>
        <p className="certificates-intro">
          Retrouvez ci-dessous mes certificats officiels. Cliquez sur "Visualiser" pour les consulter directement 
          ou sur "Télécharger" pour les sauvegarder.
        </p>
        
        <div className="certificates-grid">
          {certificates.map((cert) => (
            <div className="certificate-card" key={cert.id}>
              <div className="certificate-icon">{cert.icon}</div>
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