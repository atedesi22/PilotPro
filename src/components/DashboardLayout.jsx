import { Bell, Boxes, Cpu, LayoutDashboard, Megaphone, PieChart, Search, ShieldCheck, Wallet, Zap } from "lucide-react";
import { useState } from "react";



const DashboardLayout = ({children, userTier = 'Pro'}) => {
    const [isSidebarOpen, setSidebarOpen] = useState(true);

    const menuItems = [
        {icon: <LayoutDashboard size={20}/>, label: 'Dashboard', path:'/dashboard', tier: 'Standard'},
        {icon: <Wallet size={20}/>, label: 'Finance', path:'/finance', tier: 'Standard'},
        {icon: <Boxes size={20}/>, label: 'Stock', path:'/stock', tier: 'Standard'},
        {icon: <PieChart size={20}/>, label: 'Decisions', path:'/bi', tier: 'Essential'},
        {icon: <Megaphone size={20}/>, label: 'PilotCom', path:'/marketing', tier: 'Entreprise'},
        {icon: <Cpu size={20}/>, label: 'IA Analyse', path:'/ai', tier: 'Pro'},
        {icon: <Zap size={20}/>, label: 'Automatisation', path:'/auto', tier: 'Entreprise'},
    ];

    return(
        <>
            <div className="flex h-screen bg-slate-50 font-sans">
                {/* SIDEBAR */}
                <aside className={`${isSidebarOpen ? 'w-64' : 'w-20'} bg-slate-900 text-slate-300 transition-all duration-300 flex flex-col`}>
                    <div className="p-6 flex items-center gap-3 text-white">
                    <div className="bg-indigo-500 p-2 rounded-lg"><Rocket size={20} /></div>
                    {isSidebarOpen && <span className="font-bold text-xl tracking-tight">PilotPro</span>}
                    </div>

                    <nav className="flex-grow mt-4 px-3 space-y-1">
                    {menuItems.map((item, idx) => (
                        <div key={idx} className="relative group">
                        <button className="w-full flex items-center gap-4 px-3 py-3 rounded-xl hover:bg-slate-800 hover:text-white transition-all group">
                            <span className="text-slate-400 group-hover:text-indigo-400">{item.icon}</span>
                            {isSidebarOpen && <span className="text-sm font-medium">{item.label}</span>}
                            
                            {/* Badge de verrouillage si le Tier est supérieur */}
                            {isSidebarOpen && item.tier === 'Entreprise' && userTier !== 'Entreprise' && (
                            <ShieldCheck size={14} className="ml-auto text-amber-500" />
                            )}
                        </button>
                        </div>
                    ))}
                    </nav>

                    {/* User Profile Mini */}
                    <div className="p-4 border-t border-slate-800">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center text-xs font-bold text-white">AE</div>
                        {isSidebarOpen && (
                        <div className="overflow-hidden">
                            <p className="text-sm font-medium text-white truncate">Atedesi Emmanuel</p>
                            <p className="text-xs text-slate-500 capitalize">{userTier} Plan</p>
                        </div>
                        )}
                    </div>
                    </div>
                </aside>

                {/* MAIN CONTENT */}
                <main className="flex-grow flex flex-col overflow-hidden">
                    {/* TopBar */}
                    <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-8">
                    <div className="flex items-center bg-slate-100 px-3 py-2 rounded-lg w-96">
                        <Search size={18} className="text-slate-400" />
                        <input type="text" placeholder="Rechercher une agence, une facture..." className="bg-transparent border-none focus:ring-0 text-sm ml-2 w-full" />
                    </div>
                    
                    <div className="flex items-center gap-4">
                        <button className="relative p-2 text-slate-500 hover:bg-slate-50 rounded-full">
                        <Bell size={20} />
                        <span className="absolute top-2 right-2 w-2 h-2 bg-rose-500 rounded-full border-2 border-white"></span>
                        </button>
                        <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-indigo-700 transition-all">
                        Nouvelle Opération
                        </button>
                    </div>
                    </header>

                    {/* Page Content */}
                    <section className="p-8 overflow-y-auto bg-slate-50">
                    {children}
                    </section>
                </main>
            </div>
        </>
    )
}
export default DashboardLayout;