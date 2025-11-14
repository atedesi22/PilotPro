// src/components/DashboardGeneral.jsx
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LineChart, Line, PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

// Import des icônes de react-icons
import { 
    FaPlay, FaHome, FaClipboardCheck, FaMoneyBillWave, FaLifeRing, 
    FaTachometerAlt, FaBars, FaTimes, FaBox, FaUsers, FaCog, FaQuestionCircle, FaUserCircle, FaExclamationTriangle 
} from 'react-icons/fa';
import { IoIosStats } from 'react-icons/io'; // Pour l'icône Dashboard

// --- Configuration Couleurs & Styles ---
const colors = {
    'gray-800': '#34495E',
    'green-300': '#A2E0D4',
    'orange-300': '#F7A384',
    'gray-900': '#4A4A4A',
    'background-light': '#FDFDFD',
    'background-alt': '#F5F7F9',
    'border-grey': '#DDE6ED',
};

// --- Données Fictives ---
const financeData = [
    { name: '1%', value: 10 },
    { name: '2%', value: 25 },
    { name: '3%', value: 20 },
    { name: '10%', value: 45 },
    { name: '50%', value: 60 },
];

const stockData = [
    { name: 'Stock Disponible', value: 70, color: colors['gray-800'] },
    { name: 'En Commande', value: 20, color: colors['green-300'] },
    { name: 'Stock Bas', value: 10, color: colors['orange-300'] },
];
const stockColors = stockData.map(item => item.color);

const recentMovements = [
    { client: 'Monsmance Financire', status: 'Validé', amount: 8.6, date: '20.20' },
    { client: "Can de Cajuee", status: 'En Attente', amount: 8.8, date: '20.20' },
    { client: "Oem Sans Orangee", status: 'En Attente', amount: 87.14, date: '3005' },
    { client: "Open Sans", status: 'En Attente', amount: 1.5, date: '25' },
];

// --- Composant Navbar Mobile (en bas) ---
const MobileNavbar = () => {
    const location = useLocation();
    
    // Pour les dashboards, nous mettons en surbrillance la route /dashboard
    const getLinkClass = (path) => 
        `flex flex-col items-center text-xs transition-colors ${
            location.pathname === path ? 'text-white' : 'text-white'
        }`;

    return (
        <footer className="md:hidden fixed bottom-0 left-0 w-full bg-gray-800 text-white shadow-lg z-50">
            <nav className="flex justify-around items-center h-14">
                <Link to="/dashboard" className={getLinkClass('/dashboard')}>
                    <FaTachometerAlt className="text-xl mb-0.5" /> Accueil
                </Link>
                <Link to="/inventory" className={getLinkClass('/inventory')}>
                    <FaBox className="text-xl mb-0.5" /> Inventaire
                </Link>
                <Link to="/hr" className={getLinkClass('/hr')}>
                    <FaUsers className="text-xl mb-0.5" /> RH
                </Link>
                <Link to="/maintenance" className={getLinkClass('/maintenance')}>
                    <FaCog className="text-xl mb-0.5" /> Maintenance
                </Link>
            </nav>
        </footer>
    );
};


// --- Composants Spécifiques au Dashboard ---

const Sidebar = ({ isSidebarOpen, toggleSidebar }) => {
    const location = useLocation();
    
    const navItems = [
        { name: 'Dashboard', path: '/dashboard', icon: IoIosStats },
        { name: 'Inventory', path: '/inventory', icon: FaBox },
        { name: 'Opertory', path: '/opertory', icon: FaClipboardCheck },
        { name: 'HR', path: '/hr', icon: FaUsers },
        { name: 'Maintenance', path: '/maintenance', icon: FaCog },
    ];

    return (
        <>
            {/* Overlay pour le mobile */}
            {isSidebarOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden" onClick={toggleSidebar}></div>
            )}

            {/* Sidebar (Desktop et Mobile) */}
            <aside 
                className={`fixed top-0 left-0 h-full w-64 bg-background-light shadow-2xl z-40 transform transition-transform md:translate-x-0 ${
                    isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
                } md:relative md:shadow-none md:min-h-screen pt-20 md:pt-0`}
            >
                {/* Logo et fermeture pour mobile */}
                <div className="md:hidden flex justify-between items-center p-4 shadow-sm bg-white">
                    <Link to="/" className="flex items-center text-gray-800 font-heading text-xl font-bold">
                        <div className="w-5 h-5 mr-1 bg-gray-800 [clip-path:polygon(0%_100%,100%_0%,100%_50%,0%_50%)]" /> PilotPro
                    </Link>
                    <button onClick={toggleSidebar} className="text-gray-900">
                        <FaTimes className="text-2xl" />
                    </button>
                </div>

                <nav className="p-4 space-y-2">
                    {navItems.map((item) => {
                        const IconComponent = item.icon;
                        const isActive = location.pathname === item.path || (item.name === 'Dashboard' && location.pathname === '/');
                        
                        return (
                            <Link
                                key={item.name}
                                to={item.path}
                                className={`flex items-center p-3 rounded-lg font-semibold transition-colors 
                                    ${isActive 
                                        ? 'bg-gray-800 text-white' 
                                        : 'text-gray-900 hover:bg-background-alt'
                                    }`}
                            >
                                <IconComponent className={`mr-3 text-xl ${isActive ? 'text-green-300' : 'text-gray-800'}`} />
                                {item.name}
                            </Link>
                        );
                    })}
                </nav>
            </aside>
        </>
    );
};

const FinanceCard = () => (
    <div className="bg-white p-4 rounded-xl shadow-lg border border-border-grey h-full">
        <h3 className="font-semibold text-gray-900 mb-2">Performance Financière</h3>
        <p className="text-sm text-gray-900 mb-4">KPI</p>
        <p className="font-bold text-3xl text-gray-800 mb-4">125 000 €</p>
        <ResponsiveContainer width="100%" height={100}>
            <LineChart data={financeData}>
                <Line 
                    type="monotone" 
                    dataKey="value" 
                    stroke={colors['green-300']} 
                    strokeWidth={2} 
                    dot={false}
                />
            </LineChart>
        </ResponsiveContainer>
        <div className="flex justify-between text-xs text-gray-900 mt-2">
            {financeData.map((d, i) => (
                <span key={i}>{d.name}</span>
            ))}
        </div>
    </div>
);

const StockCard = () => (
    <div className="bg-white p-4 rounded-xl shadow-lg border border-border-grey h-full">
        <h3 className="font-semibold text-gray-900 mb-4">Niveau de Stock Global</h3>
        <div className="flex items-center justify-center space-x-6">
            <ResponsiveContainer width={120} height={120}>
                <PieChart>
                    <Pie
                        data={stockData}
                        innerRadius={40}
                        outerRadius={60}
                        paddingAngle={5}
                        dataKey="value"
                    >
                        {stockData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                    </Pie>
                    <Tooltip content={({ active, payload }) => {
                        if (active && payload && payload.length) {
                            return (
                                <div className="p-2 bg-white border border-border-grey rounded shadow text-xs">
                                    <p>{`${payload[0].name}: ${payload[0].value}%`}</p>
                                </div>
                            );
                        }
                        return null;
                    }} />
                </PieChart>
            </ResponsiveContainer>
            <div className="text-xs space-y-2">
                {stockData.map(item => (
                    <p key={item.name}>
                        <span className="inline-block w-2 h-2 rounded-full mr-2" style={{ backgroundColor: item.color }}></span>
                        {item.value}%
                    </p>
                ))}
            </div>
        </div>
    </div>
);

const ProjectsCard = () => (
    <div className="bg-white p-4 rounded-xl shadow-lg border border-border-grey h-full flex flex-col justify-between">
        <h3 className="font-semibold text-gray-900 mb-2">Projets en Cours</h3>
        <p className="text-sm text-gray-900 mb-4">K344490</p>
        
        <div className="mb-4">
            {/* Barre de progression simple */}
            <div className="flex justify-between items-center text-xs mb-1">
                <span className="text-gray-800 font-bold">80%</span>
                <span className="text-orange-300 font-bold">30%</span>
            </div>
            <div className="w-full bg-border-grey rounded-full h-2.5">
                <div 
                    className="h-2.5 rounded-full" 
                    style={{ 
                        width: '80%', 
                        background: `linear-gradient(to right, ${colors['gray-800']} 70%, ${colors['orange-300']} 100%)` 
                    }}
                ></div>
            </div>
        </div>
        
        <div className="text-center p-2 bg-orange-300/20 rounded-lg text-sm text-orange-300 font-semibold flex items-center justify-center">
            <FaExclamationTriangle className="mr-2 text-base" /> 3 projets en retard
        </div>
    </div>
);

const RecentMovementsCard = () => (
    <div className="bg-white p-4 rounded-xl shadow-lg border border-border-grey lg:col-span-3">
        <h3 className="font-semibold text-gray-900 mb-4">Mouvements Récents</h3>
        <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-border-grey">
                <thead>
                    <tr className="text-xs font-medium text-gray-900 uppercase tracking-wider text-left">
                        <th className="py-2 px-1">Client</th>
                        <th className="py-2 px-1 text-right">Montant</th>
                        <th className="py-2 px-1 text-center">Statut</th>
                        <th className="py-2 px-1 text-center">Date</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-border-grey">
                    {recentMovements.map((movement, index) => (
                        <tr key={index} className="text-sm text-gray-900">
                            <td className="py-2 px-1 font-medium">{movement.client}</td>
                            <td className="py-2 px-1 text-right">{movement.amount.toFixed(2)}</td>
                            <td className="py-2 px-1 text-center">
                                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                                    ${movement.status === 'Validé' ? 'bg-green-300/70 text-gray-800' : 'bg-orange-300/70 text-gray-800'}
                                `}>
                                    {movement.status}
                                </span>
                            </td>
                             <td className="py-2 px-1 text-center">{movement.date}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
);


const DashboardGeneral = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="flex min-h-screen bg-background-alt font-sans">
            
            {/* Header Mobile (Top Bar) */}
            <header className="fixed top-0 left-0 w-full bg-background-light shadow-sm z-50 md:hidden">
                <nav className="px-4 py-3 flex items-center justify-between">
                    <button onClick={toggleSidebar} className="text-gray-900 mr-3">
                        <FaBars className="text-xl" />
                    </button>
                    <Link to="/" className="flex items-center text-gray-800 font-heading text-xl font-bold flex-grow">
                         <div className="w-5 h-5 mr-1 bg-gray-800 [clip-path:polygon(0%_100%,100%_0%,100%_50%,0%_50%)]" /> PilotPro
                    </Link>
                    <div className="flex items-center space-x-3 text-gray-900">
                        <FaQuestionCircle className="text-xl"/>
                        <FaUserCircle className="text-xl"/>
                    </div>
                </nav>
            </header>

            {/* Sidebar (Desktop & Mobile Menu) */}
            <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

            {/* Main Content Area */}
            <main className="flex-1 p-4 md:p-8 pt-20 md:pt-8 overflow-y-auto pb-16 md:pb-0">
                <h1 className="font-heading text-3xl font-bold text-gray-900 mb-6">
                    Tableau de Bord Général
                </h1>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Top Row Cards */}
                    <FinanceCard />
                    <StockCard />
                    <ProjectsCard />

                    {/* Bottom Row - Recent Movements (Full Width) */}
                    <RecentMovementsCard />
                </div>
            </main>

            {/* Mobile Navigation Bar (Fixed at the bottom) */}
            <MobileNavbar />
        </div>
    );
};

export default DashboardGeneral;