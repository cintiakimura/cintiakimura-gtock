
import React, { useState } from 'react';
import type { Quiz } from '../types';
import { ScoreCircle } from './ScoreCircle';

interface QuizViewProps {
  quiz: Quiz;
  moduleTitle: string;
  onTestComplete: () => void;
}

export const QuizView: React.FC<QuizViewProps> = ({ quiz, moduleTitle, onTestComplete }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<(number | null)[]>(Array(quiz.questions.length).fill(null));
  const [showResults, setShowResults] = useState(false);

  const handleSelectAnswer = (optionIndex: number) => {
    // Prevent changing the answer once selected
    if (selectedAnswers[currentQuestionIndex] !== null) return;

    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestionIndex] = optionIndex;
    setSelectedAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestionIndex < quiz.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleSubmit = () => {
    setShowResults(true);
  };
  
  const handleRetakeQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswers(Array(quiz.questions.length).fill(null));
    setShowResults(false);
  };

  const score = selectedAnswers.filter((answer, index) => answer !== null && answer === quiz.questions[index].correctAnswer).length;
  const totalQuestions = quiz.questions.length;
  const completedQuestions = selectedAnswers.filter(a => a !== null).length;

  if (!quiz.questions || totalQuestions === 0) {
    return (
        <div className="max-w-2xl mx-auto bg-lumen-surface/60 backdrop-blur-md border border-white/10 p-8 rounded-2xl shadow-2xl text-center">
            <h2 className="text-3xl font-bold mb-4 text-lumen-primary">Quiz: {moduleTitle}</h2>
            <p className="text-xl mb-6">This quiz is not yet available.</p>
            <button
                onClick={onTestComplete}
                className="bg-lumen-primary hover:bg-lumen-highlight text-black font-semibold py-3 px-6 rounded-full text-lg uppercase tracking-wider"
            >
                Return to Module
            </button>
        </div>
    );
  }

  const currentQuestion = quiz.questions[currentQuestionIndex];
  const selectedAnswer = selectedAnswers[currentQuestionIndex];
  const isQuestionAnswered = selectedAnswer !== null;

  if (showResults) {
    return (
      <div className="max-w-2xl mx-auto bg-lumen-surface/60 backdrop-blur-md border border-white/10 p-8 rounded-2xl shadow-2xl text-center">
        <h2 className="text-3xl font-bold mb-4 text-lumen-primary">Quiz Results: {moduleTitle}</h2>
        <div className="my-8">
          <ScoreCircle score={score} total={totalQuestions} />
        </div>
        <div className="space-y-4 mb-8 text-left">
            {quiz.questions.map((q, index) => {
                const isCorrect = selectedAnswers[index] === q.correctAnswer;
                return (
                    <div key={index} className={`p-4 rounded-md border ${isCorrect ? 'bg-lumen-primary/10 border-lumen-primary/20' : 'bg-red-500/10 border-red-500/20'}`}>
                        <p className="font-bold">{index + 1}. {q.question}</p>
                        <p className="text-sm mt-1">Your answer: {selectedAnswers[index] !== null ? q.options[selectedAnswers[index]!] : 'Not answered'}</p>
                        {!isCorrect && <p className="text-sm mt-1">Correct answer: {q.options[q.correctAnswer]}</p>}
                        <p className="text-xs mt-2 text-text-muted">{q.explanation}</p>
                    </div>
                );
            })}
        </div>
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <button
            onClick={onTestComplete}
            className="w-full bg-lumen-primary hover:bg-lumen-highlight text-black font-semibold py-3 px-6 rounded-full text-lg uppercase tracking-wider"
            >
            Return to Module
            </button>
            <button
            onClick={handleRetakeQuiz}
            className="w-full bg-white/5 hover:bg-white/10 border border-white/10 text-text-primary font-semibold py-3 px-6 rounded-full text-lg uppercase tracking-wider"
            >
            Retake Quiz
            </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      <header className="mb-6 text-center">
        <h2 className="text-3xl font-bold text-lumen-primary">Quiz: {moduleTitle}</h2>
        <p className="text-text-muted font-mono uppercase tracking-widest">Question {currentQuestionIndex + 1} of {totalQuestions}</p>
      </header>
      
      <div className="bg-lumen-surface/60 backdrop-blur-md border border-white/10 p-8 rounded-2xl shadow-2xl">
        <p className="text-xl font-semibold mb-6">{currentQuestion.question}</p>
        <div className="space-y-3">
          {currentQuestion.options.map((option, index) => {
            const isSelected = selectedAnswer === index;
            const isCorrect = currentQuestion.correctAnswer === index;
            
            let buttonClass = 'border-white/10 hover:border-lumen-primary/50 bg-white/5';
            if (isQuestionAnswered) {
              if (isCorrect) {
                buttonClass = 'border-lumen-primary bg-lumen-primary/20 text-text-primary shadow-glow';
              } else if (isSelected) {
                buttonClass = 'border-red-500 bg-red-500/20 text-text-primary';
              } else {
                 buttonClass = 'border-transparent bg-black/20 opacity-60';
              }
            }

            return (
              <button
                key={index}
                onClick={() => handleSelectAnswer(index)}
                disabled={isQuestionAnswered}
                className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-200 ${buttonClass}`}
              >
                {option}
              </button>
            );
          })}
        </div>

        {isQuestionAnswered && (
            <div className="mt-6 p-4 bg-black/40 rounded-lg">
                <p className={`font-bold text-lg mb-2 ${selectedAnswer === currentQuestion.correctAnswer ? 'text-lumen-primary' : 'text-red-500'}`}>
                    {selectedAnswer === currentQuestion.correctAnswer ? "Correct!" : "Incorrect"}
                </p>
                <p className="text-text-muted">{currentQuestion.explanation}</p>
            </div>
        )}

        <div className="mt-8 flex justify-between items-center">
          <button
            onClick={handlePrevious}
            disabled={currentQuestionIndex === 0}
            className="bg-white/5 hover:bg-white/10 border border-white/10 text-text-primary font-semibold py-2 px-6 rounded-full transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed uppercase tracking-wider"
          >
            Previous
          </button>
          
          {currentQuestionIndex < totalQuestions - 1 ? (
            <button
              onClick={handleNext}
              className="bg-lumen-secondary hover:bg-cyan-300 text-black font-semibold py-2 px-6 rounded-full transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed uppercase tracking-wider"
            >
              Next
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              disabled={completedQuestions < totalQuestions}
              className="bg-lumen-primary hover:bg-lumen-highlight text-black font-semibold py-2 px-6 rounded-full transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed uppercase tracking-wider shadow-glow"
            >
              See Results
            </button>
          )}
        </div>
      </div>
    </div>
  );
};