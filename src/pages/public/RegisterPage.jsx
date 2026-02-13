import React, { useState } from 'react';
import { Rocket, User, Mail, Lock, Building2, ArrowRight, Orbit, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const RegisterPage = () => {
  const [step, setStep] = useState(1);

  return (
    <div className="min-h-screen w-full bg-white flex flex-col items-center pt-24 pb-12 px-4 relative overflow-hidden">
      
      {/* Design NovaVerse discret */}
      <div className="absolute top-40 -right-20 w-64 h-64 bg-indigo-50 rounded-full blur-3xl opacity-60" />
      <div className="absolute bottom-20 -left-20 w-64 h-64 bg-emerald-50 rounded-full blur-3xl opacity-60" />

      <div className="w-full max-w-lg bg-white border border-slate-100 rounded-[2.5rem] shadow-2xl shadow-slate-200/50 p-8 md:p-12 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-black text-slate-900 tracking-tight">Créer un compte</h1>
          <p className="text-slate-500 text-sm mt-2">Rejoignez l'écosystème PilotPro & NovaVerse.</p>
          
          {/* Step Indicator */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <div className={`h-1.5 w-12 rounded-full transition-all ${step >= 1 ? 'bg-indigo-600' : 'bg-slate-100'}`} />
            <div className={`h-1.5 w-12 rounded-full transition-all ${step >= 2 ? 'bg-indigo-600' : 'bg-slate-100'}`} />
          </div>
        </div>

        <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
          {step === 1 ? (
            <div className="space-y-5 animate-in slide-in-from-right duration-300">
              <div className="space-y-1.5">
                <label className="text-[11px] font-black text-slate-400 uppercase tracking-wider ml-1">Nom du Responsable</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                  <input type="text" placeholder="Atedesi Bohole" className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 pl-12 pr-4 outline-none focus:ring-2 focus:ring-indigo-600/20 font-medium" />
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="text-[11px] font-black text-slate-400 uppercase tracking-wider ml-1">Email Personnel</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                  <input type="email" placeholder="paul@novaverse.com" className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 pl-12 pr-4 outline-none focus:ring-2 focus:ring-indigo-600/20 font-medium" />
                </div>
              </div>
              <button 
                onClick={() => setStep(2)}
                className="w-full bg-slate-900 text-white font-bold py-4 rounded-2xl flex items-center justify-center gap-2 hover:bg-slate-800 transition-all mt-4"
              >
                Suivant <ArrowRight size={18} />
              </button>
            </div>
          ) : (
            <div className="space-y-5 animate-in slide-in-from-right duration-300">
              <div className="space-y-1.5">
                <label className="text-[11px] font-black text-slate-400 uppercase tracking-wider ml-1">Nom de l'Entreprise</label>
                <div className="relative">
                  <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                  <input type="text" placeholder="Blessing Petroleum" className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 pl-12 pr-4 outline-none focus:ring-2 focus:ring-indigo-600/20 font-medium" />
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="text-[11px] font-black text-slate-400 uppercase tracking-wider ml-1">Mot de passe</label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                  <input type="password" placeholder="••••••••" className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 pl-12 pr-4 outline-none focus:ring-2 focus:ring-indigo-600/20 font-medium" />
                </div>
              </div>
              <div className="flex gap-3">
                <button onClick={() => setStep(1)} className="w-1/3 py-4 bg-slate-100 text-slate-600 rounded-2xl font-bold hover:bg-slate-200 transition-all">Retour</button>
                <Link to="/app/demo" className="w-2/3 bg-indigo-600 text-white font-bold py-4 rounded-2xl flex items-center justify-center gap-2 hover:bg-indigo-700 shadow-lg shadow-indigo-100">
                  Lancer PilotPro <CheckCircle2 size={18} />
                </Link>
              </div>
            </div>
          )}
        </form>

        <div className="flex items-center gap-4 my-8">
          <div className="h-[1px] bg-slate-100 flex-grow" />
          <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">S'inscrire avec</span>
          <div className="h-[1px] bg-slate-100 flex-grow" />
        </div>

        {/* Bouton NovaVerse mémorisé */}
        <button className="w-full flex items-center justify-center gap-3 py-4 bg-indigo-50 border border-indigo-100 rounded-2xl text-indigo-700 font-bold hover:bg-indigo-100 transition-all group">
          <Orbit size={20} className="text-indigo-600 group-hover:rotate-180 transition-transform duration-1000" /> 
          Continuer avec NovaVerse
        </button>

        <p className="text-center text-slate-500 text-xs mt-10 font-medium">
          Déjà un compte ? <Link to="/login" className="text-indigo-600 font-bold hover:underline">Se connecter</Link>
        </p>
      </div>

      <div className="mt-8 text-slate-400 text-[10px] font-bold uppercase tracking-[0.3em]">
        © 2026 NovaVerse Intelligent Systems
      </div>
    </div>
  );
};

export default RegisterPage;