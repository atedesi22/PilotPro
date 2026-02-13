import React, { useState } from 'react';
import { Check, ShieldCheck, Zap, Rocket, Building2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const PricingPage = () => {
  const [isAnnual, setIsAnnual] = useState(true);

  const plans = [
    {
      name: "Standard",
      price: isAnnual ? "0" : "0",
      desc: "Idéal pour tester PilotPro avec une petite équipe.",
      features: ["Jusqu'à 5 utilisateurs", "Gestion Finance de base", "1 seule agence", "Support communauté"],
      icon: <Zap className="text-slate-400" />,
      color: "border-slate-200",
      button: "Commencer gratuitement",
      highlight: false
    },
    {
      name: "Essential",
      price: isAnnual ? "25.000" : "30.000",
      desc: "Le moteur pour les PME en pleine croissance.",
      features: ["Jusqu'à 15 utilisateurs", "Gestion multi-agences (3)", "Module Stock complet", "Support par email"],
      icon: <Rocket className="text-indigo-600" />,
      color: "border-indigo-200 shadow-xl shadow-indigo-50",
      button: "Choisir Essential",
      highlight: true
    },
    {
      name: "Pro",
      price: isAnnual ? "75.000" : "90.000",
      desc: "La puissance totale avec PilotCom intégré.",
      features: ["Agences illimitées", "PilotCom Studio inclus", "Analyses IA basiques", "Support Prioritaire"],
      icon: <ShieldCheck className="text-emerald-600" />,
      color: "border-emerald-200",
      button: "Choisir Pro",
      highlight: false
    },
    {
      name: "Entreprise",
      price: "Sur mesure",
      desc: "Pour les structures comme Blessing Petroleum.",
      features: ["IA & Automatisation avancée", "Déploiement sur site possible", "Account Manager dédié", "SLA 99.9%"],
      icon: <Building2 className="text-slate-900" />,
      color: "border-slate-900",
      button: "Contacter le commercial",
      highlight: false
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-20 px-6 font-sans text-slate-900">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
          Un plan pour chaque <span className="text-indigo-600">ambition</span>.
        </h1>
        <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto">
          Passez de la gestion papier à la puissance de PilotPro. Transparent, sans frais cachés.
        </p>

        {/* Toggle Mensuel/Annuel */}
        <div className="flex items-center justify-center gap-4 mb-16">
          <span className={`text-sm font-bold ${!isAnnual ? 'text-slate-900' : 'text-slate-400'}`}>Mensuel</span>
          <button 
            onClick={() => setIsAnnual(!isAnnual)}
            className="w-14 h-7 bg-slate-200 rounded-full relative p-1 transition-all"
          >
            <div className={`w-5 h-5 bg-indigo-600 rounded-full shadow-md transform transition-transform ${isAnnual ? 'translate-x-7' : 'translate-x-0'}`} />
          </button>
          <span className={`text-sm font-bold ${isAnnual ? 'text-slate-900' : 'text-slate-400'}`}>Annuel <span className="text-emerald-500 text-[10px] ml-1">(-20%)</span></span>
        </div>

        {/* Grille de Prix */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, idx) => (
            <div 
              key={idx} 
              className={`bg-white rounded-3xl border-2 p-8 flex flex-col text-left transition-all hover:scale-105 ${plan.color} relative overflow-hidden`}
            >
              {plan.highlight && (
                <div className="absolute top-0 right-0 bg-indigo-600 text-white text-[10px] font-black px-4 py-1 rounded-bl-xl uppercase">Populaire</div>
              )}
              
              <div className="p-3 bg-slate-50 rounded-2xl w-fit mb-6 italic font-bold">
                {plan.icon}
              </div>
              
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className="text-sm text-slate-500 mb-6 h-10 leading-snug">{plan.desc}</p>
              
              <div className="mb-8 flex items-baseline gap-1">
                <span className="text-4xl font-black">{plan.price}</span>
                {plan.price !== "Sur mesure" && <span className="text-slate-400 font-bold text-sm">FCFA / mois</span>}
              </div>

              <ul className="space-y-4 mb-10 flex-grow">
                {plan.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-3 text-sm font-medium text-slate-600">
                    <Check size={18} className="text-emerald-500 shrink-0" /> {feature}
                  </li>
                ))}
              </ul>

              <Link 
                to="/register"
                className={`w-full py-4 rounded-2xl text-center text-sm font-black transition-all ${
                  plan.highlight 
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-100 hover:bg-indigo-700' 
                  : 'bg-slate-100 text-slate-900 hover:bg-slate-200'
                }`}
              >
                {plan.button}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingPage;