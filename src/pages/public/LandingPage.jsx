import { ArrowRight, BarChart3, Megaphone, Shield, Zap } from "lucide-react";
import '../../index.css'


const LandingPage = () => {
  return (
    <>
        <div className="bg-slate-50 min-h-screen">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="bg-indigo-100 text-indigo-700 px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide uppercase">
            Propulsé par l'IA — PilotPro v1.0
          </span>
          <h1 className="mt-8 text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight">
            Le cockpit ultime pour les <span className="text-indigo-600">entreprises modernes.</span>
          </h1>
          <p className="mt-6 text-xl text-slate-600 leading-relaxed">
            Fusionnez votre comptabilité, votre logistique et votre marketing dans une interface unique. 
            Conçu pour le multi-tenant, optimisé pour la croissance.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <button className="flex items-center justify-center px-8 py-4 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200">
              Commencer gratuitement <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <button className="px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-xl font-bold hover:bg-slate-50 transition-all">
              Voir la démo
            </button>
          </div>
        </div>
      </section>

      {/* Quick Feature Preview */}
      <section className="py-12 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          <FeatureItem icon={<Shield size={24}/>} title="Sécurité Totale" />
          <FeatureItem icon={<Zap size={24}/>} title="Automation IFTTT" />
          <FeatureItem icon={<BarChart3 size={24}/>} title="Analyses IA" />
          <FeatureItem icon={<Megaphone size={24}/>} title="PilotCom Canva" />
        </div>
      </section>
    </div>
    </>
  );
};

const FeatureItem = ({icon, title}) =>(
  <div className="flex items-center space-x-3 text-slate-500">
    <div className="p-2 bg-slate-50 rounded-lg text-indigo-600">{icon}</div>
    <span className="font-medium">{title}</span>
  </div>
)


export default LandingPage;