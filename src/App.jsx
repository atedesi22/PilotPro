import { React, useState } from 'react'
import './index.css'
import { Link, BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import LandingPage from './components/LandingPage';
import PricingPage from './components/PricingPage'; 
import FAQPage from './components/FAQPage';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import FeaturesPage from './components/FeaturesPage';
// Importez la page Contact lorsque vous la créerez
import ContactPage from './components/ContactPage';
import SuperAdminMessages from './components/SuperAdminMessages'
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          
          {/* --- Routes Publiques (Accessibles à tous) --- */}
          
          <Route path="/" element={<LandingPage />} />
          <Route path="/tarifs" element={<PricingPage />} />
          <Route path="/pricing" element={<PricingPage />} /> {/* Alias pour plus de flexibilité */}

          <Route path="/faq" element={<FAQPage />} />
          
          <Route path="/login" element={<LoginPage />} />
          <Route path="/connexion" element={<LoginPage />} /> {/* Alias */}
          
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/inscription" element={<RegisterPage />} /> Alias
          
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/fonctionnalites" element={<FeaturesPage />} /> {/* Alias */}
          
          {/* <Route path="/contact" element={<ContactPage />} /> */}
          {/* <Route path="/demo" element={<div>Demande de Démo</div>} /> */}

          {/* --- Routes Privées (À Sécuriser) --- */}
          
          {/* Le routage ci-dessous nécessitera des Guards (protection d'accès) */}
          {/* <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/app" element={<UserDashboard />} /> 
          <Route path="/dashboard" element={<UserDashboard />} /> */}

          <Route path="/contact" element={<ContactPage />} />
        {/* Route secrète pour l'Admin */}
        <Route path="/superadmin/messages" element={<SuperAdminMessages />} />

          
          {/* --- Route de Secours (Page 404) --- */}
          <Route path="*" element={
            <div className="flex flex-col items-center justify-center min-h-screen">
              <h1 className="text-4xl font-bold text-pilotpro-blue mb-4">404</h1>
              <p className="text-lg text-text-deep-grey">Oups ! Cette page n'existe pas.</p>
              <Link to="/" className="mt-6 text-success-green hover:underline">Retour à l'accueil</Link>
            </div>
          } />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;