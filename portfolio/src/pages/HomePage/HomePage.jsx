import React from 'react';
import { 
  FiCalendar, FiMapPin, FiMail, FiPhone, 
  FiGithub, FiLinkedin, FiAward, FiBriefcase, 
  FiBookOpen, FiHeart, FiUser, FiCpu, FiShield, FiGlobe, FiServer
} from 'react-icons/fi';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="homepage" id="about-section">
      {/* Section Title */}
      <div className="section-header">
        <h2 className="section-title">_about-me</h2>
        <p className="section-subtitle">Qui suis-je ?</p>
      </div>

      {/* Bio & Contact Grid */}
      <div className="about-grid">
        {/* Left column - Bio */}
        <div className="glass-card">
          <div className="bio-header">
            <FiUser size={24} color="#0aff9d" />
            <h3>Andrii Nastych</h3>
            <span className="badge">BTS SIO SISR</span>
          </div>
          
          <p className="bio-text">
            Je suis passionné par la cybersécurité et motivé à devenir pentester, ambitieux et prêt à 
            travailler sur moi-même pour progresser. J'ai des connaissances en informatique, réseaux 
            et sécurité, ainsi que des certifications Fullstack et SecNum.
          </p>
          <p className="bio-text">
            Curieux et rigoureux, je souhaite apprendre de nouvelles techniques, analyser des systèmes 
            et contribuer à la protection des infrastructures informatiques.
          </p>
          
          <div className="qualities">
            <h4 className="subtitle">Qualités</h4>
            <div className="qualities-grid">
              <span className="badge">Communication</span>
              <span className="badge">Diligence</span>
              <span className="badge">Capacité à coopérer</span>
              <span className="badge">Gestion habile du temps</span>
              <span className="badge">Travail en équipe</span>
              <span className="badge">À l'écoute</span>
            </div>
          </div>
        </div>

        {/* Right column - Contact Info */}
        <div className="glass-card">
          <h3 className="subtitle">Informations</h3>
          <div className="contact-list">
            <div className="contact-item">
              <FiCalendar size={16} />
              <span>20 ans (15/02/2006)</span>
            </div>
            <div className="contact-item">
              <FiMapPin size={16} />
              <span>21 rue du commerce, 94310, Orly</span>
            </div>
            <div className="contact-item">
              <FiPhone size={16} />
              <span>+33 7 53 13 38 84</span>
            </div>
            <div className="contact-item">
              <FiMail size={16} />
              <span>andrii.nastych@gmail.com</span>
            </div>
            <div className="contact-item">
              <FiLinkedin size={16} />
              <a href="https://linkedin.com/in/andrii-nastych" target="_blank" rel="noopener noreferrer">
                linkedin.com/in/andrii-nastych
              </a>
            </div>
            <div className="contact-item">
              <FiGithub size={16} />
              <a href="https://github.com/a7ndriyyy" target="_blank" rel="noopener noreferrer">
                github.com/a7ndriyyy
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Formation Section */}
      <div className="glass-card">
        <h2 className="section-title-secondary">_formation</h2>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-date">2024 - 2026</div>
            <div className="timeline-content">
              <h3>BTS SIO SISR</h3>
              <p>Lycée Professionnel Paul Bert | Maison-Alfort</p>
              <p className="timeline-desc">Solutions d'Infrastructure, Systèmes et Réseaux</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-date">2022 - 2024</div>
            <div className="timeline-content">
              <h3>BAC PRO SN - Systèmes Numériques</h3>
              <p>Lycée Professionnel Paul Bert | Maison-Alfort</p>
              <p className="timeline-desc">Mention Assez Bien - Option Réseaux Informatiques</p>
            </div>
          </div>
        </div>
      </div>

      {/* Expérience Section */}
      <div className="glass-card">
        <h2 className="section-title-secondary">_experience</h2>
        
        <div className="experience-item">
          <div className="exp-header">
            <FiBriefcase size={20} />
            <div>
              <h3>Alternance - IT Technicien</h3>
              <p className="exp-company">PROVICOM | Emerainville</p>
              <p className="exp-date">2024 - 2026 (2 ans)</p>
            </div>
          </div>
          <ul className="exp-list">
            <li>Installation et maintenance de systèmes d'alarme</li>
            <li>Installation et maintenance de caméras de vidéosurveillance</li>
            <li>Support technique et configuration réseau</li>
          </ul>
        </div>

        <div className="experience-item">
          <div className="exp-header">
            <FiBriefcase size={20} />
            <div>
              <h3>Stage - IT Technicien</h3>
              <p className="exp-company">Mairie Saint-Mandé</p>
              <p className="exp-date">2023 (2 mois)</p>
            </div>
          </div>
          <ul className="exp-list">
            <li>Schémas réseau et documentation technique</li>
            <li>Active Directory et gestion des utilisateurs</li>
            <li>Déploiement de postes et fibre optique</li>
          </ul>
        </div>

        <div className="experience-item">
          <div className="exp-header">
            <FiBriefcase size={20} />
            <div>
              <h3>Stage - IT Support</h3>
              <p className="exp-company">BRS Shipbrokers | La Défense</p>
              <p className="exp-date">2022 - 2023 (3 mois)</p>
            </div>
          </div>
          <ul className="exp-list">
            <li>Installation et configuration Windows</li>
            <li>Support technique et maintenance des postes</li>
            <li>Gestion du contrôle d'accès</li>
          </ul>
        </div>
      </div>

      {/* Compétences Techniques */}
      <div className="glass-card">
        <h2 className="section-title-secondary">_skills</h2>
        
        <div className="skills-grid">
          <div className="skill-category">
            <h3 className="subtitle">Réseaux</h3>
            <div className="skill-tags">
              <span className="badge">Configuration Cisco 2960</span>
              <span className="badge">TCP/IP</span>
              <span className="badge">DNS/VPN</span>
              <span className="badge">Active Directory</span>
              <span className="badge">VoIP</span>
            </div>
          </div>
          
          <div className="skill-category">
            <h3 className="subtitle">Cybersécurité</h3>
            <div className="skill-tags">
              <span className="badge">Kali Linux / ParrotOS</span>
              <span className="badge">Wireshark</span>
              <span className="badge">Nmap / Metasploit</span>
              <span className="badge">Aircrack-ng / OSINT</span>
            </div>
          </div>
          
          <div className="skill-category">
            <h3 className="subtitle">Systèmes & Outils</h3>
            <div className="skill-tags">
              <span className="badge">Windows / Linux</span>
              <span className="badge">GLPI / OCS Inventory</span>
              <span className="badge">VMware / Proxmox</span>
              <span className="badge">Docker</span>
            </div>
          </div>
        </div>
      </div>

      {/* Certifications & Langues */}
      <div className="grid-2col">
        <div className="glass-card">
          <h2 className="section-title-secondary">_certifications</h2>
          <div className="certification-item">
            <FiAward size={18} color="#0aff9d" />
            <div>
              <strong>SecNum Académie - MOOC ANSSI</strong>
              <p>Certification en cybersécurité (2024-2025)</p>
            </div>
          </div>
          <div className="certification-item">
            <FiAward size={18} color="#0aff9d" />
            <div>
              <strong>FullStack Developer</strong>
              <p>Certification développement web (2022-2023)</p>
            </div>
          </div>
        </div>

        <div className="glass-card">
          <h2 className="section-title-secondary">_languages</h2>
          <div className="language-item">
            <strong>Ukrainien</strong>
            <span className="badge">Langue maternelle</span>
          </div>
          <div className="language-item">
            <strong>Français</strong>
            <span className="badge">Professionnel</span>
          </div>
          <div className="language-item">
            <strong>Anglais</strong>
            <span className="badge">Professionnel</span>
          </div>
          <div className="language-item">
            <strong>Russe</strong>
            <span className="badge">Très bon niveau</span>
          </div>
        </div>
      </div>

      {/* Centres d'intérêt */}
      <div className="glass-card">
        <h2 className="section-title-secondary">_interests</h2>
        <div className="interests">
          <span className="badge">🎸 Guitare</span>
          <span className="badge">🎵 Musique</span>
          <span className="badge">🏋️ Salle de sport</span>
          <span className="badge">♟️ Échecs</span>
        </div>
      </div>
    </div>
  );
};

export default HomePage;