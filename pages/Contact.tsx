import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen pt-24 pb-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Contact Info */}
        <div>
          <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 uppercase tracking-tight">INITIATE UPLINK</h1>
          <p className="text-gray-400 text-lg mb-8 font-sans">
            Ready to integrate LUX OPS into your stack? Schedule a demo with our engineering team or request a sandbox environment.
          </p>
          
          <div className="space-y-6 font-mono text-sm">
            <div className="flex flex-col">
              <span className="text-lux-green mb-1 uppercase">Headquarters</span>
              <span className="text-white">London, United Kingdom</span>
            </div>
            <div className="flex flex-col">
              <span className="text-lux-green mb-1 uppercase">Email</span>
              <span className="text-white">danielle@lux-ops.com</span>
            </div>
          </div>
        </div>

        {/* Netlify Form */}
        <div className="bg-[#0a0a0a] p-8 border border-white/10 rounded-xl relative overflow-hidden">
           {/* Decorative Top Border */}
           <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-lux-green to-transparent"></div>

          <form 
            name="contact" 
            method="POST" 
            data-netlify="true" 
            action="/?success=true"
            className="space-y-6"
          >
            {/* Netlify Hidden Input */}
            <input type="hidden" name="form-name" value="contact" />

            <div>
              <label htmlFor="name" className="block text-xs font-mono text-lux-green uppercase mb-2">Identify</label>
              <input 
                type="text" 
                name="name" 
                id="name"
                required
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-lux-green transition-colors font-sans"
                placeholder="Name / Callsign"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-xs font-mono text-lux-green uppercase mb-2">Comms Channel</label>
              <input 
                type="email" 
                name="email" 
                id="email"
                required
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-lux-green transition-colors font-sans"
                placeholder="corporate@email.com"
              />
            </div>

            <div>
              <label htmlFor="company" className="block text-xs font-mono text-lux-green uppercase mb-2">Organization</label>
              <input 
                type="text" 
                name="company" 
                id="company"
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-lux-green transition-colors font-sans"
                placeholder="Team / Fleet Name"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-xs font-mono text-lux-green uppercase mb-2">Payload Message</label>
              <textarea 
                name="message" 
                id="message"
                rows={4}
                required
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-lux-green transition-colors resize-none font-sans"
                placeholder="Describe your operational requirements..."
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="w-full bg-white text-black font-display font-bold text-lg py-4 uppercase tracking-widest hover:bg-lux-green transition-colors"
            >
              Transmit Request
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;