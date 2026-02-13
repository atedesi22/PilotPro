import React from 'react';
import { 
  LineChart, BrainCircuit, TrendingUp, 
  Target, Zap, Lightbulb, ArrowRight 
} from 'lucide-react';

const Analytics = () => {
  return (
    <div className="space-y-8">
      {/* Header avec badge IA */}
      <div className="flex justify-between items-start">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-indigo-600 text-white text-[10px] font-black px-2 py-0.5 rounded uppercase tracking-widest">AI Engine</span>
            <h1 className="text-2xl font-bold text-slate-900">Décisions Éclairées</h1>
          </div>
          <p className="text-slate-500">L'intelligence artificielle analyse vos flux pour anticiper vos besoins.</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-xl text-sm font-semibold hover:bg-slate-800 transition-all">
          <Zap size={18} className="text-amber-400" /> Générer un rapport IA
        </button>
      </div>

      {/* Cartes d'Insights IA */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <InsightCard 
          icon={<Lightbulb className="text-amber-500" />}
          title="Optimisation Stock"
          desc="Selon les tendances de l'agence Nord, prévoyez un réapprovisionnement de Lubrifiant d'ici 4 jours."
          action="Commander maintenant"
        />
        <InsightCard 
          icon={<Target className="text-indigo-500" />}
          title="Objectif Ventes"
          desc="Vous êtes à 85% de l'objectif mensuel. PilotCom suggère une campagne promo ce weekend."
          action="Lancer PilotCom"
        />
        <InsightCard 
          icon={<BrainCircuit className="text-emerald-500" />}
          title="Prévision Cash-flow"
          desc="Flux positif attendu de +15% sur le prochain trimestre grâce à la réduction des délais agences."
          action="Voir détails"
        />
      </div>

      {/* Zone de Visualisation (Graphique simulé) */}
      <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm min-h-[400px]">
        <div className="flex justify-between items-center mb-10">
          <h3 className="font-bold text-slate-900 flex items-center gap-2">
            <LineChart size={20} className="text-indigo-600" /> Comparaison Performance Agences
          </h3>
          <div className="flex gap-2">
            <span className="flex items-center gap-1 text-xs font-bold text-slate-400"><div className="w-2 h-2 bg-indigo-500 rounded-full"/> Littoral</span>
            <span className="flex items-center gap-1 text-xs font-bold text-slate-400"><div className="w-2 h-2 bg-emerald-500 rounded-full"/> Nord</span>
          </div>
        </div>
        
        {/* Simulation de graphique avec des barres simples pour l'instant */}
        <div className="flex items-end justify-between h-48 gap-4 px-4 border-b border-slate-100">
          {[40, 70, 45, 90, 65, 80, 95, 50, 60, 75, 85, 100].map((h, i) => (
            <div key={i} className="w-full bg-slate-100 rounded-t-lg relative group">
              <div 
                style={{ height: `${h}%` }} 
                className="bg-indigo-500 rounded-t-lg transition-all group-hover:bg-indigo-600 group-hover:shadow-lg group-hover:shadow-indigo-200"
              />
              <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[9px] font-bold text-slate-400">M{i+1}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const InsightCard = ({ icon, title, desc, action }) => (
  <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:border-indigo-200 transition-all group">
    <div className="p-3 bg-slate-50 rounded-xl w-fit mb-4 group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <h4 className="font-bold text-slate-900 mb-2">{title}</h4>
    <p className="text-sm text-slate-600 leading-relaxed mb-4">{desc}</p>
    <button className="text-xs font-black uppercase tracking-widest text-indigo-600 flex items-center gap-1 hover:gap-2 transition-all">
      {action} <ArrowRight size={14} />
    </button>
  </div>
);

export default Analytics;