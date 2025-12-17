
import React from 'react';

interface ProgressBarProps {
  progress: number;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  const safeProgress = Math.max(0, Math.min(100, progress));

  return (
    <div>
      <div className="flex justify-between mb-1">
        <span className="text-base font-semibold text-text-muted uppercase tracking-wider">Course Progress</span>
        <span className="text-sm font-semibold text-text-primary">{Math.round(safeProgress)}%</span>
      </div>
      <div className="w-full bg-lumen-dim rounded-full h-2.5">
        <div 
          className="bg-gradient-to-r from-lumen-primary to-lumen-secondary h-2.5 rounded-full transition-all duration-500 shadow-glow" 
          style={{ width: `${safeProgress}%` }}
        ></div>
      </div>
    </div>
  );
};