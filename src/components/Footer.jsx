

const Footer = () => {
    return(
        <footer className="bg-white border-t border-slate-100 py-12 px-8">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-slate-500 text-sm">
                © 2026 PilotPro par Atedesi Bohole Paul Emmanuel. Tous droits réservés.
                </div>
                <div className="flex gap-6 text-sm text-slate-400">
                <a href="#" className="hover:text-slate-600">Confidentialité</a>
                <a href="#" className="hover:text-slate-600">Conditions</a>
                <a href="#" className="hover:text-slate-600">Contact</a>
                </div>
            </div>
        </footer>
    )
};
export default Footer;