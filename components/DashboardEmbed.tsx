import React from 'react';
import { Loader2 } from 'lucide-react';

interface DashboardEmbedProps {
  url?: string;
  title: string;
}

const DashboardEmbed: React.FC<DashboardEmbedProps> = ({ url, title }) => {
  const [isLoading, setIsLoading] = React.useState(true);

  return (
    <div className="w-full aspect-[4/3] bg-[#0a0a0a] border border-white/10 rounded-lg relative overflow-hidden group max-w-5xl mx-auto flex flex-col">
      
      {/* Header/Control bar simulation */}
      <div className="h-8 bg-lux-black/80 border-b border-white/10 z-10 flex items-center justify-between px-4 backdrop-blur-sm shrink-0">
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
          <span className="text-[10px] font-mono text-lux-green uppercase tracking-wider">Live Connection Active</span>
        </div>
        <div className="text-[10px] font-mono text-gray-500 uppercase">
          Latency: 12ms
        </div>
      </div>

      <div className="relative flex-1 w-full min-h-0">
        {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center z-0">
            <div className="flex flex-col items-center">
                <Loader2 className="w-8 h-8 text-lux-green animate-spin mb-2" />
                <span className="font-mono text-xs text-gray-400">ESTABLISHING UPLINK...</span>
            </div>
            </div>
        )}

        {url ? (
            <iframe 
            src={url} 
            title={`${title} Dashboard`}
            className="w-full h-full"
            onLoad={() => setIsLoading(false)}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            />
        ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-[#050505]">
            <div className="text-center p-8 border border-white/10 border-dashed rounded bg-white/5">
                <h3 className="text-lux-green font-mono text-lg mb-2">NO SIGNAL</h3>
                <p className="text-gray-400 text-sm max-w-md">
                The live dashboard feed URL has not been configured in the registry. 
                <br/>
                <span className="text-xs opacity-50 mt-2 block">(Please provide embedded dashboard URL)</span>
                </p>
            </div>
            </div>
        )}
      </div>
      
      {/* Corner accents */}
      <div className="absolute bottom-0 left-0 w-4 h-4 border-l border-b border-lux-green/50 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-4 h-4 border-r border-b border-lux-green/50 pointer-events-none"></div>
    </div>
  );
};

export default DashboardEmbed;