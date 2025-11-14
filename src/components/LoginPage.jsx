// src/components/LoginPage.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

// Import des icônes de react-icons
import { FaPlay, FaHome, FaClipboardCheck, FaMoneyBillWave, FaLifeRing, FaRegBuilding, FaUserCircle, FaQuestionCircle } from 'react-icons/fa';

// --- Configuration Couleurs & Styles (reprise de la charte) ---
const colors = {
    'gray-800': '#34495E',
    'green-300': '#A2E0D4',
    'gray-900': '#4A4A4A',
    'background-light': '#FDFDFD',
    'background-alt': '#F5F7F9',
    'border-grey': '#DDE6ED',
    'button-dark': '#34495E', // Couleur foncée pour le bouton de connexion
};

// --- Composant Navbar Mobile (en bas) ---
const MobileNavbar = () => {
    const location = useLocation();
    
    // Fonction pour déterminer si le lien est actif
    const getLinkClass = (path) => 
        `flex flex-col items-center text-xs transition-colors ${
            location.pathname === path ? 'text-white' : 'text-white'
        }`;

    return (
        <footer className="md:hidden fixed bottom-0 left-0 w-full bg-gray-800 text-white shadow-lg z-50">
            <nav className="flex justify-around items-center h-14">
                <Link to="/" className={getLinkClass('/')}>
                    <FaHome className="text-xl mb-0.5" /> Accueil
                </Link>
                <Link to="/features" className={getLinkClass('/features')}>
                    <FaClipboardCheck className="text-xl mb-0.5" /> Fonctionnalités
                </Link>
                <Link to="/pricing" className={getLinkClass('/pricing')}>
                    <FaMoneyBillWave className="text-xl mb-0.5" /> Tarifs
                </Link>
                <Link to="/contact" className={getLinkClass('/contact')}>
                    <FaLifeRing className="text-xl mb-0.5" /> Contact
                </Link>
            </nav>
        </footer>
    );
};


const LoginPage = () => {
  
    // Fonction de soumission (à implémenter)
    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Tentative de connexion...'); 
        // Logique de connexion ici
    };

    return (
        <div className="min-h-screen bg-background-alt font-sans text-gray-900">
            
            {/* 1. Header / Navigation Bar (Desktop) */}
            <header className="hidden md:flex fixed top-0 left-0 w-full bg-background-light shadow-sm z-50">
                <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
                    <Link to="/" className="flex items-center text-gray-800 font-heading text-2xl font-bold">
                        {/* Utilisation d'un div pour simuler le logo icône */}
                                          <img src="/logopilotpro.png" className='w-25 h-10' alt="Logo PilotPro" />
                    </Link>
                    <div className="flex items-center space-x-6">
                        <Link to="/features" className="hover:text-gray-800">Fonctionnalités</Link>
                        <Link to="/pricing" className="hover:text-gray-800">Tarifs</Link>
                        <Link to="/contact" className="hover:text-gray-800">Contact</Link>
                        {/* Le bouton S'inscrire reste actif, Se connecter disparaît */}
                        <Link to="/register" className="px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-opacity-90 transition-colors">S'inscrire</Link>
                    </div>
                </nav>
            </header>
            
            {/* 1. Header / Navigation Bar (Mobile) */}
            <header className="md:hidden fixed top-0 w-full bg-background-light shadow-sm z-50">
                <nav className="px-4 py-3 flex items-center justify-between">
                    <Link to="/" className="flex items-center text-gray-800 font-heading text-xl font-bold">
                        <img src="/logopilotpro.png" className='w-25 h-10' alt="Logo PilotPro" />
                    </Link>
                    <div className="flex items-center space-x-3 text-gray-900">
                        <Link to="/faq"><FaQuestionCircle className="text-xl"/></Link>
                        <Link to="/register"><Link to="/login"><FaUserCircle className="text-xl"/></Link></Link>
                    </div>
                </nav>
            </header>

            <main className="flex items-center justify-center min-h-screen pt-20 md:pt-0 pb-16 md:pb-0">
                
                {/* 2. Carte de Connexion (Login Card) */}
                <div className="w-full max-w-sm p-8 bg-white rounded-xl shadow-2xl border border-border-grey mx-4">
                    
                    <div className="flex flex-col items-center mb-8">
                        {/* Icône du logo PilotPro au-dessus du titre */}
                        <div className="w-8 h-8 mb-2 bg-gray-800 [clip-path:polygon(0%_100%,100%_0%,100%_50%,0%_50%)]" />
                        <h2 className="font-heading text-2xl font-bold text-gray-800">PilotPro</h2>
                    </div>

                    <h1 className="font-heading text-center text-2xl font-semibold text-gray-900 mb-8">
                        Accédez à votre espace
                    </h1>

                    <form onSubmit={handleSubmit}>
                        <div className="mb-6">
                            <input
                                type="email"
                                placeholder="Email"
                                required
                                className="w-full p-3 border border-border-grey rounded-md focus:ring-gray-800 focus:border-gray-800 transition-all"
                            />
                        </div>
                        <div className="mb-6">
                            <input
                                type="password"
                                placeholder="Mot de passe"
                                required
                                className="w-full p-3 border border-border-grey rounded-md focus:ring-gray-800 focus:border-gray-800 transition-all"
                            />
                        </div>
                        
                        <button
                            type="submit"
                            className="w-full p-3 bg-button-dark text-white rounded-md font-semibold hover:bg-gray-800/90 transition-colors mb-4"
                        >
                            Se connecter
                        </button>
                    </form>

                    <div className="flex flex-col sm:flex-row justify-between items-center text-sm mt-4 space-y-2 sm:space-y-0">
                        <Link to="/forgot-password" className="text-gray-800 hover:underline">
                            Mot de passe oublié ?
                        </Link>
                        <p className="text-gray-900">
                            Pas encore de compte ?{' '}
                            <Link to="/register" className="text-gray-800 hover:underline font-semibold">
                                S'inscrire
                            </Link>
                        </p>
                    </div>

                </div>

            </main>

            {/* Footer (Mobile Navigation Bar) */}
            <MobileNavbar />
        </div>
    );
};

export default LoginPage;