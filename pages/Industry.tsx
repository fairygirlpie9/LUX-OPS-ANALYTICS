import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { INDUSTRIES_DATA } from '../constants';
import { IndustryType } from '../types';
import DashboardEmbed from '../components/DashboardEmbed';
import { ChevronRight, CheckCircle2 } from 'lucide-react';

const Industry: React.FC = () => {
  const { type } = useParams<{ type: string }>();
  const navigate = useNavigate();

  // Type guard or fallback
  const industryId = Object.values(IndustryType).includes(type as IndustryType) 
    ? (type as IndustryType) 
    : IndustryType.MOTORSPORTS;

  const data = INDUSTRIES_DATA[industryId];

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

      {/* Dashboard Embed */}
      <div className="mb-16">
        <DashboardEmbed url={data.dashboardUrl} title={data.title} />
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        {data.features.map((feature, idx) => (
          <div key={idx} className="bg-white/5 p-6 border border-white/10 rounded-lg hover:border-lux-green/50 transition-colors group">
            <CheckCircle2 className="w-8 h-8 text-lux-green mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-white font-bold text-lg mb-2">{feature}</h3>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="bg-lux-green text-black p-12 rounded-2xl flex flex-col md:flex-row items-center justify-between">
        <div className="mb-8 md:mb-0">
          <h3 className="text-4xl font-display font-bold mb-2 uppercase">Ready to deploy?</h3>
          <p className="font-mono text-lg opacity-80">Get full access to {data.title} module today.</p>
        </div>
        <div className="flex gap-4">
          <button 
            onClick={() => navigate('/pricing')}
            className="bg-black text-white px-8 py-4 font-display font-bold text-lg uppercase hover:bg-gray-900 transition-colors"
          >
            View Pricing
          </button>
          <button 
             onClick={() => navigate('/contact')}
             className="bg-transparent border-2 border-black text-black px-8 py-4 font-display font-bold text-lg uppercase hover:bg-black hover:text-white transition-colors"
          >
            Schedule Demo
          </button>
        </div>
      </div>
    </div>
  );
};

export default Industry;