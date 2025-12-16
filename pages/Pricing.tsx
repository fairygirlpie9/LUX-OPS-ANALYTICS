import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PRICING_TIERS } from '../constants';
import { Check, X, ArrowUpRight } from 'lucide-react';
import clsx from 'clsx';
import { IndustryType } from '../types';

const COMPARISON_DATA = [
  { feature: 'Price', studio: '£99/mo', pro: '£1,500/mo', ent: 'From £5,000/mo' },
  { feature: 'Setup Fee', studio: '£0', pro: '£2,500', ent: 'From £10,000' },
  { feature: 'Data Type', studio: 'Offline only', pro: 'Real-time live', ent: 'Real-time live' },
  { feature: 'Industry Templates', studio: '1 (fixed)', pro: '1 (customizable)', ent: 'Multiple or custom' },
  { feature: 'API Calls/Month', studio: 'N/A', pro: '500,000', ent: 'Unlimited' },
  { feature: 'Users', studio: '1', pro: 'Up to 10', ent: 'Unlimited' },
  { feature: 'Branding', studio: 'Powered by Lux Ops', pro: 'Custom branding', ent: 'White-label' },
  { feature: 'Support', studio: 'Community', pro: 'Priority (24-48hr)', ent: 'Dedicated (4hr SLA)' },
  { feature: 'Customization', studio: 'None', pro: 'Standard', ent: 'Fully bespoke' },
  { feature: 'Integrations', studio: 'Self-upload only', pro: 'Standard connectors', ent: 'Custom APIs' },
  { feature: 'Account Manager', studio: false, pro: false, ent: true },
];

const Pricing: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen pt-24 pb-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Header Section */}
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-4 uppercase tracking-tight">
          REAL-TIME OPERATIONS <br/><span className="text-lux-green">INTELLIGENCE</span>
        </h1>
        
        {/* Demo Links */}
        <div className="mt-8 mb-12">
          <p className="text-gray-400 font-mono text-sm mb-4 uppercase tracking-widest">See it in action:</p>
          <div className="flex flex-wrap justify-center gap-4">
            <button 
              onClick={() => navigate(`/industry/${IndustryType.MOTORSPORTS}`)}
              className="group flex items-center bg-white/5 border border-white/10 px-4 py-2 rounded hover:border-lux-green hover:bg-white/10 transition-all"
            >
              <span className="font-display font-bold text-white uppercase mr-2 text-sm">Motorsports Demo</span>
              <ArrowUpRight className="w-4 h-4 text-lux-green group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
            <button 
              onClick={() => navigate(`/industry/${IndustryType.FLEET}`)}
              className="group flex items-center bg-white/5 border border-white/10 px-4 py-2 rounded hover:border-lux-green hover:bg-white/10 transition-all"
            >
              <span className="font-display font-bold text-white uppercase mr-2 text-sm">Fleet Demo</span>
              <ArrowUpRight className="w-4 h-4 text-lux-green group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
            <button 
              onClick={() => navigate(`/industry/${IndustryType.AERIAL}`)}
              className="group flex items-center bg-white/5 border border-white/10 px-4 py-2 rounded hover:border-lux-green hover:bg-white/10 transition-all"
            >
              <span className="font-display font-bold text-white uppercase mr-2 text-sm">Drone Demo</span>
              <ArrowUpRight className="w-4 h-4 text-lux-green group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
            <button 
              onClick={() => navigate(`/industry/${IndustryType.EVENTS}`)}
              className="group flex items-center bg-white/5 border border-white/10 px-4 py-2 rounded hover:border-lux-green hover:bg-white/10 transition-all"
            >
              <span className="font-display font-bold text-white uppercase mr-2 text-sm">Events Demo</span>
              <ArrowUpRight className="w-4 h-4 text-lux-green group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>

        <p className="text-gray-400 max-w-2xl mx-auto font-mono text-lg">
          Transparent pricing for mission-critical data.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        {PRICING_TIERS.map((tier, index) => (
          <div 
            key={index} 
            className={clsx(
              "relative p-8 rounded-2xl border flex flex-col transition-transform duration-300 hover:-translate-y-2",
              tier.recommended 
                ? "bg-white/10 border-lux-green shadow-[0_0_30px_rgba(204,255,0,0.1)] scale-105 z-10" 
                : "bg-black border-white/10"
            )}
          >
            {tier.recommended && (
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-lux-green text-black px-4 py-1 text-xs font-bold uppercase tracking-widest rounded-full font-mono">
                Recommended
              </div>
            )}

            <div className="mb-8">
              <h3 className="text-xl font-display font-bold text-lux-green uppercase mb-2 tracking-wide">{tier.name}</h3>
              <div className="flex items-baseline">
                <span className="text-5xl font-display font-bold text-white tracking-tight">{tier.price}</span>
                <span className="text-gray-400 ml-2 font-mono text-sm">{tier.period}</span>
              </div>
            </div>

            <ul className="flex-1 space-y-4 mb-8">
              {tier.features.map((feature, idx) => (
                <li key={idx} className="flex items-start">
                  <Check className="w-5 h-5 text-lux-green mr-3 shrink-0" />
                  <span className="text-gray-300 text-sm font-sans">{feature}</span>
                </li>
              ))}
            </ul>

            <button
              onClick={() => navigate('/contact')}
              className={clsx(
                "w-full py-4 font-display font-bold uppercase tracking-wide transition-colors text-lg",
                tier.recommended
                  ? "bg-lux-green text-black hover:bg-white"
                  : "bg-white/10 text-white hover:bg-white hover:text-black"
              )}
            >
              {tier.ctaText}
            </button>
          </div>
        ))}
      </div>

      {/* Comparison Table */}
      <div className="mb-20 overflow-x-auto">
        <h2 className="text-3xl font-display font-bold text-white mb-8 uppercase">Detailed Comparison</h2>
        <table className="w-full text-left border-collapse min-w-[800px]">
          <thead>
            <tr>
              <th className="py-4 px-6 bg-white/5 font-display font-bold text-lux-green uppercase border-b border-white/20 w-1/4">Feature</th>
              <th className="py-4 px-6 bg-white/5 font-display font-bold text-white uppercase border-b border-white/20 w-1/4">Studio</th>
              <th className="py-4 px-6 bg-white/5 font-display font-bold text-white uppercase border-b border-white/20 w-1/4">Professional</th>
              <th className="py-4 px-6 bg-white/5 font-display font-bold text-white uppercase border-b border-white/20 w-1/4">Enterprise</th>
            </tr>
          </thead>
          <tbody className="font-mono text-sm">
            {COMPARISON_DATA.map((row, idx) => (
              <tr key={idx} className="border-b border-white/10 hover:bg-white/5 transition-colors">
                <td className="py-4 px-6 font-bold text-gray-300">{row.feature}</td>
                <td className="py-4 px-6 text-gray-400">
                  {typeof row.studio === 'boolean' ? (row.studio ? <Check className="text-lux-green w-5 h-5"/> : <X className="text-gray-600 w-5 h-5"/>) : row.studio}
                </td>
                <td className="py-4 px-6 text-gray-400">
                  {typeof row.pro === 'boolean' ? (row.pro ? <Check className="text-lux-green w-5 h-5"/> : <X className="text-gray-600 w-5 h-5"/>) : row.pro}
                </td>
                <td className="py-4 px-6 text-white font-bold">
                  {typeof row.ent === 'boolean' ? (row.ent ? <Check className="text-lux-green w-5 h-5"/> : <X className="text-gray-600 w-5 h-5"/>) : row.ent}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Payment Terms */}
      <div className="bg-[#0a0a0a] border border-white/10 rounded-xl p-8 max-w-2xl">
        <h3 className="text-xl font-display font-bold text-white mb-4 uppercase flex items-center">
          <span className="w-2 h-2 bg-lux-green mr-3"></span>
          Payment Terms
        </h3>
        <div className="space-y-4">
          <h4 className="font-mono text-lux-green text-sm uppercase">Monthly Billing:</h4>
          <ul className="space-y-2 font-sans text-gray-400 text-sm">
            <li className="flex items-center">
              <span className="w-1 h-1 bg-gray-500 rounded-full mr-2"></span>
              Billed monthly in advance
            </li>
            <li className="flex items-center">
              <span className="w-1 h-1 bg-gray-500 rounded-full mr-2"></span>
              Cancel anytime (30-day notice)
            </li>
            <li className="flex items-center">
              <span className="w-1 h-1 bg-gray-500 rounded-full mr-2"></span>
              Setup fees due before onboarding begins
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Pricing;