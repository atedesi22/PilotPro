import React from 'react';
import { Target, Lightbulb, ShieldCheck, Users, Globe, Rocket } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="bg-white min-h-screen font-sans text-slate-900">
      {/* Hero Section - La Vision */}
      <section className="py-24 px-6 bg-slate-50 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="bg-indigo-100 text-indigo-700 text-xs font-black px-4 py-1 rounded-full uppercase tracking-widest">Notre Mission</span>
          <h1 className="text-4xl md:text-6xl font-black mt-6 mb-8 tracking-tight italic">
            Réinventer la gestion pour les <span className="text-indigo-600">géants de demain.</span>
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed italic">
            "PilotPro n'est pas né dans un bureau climatisé, mais sur le terrain, au milieu des flux de données pétrolières et des défis logistiques réels."
          </p>
        </div>
      </section>

      {/* Story Section - Ton expérience */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-square bg-indigo-600 rounded-3xl overflow-hidden shadow-2xl relative group">
                <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-all" />
                {/* Ici tu pourras mettre une photo de toi en consultant ou une illustration pro */}
                <div className="absolute bottom-8 left-8 text-white">
                    <p className="text-3xl font-black italic uppercase">Innovation <br/> Terrain</p>
                </div>
            </div>
            {/* Décoration géométrique */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-amber-400 rounded-2xl -z-10 animate-pulse" />
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl font-black uppercase italic tracking-tighter">L'Origine du projet</h2>
            <p className="text-slate-600 leading-relaxed">
              En tant que stagiaire consultant au sein d'une entreprise pétrolière majeure, j'ai été témoin des failles des systèmes centralisés traditionnels. La latence des données entre les agences et la direction n'était pas qu'un problème technique, c'était un frein à la croissance.
            </p>
            <p className="text-slate-600 leading-relaxed font-bold">
              J'ai vu des équipes frustrées par des logiciels rigides. J'ai donc imaginé PilotPro : une solution décentralisée, légère et intelligente, capable de transformer chaque agence en un centre de décision autonome.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-6">
                <div>
                    <h4 className="font-black text-indigo-600 text-2xl">14+</h4>
                    <p className="text-xs font-bold text-slate-400 uppercase">Services connectés</p>
                </div>
                <div>
                    <h4 className="font-black text-indigo-600 text-2xl">100%</h4>
                    <p className="text-xs font-bold text-slate-400 uppercase">Cloud & Décentralisé</p>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* NovaVerse Concept - "Obsolètes mais nécessaires" */}
      <section className="py-20 px-6 bg-slate-900 text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center relative z-10">
          <Rocket className="text-indigo-400 mb-6" size={48} />
          <h2 className="text-3xl md:text-5xl font-black mb-8 italic uppercase tracking-tighter">
            Propulsé par <span className="text-indigo-500">NovaVerse</span>
          </h2>
          <p className="max-w-3xl text-slate-400 text-lg leading-relaxed mb-12">
            PilotPro est le premier pilier de l'écosystème NovaVerse. Notre philosophie ? Utiliser les infrastructures existantes des GAFAM pour construire leurs successeurs. Nous rendons le matériel "nécessaire", mais nous reprenons le contrôle de l'intelligence et de la donnée.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            <ValueCard 
                icon={<ShieldCheck className="text-emerald-400" />} 
                title="Souveraineté" 
                desc="Vos données, vos règles. Une étanchéité totale entre les agences."
            />
            <ValueCard 
                icon={<Target className="text-amber-400" />} 
                title="Agilité" 
                desc="Une interface conçue pour la vitesse, du terrain à la DG."
            />
            <ValueCard 
                icon={<Globe className="text-indigo-400" />} 
                title="Impact" 
                desc="Démocratiser la puissance de l'IA pour toutes les PME africaines et internationales."
            />
          </div>
        </div>
        {/* Effet visuel de fond */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl -mr-20 -mt-20" />
      </section>
    </div>
  );
};

const ValueCard = ({ icon, title, desc }) => (
  <div className="bg-slate-800/50 p-8 rounded-3xl border border-slate-700 hover:border-indigo-500 transition-all group">
    <div className="mb-4 transform group-hover:scale-110 transition-transform w-fit mx-auto">
        {icon}
    </div>
    <h4 className="font-bold text-xl mb-2">{title}</h4>
    <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
  </div>
);

export default AboutPage;