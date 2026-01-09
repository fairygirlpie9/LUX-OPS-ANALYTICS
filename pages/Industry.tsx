import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { INDUSTRIES_DATA } from '../constants';
import { IndustryType } from '../types';
import DashboardEmbed from '../components/DashboardEmbed';
import { ChevronRight, CheckCircle2, Check, Plus, Crosshair, Scan, Battery, Grip } from 'lucide-react';
import clsx from 'clsx';

const INDUSTRY_PRICING = [
  {
    name: 'PROFESSIONAL',
    price: '$25,000',
    subPrice: '/ ONE-TIME BUILD',
    description: 'Real-time intelligence for operational teams.',
    features: [
      'Up to 3 API sources',
      'Up to 4 dashboard views',
      '15-20 AI rules',
      '10 user seats',
      'Custom styling',
      '2-week deployment',
      '60 days support',
      'Browser based',
      'Optional Monthly Retainer'
    ],
    cta: 'BOOK DEMO',
    highlight: false,
    footer: 'BEST FOR: Single teams, Clear scope, Standard APIs'
  },
  {
    name: 'ENTERPRISE',
    price: '$60,000',
    prefix: 'STARTING AT',
    description: 'Mission-critical command centers.',
    features: [
      'Unlimited APIs',
      'Unlimited views',
      '30+ AI rules or ML',
      'Unlimited users',
      'Fully bespoke design',
      '1-2 week priority',
      '6 months support',
      'White-label option',
      'Dedicated account mgr',
      'Optional Monthly Retainer'
    ],
    cta: 'BOOK DEMO',
    highlight: true,
    footer: 'BEST FOR: Mission-critical ops, Multi-location, Complex integrations'
  }
];

const RETAINERS = [
  {
    name: 'MAINTENANCE',
    price: '$2,500',
    period: '/ MONTH',
    description: 'Ensure your command center stays operational 24/7.',
    features: [
      'Server Health Monitoring',
      'Security Patches & Updates',
      '48-hour Support SLA',
      'Monthly Performance Report'
    ]
  },
  {
    name: 'GROWTH',
    price: '$5,000',
    period: '/ MONTH',
    description: 'Continuous evolution of your operational intelligence.',
    features: [
      'Everything in Maintenance',
      '10 Hours Dedicated Dev Time',
      'Priority 4-hour Support SLA',
      'Quarterly Strategy Review'
    ]
  }
];

const Industry: React.FC = () => {
  const { type } = useParams<{ type: string }>();
  const navigate = useNavigate();

  // Type guard or fallback
  const industryId = Object.values(IndustryType).includes(type as IndustryType) 
    ? (type as IndustryType) 
    : IndustryType.MOTORSPORTS;

  const data = INDUSTRIES_DATA[industryId];
  const isCustom = industryId === IndustryType.CUSTOM;

  return (
    <div className="min-h-screen pt-24 pb-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Header */}
      <div className="mb-12">
        <div className="flex items-center space-x-2 text-sm text-lux-green font-mono uppercase mb-4">
          <span className="opacity-50 cursor-pointer" onClick={() => navigate('/')}>Home</span>
          <ChevronRight className="w-4 h-4" />
          <span>Industries</span>
          <ChevronRight className="w-4 h-4" />
          <span>{data.title}</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-4 uppercase tracking-tight">{data.title}</h1>
        <h2 className="text-xl md:text-2xl text-lux-green font-mono mb-6">{data.subtitle}</h2>
        <p className="text-gray-400 max-w-2xl text-lg leading-relaxed">
          {data.description}
        </p>
      </div>

      {/* Dashboard Embed or Custom Image */}
      <div className="mb-16">
        {isCustom ? (
           <div className="w-full h-[600px] md:h-[850px] bg-[#050505] border border-white/10 rounded-lg relative overflow-hidden group mx-auto shadow-2xl">
             
             {/* Background Image - Grayscale & Contrast */}
             <div className="absolute inset-0">
                <img
                  src="https://i.ibb.co/FLqsFzX3/yacht.jpg"
                  alt="Industrial Control Center"
                  className="w-full h-full object-cover grayscale contrast-125 opacity-50 mix-blend-luminosity"
                />
                {/* Scanline/Grid Texture */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-10 bg-[length:100%_2px,3px_100%] pointer-events-none"></div>
                <div className="absolute inset-0 bg-lux-green/5 mix-blend-overlay"></div>
             </div>

             {/* UI Overlay - Faux Interface */}
             <div className="absolute inset-0 z-20 pointer-events-none p-4 md:p-8 flex flex-col justify-between">
                
                {/* Top Interface Bar */}
                <div className="flex justify-between items-start">
                    <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-2">
                             <div className="w-2 h-2 bg-lux-green animate-pulse"></div>
                             <span className="text-lux-green font-mono text-xs tracking-widest uppercase">LIVE FEED</span>
                        </div>
                        <div className="font-mono text-[10px] text-gray-400">ISO 800 // F.2.8 // 1/2000</div>
                    </div>
                    
                    {/* Center Top Markings */}
                    <div className="hidden md:flex gap-1">
                        {Array.from({length: 20}).map((_, i) => (
                            <div key={i} className={`w-1 h-2 ${i % 5 === 0 ? 'bg-white/40 h-3' : 'bg-white/10'}`}></div>
                        ))}
                    </div>

                    <div className="text-right">
                        <div className="text-white font-mono text-xs tracking-widest">CAM_04_EXT</div>
                        <div className="text-lux-green font-mono text-xs">REC [00:42:19]</div>
                    </div>
                </div>

                {/* Center Reticle */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-40">
                    <Crosshair className="w-24 h-24 text-white stroke-[0.5]" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-white/20 rounded-full border-dashed animate-[spin_10s_linear_infinite]"></div>
                </div>

                {/* Main Border Frame */}
                <div className="absolute inset-4 md:inset-8 border border-white/20 pointer-events-none">
                    {/* Corner Brackets */}
                    <div className="absolute -top-[1px] -left-[1px] w-8 h-8 border-l-2 border-t-2 border-lux-green"></div>
                    <div className="absolute -top-[1px] -right-[1px] w-8 h-8 border-r-2 border-t-2 border-lux-green"></div>
                    <div className="absolute -bottom-[1px] -left-[1px] w-8 h-8 border-l-2 border-b-2 border-lux-green"></div>
                    <div className="absolute -bottom-[1px] -right-[1px] w-8 h-8 border-r-2 border-b-2 border-lux-green"></div>
                </div>

                {/* Bottom Interface Bar */}
                <div className="flex justify-between items-end">
                    <div className="space-y-1">
                        <div className="flex items-center gap-2 text-white/60 font-mono text-[10px]">
                            <Scan className="w-4 h-4" />
                            <span>OBJECT_TRACKING: ENABLED</span>
                        </div>
                        <div className="font-mono text-[10px] text-lux-green">
                            LAT: 43.7384° N  LNG: 7.4246° E
                        </div>
                    </div>

                    <div className="flex items-end gap-4">
                        <div className="flex flex-col items-end gap-1">
                            <span className="text-[10px] font-mono text-gray-400">SIGNAL STRENGTH</span>
                            <div className="flex gap-0.5">
                                {[1,2,3,4,5].map(i => (
                                    <div key={i} className={`w-1.5 h-4 ${i < 4 ? 'bg-lux-green' : 'bg-gray-700'}`}></div>
                                ))}
                            </div>
                        </div>
                        <Battery className="w-6 h-6 text-white/60" />
                    </div>
                </div>

             </div>

          </div>
        ) : (
          <DashboardEmbed url={data.dashboardUrl} title={data.title} />
        )}
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
        {data.features.map((feature, idx) => (
          <div key={idx} className="bg-white/5 p-6 border border-white/10 rounded-lg hover:border-lux-green/50 transition-colors group">
            <CheckCircle2 className="w-8 h-8 text-lux-green mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-white font-bold text-lg mb-2">{feature}</h3>
          </div>
        ))}
      </div>

      {/* Industry Pricing Section */}
      <div className="mb-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-4 uppercase">INDUSTRY PRICING</h2>
          <p className="text-gray-400 font-mono text-lg">Standard packages for commercial operations and fleets.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {INDUSTRY_PRICING.map((tier, idx) => (
            <div 
              key={idx}
              className={clsx(
                "relative p-8 border flex flex-col h-full transition-all duration-300",
                tier.highlight ? "border-lux-green bg-black" : "border-white/10 bg-black"
              )}
            >
              {tier.highlight && (
                 <div className="absolute top-0 right-0 bg-lux-green text-black px-4 py-1 text-xs font-bold uppercase tracking-widest font-mono">
                  POPULAR
                 </div>
              )}

              <div className="mb-8 border-b border-white/10 pb-8">
                <h3 className="text-3xl font-display font-bold text-white uppercase mb-2">{tier.name}</h3>
                <div className="flex flex-col items-start mb-4">
                  {tier.prefix && <span className="text-gray-500 text-xs font-mono uppercase tracking-widest mb-1">{tier.prefix}</span>}
                  <div className="flex items-baseline flex-wrap">
                     <span className="text-5xl md:text-6xl font-display font-bold text-white tracking-tight">{tier.price}</span>
                     {tier.subPrice && <span className="text-gray-500 ml-2 font-mono text-xs uppercase tracking-widest">{tier.subPrice}</span>}
                  </div>
                </div>
                <p className="text-gray-400 font-mono text-sm min-h-[3rem]">{tier.description}</p>
              </div>

              <ul className="flex-1 space-y-4 mb-8">
                {tier.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start">
                    <div className="bg-lux-green/10 rounded-full p-0.5 mr-3 mt-0.5">
                      <Check className="w-3 h-3 text-lux-green" strokeWidth={3} />
                    </div>
                    <span className="text-gray-300 text-sm font-mono uppercase tracking-tight">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => navigate('/contact')}
                className={clsx(
                  "w-full py-4 font-display font-bold uppercase tracking-widest text-lg transition-colors mb-6",
                  tier.highlight
                    ? "bg-lux-green text-black hover:bg-white"
                    : "bg-white text-black hover:bg-lux-green"
                )}
              >
                {tier.cta}
              </button>
              
              {tier.footer && (
                 <div className="border-t border-white/10 pt-4">
                    <p className="text-gray-500 text-xs font-mono uppercase leading-relaxed">
                       {tier.footer}
                    </p>
                 </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Monthly Retainers Section */}
      <div className="mb-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4 uppercase">OPTIONAL MONTHLY RETAINERS</h2>
          <p className="text-gray-400 font-mono text-lg max-w-3xl mx-auto">Post-launch support packages to keep your operations running at peak efficiency.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {RETAINERS.map((retainer, idx) => (
            <div 
              key={idx} 
              className="bg-[#0A0A0A] border border-white/10 p-8 rounded-lg hover:border-lux-green/30 transition-colors"
            >
               <div className="flex justify-between items-start mb-6">
                 <h3 className="text-2xl font-display font-bold text-white uppercase">{retainer.name}</h3>
                 <div className="text-right">
                    <div className="text-lux-green font-display font-bold text-2xl">{retainer.price}</div>
                    <div className="text-gray-500 text-[10px] font-mono uppercase">{retainer.period}</div>
                 </div>
               </div>
               
               <p className="text-gray-400 font-mono text-sm mb-8 h-12">{retainer.description}</p>
               
               <ul className="space-y-3">
                 {retainer.features.map((feature, fIdx) => (
                   <li key={fIdx} className="flex items-center text-sm font-mono text-gray-300">
                     <Plus className="w-3 h-3 text-lux-green mr-2" />
                     {feature}
                   </li>
                 ))}
               </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="bg-lux-green text-black p-12 rounded-2xl flex flex-col md:flex-row items-center justify-between">
        <div className="mb-8 md:mb-0">
          <h3 className="text-4xl font-display font-bold mb-2 uppercase">Ready to deploy?</h3>
          <p className="font-mono text-lg opacity-80">Get full access to {data.title} module today.</p>
        </div>
        <div className="flex gap-4">
          <button 
             onClick={() => navigate('/contact')}
             className="bg-black text-white px-8 py-4 font-display font-bold text-lg uppercase hover:bg-gray-900 transition-colors"
          >
            Schedule Demo
          </button>
        </div>
      </div>
    </div>
  );
};

export default Industry;