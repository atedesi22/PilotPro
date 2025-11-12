import { React, useState } from 'react'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
// Importez d'autres composants de page ici (Login, Register, etc.)

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* Ajoutez d'autres routes ici */}
        <Route path="/login" element={<div>Login Page</div>} />
        <Route path="/register" element={<div>Register Page</div>} />
        <Route path="/features" element={<div>Features Page</div>} />
        <Route path="/pricing" element={<div>Pricing Page</div>} />
        <Route path="/contact" element={<div>Contact Page</div>} />
        <Route path="/demo" element={<div>Demo Request Page</div>} />
        {/* Exemple pour les liens du footer */}
        <Route path="/about" element={<div>About Page</div>} />
        <Route path="/terms" element={<div>Terms Page</div>} />
        <Route path="/privacy" element={<div>Privacy Page</div>} />
      </Routes>
    </Router>
  );
}

export default App;