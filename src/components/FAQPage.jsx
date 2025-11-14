// src/components/FAQPage.jsx
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom'; // Ajout de useLocation

// Import des icônes de react-icons
import { FaPlay, FaHome, FaClipboardCheck, FaMoneyBillWave, FaLifeRing, 
    FaSearch, FaPlus, FaMinus, FaQuestionCircle, FaUserCircle, FaRegBuilding,
    FaLock, FaRegLifeRing, FaRegQuestionCircle } from 'react-icons/fa';
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io'; // Pour l'accordéon
import { MdContactPage, MdMonetizationOn } from 'react-icons/md';


// --- Charte Graphique et Données ---
const colors = {
    'gray-800': '#34495E',
    'green-300': '#A2E0D4',
    
'gray-900': '#4A4A4A',
    'background-light': '#FDFDFD',
    'background-alt': '#F5F7F9',
    'border-grey': '#DDE6ED',
};

const faqData = [
  {
    category: 'Tarifs et Abonnements',
    questions: [
      { q: 'Comment mon essai gratuit fonctionne-t-il ?', a: 'Vous bénéficiez d\'un accès complet aux fonctionnalités du plan PRO pendant 14 jours, sans engagement ni carte de crédit requise.' },
      { q: 'Puis-je changer de plan à tout moment ?', a: 'Oui, vous pouvez mettre à jour ou rétrograder votre abonnement directement depuis votre tableau de bord. Le changement prend effet immédiatement.' },
    ]
  },
  {
    category: 'Sécurité et Données',
    questions: [
      { q: 'Comment mes données sont-elles sécurisées ?', a: 'Vos données sont cryptées via SSL/TLS. Grâce à notre architecture multi-tenant, elles sont stockées dans une base de données dédiée, complètement isolée des autres clients.' },
      { q: 'Qui a accès à mes données ?', a: 'Seul vous, les utilisateurs de votre entreprise, et les équipes de support désignées y ont accès sous haute supervision. Tous les accès sont journalisés.' },
      { q: 'Quelles sont les réglementations respectées ?', a: 'PilotPro est conforme au RGPD et effectue des audits de sécurité réguliers.' },
    ]
  },
  {
    category: 'Fonctionnalités et Utilisation',
    questions: [
      { q: 'Comment créer une facture ?', a: 'Dans le module Finance, cliquez sur "Nouvelle Facture" et laissez-vous guider par notre assistant pas à pas.' },
      { q: 'Puis-je importer mes données existantes ?', a: 'Oui, nous fournissons des outils d\'importation CSV pour les clients, les produits et les données comptables initiales.' },
    ]
  }
];

// --- Composant Accordéon d'un Élément FAQ ---
const AccordionItem = ({ question, answer, isOpen, toggleAccordion }) => (
  <div className="mb-4 bg-white rounded-lg shadow-md border border-border-grey overflow-hidden">
    <button
      className="flex justify-between items-center w-full p-4 text-left font-semibold text-lg hover:bg-background-alt transition-colors"
      onClick={toggleAccordion}
    >
      {question}
      {isOpen ? <FaMinus className="text-gray-800 text-sm" /> : <FaPlus className="text-gray-800 text-sm" />}
    </button>
    {isOpen && (
      <div className="p-4 border-t border-border-grey bg-gray-200
">
        <p className="text-gray-900 leading-relaxed">{answer}</p>
      </div>
    )}
  </div>
);

// --- Composant de la Page FAQ ---
const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const location = useLocation(); // Pour savoir quelle est la route active et styliser la navbar mobile

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const MobileNavbar = () => (
    <footer className="md:hidden fixed bottom-0 left-0 w-full bg-gray-800 text-white shadow-lg z-50">
      <nav className="flex justify-around items-center h-14">
        <Link to="/" className={`flex flex-col items-center text-xs ${location.pathname === '/' ? 'text-white' : 'text-white'}`}>
          <FaHome className="text-xl mb-0.5" /> Accueil
        </Link>
        <Link to="/features" className={`flex flex-col items-center text-xs ${location.pathname === '/features' ? 'text-white' : 'text-white'}`}>
          <FaClipboardCheck className="text-xl mb-0.5" /> Fonctionnalités
        </Link>
        <Link to="/pricing" className={`flex flex-col items-center text-xs ${location.pathname === '/pricing' ? 'text-white' : 'text-white'}`}>
          <MdMonetizationOn className="text-xl mb-0.5" /> Tarifs
        </Link>
        <Link to="/contact" className={`flex flex-col items-center text-xs ${location.pathname === '/contact' ? 'text-white' : 'text-white'}`}>
          <MdContactPage className="text-xl mb-0.5" /> Contact
        </Link>
      </nav>
    </footer>
  );


  return (
    <div className="min-h-screen bg-background-alt font-sans text-gray-900">
      {/* Header (Desktop - visible sur grand écran) */}
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
      
      {/* Header (Mobile - Barre de navigation simplifiée pour petit écran) */}
      <header className="md:hidden fixed top-0 w-full bg-gray-200
 shadow-sm z-50">
        <nav className="px-4 py-3 flex items-center justify-between">
            <Link to="/" className="flex items-center text-gray-800 font-heading text-xl font-bold">
                 <div className="w-5 h-5 mr-1 bg-gray-800 [clip-path:polygon(0%_100%,100%_0%,100%_50%,0%_50%)]" /> PilotPro
            </Link>
            <div className="flex items-center space-x-3 text-gray-900">
                {/* Icônes de connexion/utilisateur */}
                <FaRegBuilding className="text-xl"/>
                <FaUserFriends className="text-xl"/>
            </div>
        </nav>
      </header>


      <main className="container mx-auto px-6 py-8 md:py-16 pt-20 md:pt-20 pb-20 md:pb-8"> {/* Augmente le padding-bottom pour le mobile */}
        <h1 className="font-heading text-3xl md:text-4xl font-bold text-gray-800 mb-2">
          Questions Fréquentes
        </h1>
        <p className="text-lg text-gray-900 mb-8">
          Trouvez rapidement les réponses à vos interrogations.
        </p>

        {/* Barre de Recherche */}
        <div className="relative mb-12">
          <input
            type="text"
            placeholder="Rechercher une question..."
            className="w-full p-3 pl-10 border border-border-grey rounded-lg focus:ring-gray-800 focus:border-gray-800 transition-all"
          />
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-border-grey" />
        </div>

        {/* Contenu FAQ par Catégorie */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Colonne 1 : Navigation des Catégories (Affichée sur grand écran) */}
          <div className="hidden lg:block space-y-2">
            <h3 className="font-heading text-xl font-semibold mb-3">Général</h3>
            {faqData.map((data, index) => (
              <a key={index} href={`#${data.category.replace(/\s/g, '-')}`} className="block p-3 rounded-lg hover:bg-gray-200
 hover:text-gray-800 transition-colors">
                {data.category}
              </a>
            ))}
            <a href="#contact-us" className="block p-3 rounded-lg hover:bg-gray-200
 hover:text-gray-800 transition-colors">
                Support
            </a>
          </div>

          {/* Colonne 2 : Accordéons des Questions/Réponses */}
          <div className="lg:col-span-2">
            {faqData.map((data, categoryIndex) => (
              <div key={categoryIndex} id={data.category.replace(/\s/g, '-')} className="mb-10">
                <h3 className="font-heading text-2xl font-bold text-gray-900 mb-4">
                    {data.category}
                </h3>
                {data.questions.map((qA, questionIndex) => {
                  // Index unique pour chaque question
                  const uniqueIndex = `${categoryIndex}-${questionIndex}`;
                  return (
                    <AccordionItem
                      key={uniqueIndex}
                      question={qA.q}
                      answer={qA.a}
                      isOpen={openIndex === uniqueIndex}
                      toggleAccordion={() => handleToggle(uniqueIndex)}
                    />
                  );
                })}
              </div>
            ))}
          </div>
        </div>

        {/* Section Contact - Si la question n'est pas trouvée */}
        <section id="contact-us" className="flex flex-col md:flex-row items-center justify-between p-6 bg-gray-200
 rounded-lg shadow-md mt-16 border border-border-grey">
            <h3 className="font-heading text-xl font-semibold text-gray-900 mb-4 md:mb-0">
                Votre question n'est pas ici ?
            </h3>
            <Link to="/contact" className="flex items-center px-6 py-3 bg-gray-800 text-white rounded-md hover:bg-opacity-90 transition-colors">
                <FaLifeRing className="mr-2" /> Contacter le Support
            </Link>
        </section>

      </main>

      {/* Footer (Desktop - simple footer) */}
      <footer className="hidden md:block bg-gray-800 py-6 px-6 text-white mt-12">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <p>&copy; {new Date().getFullYear()} PilotPro.</p>
          <div className="flex space-x-4">
            {/* Liens du footer */}
            <Link to="/about" className="hover:text-green-300">À Propos</Link>
            <Link to="/terms" className="hover:text-green-300">Conditions</Link>
            <Link to="/privacy" className="hover:text-green-300">Confidentialité</Link>
          </div>
          <div className="flex space-x-4">
              {/* Icônes des réseaux sociaux */}
              {/* <FaTwitter className="text-xl"/> <FaFacebook className="text-xl"/> <FaLinkedin className="text-xl"/> */}
          </div>
        </div>
      </footer>
      
      {/* Mobile Navigation Bar (Fixed at the bottom) */}
      <MobileNavbar />
    </div>
  );
};

export default FAQPage;