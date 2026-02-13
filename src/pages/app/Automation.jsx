import React from 'react';
import { Play, Settings2, Plus, Zap, Bell, Mail, FileText, Database } from 'lucide-react';

const Automation = () => {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 font-display">Automatisations</h1>
          <p className="text-slate-500">Connectez vos modules pour automatiser les tâches répétitives.</p>
        </div>
        <button className="flex items-center gap-2 px-5 py-2.5 bg-indigo-600 text-white rounded-xl text-sm font-bold hover:bg-indigo-700 shadow-lg shadow-indigo-100 transition-all">
          <Plus size={18} /> Créer un Workflow
        </button>
      </div>

      {/* Liste des Workflows actifs */}
      <div className="grid grid-cols-1 gap-4">
        <WorkflowItem 
          name="Alerte Stock Critique" 
          trigger="Le stock tombe sous 10%" 
          action="Notification Slack & Email Achats" 
          isActive={true}
          icon={<Zap className="text-amber-500" />}
        />
        <WorkflowItem 
          name="Rapport Hebdomadaire Finance" 
          trigger="Chaque Lundi à 08:00" 
          action="Générer PDF et envoyer à la DG" 
          isActive={true}
          icon={<FileText className="text-blue-500" />}
        />
        <WorkflowItem 
          name="Sync Agence -> Central" 
          trigger="Nouvelle saisie en agence" 
          action="Mise à jour du Dashboard Global" 
          isActive={false}
          icon={<Database className="text-emerald-500" />}
        />
      </div>
    </div>
  );
};

const WorkflowItem = ({ name, trigger, action, isActive, icon }) => (
  <div className="bg-white p-6 rounded-2xl border border-slate-200 flex items-center justify-between group hover:border-indigo-300 transition-all">
    <div className="flex items-center gap-6">
      <div className="p-4 bg-slate-50 rounded-2xl group-hover:bg-indigo-50 transition-colors">
        {icon}
      </div>
      <div>
        <h4 className="font-bold text-slate-900">{name}</h4>
        <div className="flex items-center gap-4 mt-1 text-sm text-slate-500">
          <span className="flex items-center gap-1"><Play size={12}/> Trigger: {trigger}</span>
          <span className="flex items-center gap-1"><Settings2 size={12}/> Action: {action}</span>
        </div>
      </div>
    </div>
    <div className="flex items-center gap-4">
      <div className={`h-2 w-2 rounded-full ${isActive ? 'bg-emerald-500 animate-pulse' : 'bg-slate-300'}`} />
      <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
        {isActive ? 'Actif' : 'Pause'}
      </span>
    </div>
  </div>
);

export default Automation;