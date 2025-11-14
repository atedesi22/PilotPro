// src/components/PricingPage.jsx
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

// Import des icônes de react-icons (soft et colorées)
import { 
    FaPlay, FaHome, FaClipboardCheck, FaMoneyBillWave, FaLifeRing, 
    FaCheck, FaTimes, FaQuestionCircle, FaUserCircle, FaRegBuilding,
    FaBars
} from 'react-icons/fa';

// --- Configuration Couleurs & Styles ---
const colors = {
    'gray-800': '#34495E',
    'green-300': '#A2E0D4',
    'orange-300': '#F7A384',
    
'gray-900': '#4A4A4A',
    'background-light': '#FDFDFD',
    'background-alt': '#F5F7F9',
    'border-grey': '#DDE6ED',
    'pro-recommend': '#A2E0D4', // Couleur de l'étiquette Recommandé
};

// --- Données Fictives des Plans (Prix Annuel = Mensuel * 12 * 0.90) ---
const plans = [
    {
        name: 'Essential',
        slogan: 'Simple selon vos besoins.',
        monthlyPrice: 49,
        yearlyDiscount: 'économisez 10%',
        features: [
            { text: '10 utilisateurs maximum', available: true },
            { text: 'Dashboard avancé', available: true },
            { text: 'Optimisation avancée', available: false },
            { text: 'Support prioritaire', available: false },
            { text: 'Vitrine Digitale (Limitée à 5 produits, Click & Collect)', available: true, isLimited: true }, 
            { text: 'Suite Marketing PilotCom (Création & Diffusion)', available: false }, // <-- NOUVELLE FEATURE
            { text: 'Gestion Commerciale (CRM basique : Leads)', available: false }, // Les Leads pourraient être ici
            { text: 'Automatisation IFTTT et Webhooks', available: false }, 
            { text: 'Journal d\'Audit Détaillé', available: false },
            { text: 'Contactez-nous', available: true }, 
        ]
    },
    {
        name: 'Pro',
        slogan: 'Le choix le plus complet.',
        monthlyPrice: 99, // Peut-être augmenter le prix pour refléter la valeur ajoutée
        yearlyDiscount: 'économisez 10%',
        recommended: true,
        features: [
            { text: 'Comptabilité avancée', available: true },
            { text: 'Dashboard avancé', available: true },
            { text: 'Optimisation avancée', available: true },
            { text: 'Support prioritaire', available: true },
            { text: 'Vitrine Digitale Intégrée (Complète : produits illimités, livraison, paiements)', available: true }, 
            { text: 'Suite Marketing PilotCom (Création & Diffusion)', available: false }, // <-- NOUVELLE FEATURE
            { text: 'Gestion Commerciale (CRM complet : Devis, Pipeline, Clients)', available: true }, // <-- AJOUT
            { text: 'Automatisation IFTTT et Webhooks', available: false }, 
            { text: 'Journal d\'Audit Détaillé', available: true }, // <-- AJOUT (Crucial pour toute PME)
            { text: 'Contactez-nous', available: true },
        ]
    },
    {
        name: 'Entreprise',
        slogan: 'Sur Devis, sur mesure.',
        monthlyPrice: 150, // Peut-être une base plus élevée
        yearlyDiscount: 'sur mesure',
        features: [
            { text: '10 utilisateurs maximum', available: true },
            { text: 'Dashboard avancé', available: true },
            { text: 'Optimisation avancée', available: true },
            { text: 'Support prioritaire', available: true },
            { text: 'Vitrine Digitale Intégrée (Complète + fonctionnalités sur mesure)', available: true }, 
            { text: 'Suite Marketing PilotCom (Création & Diffusion)', available: true }, // <-- NOUVELLE FEATURE (Incluse ici)
            { text: 'Gestion Commerciale (CRM complet + Fonctionnalités sur mesure)', available: true },
            { text: 'Automatisation IFTTT et Webhooks', available: true }, // <-- AJOUT
            { text: 'Journal d\'Audit Détaillé', available: true },
            { text: 'Contactez-nous', available: true },
        ]
    }
];

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

// --- Composant du Sélecteur Mensuel/Annuel ---
const BillingToggle = ({ isMonthly, setIsMonthly }) => (
    <div className="flex items-center justify-center space-x-3 mb-10">
        <span className={`text-sm font-semibold ${isMonthly ? 'text-gray-800' : 'text-gray-900/70'}`}>
            Facturation Mensuelle
        </span>
        <label className="relative inline-flex items-center cursor-pointer">
            <input 
                type="checkbox" 
                value="" 
                className="sr-only peer" 
                checked={!isMonthly} 
                onChange={() => setIsMonthly(!isMonthly)}
            />
            <div className={`w-11 h-6 bg-border-grey rounded-full peer peer-focus:ring-2 peer-focus:ring-gray-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-border-grey after:border after:rounded-full after:h-5 after:w-5 after:transition-all ${!isMonthly ? 'peer-checked:bg-green-300' : ''}`}></div>
        </label>
        <span className={`text-sm font-semibold flex items-center ${!isMonthly ? 'text-gray-800' : 'text-gray-900/70'}`}>
            Annuelle 
            <span className="ml-2 px-2 py-0.5 text-xs bg-green-300/70 text-gray-800 rounded-full font-bold hidden md:inline">
                économisez 10%
            </span>
        </span>
    </div>
);

// --- Composant de la Carte Tarifaire ---
const PricingCard = ({ plan, isMonthly }) => {
    const price = plan.monthlyPrice;
    const priceDisplay = plan.name === 'Entreprise' 
        ? 'Sur Devis' 
        : `${isMonthly ? price : Math.round(price * 12 * 0.90 / 12)} € /mois`;
    const periodDisplay = plan.name === 'Entreprise' 
        ? 'Contactez-nous' 
        : `${isMonthly ? 'Facturation mensuelle' : 'Facturation annuelle'}`;

    return (
        <div className={`relative flex flex-col p-6 rounded-xl shadow-2xl transition-all duration-300 ${plan.recommended ? 'bg-gray-800 text-white transform scale-105 border-2 border-green-300' : 'bg-white text-gray-900 border border-border-grey'}`}>
            
            {plan.recommended && (
                <div className={`absolute top-0 right-0 py-1 px-3 text-xs font-bold rounded-tr-xl rounded-bl-lg ${plan.recommended ? 'bg-green-300 text-gray-800' : ''}`}>
                    RECOMMANDÉ
                </div>
            )}
            
            <h3 className={`text-2xl font-bold mb-1 ${plan.recommended ? 'text-white' : 'text-gray-800'}`}>
                {plan.name}
            </h3>
            <p className={`text-sm mb-4 ${plan.recommended ? 'text-white/80' : 'text-gray-900/70'}`}>
                {plan.slogan}
            </p>
            
            <div className="mb-6">
                <p className={`text-4xl font-extrabold ${plan.recommended ? 'text-green-300' : 'text-gray-800'}`}>
                    {priceDisplay}
                </p>
                <p className={`text-sm ${plan.recommended ? 'text-white/70' : 'text-gray-900/70'}`}>
                    {periodDisplay}
                </p>
            </div>
            
            <ul className="flex-grow space-y-3 mb-8">
                {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start text-sm">
                        {feature.available ? (
                            <FaCheck className={`text-base mt-1 mr-3 flex-shrink-0 ${plan.recommended ? 'text-green-300' : 'text-green-300'}`} />
                        ) : (
                            <FaTimes className={`text-base mt-1 mr-3 flex-shrink-0 ${plan.recommended ? 'text-white/40' : 'text-border-grey'}`} />
                        )}
                        <span className={`${feature.available ? (plan.recommended ? 'text-white' : 'text-gray-900') : (plan.recommended ? 'text-white/60' : 'text-gray-900/60')}`}>
                            {feature.text}
                        </span>
                    </li>
                ))}
            </ul>

            <Link 
                to="/register" 
                className={`w-full text-center py-3 rounded-md font-semibold transition-colors 
                    ${plan.recommended 
                        ? 'bg-green-300 text-gray-800 hover:bg-green-300/80' 
                        : 'bg-gray-800 text-white hover:bg-gray-800/90'
                    }`}
            >
                Choisir ce plan
            </Link>
        </div>
    );
};


const PricingPage = () => {
    // État pour gérer la facturation : true = Mensuelle, false = Annuelle
    const [isMonthly, setIsMonthly] = useState(true);

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
                        <Link to="/tarifs" className="hover:text-gray-800">Tarifs</Link>
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
                        <Link to="/login"><FaUserCircle className="text-xl"/></Link>
                    </div>
                </nav>
            </header>

            <main className="pt-20 md:pt-20 pb-20 md:pb-8"> 
                <section className="container mx-auto px-6 py-10 text-center">
                    
                    <h1 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Pilotez votre entreprise vers le succès avec <span className="text-gray-800">PilotPro.</span>
                    </h1>
                    <p className="text-lg text-gray-900 mb-12 max-w-2xl mx-auto">
                        La solution ERP tout-en-un pour gérer finance, stock, et opérations, conçue pour votre croissance.
                    </p>

                    {/* Sélecteur de Facturation */}
                    <BillingToggle isMonthly={isMonthly} setIsMonthly={setIsMonthly} />
                    
                    {/* Cartes Tarifaires */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
                        {plans.map((plan, index) => (
                            <PricingCard key={index} plan={plan} isMonthly={isMonthly} />
                        ))}
                    </div>
                </section>

                {/* Section FAQ Résumée / Contact */}
                <section className="bg-background-alt py-12 mt-12">
                    <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                        
                        {/* FAQ 1 */}
                        <div className="p-4 bg-white rounded-lg shadow-md border border-border-grey">
                            <h3 className="font-semibold text-gray-800 mb-2 flex items-center justify-center md:justify-start">
                                <FaQuestionCircle className="mr-2 text-lg text-green-300" /> FAQ ?
                            </h3>
                            <p className="text-sm text-gray-900">Des questions sur les licences multi-tenants?</p>
                            <Link to="/faq" className="text-sm text-gray-800 hover:underline mt-2 inline-block">Voir les réponses</Link>
                        </div>
                        
                        {/* FAQ 2 */}
                        <div className="p-4 bg-white rounded-lg shadow-md border border-border-grey">
                             <h3 className="font-semibold text-gray-800 mb-2 flex items-center justify-center md:justify-start">
                                <FaQuestionCircle className="mr-2 text-lg text-green-300" /> FAQ ?
                            </h3>
                            <p className="text-sm text-gray-900">Besoin d'aide pour vos coûts unitaires ?</p>
                            <Link to="/faq" className="text-sm text-gray-800 hover:underline mt-2 inline-block">Voir les réponses</Link>
                        </div>
                        
                        {/* Contact */}
                        <div className="p-4 bg-white rounded-lg shadow-md border border-border-grey">
                             <h3 className="font-semibold text-gray-800 mb-2 flex items-center justify-center md:justify-start">
                                <FaLifeRing className="mr-2 text-lg text-green-300" /> Contactez-nous
                            </h3>
                            <p className="text-sm text-gray-900">Des questions spécifiques avant de vous engager?</p>
                            <Link to="/contact" className="text-sm text-gray-800 hover:underline mt-2 inline-block">Nous Contacter</Link>
                        </div>

                    </div>
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

export default PricingPage;