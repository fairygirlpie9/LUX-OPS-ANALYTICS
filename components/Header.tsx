import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Hexagon, ChevronDown, Menu, X, Zap } from 'lucide-react';
import { IndustryType } from '../types';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isIndustryOpen, setIsIndustryOpen] = useState(false);
  const navigate = useNavigate();

  const handleNav = (path: string) => {
    navigate(path);
    setIsMenuOpen(false);
    setIsIndustryOpen(false);
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-lux-black/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <div 
            className="flex items-center cursor-pointer group"
            onClick={() => handleNav('/')}
          >
            <Hexagon className="h-8 w-8 text-lux-green group-hover:rotate-90 transition-transform duration-500" strokeWidth={2.5} />
            <span className="ml-3 text-3xl font-bold tracking-wider text-white font-display uppercase">
              LUX OPS
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            <div className="relative group">
              <button 
                className="flex items-center text-sm font-bold tracking-widest text-gray-300 hover:text-lux-green transition-colors uppercase font-mono"
                onMouseEnter={() => setIsIndustryOpen(true)}
                onClick={() => setIsIndustryOpen(!isIndustryOpen)}
              >
                Industries <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              
              {/* Dropdown */}
              {(isIndustryOpen) && (
                <div 
                  className="absolute top-full left-0 w-48 bg-lux-black border border-white/10 shadow-2xl mt-2 py-2"
                  onMouseLeave={() => setIsIndustryOpen(false)}
                >
                  {Object.values(IndustryType).map((type) => (
                    <div 
                      key={type}
                      className="block px-4 py-3 text-sm font-bold text-gray-300 hover:text-lux-green hover:bg-white/5 cursor-pointer uppercase border-l-2 border-transparent hover:border-lux-green transition-all font-mono"
                      onClick={() => handleNav(`/industry/${type}`)}
                    >
                      {type}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <Link to="/pricing" className="text-sm font-bold tracking-widest text-gray-300 hover:text-lux-green transition-colors uppercase font-mono">
              Pricing
            </Link>
            <Link to="/methodology" className="text-sm font-bold tracking-widest text-gray-300 hover:text-lux-green transition-colors uppercase font-mono">
              Methodology
            </Link>
            <Link to="/contact" className="text-sm font-bold tracking-widest text-gray-300 hover:text-lux-green transition-colors uppercase font-mono">
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <button 
              onClick={() => handleNav('/contact')}
              className="flex items-center bg-white text-black px-6 py-2.5 font-display font-bold text-lg tracking-wide hover:bg-lux-green transition-colors clip-path-slant uppercase"
            >
              <Zap className="w-4 h-4 mr-2 fill-current" />
              SCHEDULE 15-MIN DEMO
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white">
              {isMenuOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-lux-black border-b border-white/10 h-screen">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <div className="px-3 py-2 text-lux-green font-mono text-xs font-bold uppercase opacity-50">Industries</div>
            {Object.values(IndustryType).map((type) => (
              <div 
                key={type}
                className="block px-3 py-4 text-xl font-bold text-white hover:text-lux-green hover:bg-white/5 cursor-pointer uppercase font-mono border-b border-white/5"
                onClick={() => handleNav(`/industry/${type}`)}
              >
                {type}
              </div>
            ))}
            <div className="my-2"></div>
            <Link to="/pricing" onClick={() => setIsMenuOpen(false)} className="block px-3 py-4 text-xl font-bold text-white hover:text-lux-green hover:bg-white/5 uppercase font-mono border-b border-white/5">
              Pricing
            </Link>
            <Link to="/methodology" onClick={() => setIsMenuOpen(false)} className="block px-3 py-4 text-xl font-bold text-white hover:text-lux-green hover:bg-white/5 uppercase font-mono border-b border-white/5">
              Methodology
            </Link>
            <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="block px-3 py-4 text-xl font-bold text-white hover:text-lux-green hover:bg-white/5 uppercase font-mono border-b border-white/5">
              Contact
            </Link>
            
            <div className="p-4 mt-4">
               <button 
                onClick={() => handleNav('/contact')}
                className="w-full flex items-center justify-center bg-white text-black px-6 py-4 font-display font-bold text-xl tracking-wide hover:bg-lux-green transition-colors clip-path-slant uppercase"
              >
                <Zap className="w-5 h-5 mr-2 fill-current" />
                SCHEDULE DEMO
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;