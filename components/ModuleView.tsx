
import React, { useState } from 'react';
import type { Module } from '../types';
import { MarkdownRenderer } from './MarkdownRenderer';
import { Notes } from './Notes';
import { CheckIcon } from './Icons';
import { ModuleAssets } from './ModuleAssets';
import { VideoModal } from './VideoModal';

interface ModuleViewProps {
  module: Module & { content: string };
  onStartQuiz: () => void;
  onStartOralTest: () => void;
  isCompleted: boolean;
  onPreviousModule: () => void;
  onNextModule: () => void;
  isFirstModule: boolean;
  isLastModule: boolean;
  note: string;
  onUpdateNote: (moduleId: number, text: string) => void;
}

export const ModuleView: React.FC<ModuleViewProps> = ({ 
  module, onStartQuiz, onStartOralTest, isCompleted, onPreviousModule, onNextModule, isFirstModule, isLastModule, note, onUpdateNote 
}) => {
  const [showVideoUrl, setShowVideoUrl] = useState<string | null>(null);
  
  return (
    <>
      {showVideoUrl && (
        <VideoModal videoUrl={showVideoUrl} onClose={() => setShowVideoUrl(null)} />
      )}
      <div className="max-w-4xl mx-auto">
        <header className="mb-8 pb-4 border-b-2 border-white/10">
          <p className="font-mono text-lumen-secondary uppercase tracking-widest">Module {String(module.id).padStart(2, '0')}</p>
          <h1 className="text-4xl font-black mt-1" style={{textShadow: '0 0 10px rgba(0, 198, 0, 0.3)'}}>{module.title}</h1>
        </header>
        
        <article>
          <MarkdownRenderer content={module.content} />
        </article>

        {module.assets && (Object.keys(module.assets).length > 0) && (
          <ModuleAssets assets={module.assets} onPlayVideo={setShowVideoUrl} />
        )}

        <Notes 
          moduleId={module.id}
          initialNote={note}
          onUpdateNote={onUpdateNote}
        />

        <footer className="mt-12 pt-8 border-t-2 border-white/10 flex flex-col items-center gap-6">
            <div className="flex justify-between items-center w-full">
                <button
                onClick={onPreviousModule}
                disabled={isFirstModule}
                className="bg-white/5 hover:bg-white/10 border border-white/10 text-text-primary font-semibold py-2 px-6 rounded-full transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed uppercase tracking-wider"
                >
                Previous
                </button>

                {isCompleted ? (
                    <div className="flex items-center justify-center gap-2 text-lumen-primary p-3 bg-lumen-primary/10 rounded-full border border-lumen-primary/20">
                        <CheckIcon />
                        <span className="font-bold uppercase tracking-wider">Module Completed!</span>
                    </div>
                ) : (
                    <div className="flex gap-4">
                        <button
                            onClick={onStartOralTest}
                            className="bg-lumen-secondary hover:bg-cyan-300 text-black font-semibold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 uppercase tracking-wider"
                            >
                            Start Oral Test
                        </button>
                        <button
                            onClick={onStartQuiz}
                            className="bg-lumen-primary hover:bg-lumen-highlight text-black font-semibold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 uppercase tracking-wider shadow-glow hover:shadow-lg hover:shadow-lumen-primary/50"
                            >
                            Take Quiz
                        </button>
                    </div>
                )}

                <button
                onClick={onNextModule}
                disabled={isLastModule}
                className="bg-white/5 hover:bg-white/10 border border-white/10 text-text-primary font-semibold py-2 px-6 rounded-full transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed uppercase tracking-wider"
                >
                Next
                </button>
            </div>
        </footer>
      </div>
    </>
  );
};