import React from 'react';
import { Hexagon } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-lux-black border-t border-white/10 py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Hexagon className="h-6 w-6 text-gray-600" />
            <span className="ml-2 text-gray-500 font-mono text-sm">LUX OPS SYSTEMS // EST. 2025</span>
          </div>
          <div className="text-gray-600 font-mono text-xs">
            © {new Date().getFullYear()} LUX OPS. ALL SYSTEMS OPERATIONAL.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;