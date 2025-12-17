import { useState, useRef, useEffect, useCallback } from 'react';

// FIX: Add minimal type definitions for the Web Speech API to resolve TypeScript errors
// when the DOM library doesn't include them.
interface SpeechRecognitionAlternative {
  transcript: string;
}
interface SpeechRecognitionResult {
  isFinal: boolean;
  [key: number]: SpeechRecognitionAlternative;
  length: number;
}
interface SpeechRecognitionResultList {
  [key: number]: SpeechRecognitionResult;
  length: number;
}
interface SpeechRecognitionEvent extends Event {
  resultIndex: number;
  results: SpeechRecognitionResultList;
}
interface SpeechRecognitionErrorEvent extends Event {
  error: string;
}
interface SpeechRecognition {
  continuous: boolean;
  interimResults: boolean;
  lang: string;
  onresult: (event: SpeechRecognitionEvent) => void;
  onerror: (event: SpeechRecognitionErrorEvent) => void;
  onend: () => void;
  start: () => void;
  stop: () => void;
}


// Polyfill for browsers that use webkit prefix
// FIX: Cast window to `any` to access non-standard properties `SpeechRecognition` and `webkitSpeechRecognition`.
// Renamed to `SpeechRecognitionAPI` to avoid name collision with the global `SpeechRecognition` type.
const SpeechRecognitionAPI = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

export const useSpeechToText = () => {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [error, setError] = useState<string | null>(null);
  // FIX: `SpeechRecognition` now correctly refers to the global interface type, not the local constant.
  const recognitionRef = useRef<SpeechRecognition | null>(null);

  useEffect(() => {
    // FIX: Check for the existence of the renamed constant.
    if (!SpeechRecognitionAPI) {
      setError('Speech recognition is not supported in this browser.');
      return;
    }

    // FIX: Instantiate using the renamed constant.
    const recognition: SpeechRecognition = new SpeechRecognitionAPI();
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = 'en-US';

    recognition.onresult = (event) => {
      let finalTranscript = '';
      let interimTranscript = '';
      for (let i = event.resultIndex; i < event.results.length; ++i) {
        if (event.results[i].isFinal) {
          finalTranscript += event.results[i][0].transcript;
        } else {
          interimTranscript += event.results[i][0].transcript;
        }
      }
      setTranscript(finalTranscript + interimTranscript);
    };

    recognition.onerror = (event) => {
      setError(`Speech recognition error: ${event.error}`);
      setIsListening(false);
    };
    
    recognition.onend = () => {
      setIsListening(false);
    };

    recognitionRef.current = recognition;
  }, []);

  const startListening = useCallback(() => {
    if (recognitionRef.current && !isListening) {
      setTranscript('');
      setError(null);
      recognitionRef.current.start();
      setIsListening(true);
    }
  }, [isListening]);

  const stopListening = useCallback(() => {
    if (recognitionRef.current && isListening) {
      recognitionRef.current.stop();
      setIsListening(false);
    }
  }, [isListening]);

  // FIX: The support check should use the renamed constant.
  return { isListening, transcript, error, startListening, stopListening, hasRecognitionSupport: !!SpeechRecognitionAPI };
};
