import React, { useState, useEffect } from 'react';

const SNIPPET = `import { Matrix4, Quaternion } from '@lux/math';
import { StreamProcessor } from '@lux/core';

// Initialize Telemetry Stream
const stream = new StreamProcessor({
  source: 'udp://race-control-01',
  frequency: '100Hz',
  buffer: 1024
});

stream.on('packet', (data) => {
  const transform = new Matrix4().compose(
    data.position,
    new Quaternion().setFromEuler(data.rotation),
    data.scale
  );
  
  // Real-time anomaly detection
  if (data.temp > 110) {
    await alert.critical('ENGINE_TEMP_HIGH');
  }
});`;

const CodeTerminal: React.FC = () => {
  const [text, setText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    if (isTyping) {
      if (text.length < SNIPPET.length) {
        timeout = setTimeout(() => {
          setText(SNIPPET.slice(0, text.length + 1));
        }, Math.random() * 30 + 20); // Random typing speed
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, 5000); // Wait before clearing
      }
    } else {
      if (text.length > 0) {
        timeout = setTimeout(() => {
          setText(''); // Instant clear like a fresh clear screen command
          setIsTyping(true);
        }, 1000);
      }
    }

    return () => clearTimeout(timeout);
  }, [text, isTyping]);

  return (
    <div className="w-full h-80 md:h-96 bg-[#0a0a0a] border border-white/20 rounded overflow-hidden font-mono text-xs md:text-sm shadow-2xl relative">
      <div className="bg-[#1a1a1a] px-4 py-1 flex items-center justify-between border-b border-white/10">
        <span className="text-gray-400">core_logic.ts</span>
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500"></div>
        </div>
      </div>
      <div className="p-4 text-gray-300 overflow-hidden h-full">
        <pre className="whitespace-pre-wrap break-all">
          <span className="text-pink-500">import</span> {`{ Matrix4 }`} <span className="text-pink-500">from</span> <span className="text-green-400">'@lux/math'</span>;
          {'\n'}
          {text}
          <span className="animate-pulse inline-block w-2 h-4 bg-lux-green align-middle ml-1"></span>
        </pre>
      </div>
    </div>
  );
};

export default CodeTerminal;