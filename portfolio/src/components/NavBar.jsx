import React from 'react';
import './NavBar.css';

const NavBar = ({ currentPage, setCurrentPage }) => {
  const navItems = [
    "Accueil", "Profil", "BTS", "Provicom", "LGiA",
    "Infra Réseau", "Infra Système", "Certifications",
    "Épreuves", "Engagement", "Projets", "Veille Tech", "Contacts"
  ];

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo">
          <h1>◈ ANDRII NASTYCH</h1>
          <p>BTS SIO SISR | Cybersécurité</p>
        </div>
        <ul className="nav-links">
          {navItems.map(item => (
            <li key={item}>
              <button
                onClick={() => setCurrentPage(item)}
                className={currentPage === item ? "active" : ""}
              >
                {item === "Accueil" ? "🏠 Accueil" : item}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;