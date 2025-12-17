
import React, { useState, useEffect, useRef } from 'react';

interface NotesProps {
  moduleId: number;
  initialNote: string;
  onUpdateNote: (moduleId: number, text: string) => void;
}

export const Notes: React.FC<NotesProps> = ({ moduleId, initialNote, onUpdateNote }) => {
  const [note, setNote] = useState(initialNote);
  const [saveStatus, setSaveStatus] = useState<'idle' | 'saving' | 'saved'>('idle');
  const debounceTimeout = useRef<number | null>(null);

  useEffect(() => {
    setNote(initialNote);
  }, [initialNote, moduleId]);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = e.target.value;
    setNote(newText);
    setSaveStatus('saving');

    if (debounceTimeout.current) {
      clearTimeout(debounceTimeout.current);
    }

    debounceTimeout.current = window.setTimeout(() => {
      onUpdateNote(moduleId, newText);
      setSaveStatus('saved');
      setTimeout(() => setSaveStatus('idle'), 2000); // Reset status after 2 seconds
    }, 750); // Debounce time
  };

  const getStatusMessage = () => {
    switch (saveStatus) {
      case 'saving':
        return 'Saving...';
      case 'saved':
        return 'Saved!';
      default:
        return 'Notes are saved automatically.';
    }
  };

  return (
    <div className="mt-12">
      <h3 className="text-2xl font-bold mb-4 text-lumen-secondary">Personal Notes</h3>
      <div className="bg-lumen-surface/60 backdrop-blur-md border border-white/10 rounded-2xl p-4">
        <textarea
          value={note}
          onChange={handleChange}
          placeholder="Write down your thoughts, key takeaways, or hands to review..."
          className="w-full h-48 p-3 bg-black/40 rounded-md border border-white/10 focus:border-lumen-primary focus:ring-0 focus:outline-none transition-colors duration-300"
          aria-label="Personal notes for this module"
        />
        <p className={`text-sm mt-2 text-right transition-opacity duration-300 font-mono ${saveStatus === 'idle' ? 'text-text-muted' : 'text-lumen-secondary'}`}>
          {getStatusMessage()}
        </p>
      </div>
    </div>
  );
};