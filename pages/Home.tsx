import React from 'react';
import { useNavigate } from 'react-router-dom';
import ThreeSphere from '../components/ThreeSphere';
import CodeTerminal from '../components/CodeTerminal';
import { ArrowRight, Trophy, Hexagon } from 'lucide-react';
import { INDUSTRIES_DATA } from '../constants';
import { IndustryType } from '../types';

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen pt-24 pb-20">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-16 lg:gap-24">
        
        {/* BLOCK 1: Title, Text, Buttons */}
        <section className="flex flex-col items-center text-center space-y-8 pt-8">
          
          {/* Top Metadata */}
          <div className="flex flex-col items-center space-y-4">
            <div className="inline-flex items-center border border-yellow-500/50 bg-yellow-500/10 px-4 py-2 rounded-full w-fit backdrop-blur-sm">
              <Trophy className="w-4 h-4 text-yellow-500 mr-2" />
              <span className="text-[10px] md:text-xs font-bold text-yellow-500 tracking-wide uppercase font-mono">
                Award-Winner: Toyota GR Racing Analytics
              </span>
            </div>
          </div>

          {/* Headlines */}
          <div className="max-w-5xl mx-auto">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-bold uppercase tracking-tight leading-[0.9] text-white">
              TURN COMPLEX <br />
              <span className="text-lux-green">TELEMETRY INTO</span> <br />
              CLEAR DECISIONS
            </h1>
          </div>

          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-light font-sans">
            Real-time operations intelligence trusted by racing teams, fleet operators, and residential estates.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button 
              onClick={() => navigate('/contact')}
              className="bg-white text-black px-8 py-4 font-display font-bold text-lg tracking-wide hover:bg-lux-green transition-colors uppercase flex items-center justify-center"
            >
              Schedule 15-Min Demo
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <button 
              onClick={() => navigate('/contact')}
              className="border border-white text-white px-8 py-4 font-display font-bold text-lg tracking-wide hover:bg-white hover:text-black transition-colors uppercase"
            >
              Contact Sales
            </button>
          </div>
        </section>

        {/* BLOCK 2: Terminal (Left) and Canvas (Right) */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Left: Code Terminal */}
          <div className="w-full order-2 lg:order-1">
            <CodeTerminal />
          </div>

          {/* Right: 3D Sphere */}
          <div className="w-full order-1 lg:order-2">
             <div className="relative h-[400px] lg:h-[500px] w-full flex items-center justify-center border border-white/5 rounded-lg bg-white/5 backdrop-blur-sm overflow-hidden">
                {/* Background Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-lux-green/10 blur-[100px] rounded-full pointer-events-none"></div>
                <div className="w-full h-full z-0">
                  <ThreeSphere />
                </div>
             </div>
          </div>

        </section>

        {/* BLOCK 3: Industry Buttons */}
        <section className="w-full max-w-5xl mx-auto">
           <div className="flex items-center space-x-2 mb-8">
              <div className="h-px bg-lux-green/30 flex-grow"></div>
              <span className="font-mono text-xs text-lux-green/70 uppercase tracking-widest">Select Industry Sector</span>
              <div className="h-px bg-lux-green/30 flex-grow"></div>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Object.values(IndustryType).map((type) => (
              <button
                key={type}
                onClick={() => navigate(`/industry/${type}`)}
                className="group flex items-center justify-between bg-white/5 border border-white/10 p-6 hover:border-lux-green hover:bg-white/10 transition-all text-left"
              >
                <div className="flex items-center">
                  <div className="bg-white/10 p-3 rounded mr-4 group-hover:bg-lux-green group-hover:text-black transition-colors">
                    <Hexagon className="w-6 h-6 group-hover:rotate-90 transition-transform" />
                  </div>
                  <div>
                    <span className="font-display font-bold text-white uppercase tracking-wider text-lg block">
                      {INDUSTRIES_DATA[type].title}
                    </span>
                    <span className="font-mono text-xs text-gray-500 uppercase tracking-widest group-hover:text-white/80 transition-colors">
                      {INDUSTRIES_DATA[type].subtitle}
                    </span>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-500 group-hover:text-lux-green group-hover:translate-x-1 transition-all" />
              </button>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};

export default Home;