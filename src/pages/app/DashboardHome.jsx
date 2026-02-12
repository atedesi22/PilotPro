import React from 'react';
import { 
  TrendingUp, TrendingDown, Users, Package, 
  DollarSign, AlertCircle, ArrowUpRight 
} from 'lucide-react';


const DashboardHome = () => {
    return (
        <div className='space-y-8'>
            {/* Header & Section */}
            <div>
                <h1>Bonjour, Atedesi ! 👋🏾</h1>
                <p className="text-slate-500">Voici ce qui se passe dans votre entreprise aujourd'hui.</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCard 
                title="Trésorerie" 
                value="12.450.000 FCFA" 
                change="+12%" 
                isPositive={true} 
                icon={<DollarSign size={20} />} 
                color="text-emerald-600"
                bg="bg-emerald-50"
                />
                <StatCard 
                title="Stock Critique" 
                value="18 Articles" 
                change="8 agences" 
                isPositive={false} 
                icon={<Package size={20} />} 
                color="text-rose-600"
                bg="bg-rose-50"
                />
                <StatCard 
                title="Collaborateurs" 
                value="142" 
                change="+3 ce mois" 
                isPositive={true} 
                icon={<Users size={20} />} 
                color="text-blue-600" 
                bg="bg-blue-50"
                />
                <StatCard 
                title="Ventes (PilotCom)" 
                value="850.000 FCFA" 
                change="+5.4%" 
                isPositive={true} 
                icon={<TrendingUp size={20} />} 
                color="text-indigo-600"
                bg="bg-indigo-50"
                />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Chart Placeholder */}
                <div className="lg:col-span-2 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm min-h-[350px] flex flex-col">
                <div className="flex justify-between items-center mb-6">
                    <h3 className="font-bold text-slate-900">Flux de Trésorerie Global</h3>
                    <select className="text-sm border-slate-200 rounded-lg bg-slate-50">
                    <option>7 derniers jours</option>
                    <option>30 derniers jours</option>
                    </select>
                </div>
                <div className="flex-grow flex items-center justify-center bg-slate-50 rounded-xl border border-dashed border-slate-200">
                    <p className="text-slate-400 text-sm flex items-center gap-2">
                    <TrendingUp size={16}/> Visualisation des données en cours...
                    </p>
                </div>
                </div>

                {/* Recent Activities */}
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <h3 className="font-bold text-slate-900 mb-6">Activités des Agences</h3>
                <div className="space-y-6">
                    <ActivityItem 
                    agence="Agence Littoral" 
                    action="Remplissage données pétrolières" 
                    time="Il y a 10 min" 
                    status="success"
                    />
                    <ActivityItem 
                    agence="Agence Nord" 
                    action="Alerte rupture de stock" 
                    time="Il y a 45 min" 
                    status="warning"
                    />
                    <ActivityItem 
                    agence="Agence Ouest" 
                    action="Nouveau devis généré" 
                    time="Il y a 2h" 
                    status="info"
                    />
                </div>
                <button className="w-full mt-8 py-2 text-sm font-semibold text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors">
                    Voir tout le journal d'audit
                </button>
                </div>
            </div>
            </div>
        );
        };

        /* --- Sous-composants pour la propreté du code --- */

        const StatCard = ({ title, value, change, isPositive, icon, color, bg }) => (
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <div className="flex justify-between items-start mb-4">
            <div className={`p-2 rounded-lg ${bg} ${color}`}>
                {icon}
            </div>
            <div className={`flex items-center text-xs font-bold ${isPositive ? 'text-emerald-600' : 'text-rose-600'}`}>
                {isPositive ? <TrendingUp size={14} className="mr-1"/> : <TrendingDown size={14} className="mr-1"/>}
                {change}
            </div>
            </div>
            <p className="text-sm font-medium text-slate-500">{title}</p>
            <h4 className="text-xl font-bold text-slate-900 mt-1">{value}</h4>
        </div>
        );

        const ActivityItem = ({ agence, action, time, status }) => {
        const statusColors = {
            success: 'bg-emerald-500',
            warning: 'bg-rose-500',
            info: 'bg-indigo-500'
        };
        return (
            <div className="flex gap-4">
            <div className={`w-2 h-2 mt-2 rounded-full ${statusColors[status]}`}></div>
            <div>
                <p className="text-sm font-bold text-slate-900">{agence}</p>
                <p className="text-xs text-slate-500">{action}</p>
                <p className="text-[10px] text-slate-400 mt-1 uppercase font-bold tracking-wider">{time}</p>
            </div>
            </div>
  );
};

export default DashboardHome;