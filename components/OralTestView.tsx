
import React, { useState, useEffect, useRef } from 'react';
// FIX: Import GenerateContentResponse and Chat for proper typing.
import { GoogleGenAI, GenerateContentResponse, Chat } from '@google/genai';
import { useSpeechToText } from '../hooks/useSpeechToText';
import { MicrophoneIcon } from './Icons';

interface OralTestViewProps {
  moduleTitle: string;
  moduleContent: string;
  onTestComplete: () => void;
}

const API_KEY = process.env.API_KEY;

export const OralTestView: React.FC<OralTestViewProps> = ({ moduleTitle, moduleContent, onTestComplete }) => {
  const { isListening, transcript, startListening, stopListening, hasRecognitionSupport } = useSpeechToText();
  const [chat, setChat] = useState<Chat | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState('');
  const [feedback, setFeedback] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isAwaitingFeedback, setIsAwaitingFeedback] = useState(false);

  const feedbackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initChat = async () => {
      if (!API_KEY) {
        setError("API key is missing. Please configure your environment.");
        setIsLoading(false);
        return;
      }
      try {
        const ai = new GoogleGenAI({ apiKey: API_KEY });
        const chatSession = ai.chats.create({
            model: 'gemini-2.5-flash',
            config: {
                systemInstruction: `You are an expert GTO poker coach. You are conducting an oral exam for a student based on the course material provided below. Your task is to ask one question at a time. Wait for the student's answer, then evaluate it for correctness and clarity. Provide concise feedback and then ask the next question. Do not provide the answer unless the student is completely wrong. Keep your questions relevant to the text. Separate your feedback and the next question with '---'. For example: 'That's a good start, but you missed a key point about pot odds. --- Now, what is equity?'
        
--- COURSE MATERIAL ---
${moduleContent}`,
            },
        });

        setChat(chatSession);

        const response = await chatSession.sendMessage({ message: "Let's begin the oral exam. Please ask me the first question."});
        setCurrentQuestion(response.text || "I'm ready for your first question.");

      } catch (e: any) {
        setError(`Failed to initialize AI session: ${e.message}`);
      } finally {
        setIsLoading(false);
      }
    };
    initChat();
  }, [moduleContent]);

  useEffect(() => {
      if (feedbackRef.current) {
          feedbackRef.current.scrollTop = feedbackRef.current.scrollHeight;
      }
  }, [feedback]);

  const handleSendAnswer = async () => {
    if (!transcript.trim() || !chat) return;

    setIsAwaitingFeedback(true);
    setFeedback('');
    stopListening();

    try {
      let fullResponseText = '';
      const streamResponse = await chat.sendMessageStream({ message: `My answer is: "${transcript}". Please evaluate my answer and ask the next question.` });
      
      for await (const chunk of streamResponse) {
          const c = chunk as GenerateContentResponse;
          fullResponseText += c.text || '';
          const [currentFeedback, nextQuestion] = fullResponseText.split('---');
          setFeedback(currentFeedback);
          if (nextQuestion) {
              setCurrentQuestion(nextQuestion.trim());
          }
      }

    } catch (e: any) {
      setError(`Failed to get feedback from AI: ${e.message}`);
    } finally {
        setIsAwaitingFeedback(false);
    }
  };

  const handleMicClick = () => {
      if (isListening) {
          stopListening();
          handleSendAnswer();
      } else {
          setFeedback('');
          startListening();
      }
  }

  if (isLoading) {
    return <div className="text-center">Initializing AI Poker Coach...</div>;
  }
  
  if (error || !hasRecognitionSupport) {
      return (
          <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl font-bold text-red-500 mb-4">Error</h2>
              <p className="text-text-muted mb-6">{error || "Speech recognition is not supported in your browser."}</p>
              <button onClick={onTestComplete} className="bg-white/5 hover:bg-white/10 border border-white/10 text-text-primary font-semibold py-2 px-6 rounded-full">
                  Back to Module
              </button>
          </div>
      )
  }

  return (
    <div className="max-w-3xl mx-auto bg-lumen-surface/60 backdrop-blur-md border border-white/10 p-8 rounded-2xl shadow-2xl flex flex-col" style={{minHeight: '70vh'}}>
      <header className="text-center mb-6">
        <h2 className="text-3xl font-bold text-lumen-primary">Oral Test: {moduleTitle}</h2>
        <p className="text-text-muted font-mono uppercase tracking-widest">With AI Coach</p>
      </header>

      <div className="flex-1 flex flex-col justify-between">
          {/* Question Area */}
          <div className="bg-black/40 p-4 rounded-lg mb-4">
              <p className="font-semibold text-lumen-secondary mb-2">AI Coach:</p>
              <p className="text-lg">{currentQuestion}</p>
          </div>

          {/* Transcript & Feedback */}
          <div className="bg-black/20 p-4 rounded-lg flex-1 overflow-y-auto" ref={feedbackRef}>
               <p className="font-semibold text-text-muted mb-2">Your Answer:</p>
               <p className="text-text-primary italic mb-4">{transcript || "..."}</p>
              {feedback && (
                  <>
                      <div className="border-t border-white/10 my-4"></div>
                      <p className="font-semibold text-lumen-secondary mb-2">Feedback:</p>
                      <p className="text-text-primary whitespace-pre-wrap">{feedback}</p>
                  </>
              )}
              {isAwaitingFeedback && !feedback && <div className="animate-pulse-slow">AI is thinking...</div>}
          </div>

          {/* Controls */}
          <div className="mt-8 flex flex-col items-center gap-4">
            <button onClick={handleMicClick} className="w-24 h-24 rounded-full flex items-center justify-center border-2 border-lumen-secondary transition-all duration-300 disabled:opacity-50" disabled={isAwaitingFeedback} style={isListening ? {boxShadow: '0 0 25px rgba(0, 229, 255, 0.6)', backgroundColor: 'rgba(0, 229, 255, 0.1)'} : {}}>
                <MicrophoneIcon className={`w-12 h-12 transition-colors ${isListening ? 'text-lumen-highlight animate-pulse' : 'text-lumen-secondary'}`} />
            </button>
            <p className="font-mono text-sm text-text-muted">{isListening ? "Listening... Click to stop." : "Click to answer."}</p>
            <button onClick={onTestComplete} className="bg-white/5 hover:bg-white/10 border border-white/10 text-text-primary font-semibold py-2 px-6 rounded-full">
                End Test
            </button>
          </div>
      </div>
    </div>
  );
};
