import React from 'react';
import './CertificationPage.css';

const CertificationPage = () => {
  const modules = [
    { name: "Panorama de la SSI", date: "15/01/2025", score: "80.0%" },
    { name: "Sécurité de l'authentification", date: "15/01/2025", score: "92.0%" },
    { name: "Sécurité sur Internet", date: "15/01/2025", score: "74.0%" },
    { name: "Sécurité du poste de travail et nomadisme", date: "15/01/2025", score: "86.0%" }
  ];

  return (
    <div>
      <div className="glass-card">
        <h1 className="section-title">📜 Certifications Cybersécurité</h1>
        <h2 className="subtitle">MOOC ANSSI – SecNumacadémie</h2>
        <p>
          Formation complète sur les bases de la sécurité numérique, suivie avec succès.
        </p>
        
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
        
        <div style={{ marginTop: '1rem', padding: '1rem', background: '#0b0e14', borderRadius: '12px' }}>
          ✅ Attestation de suivi obtenue – Février 2025
        </div>
      </div>

      <div className="glass-card">
        <h2 className="section-title">🎯 Prochaines certifications</h2>
        <ul>
          <li>📌 PIX – Certification numérique</li>
          <li>📌 Cisco CCNA – En préparation</li>
          <li>📌 CompTIA Security+</li>
        </ul>
      </div>
    </div>
  );
};

export default CertificationPage;