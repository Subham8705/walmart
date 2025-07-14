import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { UserProvider } from './contexts/UserContext';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import AIScanner from './pages/AIScanner';
import ReverseLogistics from './pages/ReverseLogistics';
import DronePickup from './pages/DronePickup';
import Refurbishment from './pages/Refurbishment';
import EcoPoints from './pages/EcoPoints';
import Marketplace from './pages/Marketplace';
import RecyclersMap from './pages/RecyclersMap';
import BusinessPortal from './pages/BusinessPortal';
import UserDashboard from './pages/UserDashboard';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';

function App() {
  return (
    <ThemeProvider>
      <UserProvider>
        <Router>
          <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
            <Navbar />
            <main>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/ai-scanner" element={<AIScanner />} />
                <Route path="/reverse-logistics" element={<ReverseLogistics />} />
                <Route path="/drone-pickup" element={<DronePickup />} />
                <Route path="/refurbishment" element={<Refurbishment />} />
                <Route path="/ecopoints" element={<EcoPoints />} />
                <Route path="/marketplace" element={<Marketplace />} />
                <Route path="/recyclers-map" element={<RecyclersMap />} />
                <Route path="/business-portal" element={<BusinessPortal />} />
                <Route path="/dashboard" element={<UserDashboard />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/faq" element={<FAQ />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;