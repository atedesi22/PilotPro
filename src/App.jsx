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


function App() {

  return (
    <>
      <Router>
        <Routes>
        {/* Section Publique / Marketing*/}
        <Route element={<PublicLayout/>}>
          <Route path='/' element={<LandingPage/>}/>
          <Route path='/pricing' element={<PricingPage/>}/>
        </Route>

        {/* Section Application (Protégée/Multi-tenant) */}
        <Route path='/app/:companySlug' element={<AppLayout/>}>
          <Route index element={<DashboardHome/>}/>
          <Route path='finance' element={<Finance/>}/>
          <Route path="stock" element={<Stock />}/>
        </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
