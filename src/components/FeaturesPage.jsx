// src/components/FeaturesPage.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

// Import des icônes de react-icons (soft et colorées)
import { 
    FaPlay, FaHome, FaClipboardCheck, FaMoneyBillWave, FaLifeRing, 
    FaChartLine, FaBoxOpen, FaSearchPlus, FaShieldAlt, 
    FaUsers, FaLightbulb, FaCog, FaDollarSign, FaRocket, FaQuestionCircle, FaUserCircle, FaBars,
    FaStore, 
    FaBullhorn,
    FaTachometerAlt, // Pour l'Automatisation / Opérations
    FaHandshake
} from 'react-icons/fa';

// Import d'icônes plus spécifiques pour les détails
import { 
    IoWalletOutline, // Portefeuille pour finance
    IoCubeOutline, // Cube pour stock
    IoLayersOutline, // Pour le CRM/Pipeline
    IoSettingsOutline, // Pour l'Automatisation
    IoAnalyticsOutline, // Graphique pour décisions
    IoLockClosedOutline ,// Cadenas pour sécurité
    IoBrushOutline
} from 'react-icons/io5';


// --- Configuration Couleurs & Styles ---
const colors = {
    'gray-800': '#34495E',
    'green-300': '#A2E0D4',
    'orange-300': '#F7A384',
    
'gray-900': '#4A4A4A',
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


const FeaturesPage = () => {
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
                <Link to="/login"><FaUserCircle className="text-xl"/></Link>
            </div>
        </nav>
      </header>

      <main className="pt-20 md:pt-20 pb-20 md:pb-8"> 

        {/* 2. Section Héro des Fonctionnalités */}
        <section className="container mx-auto px-6 py-12 md:py-16 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold leading-tight text-gray-900 mb-4">
            Découvrez toutes les <span className="text-gray-800">Fonctionnalités</span> de PilotPro
          </h1>
          <p className="text-lg md:text-xl text-gray-900 mb-8 max-w-3xl mx-auto">
            Une suite complète d'outils pour optimiser chaque aspect de votre entreprise, de la finance à la gestion des stocks, en passant par les ressources humaines.
          </p>
          <Link to="/register" className="px-6 py-3 bg-gray-800 text-white rounded-md shadow-lg hover:bg-opacity-90 transition-colors text-lg">
            Commencer l'Essai Gratuit
          </Link>
        </section>

        {/* 3. Grille des Fonctionnalités Principales (reprise de la Landing Page) */}
        <section className="container mx-auto px-6 py-12 md:py-16 bg-background-alt rounded-xl shadow-inner mt-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
                Nos modules essentiels
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Feature Card 1: Finance */}
                <div className="bg-white p-6 rounded-xl shadow-lg text-center border border-border-grey hover:shadow-xl transition-shadow">
                    <FaChartLine className="text-5xl text-green-300 mx-auto mb-3" />
                    <h3 className="font-heading text-lg font-semibold text-gray-900 mb-1">Finance</h3>
                    <p className="text-xs text-gray-900">Gérez vos flux trésorerie</p>
                </div>
                {/* Feature Card 2: Stock */}
                <div className="bg-white p-6 rounded-xl shadow-lg text-center border border-border-grey hover:shadow-xl transition-shadow">
                    <FaBoxOpen className="text-5xl text-orange-300 mx-auto mb-3" />
                    <h3 className="font-heading text-lg font-semibold text-gray-900 mb-1">Stock</h3>
                    <p className="text-xs text-gray-900">Optimisez vos entrepôts</p>
                </div>
                {/* Feature Card 3: Décisions */}
                <div className="bg-white p-6 rounded-xl shadow-lg text-center border border-border-grey hover:shadow-xl transition-shadow">
                    <FaSearchPlus className="text-5xl text-gray-800 mx-auto mb-3" />
                    <h3 className="font-heading text-lg font-semibold text-gray-900 mb-1">Décisions Éclairées</h3>
                    <p className="text-xs text-gray-900">Écartez vos erreurs</p>
                </div>
                {/* Feature Card 4: Sécurité */}
                <div className="bg-white p-6 rounded-xl shadow-lg text-center border border-border-grey hover:shadow-xl transition-shadow">
                    <FaShieldAlt className="text-5xl text-green-300 mx-auto mb-3" />
                    <h3 className="font-heading text-lg font-semibold text-gray-900 mb-1">Sécurité</h3>
                    <p className="text-xs text-gray-900">Confidentialité garantie</p>
                </div>
                {/* NOUVELLE FEATURE CARD : PilotCom : Création & Diffusion */}
                 <div className="bg-white p-6 rounded-xl shadow-lg text-center border border-border-grey hover:shadow-xl transition-shadow">
                    <FaBullhorn className="text-5xl text-pilotpro-blue mx-auto mb-3" /> {/* Utilisation de FaBullhorn */}
                    <h3 className="font-heading text-lg font-semibold text-text-deep-grey mb-1">PilotCom</h3>
                    <p className="text-xs text-text-deep-grey">Création & Diffusion Marketing</p>
                </div>
                {/* NOUVELLES FONCTIONNALITÉS POUR LA PAGE */}
                 <div className="bg-white p-6 rounded-xl shadow-lg text-center border border-border-grey hover:shadow-xl transition-shadow">
                    <FaUsers className="text-5xl text-gray-800 mx-auto mb-3" />
                    <h3 className="font-heading text-lg font-semibold text-gray-900 mb-1">Ressources Humaines</h3>
                    <p className="text-xs text-gray-900">Gérez vos talents</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg text-center border border-border-grey hover:shadow-xl transition-shadow">
                    <FaCog className="text-5xl text-orange-300 mx-auto mb-3" />
                    <h3 className="font-heading text-lg font-semibold text-gray-900 mb-1">Gestion de Projets</h3>
                    <p className="text-xs text-gray-900">Suivi des tâches</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg text-center border border-border-grey hover:shadow-xl transition-shadow">
                    <FaLightbulb className="text-5xl text-green-300 mx-auto mb-3" />
                    <h3 className="font-heading text-lg font-semibold text-gray-900 mb-1">Intelligence Artificielle</h3>
                    <p className="text-xs text-gray-900">Prédictions et analyses</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg text-center border border-border-grey hover:shadow-xl transition-shadow">
                    <FaRocket className="text-5xl text-gray-800 mx-auto mb-3" />
                    <h3 className="font-heading text-lg font-semibold text-gray-900 mb-1">Automatisation</h3>
                    <p className="text-xs text-gray-900">Gains de temps massifs</p>
                </div>
                {/* NOUVELLE FEATURE CARD : Gestion Commerciale (CRM) */}
                <div className="bg-white p-6 rounded-xl shadow-lg text-center border border-border-grey hover:shadow-xl transition-shadow">
                    <FaHandshake className="text-5xl text-pilotpro-blue mx-auto mb-3" />
                    <h3 className="font-heading text-lg font-semibold text-text-deep-grey mb-1">Commercial</h3>
                    <p className="text-xs text-text-deep-grey">CRM, Devis & Pipeline</p>
                </div>

                {/* NOUVELLE FEATURE CARD : Automatisation Avancée */}
                <div className="bg-white p-6 rounded-xl shadow-lg text-center border border-border-grey hover:shadow-xl transition-shadow">
                    <FaTachometerAlt className="text-5xl text-pilotpro-blue mx-auto mb-3" />
                    <h3 className="font-heading text-lg font-semibold text-text-deep-grey mb-1">Automatisation</h3>
                    <p className="text-xs text-text-deep-grey">Règles & Webhooks IFTTT</p>
                </div>
            </div>
        </section>

        {/* 4. Sections Détaillées des Fonctionnalités */}

        {/* Finance */}
        <section className="container mx-auto px-6 py-12 md:py-16 flex flex-col md:flex-row items-center justify-between mt-12">
            <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0 md:pr-12">
                <IoWalletOutline className="text-6xl text-green-300 mb-4 mx-auto md:mx-0" />
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Gestion Financière Complète
                </h2>
                <p className="text-lg text-gray-900 mb-6">
                    Suivez vos revenus, dépenses, budgets et prévisions avec précision. Générez des rapports détaillés pour une vision claire de votre santé financière.
                </p>
                <ul className="list-disc list-inside text-left mx-auto md:mx-0 max-w-md space-y-2 text-gray-900">
                    <li>Comptabilité générale et analytique</li>
                    <li>Facturation et gestion des fournisseurs</li>
                    <li>Suivi des flux de trésorerie en temps réel</li>
                    <li>Rapports financiers personnalisables</li>
                </ul>
                <Link to="/contact" className="mt-8 inline-flex items-center px-6 py-3 bg-gray-800 text-white rounded-md shadow-lg hover:bg-opacity-90 transition-colors">
                    En savoir plus
                </Link>
            </div>
            <div className="md:w-1/2 flex justify-center">
                {/* Placeholder pour image/illustration de la finance */}
                <img src="https://i.imgur.com/gK9qQ4j.png" alt="Gestion Financière" className="max-w-full h-auto rounded-xl shadow-xl" />
            </div>
        </section>

        {/* Stock */}
        <section className="container mx-auto px-6 py-12 md:py-16 flex flex-col-reverse md:flex-row items-center justify-between mt-12 bg-background-alt rounded-xl shadow-inner">
            <div className="md:w-1/2 flex justify-center mb-8 md:mb-0">
                {/* Placeholder pour image/illustration du stock */}
                <img src="https://i.imgur.com/3q1q5Qj.png" alt="Gestion de Stock" className="max-w-full h-auto rounded-xl shadow-xl" />
            </div>
            <div className="md:w-1/2 text-center md:text-left md:pl-12">
                <IoCubeOutline className="text-6xl text-orange-300 mb-4 mx-auto md:mx-0" />
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Optimisation Intelligente des Stocks
                </h2>
                <p className="text-lg text-gray-900 mb-6">
                    Gérez votre inventaire avec efficacité. Suivez les mouvements, prévoyez la demande et minimisez les ruptures ou les excédents.
                </p>
                <ul className="list-disc list-inside text-left mx-auto md:mx-0 max-w-md space-y-2 text-gray-900">
                    <li>Suivi en temps réel des produits</li>
                    <li>Alertes de stock minimum/maximum</li>
                    <li>Gestion multi-entrepôts</li>
                    <li>Optimisation des commandes fournisseurs</li>
                </ul>
                <Link to="/contact" className="mt-8 inline-flex items-center px-6 py-3 bg-gray-800 text-white rounded-md shadow-lg hover:bg-opacity-90 transition-colors">
                    En savoir plus
                </Link>
            </div>
        </section>

        {/* Décisions */}
        <section className="container mx-auto px-6 py-12 md:py-16 flex flex-col md:flex-row items-center justify-between mt-12">
            <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0 md:pr-12">
                <IoAnalyticsOutline className="text-6xl text-gray-800 mb-4 mx-auto md:mx-0" />
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Tableaux de Bord et Rapports Personnalisés
                </h2>
                <p className="text-lg text-gray-900 mb-6">
                    Prenez des décisions éclairées grâce à des analyses approfondies et des visualisations de données claires et intuitives.
                </p>
                <ul className="list-disc list-inside text-left mx-auto md:mx-0 max-w-md space-y-2 text-gray-900">
                    <li>Tableaux de bord interactifs</li>
                    <li>Générateur de rapports glisser-déposer</li>
                    <li>Analyse des tendances et prévisions</li>
                    <li>Intégration de données externes</li>
                </ul>
                <Link to="/contact" className="mt-8 inline-flex items-center px-6 py-3 bg-gray-800 text-white rounded-md shadow-lg hover:bg-opacity-90 transition-colors">
                    En savoir plus
                </Link>
            </div>
            <div className="md:w-1/2 flex justify-center">
                {/* Placeholder pour image/illustration des décisions */}
                <img src="https://i.imgur.com/gK9qQ4j.png" alt="Décisions Éclairées" className="max-w-full h-auto rounded-xl shadow-xl" />
            </div>
        </section>

        <section className="container mx-auto px-6 py-12 md:py-16 flex flex-col md:flex-row items-center justify-between mt-12 bg-white rounded-xl shadow-lg border border-border-grey">
            <div className="md:w-1/2 text-center md:text-left md:pr-12">
                <IoBrushOutline className="text-6xl text-pilotpro-blue mb-4 mx-auto md:mx-0" />
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-deep-grey mb-4">
                    PilotCom : Création & Diffusion
                </h2>
                <p className="text-lg text-text-deep-grey mb-6">
                    Devenez votre propre agence marketing. Créez des visuels, planifiez vos publications et analysez vos performances sur les réseaux sociaux, tout cela depuis une seule interface.
                </p>
                <ul className="list-disc list-inside text-left mx-auto md:mx-0 max-w-md space-y-2 text-text-deep-grey">
                    <li>Outil de création visuelle intégré (type Canvas)</li>
                    <li>Synchronisation et publication automatique sur les réseaux sociaux (Facebook, Instagram, etc.)</li>
                    <li>Tableau de bord des statistiques de performance (reach, engagement)</li>
                    <li>Calendrier éditorial centralisé</li>
                </ul>
                <Link to="/pricing" className="mt-8 inline-flex items-center px-6 py-3 bg-alert-orange text-white rounded-md shadow-lg hover:bg-opacity-90 transition-colors">
                    Découvrez le Plan Entreprise
                </Link>
            </div>
            <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
                <img 
                    src="https://i.imgur.com/x2vY8zY.png" // L'URL de l'image générée
                    alt="PilotCom : Création et Diffusion Marketing" 
                    className="max-w-full h-auto rounded-xl shadow-xl" 
                />
            </div>
        </section>

        {/* NOUVELLE SECTION DÉTAILLÉE : Gestion Commerciale (CRM) */}
            <section className="container mx-auto px-6 py-12 md:py-16 flex flex-col md:flex-row items-center justify-between mt-12 bg-white rounded-xl shadow-lg border border-border-grey">
                <div className="md:w-1/2 text-center md:text-left md:pr-12">
                    <IoLayersOutline className="text-6xl text-pilotpro-blue mb-4 mx-auto md:mx-0" />
                    <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-deep-grey mb-4">
                        Gestion Commerciale (CRM)
                    </h2>
                    <p className="text-lg text-text-deep-grey mb-6">
                        Optimisez votre entonnoir de vente, du premier contact à la facturation finale. Unifiez les données clients pour une meilleure prise de décision.
                    </p>
                    <ul className="list-disc list-inside text-left mx-auto md:mx-0 max-w-md space-y-2 text-text-deep-grey">
                        <li>**Pipeline de Ventes (Kanban) :** Suivi visuel des opportunités.</li>
                        <li>Création et gestion des **Devis** (liés au stock et aux prix).</li>
                        <li>**Journal d'Audit Détaillé :** Traçabilité complète des actions utilisateurs (sécurité et conformité).</li>
                        <li>Conversion rapide des Devis en Factures (Module Finance).</li>
                    </ul>
                    <Link to="/pricing" className="mt-8 inline-flex items-center px-6 py-3 bg-alert-orange text-white rounded-md shadow-lg hover:bg-opacity-90 transition-colors">
                        Découvrez le Plan Pro
                    </Link>
                </div>
                <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
                    
                </div>
            </section>

            {/* NOUVELLE SECTION DÉTAILLÉE : Automatisation & Opérations */}
            <section className="container mx-auto px-6 py-12 md:py-16 flex flex-col md:flex-row-reverse items-center justify-between mt-12 bg-white rounded-xl shadow-lg border border-border-grey">
                <div className="md:w-1/2 text-center md:text-left md:pl-12">
                    <IoSettingsOutline className="text-6xl text-pilotpro-blue mb-4 mx-auto md:mx-0" />
                    <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-deep-grey mb-4">
                        Automatisation Avancée & Connectivité
                    </h2>
                    <p className="text-lg text-text-deep-grey mb-6">
                        Gagnez des heures par semaine grâce à des règles automatisées et ouvrez votre système à des applications tierces.
                    </p>
                    <ul className="list-disc list-inside text-left mx-auto md:mx-0 max-w-md space-y-2 text-text-deep-grey">
                        <li>**Moteur d'Automatisation IFTTT :** Créez des règles "Si X, Alors Y" (Ex: Alerte Stock Bas &gt Créer Tâche Achat).</li>
                        <li>**Webhooks Sortants :** Notifications en temps réel vers vos plateformes tierces (logistique, comptabilité externe).</li>
                        <li>**Prévisions de Trésorerie** basées sur l'IA (analyse des transactions historiques).</li>
                    </ul>
                    <Link to="/pricing" className="mt-8 inline-flex items-center px-6 py-3 bg-pilotpro-blue text-white rounded-md shadow-lg hover:bg-opacity-90 transition-colors">
                        Accédez aux Fonctionnalités Entreprise
                    </Link>
                </div>
                <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
                    [Image of a flow chart illustrating "If This Then That" automation rule]
                </div>
            </section>


        {/* 5. Témoignage rapide (facultatif mais ajoute de la crédibilité) */}
        <section className="bg-green-300/20 py-12 mt-12">
            <div className="container mx-auto px-6 text-center">
                <p className="italic text-lg text-gray-900 mb-4">
                    "PilotPro a transformé notre gestion quotidienne. Une solution intuitive et incroyablement complète !"
                </p>
                <p className="font-semibold text-gray-800">- Jean Dupont, CEO de InnovTech</p>
            </div>
        </section>

        {/* 6. Appel à l'Action Final */}
        <section className="py-16 px-6 text-center bg-gradient-to-t from-background-alt to-white mt-12">
          <div className="container mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Prêt à explorer toutes nos fonctionnalités ?
            </h2>
            <Link to="/register" className="px-8 py-4 bg-gray-800 text-white rounded-md shadow-xl hover:bg-opacity-90 transition-colors text-lg">
              Commencez votre essai gratuit
            </Link>
          </div>
        </section>
      </main>

      {/* Footer (Desktop - simple footer) */}
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

export default FeaturesPage;