import React from 'react';
import './NavBar.css';

const NavBar = ({ currentPage, setCurrentPage }) => {
  const navItems = [
    { name: "Accueil", path: "_hello" },
    { name: "Profil", path: "_A propos de moi" },
    { name: "BTS", path: "_BTS" },
    { name: "Provicom", path: "_Provicom" },
    { name: "Certifications", path: "_Certifications" },
    { name: "Épreuves", path: "_Epreuves" },
    { name: "Engagement", path: "_Engagement" },
    { name: "Veille Tech", path: "_Veille-tech" },
    { name: "Contacts", path: "_Contact-me" }
  ];

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo">
          <h1>Andrii Nastych</h1>
        </div>
        <ul className="nav-links">
          {navItems.map(({ name, path }) => (
            <li key={name}>
              <button
                onClick={() => setCurrentPage(name)}
                className={currentPage === name ? "active" : ""}
              >
                {path}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;