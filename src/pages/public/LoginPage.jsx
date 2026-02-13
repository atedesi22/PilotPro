import React from 'react';
import { Rocket, Mail, Lock, ArrowRight, Chrome, Orbit } from 'lucide-react';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  return (
    <div className="min-h-screen w-full bg-white flex flex-col items-center pt-32 pb-12 px-4 relative overflow-hidden">
      
      {/* Éléments de design légers pour rappeler NovaVerse sans alourdir */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-indigo-600 to-transparent opacity-20" />
      <div className="absolute top-40 -left-20 w-64 h-64 bg-indigo-50 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-20 -right-20 w-64 h-64 bg-emerald-50 rounded-full blur-3xl opacity-50" />

      {/* Carte Login - Plus d'effet "verre" lourd, juste de la pureté */}
      <div className="w-full max-w-md bg-white border border-slate-100 rounded-[2.5rem] shadow-2xl shadow-slate-200/50 p-8 md:p-12 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex p-3.5 bg-indigo-600 rounded-2xl mb-5 shadow-xl shadow-indigo-200">
            <Rocket className="text-white" size={24} />
          </div>
          <h1 className="text-3xl font-black text-slate-900 tracking-tight">PilotPro</h1>
          <p className="text-slate-500 text-sm mt-2 font-medium">Bon retour ! Accédez à votre cockpit.</p>
        </div>

        {/* Formulaire */}
        <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-1.5">
            <label className="text-[11px] font-black text-slate-400 uppercase ml-1 tracking-wider">Email Pro</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input 
                type="email" 
                placeholder="atedesi@pilotpro.com"
                className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 pl-12 pr-4 text-slate-900 placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600/30 transition-all font-medium"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <div className="flex justify-between items-center px-1">
              <label className="text-[11px] font-black text-slate-400 uppercase tracking-wider">Mot de passe</label>
              <a href="#" className="text-[10px] font-bold text-indigo-600 hover:underline uppercase">Oublié ?</a>
            </div>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input 
                type="password" 
                placeholder="••••••••"
                className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 pl-12 pr-4 text-slate-900 placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600/30 transition-all font-medium"
              />
            </div>
          </div>

          <Link 
            to="/app/demo" 
            className="w-full bg-slate-900 hover:bg-indigo-600 text-white font-bold py-4 rounded-2xl flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-indigo-200 group mt-2"
          >
            Se connecter <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </form>

        {/* Séparateur */}
        <div className="flex items-center gap-4 my-8">
          <div className="h-[1px] bg-slate-100 flex-grow" />
          <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Ou continuer avec</span>
          <div className="h-[1px] bg-slate-100 flex-grow" />
        </div>

        {/* Social Logins - Focus NovaVerse */}
        <div className="grid grid-cols-2 gap-4">
          <button className="flex items-center justify-center gap-2 py-3.5 border border-slate-100 rounded-2xl text-slate-700 text-sm font-bold hover:bg-slate-50 hover:border-slate-200 transition-all">
            <Chrome size={18} className="text-rose-500" /> Google
          </button>
          
          {/* LOGIN VIA NOVAVERSE */}
          <button className="flex items-center justify-center gap-2 py-3.5 bg-indigo-50 border border-indigo-100 rounded-2xl text-indigo-700 text-sm font-bold hover:bg-indigo-100 transition-all group">
            <Orbit size={18} className="text-indigo-600 group-hover:rotate-90 transition-transform duration-500" /> NovaVerse
          </button>
        </div>

        <p className="text-center text-slate-500 text-xs mt-10 font-medium italic">
          Nouveau ici ? <Link to="/register" className="text-indigo-600 font-bold hover:underline">Créer une entreprise</Link>
        </p>
      </div>

      <div className="mt-12 text-slate-400 text-[10px] font-bold uppercase tracking-[0.3em]">
        © 2026 NovaVerse Intelligent Systems
      </div>
    </div>
  );
};

export default LoginPage;