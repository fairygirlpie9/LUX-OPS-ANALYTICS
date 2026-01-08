import React, { useState } from 'react';
import { Mail, MapPin } from 'lucide-react';

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
    <div className="min-h-screen pt-32 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        
        {/* Left Column: Info & Context */}
        <div className="flex flex-col">
          <h1 className="text-6xl md:text-7xl font-display font-bold text-white mb-6 uppercase tracking-tight leading-none">
            INITIATE <br/> CONTACT
          </h1>
          
          <p className="text-gray-400 text-lg mb-12 font-sans leading-relaxed">
            Ready to transform your operations data into a competitive advantage? Our engineering team reviews all inquiries to ensure we are the right fit for your mission-critical objectives.
          </p>
          
          <div className="space-y-6 mb-12">
            
            {/* Email Box */}
            <div className="flex items-start">
              <div className="bg-lux-green/10 border border-lux-green/20 p-3 rounded mr-4">
                <Mail className="w-6 h-6 text-lux-green" />
              </div>
              <div>
                <h3 className="text-white font-display font-bold text-xl uppercase mb-1">EMAIL</h3>
                <p className="text-gray-300 font-mono text-sm mb-1">hello@lux-ops.com</p>
                <p className="text-gray-500 font-mono text-xs">Response time: ~4 hours (Enterprise)</p>
              </div>
            </div>

            {/* HQ Box */}
            <div className="flex items-start">
              <div className="bg-lux-green/10 border border-lux-green/20 p-3 rounded mr-4">
                <MapPin className="w-6 h-6 text-lux-green" />
              </div>
              <div>
                <h3 className="text-white font-display font-bold text-xl uppercase mb-1">HQ</h3>
                <p className="text-gray-300 font-mono text-sm mb-1">London, United Kingdom</p>
                <p className="text-gray-500 font-mono text-xs">Global Remote Operations</p>
              </div>
            </div>

          </div>

          {/* Info Card */}
          <div className="mt-auto bg-[#0a0a0a] border border-white/10 rounded-lg p-6">
            <h4 className="text-lux-green font-display font-bold uppercase text-lg mb-4">BEFORE YOU REQUEST:</h4>
            <ul className="space-y-3 font-mono text-xs text-gray-400">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                We do not offer free trials for custom builds.
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                Minimum engagement starts at $25,000.
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                Please have your data sources identified (API, CSV, SQL).
              </li>
            </ul>
          </div>
        </div>

        {/* Right Column: Form */}
        <div className="bg-[#0b0c15] p-8 md:p-10 rounded-2xl border border-white/5 shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Web3Forms Config */}
            <input type="hidden" name="access_key" value="82c321fe-4962-4d45-8124-33ee5cc76b6e" />
            <input type="hidden" name="email" value="danielle@lux-ops.com" />
            
            {/* Status Messages */}
            {submitStatus === 'success' && (
              <div className="bg-lux-green/10 border border-lux-green text-lux-green px-4 py-3 rounded font-mono text-sm col-span-2">
                ✓ INQUIRY RECEIVED. STAND BY FOR UPLINK.
              </div>
            )}
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* First Name */}
              <div>
                <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2">First Name *</label>
                <input 
                  type="text" 
                  name="first_name" 
                  placeholder="Jane"
                  required
                  className="w-full bg-[#050505] border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-lux-green transition-colors font-sans text-sm placeholder-gray-600"
                />
              </div>

              {/* Last Name */}
              <div>
                <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2">Last Name *</label>
                <input 
                  type="text" 
                  name="last_name" 
                  placeholder="Doe"
                  required
                  className="w-full bg-[#050505] border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-lux-green transition-colors font-sans text-sm placeholder-gray-600"
                />
              </div>

              {/* Work Email */}
              <div>
                <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2">Work Email *</label>
                <input 
                  type="email" 
                  name="email" 
                  placeholder="jane@company.com"
                  required
                  className="w-full bg-[#050505] border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-lux-green transition-colors font-sans text-sm placeholder-gray-600"
                />
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2">Phone Number</label>
                <input 
                  type="tel" 
                  name="phone" 
                  placeholder="+1 (555) 000-0000"
                  className="w-full bg-[#050505] border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-lux-green transition-colors font-sans text-sm placeholder-gray-600"
                />
              </div>

              {/* Company Name */}
              <div>
                <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2">Company Name *</label>
                <input 
                  type="text" 
                  name="company" 
                  required
                  className="w-full bg-[#050505] border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-lux-green transition-colors font-sans text-sm"
                />
              </div>

              {/* Job Title */}
              <div>
                <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2">Job Title</label>
                <input 
                  type="text" 
                  name="job_title" 
                  className="w-full bg-[#050505] border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-lux-green transition-colors font-sans text-sm"
                />
              </div>

              {/* Industry Sector */}
              <div>
                <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2">Industry Sector *</label>
                <select 
                  name="industry"
                  required
                  className="w-full bg-[#050505] border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-lux-green transition-colors font-sans text-sm appearance-none"
                >
                  <option value="motorsports">Motorsports</option>
                  <option value="fleet">Fleet Operations</option>
                  <option value="aerial">Aerial / Drone</option>
                  <option value="residential">Residential</option>
                  <option value="custom">Custom / Other</option>
                </select>
              </div>

               {/* Budget */}
               <div>
                <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2">Estimated Budget *</label>
                <select 
                  name="budget"
                  required
                  className="w-full bg-[#050505] border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-lux-green transition-colors font-sans text-sm appearance-none"
                >
                  <option value="">Select Range...</option>
                  <option value="25k-50k">$25k - $50k</option>
                  <option value="50k-100k">$50k - $100k</option>
                  <option value="100k+">$100k+</option>
                  <option value="retainer">Monthly Retainer Only</option>
                </select>
              </div>

              {/* Timeline (Full Width) */}
              <div className="md:col-span-2">
                <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2">Target Timeline</label>
                <input 
                  type="text" 
                  name="timeline" 
                  placeholder="ASAP (Rush)"
                  className="w-full bg-[#050505] border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-lux-green transition-colors font-sans text-sm placeholder-gray-600"
                />
              </div>

              {/* Project Requirements (Full Width) */}
              <div className="md:col-span-2">
                <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2">Project Requirements & Data Sources *</label>
                <textarea 
                  name="message" 
                  rows={4}
                  required
                  className="w-full bg-[#050505] border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-lux-green transition-colors resize-none font-sans text-sm placeholder-gray-600"
                  placeholder="Describe your operational challenge. What data do you have available?"
                ></textarea>
              </div>

            </div>

            <button 
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-lux-green text-black font-display font-bold text-xl py-4 rounded-md uppercase tracking-widest hover:bg-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed mt-4"
            >
              {isSubmitting ? 'TRANSMITTING...' : 'SUBMIT INQUIRY'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;