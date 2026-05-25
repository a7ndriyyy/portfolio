import React, { useState } from 'react';
import './App.css';
import './global.styles.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import BinaryRain from './components/BinaryRain';

// Import pages
import HelloPage from './pages/HomePage/HelloPage';
import HomePage from './pages/HomePage/HomePage';
import BTSPage from './pages/BTSPage/BTSPage';
import ProvicomPage from './pages/ProvicomPage/ProvicomPage';
import ActivitiesPage from './pages/ProvicomPage/ActivitiesPage/ActivitiesPage';  // Fixed path (no extra ActivitiesPage folder)
import CertificationPage from './pages/CertificationPage/CertificationPage';
import EpreuvesPage from './pages/EpreuvesPage/EpreuvesPage';
import UF4Page from './pages/UF4Page/UF4Page';
import VeilleTechPage from './pages/VeilleTechPage/VeilleTechPage';
import ContactsPage from './pages/ContactsPage/ContactsPage';

function App() {
  const [currentPage, setCurrentPage] = useState("Accueil");

  const renderPage = () => {
    switch(currentPage) {
      case "Accueil":
        return (
          <>
            <HelloPage />
          </>
        );
      case "Profil":
        return <HomePage />;
      case "BTS":
        return <BTSPage />;
      case "Provicom":
        return <ProvicomPage setCurrentPage={setCurrentPage} />;  // FIXED: Added setCurrentPage prop
      case "Activites":
        return <ActivitiesPage setCurrentPage={setCurrentPage} />;
      case "Certifications":
        return <CertificationPage />;
      case "Épreuves":
        return <EpreuvesPage />;
      case "Engagement":
        return <UF4Page />;
      case "Veille Tech":
        return <VeilleTechPage />;
      case "Contacts":
        return <ContactsPage />;
      default:
        return (
          <>
            <HelloPage />
            <HomePage />
          </>
        );
    }
  };

  return (
    <div className="app">
      {/* Global Background Effects */}
      <BinaryRain />
      <div className="scan-lines-global"></div>
      <div className="glitch-overlay-global"></div>
      
      <NavBar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="main-content">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;