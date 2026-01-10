import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Check, ArrowUpRight, Plus } from 'lucide-react';
import clsx from 'clsx';
import { IndustryType } from '../types';

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

const Pricing: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen pt-24 pb-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Header Section */}
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-4 uppercase tracking-tight">
          TRANSPARENT <br/><span className="text-lux-green">DEPLOYMENT</span>
        </h1>
        
        {/* Demo Links */}
        <div className="mt-8 mb-12">
          <p className="text-gray-400 font-mono text-sm mb-4 uppercase tracking-widest">See it in action:</p>
          <div className="flex flex-wrap justify-center gap-4">
            <button 
              onClick={() => navigate(`/industry/${IndustryType.MOTORSPORTS}`)}
              className="group flex items-center bg-white/5 border border-white/10 px-4 py-2 rounded hover:border-lux-green hover:bg-white/10 transition-all"
            >
              <span className="font-display font-bold text-white uppercase mr-2 text-sm">Motorsports</span>
              <ArrowUpRight className="w-4 h-4 text-lux-green group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
            <button 
              onClick={() => navigate(`/industry/${IndustryType.FLEET}`)}
              className="group flex items-center bg-white/5 border border-white/10 px-4 py-2 rounded hover:border-lux-green hover:bg-white/10 transition-all"
            >
              <span className="font-display font-bold text-white uppercase mr-2 text-sm">Fleet</span>
              <ArrowUpRight className="w-4 h-4 text-lux-green group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
            <button 
              onClick={() => navigate(`/industry/${IndustryType.AERIAL}`)}
              className="group flex items-center bg-white/5 border border-white/10 px-4 py-2 rounded hover:border-lux-green hover:bg-white/10 transition-all"
            >
              <span className="font-display font-bold text-white uppercase mr-2 text-sm">Aerial</span>
              <ArrowUpRight className="w-4 h-4 text-lux-green group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
            <button 
              onClick={() => navigate(`/industry/${IndustryType.CUSTOM}`)}
              className="group flex items-center bg-white/5 border border-white/10 px-4 py-2 rounded hover:border-lux-green hover:bg-white/10 transition-all"
            >
              <span className="font-display font-bold text-white uppercase mr-2 text-sm">Custom</span>
              <ArrowUpRight className="w-4 h-4 text-lux-green group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>

        <p className="text-gray-400 max-w-2xl mx-auto font-mono text-lg">
          One-time build fees. Optional retainers. <br />
          No hidden monthly subscriptions.
        </p>
      </div>

      {/* Main Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-24">
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

      {/* Retainers Section */}
      <div className="mb-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4 uppercase">OPTIONAL RETAINERS</h2>
          <p className="text-gray-400 font-mono text-lg max-w-3xl mx-auto">Keep your operations running at peak efficiency.</p>
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

      {/* Payment Terms */}
      <div className="bg-[#0a0a0a] border border-white/10 rounded-xl p-8 max-w-2xl mx-auto mb-24">
        <h3 className="text-xl font-display font-bold text-white mb-4 uppercase flex items-center">
          <span className="w-2 h-2 bg-lux-green mr-3"></span>
          Payment Structure
        </h3>
        <div className="space-y-4">
          <ul className="space-y-2 font-sans text-gray-400 text-sm">
            <li className="flex items-center">
              <span className="w-1 h-1 bg-gray-500 rounded-full mr-2"></span>
              50% Deposit to commence development
            </li>
            <li className="flex items-center">
              <span className="w-1 h-1 bg-gray-500 rounded-full mr-2"></span>
              50% Upon final deployment and sign-off
            </li>
            <li className="flex items-center">
              <span className="w-1 h-1 bg-gray-500 rounded-full mr-2"></span>
              Retainers billed monthly with 30-day cancellation
            </li>
          </ul>
        </div>
      </div>

      {/* Residential Pricing Section (Added) */}
      <div className="mb-24 pt-12 border-t border-white/10">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-12 uppercase text-center">RESIDENTIAL PRICING</h2>
        
        <div className="bg-[#0b0c15] border border-white/10 rounded-xl p-12 max-w-5xl mx-auto flex flex-col items-center text-center">
          <p className="text-white font-mono text-xl md:text-2xl mb-10 leading-relaxed max-w-4xl">
            Investment Range: £35K – £150K+ initial setup, plus monthly monitoring fee
          </p>
          <button 
            onClick={() => navigate('/contact')}
            className="bg-lux-green text-black px-8 py-4 font-display font-bold text-lg uppercase hover:bg-white transition-colors tracking-wide"
          >
            GET A CUSTOM QUOTE
          </button>
        </div>
      </div>

    </div>
  );
};

export default Pricing;