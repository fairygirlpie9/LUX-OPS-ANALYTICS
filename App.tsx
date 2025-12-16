import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Industry from './pages/Industry';
import Pricing from './pages/Pricing';
import Methodology from './pages/Methodology';
import Contact from './pages/Contact';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-lux-black text-white font-sans selection:bg-lux-green selection:text-black">
        <ScrollToTop />
        <Header />
        <main className="flex-grow relative z-0">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/industry/:type" element={<Industry />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/methodology" element={<Methodology />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        
        {/* Background Grid Texture */}
        <div className="fixed inset-0 pointer-events-none z-[-1] opacity-20" 
             style={{ 
               backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)',
               backgroundSize: '50px 50px'
             }}>
        </div>
      </div>
    </Router>
  );
};

export default App;