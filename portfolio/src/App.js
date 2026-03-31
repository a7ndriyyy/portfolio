import React, { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

// Import all pages
import HomePage from './pages/HomePage/HomePage';
import BTSPage from './pages/BTSPage/BTSPage';
import ProvicomPage from './pages/ProvicomPage/ProvicomPage';
import LGiAPage from './pages/BTSPage/LGiAPage/LGiAPage';
import InfraNetworkPage from './pages/BTSPage/InfraNetworkPage/InfraNetworkPage';
import InfraSystemPage from './pages/BTSPage/InfraSystemPage/InfraSystemPage';
import CertificationPage from './pages/CertificationPage/CertificationPage';
import EpreuvesPage from './pages/EpreuvesPage/EpreuvesPage';
import UF4Page from './pages/UF4Page/UF4Page';
import ProjetsPage from './pages/ProjetsPage/ProjetsPage';
import VeilleTechPage from './pages/VeilleTechPage/VeilleTechPage';
import ContactsPage from './pages/ContactsPage/ContactsPage';

function App() {
  const [currentPage, setCurrentPage] = useState("Accueil");

  const renderPage = () => {
    switch(currentPage) {
      case "Accueil":
        return <HomePage />;
      case "Profil":
        return <HomePage />; // You can create a separate ProfilPage if needed
      case "BTS":
        return <BTSPage />;
      case "Provicom":
        return <ProvicomPage />;
      case "LGiA":
        return <LGiAPage />;
      case "Infra Réseau":
        return <InfraNetworkPage />;
      case "Infra Système":
        return <InfraSystemPage />;
      case "Certifications":
        return <CertificationPage />;
      case "Épreuves":
        return <EpreuvesPage />;
      case "Engagement":
        return <UF4Page />;
      case "Projets":
        return <ProjetsPage />;
      case "Veille Tech":
        return <VeilleTechPage />;
      case "Contacts":
        return <ContactsPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="app">
      <NavBar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="main-content">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;