import React from 'react';
import { Server, Shield, Zap } from 'lucide-react';

const Methodology: React.FC = () => {
  return (
    <div className="min-h-screen pt-24 pb-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-8 uppercase tracking-tight">CORE METHODOLOGY</h1>
        
        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-lux-green font-mono mb-12">
            Our architecture prioritizes latency above all else. We process telemetry at the edge, ensuring decisions happen in milliseconds, not seconds.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
            <div className="space-y-4">
              <div className="bg-white/5 w-12 h-12 flex items-center justify-center rounded border border-lux-green/20">
                <Zap className="text-lux-green" />
              </div>
              <h3 className="text-2xl font-bold text-white font-display uppercase">Edge Computation</h3>
              <p className="text-gray-400">
                 [Content Placeholder] Data is ingested via UDP streams directly to our edge nodes, minimizing round-trip time to central servers.
              </p>
            </div>
             <div className="space-y-4">
              <div className="bg-white/5 w-12 h-12 flex items-center justify-center rounded border border-lux-green/20">
                <Server className="text-lux-green" />
              </div>
              <h3 className="text-2xl font-bold text-white font-display uppercase">Distributed Mesh</h3>
              <p className="text-gray-400">
                 [Content Placeholder] Our mesh network ensures high availability even in challenging RF environments like racetracks or remote mining sites.
              </p>
            </div>
             <div className="space-y-4">
              <div className="bg-white/5 w-12 h-12 flex items-center justify-center rounded border border-lux-green/20">
                <Shield className="text-lux-green" />
              </div>
              <h3 className="text-2xl font-bold text-white font-display uppercase">Military-Grade Encryption</h3>
              <p className="text-gray-400">
                 [Content Placeholder] All data streams are encrypted AES-256 end-to-end, ensuring competitor teams cannot intercept telemetry.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Methodology;