
import React from 'react';

export const Thinking: React.FC = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Outer ring */}
      <div className="absolute w-full h-full border-2 border-lumen-dim rounded-full animate-[spin_20s_linear_infinite]"></div>
      {/* Middle ring */}
      <div className="absolute w-3/4 h-3/4 border-2 border-lumen-dim rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
      {/* Inner ring */}
      <div className="absolute w-1/2 h-1/2 border-2 border-lumen-dim rounded-full animate-[spin_10s_linear_infinite]"></div>
      {/* Core pulse */}
      <div className="absolute w-1/4 h-1/4 bg-lumen-primary/50 rounded-full animate-pulse-slow shadow-glow"></div>
      <div className="absolute w-1/3 h-1/3 border-t-2 border-lumen-primary rounded-full animate-[spin_1s_linear_infinite]"></div>
    </div>
  );
};
