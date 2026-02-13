import React, { useState } from 'react';
import { 
  LayoutDashboard, Wallet, Boxes, PieChart, 
  ShieldCheck, Megaphone, Users, Settings, 
  Menu, Bell, Search, Zap, Cpu, Rocket, X
} from 'lucide-react';
import { NavLink, useParams } from 'react-router-dom';

const DashboardLayout = ({ children, userTier = 'Pro' }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false); // Fermé par défaut sur mobile
  const {companySlug} = useParams();
  const menuItems = [
    { icon: <LayoutDashboard size={20} />, label: 'Dashboard', path: '/', tier: 'Standard' },
    { icon: <Wallet size={20} />, label: 'Finance', path: '/finance', tier: 'Standard' },
    { icon: <Boxes size={20} />, label: 'Stock', path: '/stock', tier: 'Standard' },
    { icon: <PieChart size={20} />, label: 'Décisions', path: '/ai', tier: 'Essential' },
    { icon: <Megaphone size={20} />, label: 'PilotCom', path: '/marketing', tier: 'Entreprise' },
    // { icon: <Cpu size={20} />, label: 'IA Analyse', path: '/ai', tier: 'Pro' },
    { icon: <Zap size={20} />, label: 'Automation', path: '/auto', tier: 'Entreprise' },
  ];

  return (
    <div className="flex h-screen bg-slate-50 font-sans overflow-hidden">
      
      {/* OVERLAY MOBILE (Affiche quand la sidebar est ouverte sur mobile) */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/50 z-40 lg:hidden backdrop-blur-sm"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* SIDEBAR */}
      <aside className={`
        fixed inset-y-0 left-0 z-50 w-64 bg-slate-900 text-slate-300 transform transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        flex flex-col
      `}>
        <div className="p-6 flex items-center justify-between text-white">
          <div className="flex items-center gap-3">
            <div className="bg-indigo-500 p-2 rounded-lg"><Rocket size={20} /></div>
            <span className="font-bold text-xl tracking-tight text-white">PilotPro</span>
          </div>
          {/* Bouton fermer sur mobile */}
          <button className="lg:hidden" onClick={() => setSidebarOpen(false)}>
            <X size={24} />
          </button>
        </div>

        <nav className="flex-grow mt-4 px-3 space-y-1 overflow-y-auto">
          {menuItems.map((item, idx) => (
            <NavLink 
              key={idx} 
              to={`/app/${companySlug}${item.path}`} // Ex: /app/blessing/finance
              className={({ isActive }) => `
                w-full flex items-center gap-4 px-3 py-3 rounded-xl transition-all group
                ${isActive ? 'bg-indigo-600 text-white' : 'hover:bg-slate-800 text-slate-300'}
              `}
            >
              <span className={({ isActive }) => isActive ? 'text-white' : 'text-slate-400 group-hover:text-indigo-400'}>
                {item.icon}
              </span>
              <span className="text-sm font-medium">{item.label}</span>
            </NavLink>
          ))}
        </nav>

        <div className="p-4 border-t border-slate-800">
          <div className="flex items-center gap-3 bg-slate-800/50 p-2 rounded-xl">
            <div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center text-xs font-bold text-white">AE</div>
            <div className="overflow-hidden">
              <p className="text-sm font-medium text-white truncate text-left">Atedesi Emmanuel</p>
              <p className="text-[10px] text-slate-400 uppercase tracking-wider text-left">{userTier} Plan</p>
            </div>
          </div>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-grow flex flex-col min-w-0">
        {/* TopBar Adaptative */}
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-4 lg:px-8">
          <div className="flex items-center gap-4">
            {/* Bouton Burger Mobile */}
            <button 
              className="lg:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-lg"
              onClick={() => setSidebarOpen(true)}
            >
              <Menu size={24} />
            </button>
            
            <div className="hidden sm:flex items-center bg-slate-100 px-3 py-2 rounded-lg w-64 lg:w-96">
              <Search size={18} className="text-slate-400" />
              <input type="text" placeholder="Recherche..." className="bg-transparent border-none focus:ring-0 text-sm ml-2 w-full" />
            </div>
          </div>
          
          <div className="flex items-center gap-2 lg:gap-4">
            <button className="p-2 text-slate-500 hover:bg-slate-50 rounded-full">
              <Bell size={20} />
            </button>
            <button className="bg-indigo-600 text-white px-3 py-2 lg:px-4 rounded-lg text-xs lg:text-sm font-semibold hover:bg-indigo-700 transition-all">
              <span className="hidden sm:inline">Nouvelle Opération</span>
              <span className="sm:hidden">+</span>
            </button>
          </div>
        </header>

        {/* Page Content */}
        <section className="p-4 lg:p-8 overflow-y-auto bg-slate-50 flex-grow">
          <div className="max-w-7xl mx-auto">
             {children}
          </div>
        </section>
      </main>
    </div>
  );
};

export default DashboardLayout;