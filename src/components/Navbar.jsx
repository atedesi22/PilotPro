import { Megaphone, Menu } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-8 py-5 bg-white border-b border-slate-100 sticky top-0 z-50">
      <div className="flex items-center gap-2">
        <div className="bg-indigo-600 p-1.5 rounded-lg">
          <Megaphone className="text-white" size={20} />
        </div>
        <span className="text-xl font-bold text-slate-900 tracking-tight">PilotPro</span>
      </div>
      
      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
        <Link to="/" className="hover:text-indigo-600">Fonctionnalités</Link>
        <Link to="/pricing" className="hover:text-indigo-600">Tarifs</Link>
        <Link to="/about" className="hover:text-indigo-600">À propos</Link>
      </div>

      <div className="flex items-center gap-4">
        <button className="text-sm font-semibold text-slate-700">Connexion</button>
        <button className="bg-slate-900 text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-slate-800 transition-all">
          Essai gratuit
        </button>
      </div>
    </nav>
  );
};

export default Navbar;