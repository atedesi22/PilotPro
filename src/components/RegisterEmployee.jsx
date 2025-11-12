// src/components/RegisterEmployeePage.jsx
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

// Import des icônes de react-icons
import { 
    FaPlay, FaHome, FaClipboardCheck, FaMoneyBillWave, FaLifeRing, 
    FaUserCircle, FaQuestionCircle, FaCheckCircle
} from 'react-icons/fa';

// --- Configuration Couleurs & Styles ---
const colors = {
    'gray-800': '#34495E',
    'green-300': '#A2E0D4',
    'gray-900': '#4A4A4A',
    'background-light': '#FDFDFD',
    'background-alt': '#F5F7F9',
    'border-grey': '#DDE6ED',
    'button-dark': '#34495E',
};

// --- Composant Navbar Mobile (en bas) ---
const MobileNavbar = () => {
    const location = useLocation();
    
    // Fonction pour déterminer si le lien est actif
    const getLinkClass = (path) => 
        `flex flex-col items-center text-xs transition-colors ${
            location.pathname === path ? 'text-green-300' : 'text-white'
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


const RegisterEmployeePage = () => {
    const [formData, setFormData] = useState({
        employeeName: '',
        email: '',
        password: '',
        confirmPassword: '',
        acceptTerms: false,
    });
    const [registrationSuccess, setRegistrationSuccess] = useState(false);
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.employeeName) newErrors.employeeName = "Votre nom est requis.";
        if (!formData.email) newErrors.email = "L'email est requis.";
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "L'email n'est pas valide.";
        if (!formData.password) newErrors.password = "Le mot de passe est requis.";
        else if (formData.password.length < 6) newErrors.password = "6 caractères minimum.";
        if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = "Les mots de passe ne correspondent pas.";
        if (!formData.acceptTerms) newErrors.acceptTerms = "Vous devez accepter les conditions.";
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.log('Données d\'inscription employé:', formData);
            // Simule le succès
            setRegistrationSuccess(true); 
        } else {
            console.log('Erreurs de validation:', errors);
        }
    };

    return (
        <div className="min-h-screen bg-background-alt font-sans text-gray-900">
            
            {/* 1. Header / Navigation Bar (Desktop) */}
            <header className="hidden md:flex fixed top-0 left-0 w-full bg-background-light shadow-sm z-50">
                <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
                    <Link to="/" className="flex items-center text-gray-800 font-heading text-2xl font-bold">
                        <div className="w-6 h-6 mr-2 bg-gray-800 [clip-path:polygon(0%_100%,100%_0%,100%_50%,0%_50%)]" /> PilotPro
                    </Link>
                    <div className="flex items-center space-x-6">
                        <Link to="/features" className="hover:text-gray-800">Fonctionnalités</Link>
                        <Link to="/pricing" className="hover:text-gray-800">Tarifs</Link>
                        <Link to="/contact" className="hover:text-gray-800">Contact</Link>
                        <Link to="/login" className="px-4 py-2 border border-gray-800 text-gray-800 rounded-md hover:bg-gray-800 hover:text-white transition-colors">Se connecter</Link>
                    </div>
                </nav>
            </header>
            
            {/* 1. Header / Navigation Bar (Mobile) */}
            <header className="md:hidden fixed top-0 w-full bg-background-light shadow-sm z-50">
                <nav className="px-4 py-3 flex items-center justify-between">
                    <Link to="/" className="flex items-center text-gray-800 font-heading text-xl font-bold">
                         <div className="w-5 h-5 mr-1 bg-gray-800 [clip-path:polygon(0%_100%,100%_0%,100%_50%,0%_50%)]" /> PilotPro
                    </Link>
                    <div className="flex items-center space-x-3 text-gray-900">
                        <Link to="/faq"><FaQuestionCircle className="text-xl"/></Link>
                        <Link to="/login"><FaUserCircle className="text-xl"/></Link>
                    </div>
                </nav>
            </header>

            <main className="flex items-center justify-center min-h-screen pt-20 md:pt-0 pb-16 md:pb-0">
                
                {/* 2. Carte d'Inscription (Register Card) */}
                <div className="w-full max-w-sm p-8 bg-white rounded-xl shadow-2xl border border-border-grey mx-4">
                    
                    <div className="flex flex-col items-center mb-8">
                        {/* Icône du logo PilotPro au-dessus du titre */}
                        <div className="w-8 h-8 mb-2 bg-gray-800 [clip-path:polygon(0%_100%,100%_0%,100%_50%,0%_50%)]" />
                        <h2 className="font-heading text-2xl font-bold text-gray-800">PilotPro</h2>
                    </div>

                    <h1 className="font-heading text-center text-2xl font-semibold text-gray-900 mb-8">
                        Créez votre compte PilotPro
                    </h1>

                    {registrationSuccess ? (
                        <div className="text-center p-6 bg-green-300/20 text-gray-900 rounded-md mb-6">
                            <FaCheckCircle className="text-5xl text-green-300 mx-auto mb-4" />
                            <p className="font-semibold text-lg mb-2">Inscription réussie !</p>
                            <p>Veuillez vérifier votre email pour le lien d'activation.</p>
                            <Link to="/login" className="text-gray-800 hover:underline mt-4 block">Connectez-vous</Link>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <input
                                    type="text"
                                    name="employeeName"
                                    placeholder="Nom de l'employé"
                                    value={formData.employeeName}
                                    onChange={handleChange}
                                    className={`w-full p-3 border ${errors.employeeName ? 'border-red-500' : 'border-border-grey'} rounded-md focus:ring-gray-800 focus:border-gray-800 transition-all`}
                                />
                                {errors.employeeName && <p className="text-red-500 text-sm mt-1">{errors.employeeName}</p>}
                            </div>
                            <div className="mb-4">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email professionnel"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className={`w-full p-3 border ${errors.email ? 'border-red-500' : 'border-border-grey'} rounded-md focus:ring-gray-800 focus:border-gray-800 transition-all`}
                                />
                                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                            </div>
                            <div className="mb-4">
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Mot de passe"
                                    value={formData.password}
                                    onChange={handleChange}
                                    className={`w-full p-3 border ${errors.password ? 'border-red-500' : 'border-border-grey'} rounded-md focus:ring-gray-800 focus:border-gray-800 transition-all`}
                                />
                                {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
                            </div>
                            <div className="mb-6">
                                <input
                                    type="password"
                                    name="confirmPassword"
                                    placeholder="Confirmer le mot de passe"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    className={`w-full p-3 border ${errors.confirmPassword ? 'border-red-500' : 'border-border-grey'} rounded-md focus:ring-gray-800 focus:border-gray-800 transition-all`}
                                />
                                {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>}
                            </div>
                            
                            <div className="mb-6 flex items-center">
                                <input
                                    type="checkbox"
                                    name="acceptTerms"
                                    id="acceptTerms"
                                    checked={formData.acceptTerms}
                                    onChange={handleChange}
                                    className={`mr-2 h-4 w-4 rounded ${errors.acceptTerms ? 'border-red-500' : 'border-border-grey'} text-gray-800 focus:ring-gray-800`}
                                />
                                <label htmlFor="acceptTerms" className="text-sm text-gray-900">
                                    J'accepte les <Link to="/terms" className="text-gray-800 hover:underline">Conditions Générales d'Utilisation</Link> et la <Link to="/privacy" className="text-gray-800 hover:underline">Politique Confidentialité</Link>
                                </label>
                            </div>
                            {errors.acceptTerms && <p className="text-red-500 text-sm mb-4">{errors.acceptTerms}</p>}

                            <button
                                type="submit"
                                className="w-full p-3 bg-button-dark text-white rounded-md font-semibold hover:bg-gray-800/90 transition-colors mb-4"
                            >
                                S'inscrire
                            </button>
                        </form>
                    )}

                    {!registrationSuccess && (
                        <p className="text-center text-sm text-gray-900">
                            Déjà un compte ?{' '}
                            <Link to="/login" className="text-gray-800 hover:underline font-semibold">
                                Connectez-vous
                            </Link>
                        </p>
                    )}

                </div>

            </main>

            {/* Footer (Mobile Navigation Bar) */}
            <MobileNavbar />
        </div>
    );
};

export default RegisterEmployeePage;