import React from 'react';
import { useNavigate } from 'react-router-dom';
import DashboardEmbed from '../components/DashboardEmbed';
import { Home, Shield, Thermometer, Users, Smartphone, Database } from 'lucide-react';

const Residential: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen pt-24 pb-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-12">
         <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-4 uppercase tracking-tight">RESIDENTIAL OPERATIONS</h1>
         <h2 className="text-xl md:text-2xl text-lux-green font-mono mb-6">Private Estate Management</h2>
         <p className="text-gray-400 max-w-2xl text-lg leading-relaxed">
           Unified control systems for ultra-high-net-worth property portfolios. Security, environmental monitoring, and staff coordination in one interface.
         </p>
      </div>

      {/* Dashboard */}
      <div className="mb-24">
        <DashboardEmbed url="https://majordomoresidential.netlify.app/" title="Residential Command" />
      </div>

      {/* Custom Integration Block */}
      <div className="bg-[#0b0c15] border border-white/10 rounded-xl p-8 md:p-12 mb-24">
        <h2 className="text-3xl font-display font-bold text-white uppercase mb-6">CUSTOM INTEGRATION</h2>
        <p className="text-gray-400 text-lg mb-8 max-w-4xl font-sans leading-relaxed">
          Unlike our commercial dashboards, residential estate systems are bespoke installations tailored to your property portfolio. Pricing reflects the complexity of integration, custom hardware installation, and the white-glove service expected at this level.
        </p>
        
        <div className="border-t border-white/10 pt-8 mb-12">
          <p className="text-lux-green font-display text-xl md:text-2xl uppercase font-bold leading-tight">
            Investment Range: £35K–£150K initial setup, with ongoing monitoring from £500–£3,500/month
          </p>
        </div>

        <h3 className="text-2xl font-display font-bold text-white uppercase mb-8">WHAT INFLUENCES YOUR PRICE:</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
          <div className="flex items-start">
             <Home className="w-8 h-8 text-lux-green mr-4 mt-1 flex-shrink-0" />
             <div>
               <h4 className="text-white font-bold uppercase mb-2">PROPERTY PORTFOLIO SIZE</h4>
               <p className="text-gray-400 text-sm">Monitoring 1 estate vs. 5+ properties globally.</p>
             </div>
          </div>
          <div className="flex items-start">
             <Shield className="w-8 h-8 text-lux-green mr-4 mt-1 flex-shrink-0" />
             <div>
               <h4 className="text-white font-bold uppercase mb-2">ASSET PROTECTION SCOPE</h4>
               <p className="text-gray-400 text-sm">Basic environmental monitoring vs. full RFID tracking for art collections and wine inventory.</p>
             </div>
          </div>
          <div className="flex items-start">
             <Thermometer className="w-8 h-8 text-lux-green mr-4 mt-1 flex-shrink-0" />
             <div>
               <h4 className="text-white font-bold uppercase mb-2">SYSTEM INTEGRATION DEPTH</h4>
               <p className="text-gray-400 text-sm">Read-only monitoring vs. active control of HVAC, security, and access systems.</p>
             </div>
          </div>
           <div className="flex items-start">
             <Users className="w-8 h-8 text-lux-green mr-4 mt-1 flex-shrink-0" />
             <div>
               <h4 className="text-white font-bold uppercase mb-2">SUPPORT EXPECTATIONS</h4>
               <p className="text-gray-400 text-sm">Standard business hours vs. 24/7 dedicated concierge.</p>
             </div>
          </div>
        </div>
      </div>

      {/* Typical Configurations */}
      <div className="mb-24">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-white text-center mb-16 uppercase">TYPICAL CONFIGURATIONS</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
           {/* Card 1 */}
           <div className="bg-[#050505] border border-white/10 p-8 rounded-lg flex flex-col relative group hover:border-white/20 transition-colors">
              <div className="mb-6">
                <Smartphone className="w-10 h-10 text-lux-green mb-6" />
                <h3 className="text-2xl font-display font-bold text-white uppercase mb-4">SINGLE ESTATE MONITORING</h3>
                <p className="text-gray-400 text-sm font-sans leading-relaxed mb-8">
                  Real-time environmental data, security integration, staff tracking, and mobile access across your primary residence.
                </p>
              </div>
              <div className="mt-auto border-t border-white/10 pt-6">
                 <div className="text-2xl font-bold text-white mb-1">From £35K</div>
                 <div className="text-gray-500 text-sm font-mono">+ £500/month</div>
              </div>
           </div>

           {/* Card 2 - Popular */}
           <div className="bg-[#050505] border border-lux-green p-8 rounded-lg flex flex-col relative group">
              <div className="absolute top-0 right-0 bg-lux-green text-black px-3 py-1 text-xs font-bold uppercase tracking-widest font-mono">
                POPULAR
              </div>
              <div className="mb-6">
                <Database className="w-10 h-10 text-lux-green mb-6" />
                <h3 className="text-2xl font-display font-bold text-white uppercase mb-4">MULTI-PROPERTY COMMAND</h3>
                <p className="text-gray-400 text-sm font-sans leading-relaxed mb-8">
                  Centralized control across your property portfolio with advanced automation, wine cellar management, and priority support.
                </p>
              </div>
              <div className="mt-auto border-t border-white/10 pt-6">
                 <div className="text-2xl font-bold text-white mb-1">From £75K</div>
                 <div className="text-gray-500 text-sm font-mono">+ £1,500/month</div>
              </div>
           </div>

           {/* Card 3 */}
           <div className="bg-[#050505] border border-white/10 p-8 rounded-lg flex flex-col relative group hover:border-white/20 transition-colors">
              <div className="mb-6">
                <Shield className="w-10 h-10 text-lux-green mb-6" />
                <h3 className="text-2xl font-display font-bold text-white uppercase mb-4">FULL CONCIERGE ESTATE</h3>
                <p className="text-gray-400 text-sm font-sans leading-relaxed mb-8">
                  Unlimited properties, predictive AI, custom RFID installations for high-value assets, dedicated account manager, and 24/7 emergency response.
                </p>
              </div>
              <div className="mt-auto border-t border-white/10 pt-6">
                 <div className="text-2xl font-bold text-white mb-1">From £150K</div>
                 <div className="text-gray-500 text-sm font-mono">+ £3,500/month</div>
              </div>
           </div>
        </div>

        <div className="mt-16 text-center">
          <button 
            onClick={() => navigate('/contact')}
            className="bg-lux-green text-black px-8 py-5 font-display font-bold text-xl uppercase hover:bg-white transition-colors tracking-widest"
          >
            SCHEDULE A CONFIDENTIAL CONSULTATION
          </button>
           <p className="text-gray-500 text-xs mt-6 max-w-2xl mx-auto flex items-center justify-center">
             <Shield className="w-3 h-3 mr-2" />
             All systems include professional installation, ongoing software updates, secure data retention, and our commitment to protecting your privacy and assets.
           </p>
        </div>
      </div>
    </div>
  );
};

export default Residential;