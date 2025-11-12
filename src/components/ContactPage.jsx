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
const colors = {
    'pilotpro-blue': '#34495E',
    'success-green': '#A2E0D4',
    'text-deep-grey': '#4A4A4A',
    'background-light': '#FDFDFD',
    'background-alt': '#F5F7F9',
    'border-grey': '#DDE6ED',
    'button-dark': '#34495E',
};

// --- Composant Navbar Mobile (en bas) ---
const MobileNavbar = () => {
    const location = useLocation();
    
    const getLinkClass = (path) => 
        `flex flex-col items-center text-xs transition-colors p-2 ${
            location.pathname.includes(path) ? 'text-success-green' : 'text-white'
        }`;

    return (
        <footer className="md:hidden fixed bottom-0 left-0 w-full bg-pilotpro-blue text-white shadow-lg z-50">
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
            <h3 className="font-heading text-xl font-semibold text-text-deep-grey mb-6">
                Envoyez-nous un message
            </h3>
            
            {status === 'success' && (
                <div className="p-3 mb-4 text-sm text-success-green bg-success-green/20 rounded-lg font-medium">
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
        <h3 className="font-heading text-xl font-semibold text-text-deep-grey mb-6">
            Autres moyens de nous joindre
        </h3>
        <div className="space-y-6">
            
            <div className="flex items-center">
                <FaEnvelope className="text-2xl text-success-green mr-4 flex-shrink-0" />
                <div>
                    <p className="font-medium text-text-deep-grey">Email Professionnel</p>
                    <a href="mailto:contact@pilotpro.com" className="text-pilotpro-blue hover:underline text-sm">
                        contact@pilotpro.com
                    </a>
                </div>
            </div>

            <div className="flex items-center">
                <FaPhone className="text-2xl text-success-green mr-4 flex-shrink-0" />
                <div>
                    <p className="font-medium text-text-deep-grey">Question Commerciale</p>
                    <a href="tel:+0403346595" className="text-pilotpro-blue hover:underline text-sm">
                        +0403346595
                    </a>
                </div>
            </div>

            <div className="flex items-center">
                <FaBuilding className="text-2xl text-success-green mr-4 flex-shrink-0" />
                <div>
                    <p className="font-medium text-text-deep-grey">Adresse du Bureau</p>
                    <p className="text-sm">Adresse Local</p>
                </div>
            </div>
            
        </div>
        
        {/* Liens Sociaux */}
        <div className="mt-8 pt-4 border-t border-border-grey/50 flex space-x-4 text-2xl justify-center md:justify-start">
            <a href="#" className="text-pilotpro-blue hover:text-pilotpro-blue/80 transition-colors"><FaTwitter /></a>
            <a href="#" className="text-pilotpro-blue hover:text-pilotpro-blue/80 transition-colors"><FaFacebook /></a>
            <a href="#" className="text-pilotpro-blue hover:text-pilotpro-blue/80 transition-colors"><FaLinkedin /></a>
        </div>
    </div>
);


const ContactPage = () => {
    return (
        <div className="min-h-screen bg-background-light font-sans text-text-deep-grey">
            
            {/* 1. Header / Navigation Bar (Desktop) */}
            <header className="hidden md:flex fixed top-0 left-0 w-full bg-background-light shadow-sm z-50">
                <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
                    <Link to="/" className="flex items-center text-pilotpro-blue font-heading text-2xl font-bold">
                        <div className="w-6 h-6 mr-2 bg-pilotpro-blue [clip-path:polygon(0%_100%,100%_0%,100%_50%,0%_50%)]" /> PilotPro
                    </Link>
                    <div className="flex items-center space-x-6">
                        <Link to="/features" className="hover:text-pilotpro-blue">Fonctionnalités</Link>
                        <Link to="/pricing" className="hover:text-pilotpro-blue">Tarifs</Link>
                        <Link to="/contact" className="hover:text-pilotpro-blue">Contact</Link>
                        <Link to="/login" className="px-4 py-2 border border-pilotpro-blue text-pilotpro-blue rounded-md hover:bg-pilotpro-blue hover:text-white transition-colors">Se connecter</Link>
                        <Link to="/register" className="px-4 py-2 bg-pilotpro-blue text-white rounded-md hover:bg-opacity-90 transition-colors">S'inscrire</Link>
                    </div>
                </nav>
            </header>
            
            {/* 1. Header / Navigation Bar (Mobile) */}
            <header className="md:hidden fixed top-0 w-full bg-background-light shadow-sm z-50">
                <nav className="px-4 py-3 flex items-center justify-between">
                    <Link to="/" className="flex items-center text-pilotpro-blue font-heading text-xl font-bold">
                         <div className="w-5 h-5 mr-1 bg-pilotpro-blue [clip-path:polygon(0%_100%,100%_0%,100%_50%,0%_50%)]" /> PilotPro
                    </Link>
                    <div className="flex items-center space-x-3 text-text-deep-grey">
                        <FaQuestionCircle className="text-xl"/>
                        <FaUserCircle className="text-xl"/>
                        <FaBars className="text-xl"/> 
                    </div>
                </nav>
            </header>

            <main className="container mx-auto px-6 py-8 md:py-16 pt-20 md:pt-20 pb-20 md:pb-8">
                <h1 className="font-heading text-3xl md:text-4xl font-bold text-pilotpro-blue mb-2 text-center md:text-left">
                    Contactez-nous
                </h1>
                <p className="text-lg text-text-deep-grey mb-10 text-center md:text-left">
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
                    <h3 className="font-heading text-xl font-semibold text-text-deep-grey mb-4">
                        Nous sommes impatients de vous aider à réussir
                    </h3>
                    <Link to="/" className="inline-flex items-center px-6 py-3 bg-background-alt text-pilotpro-blue border border-pilotpro-blue rounded-md font-semibold hover:bg-pilotpro-blue/10 transition-colors">
                        Retour à l'Accueil
                    </Link>
                </section>
            </main>

            {/* Footer (Desktop - simple footer basé sur le design) */}
            <footer className="hidden md:block bg-background-alt py-8 px-6 border-t border-border-grey">
                <div className="container mx-auto flex justify-between items-center text-sm text-text-deep-grey">
                    <div className="flex space-x-6">
                        <Link to="/about" className="hover:text-pilotpro-blue">À Propos</Link>
                        <Link to="/terms" className="hover:text-pilotpro-blue">Conditions</Link>
                        <Link to="/privacy" className="hover:text-pilotpro-blue">Confidentialité</Link>
                    </div>
                    <p className="text-xs">&copy; {new Date().getFullYear()} PilotPro. Tous droits réservés.</p>
                    <div className="flex space-x-4 text-xl">
                        {/* Icônes de réseaux sociaux - Placeholders */}
                        <FaPlay className="hover:text-pilotpro-blue" />
                        <FaPlay className="hover:text-pilotpro-blue" />
                    </div>
                </div>
            </footer>
            
            {/* 2. Mobile Navigation Bar (Fixed at the bottom) */}
            <MobileNavbar />
        </div>
    );
};

export default ContactPage;