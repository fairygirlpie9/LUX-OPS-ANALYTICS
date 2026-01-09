import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Blog: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen pt-24 pb-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Top Nav */}
      <div className="flex items-center mb-8">
        <button 
          onClick={() => navigate('/')} 
          className="group flex items-center text-gray-400 hover:text-white transition-colors font-mono text-sm"
        >
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Logs
        </button>
      </div>

      {/* Date Badge */}
      <div className="flex justify-center mb-12">
        <div className="border border-lux-green/30 text-lux-green font-mono px-4 py-2 rounded text-sm uppercase tracking-wider bg-lux-green/5">
          LOG DATE: Wednesday 7th January 2025
        </div>
      </div>

      {/* Main Title */}
      <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white uppercase text-center leading-[0.9] mb-16 tracking-tight">
        HOW I DESIGNED THE TOYOTA GR RACING BEST IN REALTIME ANALYTICS DASHBOARD
      </h1>

      {/* Featured Image */}
      <div className="w-full mb-16 border border-white/10 rounded-lg overflow-hidden bg-white/5 p-1">
        <img 
          src="https://i.ibb.co/SD0nVCv6/blog-toyota-lux-ops.jpg" 
          alt="Toyota GR Racing Dashboard" 
          className="w-full h-auto rounded"
        />
      </div>

      {/* Content Sections */}
      <div className="space-y-16 max-w-4xl mx-auto">
        
        {/* Inspiration */}
        <section>
          <h2 className="text-2xl font-display font-bold text-lux-green uppercase mb-4 tracking-wide">Inspiration</h2>
          <p className="text-gray-300 text-lg leading-relaxed font-sans">
            The project was primarily inspired by the critical need for race engineers to make instant, data-driven decisions in the high-pressure environment of a live race. I recognised that winning often depends on the speed and accuracy of strategic calls. My goal was to create a tool that transforms massive amounts of raw telemetry data into actionable intelligence, directly enhancing driver insights and team performance during race-day decision-making for the GR Cup Series.
          </p>
        </section>

        {/* What It Does */}
        <section>
          <h2 className="text-2xl font-display font-bold text-lux-green uppercase mb-4 tracking-wide">What It Does</h2>
          <p className="text-gray-300 text-lg leading-relaxed font-sans">
            The GR Cup Real-Time Dashboard Simulator is a browser-based analytics and strategy tool designed for use by a race engineer on a tablet. It provides a real-time, visual experience of the race. It shows live standings and telemetry, while dynamically tracking all cars on the Barber Motorsports Park circuit, highlighting the selected car in red. The tool features a Strategy Impact panel displaying critical metrics like Tire Status and degradation, and competitor Gap Ahead/Behind. Most importantly, it uses AI to provide an immediate, data-driven recommendation (e.g., PUSH) and calculates the optimal Pit Stop window.
          </p>
        </section>

        {/* How I Built It */}
        <section>
          <h2 className="text-2xl font-display font-bold text-lux-green uppercase mb-4 tracking-wide">How I Built It</h2>
          <p className="text-gray-300 text-lg leading-relaxed font-sans">
            The dashboard was built using JavaScript and Three.js for the visualisation and real-time car movement. Live telemetry is ingested via API, with data streams for lap times, positions, weather conditions, and vehicle diagnostics processed in milliseconds. The track layout was created by tracing the Barber Motorsports Park circuit and rendering it as an SVG, allowing animated car positions to update in sync with incoming data.
          </p>
        </section>

        {/* What We Can Do For You */}
        <section>
          <h2 className="text-2xl font-display font-bold text-lux-green uppercase mb-4 tracking-wide">What We Can Do For You</h2>
          <p className="text-gray-300 text-lg leading-relaxed font-sans">
            This project was built for racing, but the same approach works for any industry with real-time data. We build custom dashboards that integrate with your existing APIs, whether you're tracking logistics fleets, managing energy systems, or monitoring remote operations. We take complex data streams and turn them into clear, actionable information for your team. No bloat, no clutter, just what you need to make decisions fast. From small teams to enterprise operations, we typically deploy a custom solution within two to four weeks.
          </p>
        </section>

      </div>

      {/* Bottom CTA */}
      <div className="max-w-4xl mx-auto mt-24">
        <div className="bg-lux-green text-black p-12 rounded-2xl flex flex-col md:flex-row items-center justify-between">
          <div className="mb-8 md:mb-0">
            <h3 className="text-4xl font-display font-bold mb-2 uppercase">Ready to deploy?</h3>
            <p className="font-mono text-lg opacity-80">Transform your operations with LUX OPS intelligence.</p>
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

    </div>
  );
};

export default Blog;