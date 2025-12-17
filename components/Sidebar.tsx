
import React from 'react';
import type { Module } from '../types';
import { CheckIcon, HomeIcon } from './Icons';

interface SidebarProps {
  modules: Module[];
  completedModules: number[];
  activeModuleId: number | null;
  onSelectModule: (moduleId: number) => void;
  onGoHome: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ modules, completedModules, activeModuleId, onSelectModule, onGoHome }) => {
  return (
    <div className="h-full flex flex-col text-text-primary">
      <div className="p-4 border-b border-white/5">
        <h2 className="text-2xl font-black text-center text-lumen-primary uppercase tracking-widest">GTO Mastery</h2>
      </div>
      <nav className="flex-1 overflow-y-auto">
        <ul>
          <li>
            <button
              onClick={onGoHome}
              className={`w-full text-left flex items-center gap-3 p-4 text-lg font-semibold transition-colors duration-200 ${!activeModuleId ? 'bg-lumen-primary text-black' : 'hover:bg-white/5'}`}
              aria-current={!activeModuleId}
            >
              <HomeIcon className="w-6 h-6"/>
              <span>Home</span>
            </button>
          </li>
          {modules.map(module => {
            const isCompleted = completedModules.includes(module.id);
            const isActive = activeModuleId === module.id;

            return (
              <li key={module.id}>
                <button
                  onClick={() => onSelectModule(module.id)}
                  className={`w-full text-left flex items-center justify-between p-3 transition-colors duration-200 ${isActive ? 'bg-lumen-primary/20' : 'hover:bg-white/5'}`}
                  aria-current={isActive}
                >
                  <div className="flex items-center gap-3">
                    <span className={`font-mono text-sm p-1 rounded uppercase tracking-widest ${isActive ? 'text-text-primary' : 'text-text-muted'}`}>
                      M{String(module.id).padStart(2, '0')}
                    </span>
                    <span className={`${isActive ? 'font-bold' : ''}`}>{module.title}</span>
                  </div>
                  {isCompleted && <CheckIcon className="w-5 h-5 text-lumen-primary" />}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};