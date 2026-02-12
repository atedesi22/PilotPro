import React from 'react';
import { 
  ArrowUpRight, ArrowDownLeft, Filter, 
  Download, Plus, Calendar, FileText, CheckCircle2, Clock
} from 'lucide-react';

const Finance = () => {
  return (
    <div className="space-y-8">
      {/* Header Finance */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Finance & Trésorerie</h1>
          <p className="text-slate-500">Suivez vos flux de capitaux en temps réel sur toutes vos agences.</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 border border-slate-200 rounded-xl text-sm font-semibold hover:bg-white transition-all text-slate-700">
            <Download size={18} /> Exporter
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-xl text-sm font-semibold hover:bg-indigo-700 transition-all">
            <Plus size={18} /> Nouvelle Transaction
          </button>
        </div>
      </div>

      {/* Cartes de Trésorerie */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <CashCard title="Solde Total" amount="45.200.500" currency="FCFA" trend="+5.2%" isUp={true} />
        <CashCard title="Entrées (Mois)" amount="8.400.000" currency="FCFA" trend="+12%" isUp={true} />
        <CashCard title="Sorties (Mois)" amount="2.150.000" currency="FCFA" trend="-2%" isUp={false} />
      </div>

      {/* Table des Transactions */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-slate-100 flex justify-between items-center">
          <h3 className="font-bold text-slate-900 text-lg">Transactions Récentes</h3>
          <button className="p-2 text-slate-500 hover:bg-slate-50 rounded-lg">
            <Filter size={20} />
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead className="bg-slate-50">
              <tr>
                <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Date / Agence</th>
                <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Type / Libellé</th>
                <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Montant</th>
                <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Statut</th>
                <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <TransactionRow 
                date="12 Fév 2026" agence="Agence Littoral"
                label="Vente Carburant Super" type="Entrée"
                amount="1.250.000" status="Validé"
              />
              <TransactionRow 
                date="11 Fév 2026" agence="Agence Nord"
                label="Maintenance Groupes" type="Sortie"
                amount="450.000" status="En attente"
              />
              <TransactionRow 
                date="10 Fév 2026" agence="Direction Générale"
                label="Paiement Fournisseur" type="Sortie"
                amount="2.000.000" status="Validé"
              />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

/* --- Sous-composants --- */

const CashCard = ({ title, amount, currency, trend, isUp }) => (
  <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden group">
    <div className={`absolute top-0 right-0 w-24 h-24 -mr-8 -mt-8 rounded-full opacity-5 transition-all group-hover:scale-110 ${isUp ? 'bg-emerald-500' : 'bg-rose-500'}`} />
    <p className="text-sm font-medium text-slate-500">{title}</p>
    <div className="mt-2 flex items-baseline gap-2">
      <h2 className="text-2xl font-bold text-slate-900">{amount}</h2>
      <span className="text-xs font-bold text-slate-400">{currency}</span>
    </div>
    <div className={`mt-4 inline-flex items-center text-xs font-bold px-2 py-1 rounded-full ${isUp ? 'bg-emerald-50 text-emerald-600' : 'bg-rose-50 text-rose-600'}`}>
      {isUp ? <ArrowUpRight size={14} className="mr-1"/> : <ArrowDownLeft size={14} className="mr-1"/>}
      {trend}
    </div>
  </div>
);

const TransactionRow = ({ date, agence, label, type, amount, status }) => (
  <tr className="hover:bg-slate-50 transition-colors">
    <td className="p-4">
      <div className="flex flex-col">
        <span className="text-sm font-bold text-slate-900">{date}</span>
        <span className="text-xs text-slate-500">{agence}</span>
      </div>
    </td>
    <td className="p-4">
      <div className="flex items-center gap-3">
        <div className={`p-2 rounded-lg ${type === 'Entrée' ? 'bg-emerald-50 text-emerald-600' : 'bg-rose-50 text-rose-600'}`}>
          <FileText size={18} />
        </div>
        <span className="text-sm font-medium text-slate-700">{label}</span>
      </div>
    </td>
    <td className="p-4">
      <span className={`text-sm font-bold ${type === 'Entrée' ? 'text-emerald-600' : 'text-rose-600'}`}>
        {type === 'Entrée' ? '+' : '-'} {amount} FCFA
      </span>
    </td>
    <td className="p-4">
      <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold ${status === 'Validé' ? 'bg-emerald-50 text-emerald-700' : 'bg-amber-50 text-amber-700'}`}>
        {status === 'Validé' ? <CheckCircle2 size={14} /> : <Clock size={14} />}
        {status}
      </div>
    </td>
    <td className="p-4">
      <button className="text-slate-400 hover:text-indigo-600 font-bold text-xs uppercase tracking-wider">Détails</button>
    </td>
  </tr>
);

export default Finance;