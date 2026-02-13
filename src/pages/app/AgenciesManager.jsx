import React, { useState } from 'react';
import { Building2, Plus, MapPin, Phone, Users, MoreVertical, Search } from 'lucide-react';

const AgenciesManager = () => {
  const [showAddModal, setShowAddModal] = useState(false);
const [isModalOpen, setIsModalOpen] = useState(false);

  const agencies = [
    { id: 1, name: "Siège Social - Douala", location: "Akwa, Rue Joffre", staff: 24, status: "Principal" },
    { id: 2, name: "Agence Yaoundé", location: "Bastos", staff: 12, status: "Actif" },
    { id: 3, name: "Dépôt Pétrolier Kribi", location: "Zone Portuaire", staff: 8, status: "Actif" },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black text-slate-900 italic uppercase">Gestion des Agences</h1>
          <p className="text-slate-500 text-sm">Contrôlez l'ensemble de vos points de vente et dépôts.</p>
        </div>
        <button onClick={() => setIsModalOpen(true)}>
          <Plus size={20} /> Nouvelle Agence
        </button>
      </div>

      {/* Liste des Agences */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {agencies.map((agency) => (
          <div key={agency.id} className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-md transition-all group">
            <div className="flex justify-between items-start mb-6">
              <div className="p-4 bg-indigo-50 rounded-2xl text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                <Building2 size={24} />
              </div>
              <span className={`text-[10px] font-black uppercase px-3 py-1 rounded-full ${agency.status === 'Principal' ? 'bg-amber-100 text-amber-700' : 'bg-emerald-100 text-emerald-700'}`}>
                {agency.status}
              </span>
            </div>
            <h3 className="text-lg font-black text-slate-900 mb-2">{agency.name}</h3>
            <div className="space-y-3 text-sm text-slate-500">
              <div className="flex items-center gap-2"><MapPin size={14}/> {agency.location}</div>
              <div className="flex items-center gap-2"><Users size={14}/> {agency.staff} Employés</div>
            </div>
            <div className="mt-6 pt-6 border-t border-slate-50 flex gap-2">
              <button className="flex-grow py-2 bg-slate-50 text-slate-600 rounded-xl text-xs font-bold hover:bg-slate-100">Gérer l'agence</button>
              <button className="p-2 bg-slate-50 text-slate-400 rounded-xl hover:text-slate-600"><MoreVertical size={16}/></button>
            </div>
          </div>
        ))}
      </div>
      <AddAgencyModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} // Fonction pour fermer la modale
      />
    </div>
  );
};

const AddAgencyModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[150] flex items-center justify-center px-4">
      {/* Overlay sombre */}
      <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" onClick={onClose} />
      
      {/* Contenu de la Modale */}
      <div className="bg-white w-full max-w-md rounded-[2.5rem] shadow-2xl p-8 relative z-10 animate-in fade-in zoom-in duration-200">
        <h2 className="text-2xl font-black text-slate-900 mb-6 italic uppercase tracking-tighter">Nouvelle Agence</h2>
        
        <form className="space-y-4">
          <div>
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Nom de l'entité</label>
            <input type="text" placeholder="Ex: Agence Littoral" className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-3 px-4 outline-none focus:ring-2 focus:ring-indigo-600/20" />
          </div>

          <div>
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Localisation</label>
            <input type="text" placeholder="Ville, Quartier..." className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-3 px-4 outline-none focus:ring-2 focus:ring-indigo-600/20" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Type</label>
              <select className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-3 px-4 outline-none">
                <option>Point de vente</option>
                <option>Dépôt / Stock</option>
                <option>Bureau</option>
              </select>
            </div>
            <div>
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Téléphone</label>
              <input type="tel" placeholder="+237..." className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-3 px-4 outline-none focus:ring-2 focus:ring-indigo-600/20" />
            </div>
          </div>

          <div className="pt-4 flex gap-3">
            <button type="button" onClick={onClose} className="flex-grow py-4 bg-slate-100 text-slate-600 rounded-2xl font-bold hover:bg-slate-200 transition-all">Annuler</button>
            <button type="submit" className="flex-grow py-4 bg-indigo-600 text-white rounded-2xl font-bold hover:bg-indigo-700 shadow-lg shadow-indigo-100 transition-all">Créer l'agence</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AgenciesManager;