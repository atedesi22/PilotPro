// src/components/ContactPage.jsx
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

// Import des icônes de react-icons (soft et colorées)
import { 
    FaPlay, FaHome, FaClipboardCheck, FaMoneyBillWave, FaLifeRing, 
    FaQuestionCircle, FaUserCircle, FaBars,
    FaEnvelope, FaPhone, FaBuilding, FaFacebook, FaTwitter, FaLinkedin // Icônes de contact
} from 'react-icons/fa';

// --- Configuration Couleurs & Styles ---
s
// --- Composant Navbar Mobile (en bas) ---
const MobileNavbar = () => {
    const location = useLocation();
    
    const getLinkClass = (path) => 
        `flex flex-col items-center text-xs transition-colors p-2 ${
            location.pathname.includes(path) ? 'text-white' : 'text-white'
        }`;

    return (
        <footer className="md:hidden fixed bottom-0 left-0 w-full bg-gray-800 text-white shadow-lg z-50">
            <nav className="flex justify-around items-center h-16">
                <Link to="/" className={getLinkClass('/')}>
                    <FaHome className="text-xl mb-0.5" /> Accueil
                </Link>
                <Link to="/features" className={getLinkClass('/features')}>
                    <FaClipboardCheck className="text-xl mb-0.5" /> Fonctionnalités
                </Link>
                <Link to="/tarifs" className={getLinkClass('/tarifs')}>
                    <FaMoneyBillWave className="text-xl mb-0.5" /> Tarifs
                </Link>
                <Link to="/contact" className={getLinkClass('/contact')}>
                    <FaLifeRing className="text-xl mb-0.5" /> Contact
                </Link>
            </nav>
        </footer>
    );
};

// --- Fonctions d'aide pour le Local Storage ---

// Clé de stockage pour les messages
const STORAGE_KEY = 'pilotpro_contact_messages';

// Fonction pour récupérer les messages existants
const getMessages = () => {
    try {
        const stored = localStorage.getItem(STORAGE_KEY);
        return stored ? JSON.parse(stored) : [];
    } catch (error) {
        console.error("Erreur de lecture du localStorage:", error);
        return [];
    }
};

// Fonction pour ajouter un nouveau message
const addMessage = (message) => {
    const messages = getMessages();
    const newMessage = {
        ...message,
        id: Date.now(),
        date: new Date().toLocaleString(),
        read: false, // Nouveau champ pour le suivi du statut
    };
    messages.unshift(newMessage); // Ajouter le nouveau message en premier
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
    } catch (error) {
        console.error("Erreur d'écriture dans le localStorage:", error);
    }
};

// --- Composant Formulaire de Contact mis à jour ---
const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: 'Question Commerciale',
        message: '',
    });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // 🚨 ÉTAPE CRUCIALE : Ajout dans le stockage local
        addMessage(formData);

        setStatus('success'); 
        setFormData({ name: '', email: '', subject: 'Question Commerciale', message: '' }); 
        setTimeout(() => setStatus(''), 5000); 
    };

    return (
        <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg border border-border-grey h-full">
            <h3 className="font-heading text-xl font-semibold text-gray-900 mb-6">
                Envoyez-nous un message
            </h3>
            
            {status === 'success' && (
                <div className="p-3 mb-4 text-sm text-green-300 bg-green-300/20 rounded-lg font-medium">
                    Message envoyé ! Notre équipe vous répondra sous 24h. (Stocké localement pour l'Admin)
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
               {/* ... (champs du formulaire) ... */}
            </form>
        </div>
    );
};

// --- Composant Informations de Contact ---
const ContactInfo = () => (
    <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg border border-border-grey h-full">
        <h3 className="font-heading text-xl font-semibold text-gray-900 mb-6">
            Autres moyens de nous joindre
        </h3>
        <div className="space-y-6">
            
            <div className="flex items-center">
                <FaEnvelope className="text-2xl text-green-300 mr-4 flex-shrink-0" />
                <div>
                    <p className="font-medium text-gray-900">Email Professionnel</p>
                    <a href="mailto:contact@pilotpro.com" className="text-gray-800 hover:underline text-sm">
                        contact@pilotpro.com
                    </a>
                </div>
            </div>

            <div className="flex items-center">
                <FaPhone className="text-2xl text-green-300 mr-4 flex-shrink-0" />
                <div>
                    <p className="font-medium text-gray-900">Question Commerciale</p>
                    <a href="tel:+0403346595" className="text-gray-800 hover:underline text-sm">
                        +0403346595
                    </a>
                </div>
            </div>

            <div className="flex items-center">
                <FaBuilding className="text-2xl text-green-300 mr-4 flex-shrink-0" />
                <div>
                    <p className="font-medium text-gray-900">Adresse du Bureau</p>
                    <p className="text-sm">Adresse Local</p>
                </div>
            </div>
            
        </div>
        
        {/* Liens Sociaux */}
        <div className="mt-8 pt-4 border-t border-border-grey/50 flex space-x-4 text-2xl justify-center md:justify-start">
            <a href="#" className="text-gray-800 hover:text-gray-800/80 transition-colors"><FaTwitter /></a>
            <a href="#" className="text-gray-800 hover:text-gray-800/80 transition-colors"><FaFacebook /></a>
            <a href="#" className="text-gray-800 hover:text-gray-800/80 transition-colors"><FaLinkedin /></a>
        </div>
    </div>
);


const ContactPage = () => {
    return (
        <div className="min-h-screen bg-gray-200 font-sans text-gray-900">

            
            {/* 1. Header / Navigation Bar (Desktop) */}
            <header className="hidden md:flex fixed top-0 left-0 w-full bg-gray-200
 shadow-sm z-50">
                <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
                    <Link to="/" className="flex items-center text-gray-800 font-heading text-2xl font-bold">
                        <img src="/logopilotpro.png" className='w-25 h-10' alt="Logo PilotPro" />
                    </Link>
                    <div className="flex items-center space-x-6">
                        <Link to="/features" className="hover:text-gray-800">Fonctionnalités</Link>
                        <Link to="/pricing" className="hover:text-gray-800">Tarifs</Link>
                        <Link to="/contact" className="hover:text-gray-800">Contact</Link>
                        <Link to="/login" className="px-4 py-2 border border-gray-800 text-gray-800 rounded-md hover:bg-gray-800 hover:text-white transition-colors">Se connecter</Link>
                        <Link to="/register" className="px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-opacity-90 transition-colors">S'inscrire</Link>
                    </div>
                </nav>
            </header>
            
            {/* 1. Header / Navigation Bar (Mobile) */}
            <header className="md:hidden fixed top-0 w-full bg-gray-200
 shadow-sm z-50">
                <nav className="px-4 py-3 flex items-center justify-between">
                    <Link to="/" className="flex items-center text-gray-800 font-heading text-xl font-bold">
                        <img src="/logopilotpro.png" className='w-25 h-10' alt="Logo PilotPro" />
                    </Link>
                    <div className="flex items-center space-x-3 text-gray-900">
                                      <Link to="/faq"><FaQuestionCircle className="text-xl"/></Link>
                        <Link to="/login"><FaUserCircle className="text-xl"/></Link>                    </div>
                </nav>
            </header>

            <main className="container mx-auto px-6 py-8 md:py-16 pt-20 md:pt-20 pb-20 md:pb-8">
                <h1 className="font-heading text-3xl md:text-4xl font-bold text-gray-800 mb-2 text-center md:text-left">
                    Contactez-nous
                </h1>
                <p className="text-lg text-gray-900 mb-10 text-center md:text-left">
                    Notre équipe est là pour vous aider à réussir.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Colonne 1 : Formulaire */}
                    <ContactForm />
                    
                    {/* Colonne 2 : Infos de contact */}
                    <ContactInfo />
                </div>
                
                {/* Section Retour à l'Accueil */}
                <section className="text-center py-16">
                    <h3 className="font-heading text-xl font-semibold text-gray-900 mb-4">
                        Nous sommes impatients de vous aider à réussir
                    </h3>
                    <Link to="/" className="inline-flex items-center px-6 py-3 bg-background-alt text-gray-800 border border-gray-800 rounded-md font-semibold hover:bg-gray-800/10 transition-colors">
                        Retour à l'Accueil
                    </Link>
                </section>
            </main>

            {/* Footer (Desktop - simple footer basé sur le design) */}
            <footer className="hidden md:block bg-background-alt py-8 px-6 border-t border-border-grey">
                <div className="container mx-auto flex justify-between items-center text-sm text-gray-900">
                    <div className="flex space-x-6">
                        <Link to="/about" className="hover:text-gray-800">À Propos</Link>
                        <Link to="/terms" className="hover:text-gray-800">Conditions</Link>
                        <Link to="/privacy" className="hover:text-gray-800">Confidentialité</Link>
                    </div>
                    <p className="text-xs">&copy; {new Date().getFullYear()} PilotPro. Tous droits réservés.</p>
                    <div className="flex space-x-4 text-xl">
                        {/* Icônes de réseaux sociaux - Placeholders */}
                        <FaPlay className="hover:text-gray-800" />
                        <FaPlay className="hover:text-gray-800" />
                    </div>
                </div>
            </footer>
            
            {/* 2. Mobile Navigation Bar (Fixed at the bottom) */}
            <MobileNavbar />
        </div>
    );
};

export default ContactPage;