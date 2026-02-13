import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PublicLayout from './layouts/PublicLayout';
import LandingPage from './pages/public/LandingPage';
import PricingPage from './pages/public/PricingPage';
import AppLayout from './layouts/AppLayout';
import Dashboard from './components/DashboardLayout';
import DashboardHome from './pages/app/DashboardHome';
import Finance from './pages/app/Finance';
import Stock from './pages/app/Stock';
import PilotCom from './pages/app/PilotCom';
import Analytics from './pages/app/Analytics';
import Automation from './pages/app/Automation';
import AboutPage from './pages/public/AboutPage';
import LoginPage from './pages/public/LoginPage';
import AgenciesManager from './pages/app/AgenciesManager';
import StaffManager from './pages/app/StaffManager';


function App() {

  return (
    <>
      <Router>
        <Routes>
        {/* Section Publique / Marketing*/}
        <Route element={<PublicLayout/>}>
          <Route path='/' element={<LandingPage/>}/>
          <Route path='/pricing' element={<PricingPage/>}/>
          <Route path='/about' element={<AboutPage/>}/>
          <Route path='/login' element={<LoginPage/>}/>
        </Route>

        {/* Section Application (Protégée/Multi-tenant) */}
        <Route path='/app/:companySlug' element={<AppLayout/>}>
        <Route path="agencies" element={<AgenciesManager />} />
          <Route path="staff" element={<StaffManager />} />
          <Route index element={<DashboardHome/>}/>
          <Route path='finance' element={<Finance/>}/>
          <Route path="stock" element={<Stock />}/>
          <Route path="marketing" element={<PilotCom />}/>
          <Route path="ai" element={<Analytics />}/>
          <Route path="auto" element={<Automation />}/>
        </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
