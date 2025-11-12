// src/components/LandingPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';
// Import des icônes de react-icons
import { FaPlay, FaEye, FaBuilding, FaUsers, FaChartLine, FaBoxes, FaUserFriends, FaClipboardCheck, FaShieldAlt, FaRegEye } from 'react-icons/fa';
import { BsGraphUp } from 'react-icons/bs'; // Pour l'icône de décisions éclairées
import { MdOutlineSecurity } from 'react-icons/md'; // Pour l'icône de sécurité
import { IoBuildOutline, IoBuildSharp } from 'react-icons/io5';
import { FaBuildingShield, FaEyeDropper, FaEyeLowVision, FaEyeSlash } from 'react-icons/fa6';

// Import de votre icône de logo (si vous l'avez en SVG ou un composant React)
// Pour cet exemple, je vais simuler l'icône et utiliser FaPlay pour le logo textuel "PilotPro"
// Si vous avez un SVG, vous l'importeriez et l'utiliseriez ici.
// import { ReactComponent as PilotProLogoIcon } from '../assets/pilotpro-icon.svg'; // Exemple si vous avez un SVG

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-background-light font-sans text-gray-900">
      {/* Header / Navigation Bar */}
      <header className="fixed top-0 left-0 w-full bg-background-light shadow-sm z-50">
        <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center text-gray-800 font-heading text-2xl font-bold">
            <img src="/logopilotpro.png" className='w-35 h-15' alt="Logo PilotPro" />
          </Link>
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/features" className="hover:text-gray-800">Fonctionnalités</Link>
            <Link to="/pricing" className="hover:text-gray-800">Tarifs</Link>
            <Link to="/contact" className="hover:text-gray-800">Contact</Link>
            <Link to="/login" className="px-4 py-2 border border-gray-800 text-gray-800 rounded-md hover:bg-gray-800 hover:text-white transition-colors">Se connecter</Link>
            <Link to="/register" className="px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-opacity-90 transition-colors">S'inscrire</Link>
          </div>
          {/* Mobile Menu Icon (Hamburger) */}
          <div className="md:hidden">
            <button className="text-gray-900 focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
            </button>
          </div>
        </nav>
        {/* Mobile Navigation (Hidden by default, can be toggled with JS) */}
        {/* <div className="md:hidden bg-background-light pb-4">
          <div className="flex flex-col items-center space-y-2">
            <Link to="/features" className="py-2 hover:text-gray-800">Fonctionnalités</Link>
            <Link to="/pricing" className="py-2 hover:text-gray-800">Tarifs</Link>
            <Link to="/contact" className="py-2 hover:text-gray-800">Contact</Link>
            <Link to="/login" className="w-2/3 px-4 py-2 border border-gray-800 text-gray-800 rounded-md text-center">Se connecter</Link>
            <Link to="/register" className="w-2/3 px-4 py-2 bg-gray-800 text-white rounded-md text-center">S'inscrire</Link>
          </div>
        </div> */}
      </header>

      <main className="pt-20"> {/* Padding top pour éviter le chevauchement avec le header fixe */}

        {/* Hero Section */}
        <section className="container mx-auto px-6 py-16 flex flex-col md:flex-row items-center justify-between bg-background-light">
          <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
            <h1 className="font-heading text-4xl md:text-5xl font-bold leading-tight text-gray-900 mb-4">
              Pilotez votre entreprise vers le succès avec <span className="text-gray-500">PilotPro</span>.
            </h1>
            <p className="text-lg md:text-xl text-gray-900 mb-8">
              La solution ERP tout-en-un pour gérer finance, stock, RH, et opérations, conçue pour votre croissance.
            </p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/register" className="px-6 py-3 bg-gray-800 text-white rounded-md shadow-lg hover:bg-opacity-90 transition-colors text-lg">
                Commencer Gratuitement
              </Link>
              <Link to="/demo" className="px-6 py-3 border border-gray-800 text-gray-800 rounded-md hover:bg-gray-800 hover:text-white transition-colors text-lg">
                Demander une Démo
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            {/* Remplacer par votre illustration de la section Héro */}
            <img src="/hero.png" alt="PilotPro Illustration" className="max-w-full h-auto" />
          </div>
        </section>

        {/* Section PilotPro en Chiffres */}
        <section className="bg-background-alt py-16 px-6">
          <div className="container mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-12">
              PilotPro en quelques chiffres clés
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Stat Card 1 */}
              <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center">
                <FaRegEye className="text-4xl text-green-300 mb-4" /> {/* Icône pour visiteurs */}
                <p className="font-heading text-4xl font-bold text-gray-800 mb-2">45 000+</p>
                <p className="text-lg text-gray-900">Visiteurs mensuels sur notre site</p>
              </div>
              {/* Stat Card 2 */}
              <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center">
                <FaBuildingShield className="text-4xl text-orange-300 mb-4" /> {/* Icône pour entreprises */}
                <p className="font-heading text-4xl font-bold text-gray-800 mb-2">1 200+</p>
                <p className="text-lg text-gray-900">Entreprises inscrites</p>
              </div>
              {/* Stat Card 3 */}
              <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center">
                <FaUsers className="text-4xl text-blue-300 mb-4" /> {/* Icône pour employés */}
                <p className="font-heading text-4xl font-bold text-gray-800 mb-2">25 000+</p>
                <p className="text-lg text-gray-900">Employés gérés sur la plateforme</p>
              </div>
                {/* Stat Card 4 (example of a fourth stat) */}
              <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center">
                <BsGraphUp className="text-4xl text-green-300 mb-4" /> {/* Icône pour croissance */}
                <p className="font-heading text-4xl font-bold text-gray-800 mb-2">98%</p>
                <p className="text-lg text-gray-900">Taux de satisfaction client</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section Nos Fonctionnalités */}
        <section className="container mx-auto px-6 py-16 bg-background-light">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Nos Fonctionnalités
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature Card 1 */}
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <FaChartLine className="text-5xl text-green-300 mx-auto mb-4" />
              <h3 className="font-heading text-xl font-semibold text-gray-900 mb-2">Gestion Financière</h3>
              <p className="text-gray-900">Gérez vos flux financiers avec précision et clarté.</p>
            </div>
            {/* Feature Card 2 */}
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <FaBoxes className="text-5xl text-orange-300 mx-auto mb-4" />
              <h3 className="font-heading text-xl font-semibold text-gray-900 mb-2">Gestion des Stocks</h3>
              <p className="text-gray-900">Optimisez vos entrepôts, suivez vos produits en temps réel.</p>
            </div>
            {/* Feature Card 3 */}
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <FaUserFriends className="text-5xl text-gray-800 mx-auto mb-4" />
              <h3 className="font-heading text-xl font-semibold text-gray-900 mb-2">Ressources Humaines</h3>
              <p className="text-gray-900">Simplifiez la gestion de votre personnel et de la paie.</p>
            </div>
            {/* Feature Card 4 */}
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <FaClipboardCheck className="text-5xl text-green-300 mx-auto mb-4" />
              <h3 className="font-heading text-xl font-semibold text-gray-900 mb-2">Gestion Opérationnelle</h3>
              <p className="text-gray-900">Suivez vos projets et vos clients de A à Z.</p>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="bg-background-alt py-16 px-6 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Prêt à transformer votre gestion d'entreprise ?
          </h2>
          <Link to="/register" className="px-8 py-4 bg-gray-800 text-white rounded-md shadow-lg hover:bg-opacity-90 transition-colors text-xl">
            Créer mon Compte
          </Link>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 py-8 px-6 text-white">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left space-y-4 md:space-y-0">
          <p>&copy; {new Date().getFullYear()} PilotPro. Tous droits réservés.</p>
          <div className="flex space-x-6">
            <Link to="/about" className="hover:text-green-300">À Propos</Link>
            <Link to="/terms" className="hover:text-green-300">Conditions</Link>
            <Link to="/privacy" className="hover:text-green-300">Confidentialité</Link>
          </div>
          <div className="flex space-x-4">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-300 text-2xl"><FaPlay /></a> {/* Placeholder, replace with actual social icons */}
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-300 text-2xl"><FaPlay /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-300 text-2xl"><FaPlay /></a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;