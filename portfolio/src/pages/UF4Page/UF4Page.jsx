import React from 'react';
import { 
  FaHandsHelping, FaUsers, FaLaptopCode, FaBullhorn, 
  FaCalendarAlt, FaHeart, FaGlobe, FaUniversity,
  FaShieldAlt, FaComments, FaLightbulb, FaUserGraduate,
  FaFlag, FaNewspaper, FaChartLine, FaArrowRight,
  FaInstagram, FaFacebook, FaTelegram, FaPenFancy
} from 'react-icons/fa';
import { MdOutlineVolunteerActivism, MdEvent, MdVerified } from 'react-icons/md';
import './UF4Page.css';

const UF4Page = () => {
  return (
    <div className="uf4-page">
      {/* Hero Section */}
      <div className="glass-card hero-engagement">
        <div className="hero-badge">
          <FaHandsHelping size={20} />
          <span>UF4 - Engagement étudiant</span>
        </div>
        <h1 className="hero-title">
          <span className="hero-accent">_engagement</span>
          <br />
          au service des étudiants
        </h1>
        <p className="hero-quote">
          "S'informer, partager et lutter contre la désinformation"
        </p>
      </div>

      {/* Association NEF */}
      <div className="glass-card association-card">
        <div className="card-header">
          <div className="card-icon">
            <FaUsers size={28} />
          </div>
          <h2 className="card-title">Nos Étudiants en France (NEF)</h2>
        </div>
        
        <p className="card-description">
          NEF est une association des étudiants et des jeunes Ukrainiens en France. 
          Depuis plus de trois ans, nous accompagnons les jeunes dans leur parcours : 
          aide à l'entrée dans les universités françaises, intégration dans la vie locale 
          et soutien pendant les études.
        </p>
        
        <div className="missions-grid">
          <div className="mission-pill">
            <FaUniversity size={14} />
            <span>Aide à l'université</span>
          </div>
          <div className="mission-pill">
            <FaHeart size={14} />
            <span>Intégration locale</span>
          </div>
          <div className="mission-pill">
            <FaShieldAlt size={14} />
            <span>Lutte contre la désinformation</span>
          </div>
          <div className="mission-pill">
            <FaGlobe size={14} />
            <span>Soutien à l'Ukraine</span>
          </div>
        </div>
        
        <a href="https://nefstudents.com" target="_blank" rel="noopener noreferrer" className="link-btn">
          Découvrir NEF <FaArrowRight size={12} />
        </a>
      </div>

      {/* Mon rôle */}
      <div className="glass-card role-card">
        <div className="card-header">
          <div className="card-icon">
            <FaLaptopCode size={28} />
          </div>
          <h2 className="card-title">Mon rôle : Département Informatique</h2>
        </div>
        
        <p className="card-description">
          Au sein de l'association NEF, je fais partie du <strong>département informatique</strong>. 
          Ma mission est de créer des supports de communication pour informer, sensibiliser 
          et promouvoir les actions de l'association.
        </p>
        
        <div className="role-list">
          <div className="role-item">
            <span className="role-number">01</span>
            <div className="role-content">
              <h3>Création d'affiches</h3>
              <p>Supports visuels pour les événements et campagnes NEF</p>
            </div>
          </div>
          <div className="role-item">
            <span className="role-number">02</span>
            <div className="role-content">
              <h3>Posts sur la situation Ukraine</h3>
              <p>Actualités vérifiées et informations fiables</p>
            </div>
          </div>
          <div className="role-item">
            <span className="role-number">03</span>
            <div className="role-content">
              <h3>Lutte contre la désinformation russe</h3>
              <p>Démantèlement des fake news via des contenus éducatifs</p>
            </div>
          </div>
          <div className="role-item">
            <span className="role-number">04</span>
            <div className="role-content">
              <h3>Information vie étudiante</h3>
              <p>Conseils pratiques pour les nouveaux arrivants en France</p>
            </div>
          </div>
        </div>
      </div>

      {/* Thèmes */}
      <div className="glass-card themes-card">
        <div className="card-header">
          <div className="card-icon">
            <FaNewspaper size={28} />
          </div>
          <h2 className="card-title">Thèmes de mes créations</h2>
        </div>
        
        <div className="themes-grid">
          <div className="theme-item ukraine">
            <FaFlag size={24} />
            <h3>Situation en Ukraine</h3>
            <p>Actualités vérifiées, impact du conflit, résistance ukrainienne</p>
          </div>
          <div className="theme-item disinfo">
            <FaShieldAlt size={24} />
            <h3>Lutte contre la désinformation</h3>
            <p>Démantèlement des fake news russes, vérification des sources</p>
          </div>
          <div className="theme-item student">
            <FaUserGraduate size={24} />
            <h3>Vie étudiante en France</h3>
            <p>Démarches administratives, logement, études, intégration</p>
          </div>
          <div className="theme-item event">
            <MdEvent size={24} />
            <h3>Événements NEF</h3>
            <p>Rencontres, ateliers, actions solidaires et culturelles</p>
          </div>
        </div>
      </div>

      {/* Créations */}
      <div className="glass-card creations-card">
        <div className="card-header">
          <div className="card-icon">
            <FaBullhorn size={28} />
          </div>
          <h2 className="card-title">Mes créations</h2>
        </div>
        
        <div className="creations-grid">
          <div className="creation-card">
            <div className="creation-emoji">📢</div>
            <h3>Affiches d'information</h3>
            <p>Situation Ukraine, aide aux réfugiés, événements NEF</p>
          </div>
          <div className="creation-card">
            <div className="creation-emoji">📱</div>
            <h3>Posts réseaux sociaux</h3>
            <p>Instagram, Facebook, Telegram - actualités et sensibilisation</p>
          </div>
          <div className="creation-card">
            <div className="creation-emoji">📰</div>
            <h3>Articles</h3>
            <p>Décryptage de l'actualité, conseils aux étudiants</p>
          </div>
          <div className="creation-card">
            <div className="creation-emoji">🖼️</div>
            <h3>Visuels événementiels</h3>
            <p>Flyers, bannières, supports de communication</p>
          </div>
        </div>
      </div>

      {/* Événements */}
      <div className="glass-card events-card">
        <div className="card-header">
          <div className="card-icon">
            <FaCalendarAlt size={28} />
          </div>
          <h2 className="card-title">Événements NEF</h2>
        </div>
        
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-date">2024</div>
            <div className="timeline-content">
              <h3>Journée de solidarité Ukraine</h3>
              <p>Collecte de fonds et dons pour soutenir l'Ukraine</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-date">2024</div>
            <div className="timeline-content">
              <h3>Conférence "Vivre et étudier en France"</h3>
              <p>Session d'information pour les nouveaux arrivants</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-date">2025</div>
            <div className="timeline-content">
              <h3>Campagne "Stop aux fake news"</h3>
              <p>Action de sensibilisation contre la désinformation russe</p>
            </div>
          </div>
        </div>
      </div>

      {/* Compétences */}
      <div className="glass-card skills-card">
        <div className="card-header">
          <div className="card-icon">
            <FaChartLine size={28} />
          </div>
          <h2 className="card-title">Compétences développées</h2>
        </div>
        
        <div className="skills-wrapper">
          <div className="skills-block">
            <h3>Compétences techniques</h3>
            <div className="skills-badges">
              <span className="skill-badge">Création de contenu visuel</span>
              <span className="skill-badge">Gestion de réseaux sociaux</span>
              <span className="skill-badge">Veille informationnelle</span>
              <span className="skill-badge">Outils de design</span>
              <span className="skill-badge">Rédaction web</span>
            </div>
          </div>
          
          <div className="skills-block">
            <h3>Compétences humaines</h3>
            <div className="skills-badges">
              <span className="skill-badge">Communication</span>
              <span className="skill-badge">Travail en équipe</span>
              <span className="skill-badge">Sensibilisation</span>
              <span className="skill-badge">Analyse critique</span>
              <span className="skill-badge">Esprit d'initiative</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UF4Page;