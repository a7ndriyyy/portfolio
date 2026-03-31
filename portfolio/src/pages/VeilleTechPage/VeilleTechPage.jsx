import React from 'react';
import './VeilleTechPage.css';

const VeilleTechPage = () => {
  return (
    <div className="glass-card">
      <h1 className="section-title">🔍 Veille technologique</h1>
      <h2 className="subtitle">Sécurisation des réseaux d'entreprise</h2>
      <p>
        La sécurité des réseaux est essentielle pour les entreprises afin de protéger leurs données,
        leurs systèmes et leurs utilisateurs. Avec l'augmentation des cyberattaques, je maintiens
        une veille active sur les menaces et les solutions de protection.
      </p>

      <hr />

      <h3 className="subtitle">🛡️ Menaces réseau surveillées</h3>
      <ul>
        <li>Attaques par déni de service (DDoS)</li>
        <li>Malwares et ransomwares</li>
        <li>Phishing et ingénierie sociale</li>
        <li>Menaces internes (insider threats)</li>
        <li>Vulnérabilités Zero-Day</li>
      </ul>

      <hr />

      <h3 className="subtitle">📚 Sources de veille</h3>
      <div className="veille-source">ANSSI – Guides et bonnes pratiques</div>
      <div className="veille-source">The Hacker News – Actualités cybersécurité</div>
      <div className="veille-source">GitHub Security – Vulnérabilités et correctifs</div>
      <div className="veille-source">CVE Details – Base de vulnérabilités</div>
      <div className="veille-source">SANS Internet Storm Center</div>

      <hr />

      <h3 className="subtitle">🔧 Outils étudiés</h3>
      <div>
        <span className="badge">Wireshark</span>
        <span className="badge">Kali Linux</span>
        <span className="badge">Wazuh (SIEM)</span>
        <span className="badge">Metasploit</span>
        <span className="badge">Nmap</span>
        <span className="badge">Snort</span>
      </div>
    </div>
  );
};

export default VeilleTechPage;