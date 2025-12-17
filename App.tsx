
import React, { useState, useEffect, useCallback } from 'react';
import { Sidebar } from './components/Sidebar';
import { HomePage } from './components/HomePage';
import { ModuleView } from './components/ModuleView';
import { QuizView } from './components/QuizView';
import { OralTestView } from './components/OralTestView';
import { MenuIcon, XIcon } from './components/Icons';
import { useLocalStorage } from './hooks/useLocalStorage';
import type { Module, Quiz } from './types';

const MODULES: Module[] = [
  { 
    id: 1, 
    title: "Introduction to GTO", 
    path: 'modules/module-01-introduction.md', 
    quizPath: 'quizzes/quiz-01.json',
    assets: {
      videoUrl: 'https://www.youtube.com/embed/u3dfPBFK_kY',
      slidesUrl: '#',
    } 
  },
  { 
    id: 2, 
    title: "Core Poker Math", 
    path: 'modules/module-02-core-math.md', 
    quizPath: 'quizzes/quiz-02.json',
    assets: {
      videoUrl: 'https://www.youtube.com/embed/f_pT9oH-1yA',
      podcastUrl: '#',
      infographicUrl: 'https://picsum.photos/800/1200?random=2',
    }
  },
  { id: 3, title: "Preflop Fundamentals", path: 'modules/module-03-preflop-fundamentals.md', quizPath: 'quizzes/quiz-03.json' },
  { id: 4, title: "The Flop in Single-Raised Pots", path: 'modules/module-04-flop-srp.md', quizPath: 'quizzes/quiz-04.json' },
  { id: 5, title: "Turn and River Play (SRP)", path: 'modules/module-05-turn-river-srp.md', quizPath: 'quizzes/quiz-05.json' },
  { id: 6, title: "3-Bet and 4-Bet Pots", path: 'modules/module-06-3bet-4bet-pots.md', quizPath: 'quizzes/quiz-06.json' },
  { id: 7, title: "Multiway Pots", path: 'modules/module-07-multiway-pots.md', quizPath: 'quizzes/quiz-07.json' },
  { id: 8, title: "Introduction to Solvers", path: 'modules/module-08-intro-to-solvers.md', quizPath: 'quizzes/quiz-08.json' },
  { id: 9, title: "Preflop Solutions Deep Dive", path: 'modules/module-09-preflop-solutions.md', quizPath: 'quizzes/quiz-09.json' },
  { id: 10, title: "Postflop Solver Practice", path: 'modules/module-10-postflop-solver-practice.md', quizPath: 'quizzes/quiz-10.json' },
  { id: 11, title: "Exploiting Deviations", path: 'modules/module-11-exploiting-deviations.md', quizPath: 'quizzes/quiz-11.json' },
  { id: 12, title: "Tournament GTO Adjustments", path: 'modules/module-12-tournament-gto.md', quizPath: 'quizzes/quiz-12.json' },
  { id: 13, title: "Advanced GTO Strategies", path: 'modules/module-13-advanced-strategies.md', quizPath: 'quizzes/quiz-13.json' },
  { id: 14, title: "Mental Game & Study Routine", path: 'modules/module-14-mental-game-study-routine.md', quizPath: 'quizzes/quiz-14.json' },
  { id: 15, title: "Capstone: Integrating Your Skills", path: 'modules/module-15-capstone-integration.md', quizPath: 'quizzes/quiz-15.json' },
];

type View = 'home' | 'module' | 'quiz' | 'oral_test';

const App: React.FC = () => {
  const [activeView, setActiveView] = useState<View>('home');
  const [activeModule, setActiveModule] = useState<Module | null>(null);
  const [activeModuleContent, setActiveModuleContent] = useState<string | null>(null);
  const [activeQuiz, setActiveQuiz] = useState<Quiz | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  
  const [completedModules, setCompletedModules, resetCompletedModules] = useLocalStorage<number[]>('completedModules', []);
  const [notes, setNotes] = useLocalStorage<{[key: number]: string}>('pokerNotes', {});
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const handleSelectModule = useCallback(async (moduleId: number) => {
    const module = MODULES.find(m => m.id === moduleId);
    if (!module) return;

    setIsLoading(true);
    setError(null);
    setActiveView('module');
    setActiveModule(module);
    setSidebarOpen(false);

    try {
      const [contentRes, quizRes] = await Promise.all([
        fetch(module.path),
        fetch(module.quizPath)
      ]);
      
      if (!contentRes.ok) throw new Error(`Failed to fetch module content: ${contentRes.statusText}`);
      if (!quizRes.ok) throw new Error(`Failed to fetch quiz: ${quizRes.statusText}`);

      const content = await contentRes.text();
      const quiz = await quizRes.json();

      setActiveModuleContent(content);
      setActiveQuiz(quiz);
    } catch (err) {
      console.error("Error loading module data:", err);
      setError("Failed to load module content. Please check your connection and try again.");
      setActiveModuleContent(null);
      setActiveQuiz(null);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const handleStartLearning = () => {
    const firstUncompleted = MODULES.find(m => !completedModules.includes(m.id)) || MODULES[0];
    handleSelectModule(firstUncompleted.id);
  };
  
  const handleResetProgress = () => {
    resetCompletedModules();
    handleGoHome();
  };

  const handleCompleteModule = (moduleId: number) => {
    if (!completedModules.includes(moduleId)) {
      setCompletedModules([...completedModules, moduleId]);
    }
  };

  const handleUpdateNote = useCallback((moduleId: number, text: string) => {
    setNotes(prevNotes => ({
      ...prevNotes,
      [moduleId]: text,
    }));
  }, [setNotes]);

  const handleStartQuiz = () => {
    if (activeModule) {
      setActiveView('quiz');
    }
  };

  const handleStartOralTest = () => {
    if (activeModule) {
      setActiveView('oral_test');
    }
  };

  const handleTestComplete = () => {
    if (activeModule) {
      handleCompleteModule(activeModule.id);
      setActiveView('module');
    }
  };
  
  const handleGoHome = () => {
    setActiveView('home');
    setActiveModule(null);
    setActiveModuleContent(null);
    setActiveQuiz(null);
    setSidebarOpen(false);
    setError(null);
  }

  const navigateToModule = (direction: 'next' | 'prev') => {
    if (!activeModule) return;
    const currentIndex = MODULES.findIndex(m => m.id === activeModule.id);
    const newIndex = direction === 'next' ? currentIndex + 1 : currentIndex - 1;
    if (newIndex >= 0 && newIndex < MODULES.length) {
      handleSelectModule(MODULES[newIndex].id);
    }
  };

  const progress = (completedModules.length / MODULES.length) * 100;

  const renderContent = () => {
    if (isLoading) {
      return <div className="flex items-center justify-center h-full" aria-live="polite"><p className="text-xl">Loading...</p></div>;
    }

    if (error) {
      return (
        <div className="flex items-center justify-center h-full" aria-live="polite">
            <div className="bg-red-900/50 border-l-4 border-red-500 text-red-300 p-6 rounded-r-lg max-w-lg" role="alert">
              <p className="font-bold text-lg mb-2">An Error Occurred</p>
              <p>{error}</p>
            </div>
        </div>
      );
    }

    switch (activeView) {
      case 'home':
        return <HomePage onStartLearning={handleStartLearning} progress={progress} onResetProgress={handleResetProgress} />;
      case 'module':
        if (activeModule && activeModuleContent) {
            const currentIndex = MODULES.findIndex(m => m.id === activeModule.id);
            return <ModuleView 
                module={{...activeModule, content: activeModuleContent}}
                onStartQuiz={handleStartQuiz}
                onStartOralTest={handleStartOralTest}
                isCompleted={completedModules.includes(activeModule.id)}
                onNextModule={() => navigateToModule('next')}
                onPreviousModule={() => navigateToModule('prev')}
                isFirstModule={currentIndex === 0}
                isLastModule={currentIndex === MODULES.length - 1}
                note={notes[activeModule.id] || ''}
                onUpdateNote={handleUpdateNote}
            />;
        }
        return null;
      case 'quiz':
        if (activeQuiz && activeModule) {
          return <QuizView 
            quiz={activeQuiz} 
            moduleTitle={activeModule.title} 
            // FIX: Renamed prop from `onQuizComplete` to `onTestComplete` to match the QuizViewProps interface.
            onTestComplete={handleTestComplete} 
          />;
        }
        return <p>Quiz not available for this module.</p>;
      case 'oral_test':
        if (activeModule && activeModuleContent) {
            return <OralTestView
                moduleTitle={activeModule.title}
                moduleContent={activeModuleContent}
                onTestComplete={handleTestComplete}
            />
        }
        return <p>Oral test not available for this module.</p>;
      default:
        return <HomePage onStartLearning={handleStartLearning} progress={progress} onResetProgress={handleResetProgress} />;
    }
  }

  return (
    <div className="flex h-screen bg-lumen-base text-text-primary font-sans relative">
      <div className={`fixed inset-y-0 left-0 z-30 w-64 bg-lumen-surface/60 backdrop-blur-md border-r border-white/5 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out md:relative md:translate-x-0`}>
        <Sidebar
          modules={MODULES}
          completedModules={completedModules}
          activeModuleId={activeModule?.id || null}
          onSelectModule={handleSelectModule}
          onGoHome={handleGoHome}
        />
      </div>

      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="flex justify-between items-center p-4 bg-lumen-surface/60 backdrop-blur-md border-b border-white/5 shadow-md md:hidden">
          <h1 className="text-xl font-bold text-lumen-primary">GTO Poker Mastery</h1>
          <button onClick={() => setSidebarOpen(!isSidebarOpen)} className="text-text-muted hover:text-text-primary">
            {isSidebarOpen ? <XIcon /> : <MenuIcon />}
          </button>
        </header>

        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default App;
