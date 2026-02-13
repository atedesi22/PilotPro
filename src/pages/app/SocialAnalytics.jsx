import React from 'react';
import { 
  BarChart3, Users, Heart, Share2, 
  Facebook, Instagram, Linkedin, ArrowUpRight 
} from 'lucide-react';

/* ... (Garder le code précédent du Studio PilotCom) ... */

const SocialAnalytics = () => {
  return (
    <div className="mt-12 space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
          <BarChart3 className="text-indigo-600" size={24} /> Performance Sociale (Bêta API)
        </h3>
        <span className="text-[10px] font-black bg-indigo-50 text-indigo-600 px-3 py-1 rounded-full uppercase tracking-widest">
          Sync en temps réel
        </span>
      </div>

      {/* Cartes de Stats par Réseau */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <SocialStatCard 
          platform="Facebook" 
          icon={<Facebook size={20} className="text-blue-600" />}
          reach="12.4k"
          engagement="+14%"
          color="hover:border-blue-200"
        />
        <SocialStatCard 
          platform="Instagram" 
          icon={<Instagram size={20} className="text-rose-500" />}
          reach="8.2k"
          engagement="+22%"
          color="hover:border-rose-200"
        />
        <SocialStatCard 
          platform="LinkedIn" 
          icon={<Linkedin size={20} className="text-sky-700" />}
          reach="4.1k"
          engagement="+5%"
          color="hover:border-sky-200"
        />
      </div>

      {/* Graphique de croissance des Réseaux */}
      <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
        <div className="flex items-center justify-between mb-8">
          <p className="text-sm font-bold text-slate-500 uppercase tracking-wider">Évolution de l'engagement global</p>
          <select className="text-xs font-bold bg-slate-50 border-none outline-none rounded-lg p-2 text-slate-600">
            <option>7 derniers jours</option>
            <option>30 derniers jours</option>
          </select>
        </div>
        
        {/* Simulation de graphique à barres comparatif */}
        <div className="flex items-end justify-between h-32 gap-2">
          {[45, 60, 55, 80, 70, 90, 100, 85, 95, 110, 120, 105].map((h, i) => (
            <div key={i} className="flex-grow flex flex-col items-center gap-2 group">
              <div className="w-full flex gap-1 items-end h-full">
                <div style={{ height: `${h * 0.6}%` }} className="flex-grow bg-blue-500/20 rounded-t-sm group-hover:bg-blue-500 transition-all" />
                <div style={{ height: `${h * 0.8}%` }} className="flex-grow bg-rose-500/20 rounded-t-sm group-hover:bg-rose-500 transition-all" />
                <div style={{ height: `${h}%` }} className="flex-grow bg-indigo-600 rounded-t-sm group-hover:shadow-lg transition-all" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const SocialStatCard = ({ platform, icon, reach, engagement, color }) => (
  <div className={`bg-white p-6 rounded-3xl border border-slate-100 transition-all ${color} group cursor-pointer`}>
    <div className="flex justify-between items-start mb-4">
      <div className="p-3 bg-slate-50 rounded-2xl group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <div className="flex items-center text-emerald-500 text-xs font-black">
        {engagement} <ArrowUpRight size={14} />
      </div>
    </div>
    <p className="text-xs font-bold text-slate-400 uppercase tracking-tighter">{platform}</p>
    <h4 className="text-2xl font-black text-slate-900 mt-1">{reach} <span className="text-[10px] text-slate-400">Portée</span></h4>
  </div>
);

export default SocialAnalytics;