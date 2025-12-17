
import React, { useEffect } from 'react';
import { XIcon } from './Icons';

interface VideoModalProps {
  videoUrl: string;
  onClose: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ videoUrl, onClose }) => {
    useEffect(() => {
        const handleEsc = (event: KeyboardEvent) => {
           if (event.key === 'Escape') {
              onClose();
           }
        };
        window.addEventListener('keydown', handleEsc);
        return () => {
            window.removeEventListener('keydown', handleEsc);
        };
    }, [onClose]);
  
    return (
        <div 
            className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 animate-in fade-in"
            onClick={onClose}
            role="dialog"
            aria-modal="true"
        >
            <div className="relative w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
                <button 
                    onClick={onClose} 
                    className="absolute -top-10 right-0 text-white hover:text-lumen-primary transition-colors"
                    aria-label="Close video player"
                >
                    <XIcon className="w-8 h-8" />
                </button>
                <div className="aspect-video bg-black shadow-glow-cyan rounded-lg overflow-hidden border border-white/10">
                    <iframe
                        width="100%"
                        height="100%"
                        src={videoUrl}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </div>
    );
};
