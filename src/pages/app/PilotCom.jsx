import React, { useState } from 'react';
import { 
  Type, Image as ImageIcon, Square, MousePointer2, 
  Download, Share2, Layers, Palette, Wand2, Undo, Redo ,
} from 'lucide-react';
import { NavLink } from 'react-router-dom';
import SocialAnalytics from './SocialAnalytics';

const PilotCom = () => {
  return (
    <div className="space-y-12 pb-20">

      {/* 1. SECTION STUDIO */}
      <section className="h-[calc(100vh-140px)] flex flex-col gap-4">
        {/* Header de l'éditeur */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
          <div className="flex items-center gap-4">
            <h1 className="text-xl font-bold text-slate-900">PilotCom Studio</h1>
            <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-lg">
              <button className="p-1.5 hover:bg-white rounded-md text-slate-500 transition-all"><Undo size={16}/></button>
              <button className="p-1.5 hover:bg-white rounded-md text-slate-500 transition-all"><Redo size={16}/></button>
            </div>
          </div>
          <div className="flex gap-3">
            <button className="flex items-center gap-2 px-4 py-2 border border-slate-200 rounded-xl text-sm font-semibold text-slate-700 hover:bg-slate-50">
              <Share2 size={18} /> Partager
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-xl text-sm font-semibold hover:bg-indigo-700">
              <Download size={18} /> Exporter le visuel
            </button>
          </div>
        </div>

        <div className="flex-grow flex gap-4 overflow-hidden">
          {/* Barre d'outils (Gauche) */}
          <aside className="w-16 md:w-20 bg-white border border-slate-200 rounded-2xl flex flex-col items-center py-6 gap-6 shadow-sm">
            <ToolIcon icon={<MousePointer2 size={20} />} label="Sélection" active />
            <ToolIcon icon={<Type size={20} />} label="Texte" />
            <ToolIcon icon={<ImageIcon size={20} />} label="Images" />
            <ToolIcon icon={<Square size={20} />} label="Formes" />
            <ToolIcon icon={<Palette size={20} />} label="Couleurs" />
            <div className="mt-auto">
              <ToolIcon icon={<Layers size={20} />} label="Calques" />
            </div>
          </aside>

          {/* Espace de travail (Milieu) */}
          <main className="flex-grow bg-slate-200 rounded-2xl border-2 border-dashed border-slate-300 flex items-center justify-center relative overflow-hidden group">
            {/* Simulation du Canvas */}
            <div className="w-[300px] h-[400px] md:w-[400px] md:h-[500px] bg-white shadow-2xl relative flex flex-col p-8 transition-transform group-hover:scale-[1.02]">
              {/* Contenu simulé du visuel */}
              <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center mb-6">
                  <Wand2 className="text-white" size={24}/>
              </div>
              <h2 className="text-3xl font-black text-slate-900 leading-tight uppercase italic">Promo <br/> Carburant</h2>
              <div className="mt-4 bg-amber-400 self-start px-4 py-1 font-bold text-sm transform -rotate-2">
                -15% CE WEEK-END
              </div>
              <p className="mt-auto text-[10px] text-slate-400 font-medium">Généré via PilotCom Studio - Blessing Petroleum</p>
            </div>
            
            {/* Badge d'aide IA */}
            <div className="absolute bottom-6 right-6 bg-slate-900 text-white px-4 py-2 rounded-full text-xs font-bold flex items-center gap-2 shadow-xl border border-slate-700">
              <Wand2 size={14} className="text-indigo-400" /> Assistant IA prêt
            </div>
          </main>

          {/* Propriétés (Droite - visible seulement sur grand écran) */}
          <aside className="hidden lg:flex w-64 bg-white border border-slate-200 rounded-2xl flex-col shadow-sm">
            <div className="p-4 border-b border-slate-100 font-bold text-sm text-slate-700 uppercase tracking-wider">
              Propriétés
            </div>
            <div className="p-4 space-y-6">
              <div>
                <label className="text-[10px] font-bold text-slate-400 uppercase">Position</label>
                <div className="grid grid-cols-2 gap-2 mt-2">
                  <div className="bg-slate-50 p-2 rounded text-xs text-center border border-slate-100">X: 120</div>
                  <div className="bg-slate-50 p-2 rounded text-xs text-center border border-slate-100">Y: 450</div>
                </div>
              </div>
              <div>
                <label className="text-[10px] font-bold text-slate-400 uppercase">Opacité</label>
                <input type="range" className="w-full mt-2 accent-indigo-600" />
              </div>
              <div>
                  <button className="w-full py-2 bg-indigo-50 text-indigo-600 rounded-xl text-xs font-bold hover:bg-indigo-100 transition-colors">
                      Remplacer par l'IA
                  </button>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* 2. SECTION ANALYTICS */}
      <section className="bg-white/50 p-8 rounded-[2.5rem] border border-slate-100">
        <SocialAnalytics />
      </section>
    </div>
      
  );
};

const ToolIcon = ({ icon, label, active = false }) => (
  <NavLink className={`flex flex-col items-center gap-1 group relative ${active ? 'text-indigo-600' : 'text-slate-400'}`}>
    <div className={`p-3 rounded-xl transition-all ${active ? 'bg-indigo-50 shadow-sm shadow-indigo-100' : 'hover:bg-slate-50'}`}>
      {icon}
    </div>
    <span className="text-[9px] font-bold uppercase tracking-tighter opacity-0 group-hover:opacity-100 transition-opacity">{label}</span>
  </NavLink>
);

export default PilotCom;