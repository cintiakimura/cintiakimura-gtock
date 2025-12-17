
import React from 'react';
import { ProgressBar } from './ProgressBar';
import { CheckIcon } from './Icons';
import { Thinking } from './Thinking';

interface HomePageProps {
  onStartLearning: () => void;
  progress: number;
  onResetProgress: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onStartLearning, progress, onResetProgress }) => {
  if (progress === 100) {
    return (
      <div className="flex flex-col items-center justify-center h-full text-center">
        <div className="max-w-2xl">
          <div className="flex items-center justify-center w-24 h-24 mx-auto mb-6 bg-lumen-primary/10 rounded-full border border-lumen-primary/20">
             <CheckIcon className="w-16 h-16 text-lumen-primary" />
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-lumen-highlight mb-4">
            Course Complete!
          </h1>
          <p className="text-lg md:text-xl text-text-muted mb-8">
            Congratulations! You've mastered the fundamentals of GTO poker. Now it's time to take your skills to the tables.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <button
              onClick={onStartLearning}
              className="bg-lumen-primary hover:bg-lumen-highlight text-black font-semibold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 uppercase tracking-wider shadow-glow hover:shadow-lg hover:shadow-lumen-primary/50"
            >
              Review Course
            </button>
            <button
              onClick={onResetProgress}
              className="bg-white/5 hover:bg-white/10 border border-white/10 text-text-primary font-semibold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 uppercase tracking-wider"
            >
              Start Over
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center h-full text-center">
      <div className="max-w-2xl">
        <div className="w-40 h-40 mx-auto mb-8">
            <Thinking />
        </div>
        <h1 className="text-5xl md:text-6xl font-black text-lumen-primary mb-4" style={{textShadow: '0 0 15px rgba(0, 198, 0, 0.4)'}}>
          GTO Poker Mastery
        </h1>
        <p className="text-lg md:text-xl text-text-muted mb-8">
          Elevate your game from guesswork to a science. Master the principles of Game Theory Optimal play and become an unexploitable force at the tables.
        </p>
        <div className="w-full max-w-md mx-auto mb-8">
          <ProgressBar progress={progress} />
        </div>
        <button
          onClick={onStartLearning}
          className="bg-lumen-primary hover:bg-lumen-highlight text-black font-semibold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 uppercase tracking-wider shadow-glow hover:shadow-lg hover:shadow-lumen-primary/50"
        >
          {progress > 0 ? 'Continue Learning' : 'Start Learning'}
        </button>
      </div>
    </div>
  );
};