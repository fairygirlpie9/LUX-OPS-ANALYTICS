import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });

      if (response.ok) {
        setSubmitStatus('success');
        (e.target as HTMLFormElement).reset();
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

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

        {/* Contact Form */}
        <div className="bg-[#0a0a0a] p-8 border border-white/10 rounded-xl relative overflow-hidden">
           {/* Decorative Top Border */}
           <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-lux-green to-transparent"></div>

          <form 
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            {/* Web3Forms Access Key - REPLACE WITH YOUR KEY */}
            <input type="hidden" name="access_key" value="82c321fe-4962-4d45-8124-33ee5cc76b6e" />
            
            {/* Optional: Redirect after submission */}
            <input type="hidden" name="redirect" value="https://lux-ops.com/?success=true" />
            
            {/* Your email where submissions go */}
            <input type="hidden" name="email" value="danielle@lux-ops.com" />

            {/* Status Messages */}
            {submitStatus === 'success' && (
              <div className="bg-lux-green/10 border border-lux-green text-lux-green px-4 py-3 rounded font-mono text-sm">
                ✓ TRANSMISSION SUCCESSFUL
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="bg-red-500/10 border border-red-500 text-red-500 px-4 py-3 rounded font-mono text-sm">
                ✗ TRANSMISSION FAILED - RETRY
              </div>
            )}

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
              <label htmlFor="from_email" className="block text-xs font-mono text-lux-green uppercase mb-2">Comms Channel</label>
              <input 
                type="email" 
                name="from_email" 
                id="from_email"
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
              disabled={isSubmitting}
              className="w-full bg-white text-black font-display font-bold text-lg py-4 uppercase tracking-widest hover:bg-lux-green transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'TRANSMITTING...' : 'TRANSMIT REQUEST'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;