import React, { useState } from 'react';
import { UserPlus, Mail, Shield, MapPin, Search } from 'lucide-react';

const StaffManager = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

  const staff = [
    { id: 1, name: "Atedesi Bohole", role: "Directeur Général", agency: "Siège Social", status: "Admin" },
    { id: 2, name: "Jean Dupont", role: "Chef de Dépôt", agency: "Kribi", status: "Manager" },
    { id: 3, name: "Marie Ngo", role: "Comptable", agency: "Yaoundé", status: "Staff" },
  ];

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <h1 className="text-2xl font-black text-slate-900 italic uppercase">Collaborateurs</h1>
        <button onClick={() => setIsModalOpen(true)}>
          <UserPlus size={20} /> Ajouter un membre
        </button>
      </div>

      {/* Barre de recherche Soft */}
      <div className="relative max-w-md">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
        <input 
          type="text" 
          placeholder="Rechercher un employé, un rôle..." 
          className="w-full bg-white border border-slate-100 rounded-2xl py-3 pl-12 pr-4 outline-none focus:ring-2 focus:ring-indigo-100 transition-all text-sm"
        />
      </div>

      {/* Table du personnel */}
      <div className="bg-white rounded-[2rem] border border-slate-100 shadow-sm overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead className="bg-slate-50/50">
            <tr>
              <th className="p-6 text-[10px] font-black text-slate-400 uppercase tracking-widest">Nom & Rôle</th>
              <th className="p-6 text-[10px] font-black text-slate-400 uppercase tracking-widest">Agence</th>
              <th className="p-6 text-[10px] font-black text-slate-400 uppercase tracking-widest">Statut</th>
              <th className="p-6 text-[10px] font-black text-slate-400 uppercase tracking-widest">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {staff.map((member) => (
              <tr key={member.id} className="hover:bg-slate-50/30 transition-colors">
                <td className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 bg-indigo-100 rounded-full flex items-center justify-center font-black text-indigo-600 text-xs">
                      {member.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-bold text-slate-900">{member.name}</p>
                      <p className="text-xs text-slate-500">{member.role}</p>
                    </div>
                  </div>
                </td>
                <td className="p-6">
                  <span className="flex items-center gap-1.5 text-sm text-slate-600">
                    <MapPin size={14} className="text-slate-400" /> {member.agency}
                  </span>
                </td>
                <td className="p-6">
                  <span className={`px-3 py-1 rounded-full text-[10px] font-black ${member.status === 'Admin' ? 'bg-indigo-100 text-indigo-700' : 'bg-slate-100 text-slate-600'}`}>
                    {member.status}
                  </span>
                </td>
                <td className="p-6">
                  <button className="text-xs font-bold text-indigo-600 hover:underline">Modifier</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <AddStaffModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} // Fonction pour fermer la modale
      />
    </div>
  );
};

const AddStaffModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[150] flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" onClick={onClose} />
      
      <div className="bg-white w-full max-w-lg rounded-[2.5rem] shadow-2xl p-8 relative z-10 animate-in fade-in zoom-in duration-200">
        <h2 className="text-2xl font-black text-slate-900 mb-6 italic uppercase tracking-tighter">Ajouter un Collaborateur</h2>
        
        <form className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Nom Complet</label>
              <input type="text" placeholder="Paul Emmanuel" className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-3 px-4 outline-none focus:ring-2 focus:ring-indigo-600/20" />
            </div>
            <div>
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Poste / Rôle</label>
              <input type="text" placeholder="Responsable Stock" className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-3 px-4 outline-none focus:ring-2 focus:ring-indigo-600/20" />
            </div>
          </div>

          <div>
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Email Professionnel</label>
            <input type="email" placeholder="nom@entreprise.com" className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-3 px-4 outline-none focus:ring-2 focus:ring-indigo-600/20" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Affectation Agence</label>
              <select className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-3 px-4 outline-none">
                <option>Siège Social</option>
                <option>Agence Yaoundé</option>
                <option>Dépôt Kribi</option>
              </select>
            </div>
            <div>
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Niveau d'accès (PilotID)</label>
              <select className="w-full bg-indigo-50 border border-indigo-100 text-indigo-700 rounded-2xl py-3 px-4 outline-none font-bold italic">
                <option>Utilisateur Simple</option>
                <option>Manager d'Agence</option>
                <option>Administrateur</option>
              </select>
            </div>
          </div>

          <div className="pt-4 flex gap-3">
            <button type="button" onClick={onClose} className="flex-grow py-4 bg-slate-100 text-slate-600 rounded-2xl font-bold hover:bg-slate-200 transition-all">Annuler</button>
            <button type="submit" className="flex-grow py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-slate-800 transition-all">Enregistrer</button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default StaffManager;