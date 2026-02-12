import React from 'react';
import { 
  Boxes, AlertTriangle, ArrowRightLeft, 
  Plus, Search, MoreHorizontal, History 
} from 'lucide-react';

const Stock = () => {
  return (
    <div className="space-y-8">
      {/* Header Stock */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Gestion des Stocks</h1>
          <p className="text-slate-500">Supervisez vos inventaires et vos transferts inter-agences.</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 border border-slate-200 rounded-xl text-sm font-semibold text-slate-700 hover:bg-white">
            <History size={18} /> Historique
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-xl text-sm font-semibold hover:bg-indigo-700">
            <Plus size={18} /> Ajouter un produit
          </button>
        </div>
      </div>

      {/* Vue d'ensemble */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
          <div className="p-3 bg-indigo-50 text-indigo-600 rounded-xl"><Boxes size={24}/></div>
          <div>
            <p className="text-sm text-slate-500">Articles Totaux</p>
            <h4 className="text-xl font-bold">1,240</h4>
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-rose-100 shadow-sm flex items-center gap-4 border-l-4 border-l-rose-500">
          <div className="p-3 bg-rose-50 text-rose-600 rounded-xl"><AlertTriangle size={24}/></div>
          <div>
            <p className="text-sm text-slate-500">Alertes Rupture</p>
            <h4 className="text-xl font-bold">12 articles</h4>
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
          <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl"><ArrowRightLeft size={24}/></div>
          <div>
            <p className="text-sm text-slate-500">Transferts en cours</p>
            <h4 className="text-xl font-bold">5 agences</h4>
          </div>
        </div>
      </div>

      {/* Liste des Produits */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-slate-100 flex flex-col sm:flex-row justify-between gap-4">
          <div className="relative w-full sm:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input type="text" placeholder="Rechercher un article..." className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-indigo-500 outline-none" />
          </div>
          <select className="px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm outline-none">
            <option>Toutes les agences</option>
            <option>Littoral</option>
            <option>Nord</option>
          </select>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead className="bg-slate-50">
              <tr>
                <th className="p-4 text-xs font-bold text-slate-500 uppercase">Article / SKU</th>
                <th className="p-4 text-xs font-bold text-slate-500 uppercase">Emplacement</th>
                <th className="p-4 text-xs font-bold text-slate-500 uppercase">Stock Actuel</th>
                <th className="p-4 text-xs font-bold text-slate-500 uppercase">Niveau d'alerte</th>
                <th className="p-4 text-xs font-bold text-slate-500 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <StockRow 
                name="Carburant Super" sku="FUEL-SUP-01" 
                location="Dépôt Douala" qty="15,000 L" 
                alert="5,000 L" status="optimal" 
              />
              <StockRow 
                name="Lubrifiant Quartz 5000" sku="LUB-QZ-05" 
                location="Agence Nord" qty="45" 
                alert="50" status="critique" 
              />
              <StockRow 
                name="Gaz domestique 12kg" sku="GAS-12KG" 
                location="Agence Ouest" qty="120" 
                alert="20" status="optimal" 
              />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const StockRow = ({ name, sku, location, qty, alert, status }) => (
  <tr className="hover:bg-slate-50 transition-colors">
    <td className="p-4 text-sm font-bold text-slate-900">
      {name} <br/> <span className="text-[10px] text-slate-400 font-mono tracking-tighter uppercase">{sku}</span>
    </td>
    <td className="p-4 text-sm text-slate-600">{location}</td>
    <td className="p-4 text-sm font-bold text-slate-900">{qty}</td>
    <td className="p-4">
      <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold ${status === 'critique' ? 'bg-rose-50 text-rose-700' : 'bg-emerald-50 text-emerald-700'}`}>
        {status === 'critique' ? <AlertTriangle size={14} /> : <Boxes size={14} />}
        Alerte à {alert}
      </div>
    </td>
    <td className="p-4">
      <button className="p-2 text-slate-400 hover:text-indigo-600 rounded-lg">
        <MoreHorizontal size={18} />
      </button>
    </td>
  </tr>
);

export default Stock;