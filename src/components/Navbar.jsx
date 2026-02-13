import React, { useState } from 'react';
import { Menu, X, Rocket, ArrowRight } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Produit', path: '/' },
    { name: 'Tarifs', path: '/pricing' },
    { name: 'À propos', path: '/about' },
  ];

  return (
    <nav className="fixed top-0 w-full z-[100] px-4 py-4">
      <div className="max-w-7xl mx-auto">
        <div className="backdrop-blur-md bg-white/70 border border-white/20 rounded-2xl shadow-sm px-6 py-3 flex items-center justify-between">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="bg-indigo-600 p-1.5 rounded-lg group-hover:rotate-12 transition-transform">
              <Rocket className="text-white" size={18} />
            </div>
            <span className="font-black text-xl tracking-tighter text-slate-900">PilotPro</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink 
                key={link.name} 
                to={link.path}
                className={({ isActive }) => `text-sm font-bold transition-colors ${isActive ? 'text-indigo-600' : 'text-slate-500 hover:text-slate-900'}`}
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <Link to="/login" className="hidden md:flex items-center gap-2 bg-slate-900 text-white px-5 py-2.5 rounded-xl text-sm font-bold hover:bg-slate-800 transition-all">
              Connexion <ArrowRight size={16} />
            </Link>
            
            <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 text-slate-600">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu (Soft Slide) */}
        <div className={`md:hidden absolute top-20 left-4 right-4 bg-white rounded-3xl border border-slate-100 shadow-2xl p-6 transition-all duration-300 origin-top ${isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'}`}>
          <div className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path} 
                onClick={() => setIsOpen(false)}
                className="text-lg font-bold text-slate-900 border-b border-slate-50 pb-2"
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/login" 
              onClick={() => setIsOpen(false)}
              className="w-full bg-indigo-600 text-white py-4 rounded-2xl text-center font-black"
            >
              Accéder au Cockpit
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;