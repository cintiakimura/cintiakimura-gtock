
import React, { useState, useMemo } from 'react';
import { Logo } from './Logo';

const ranks = ['A', 'K', 'Q', 'J', 'T', '9', '8', '7', '6', '5', '4', '3', '2'];
const POSITIONS = ['UTG', 'HJ', 'CO', 'BTN', 'SB', 'BB'];

// --- Helper Functions to parse range strings ---

const expandPairs = (notation: string): string[] => {
  const startRank = notation.match(/^([2-9TJQKA])/)?.[0];
  if (!startRank) return [];
  const startIndex = ranks.indexOf(startRank);
  return ranks.slice(0, startIndex + 1).map(r => `${r}${r}`);
};

const expandSuited = (notation: string): string[] => {
  const match = notation.match(/^([AKQJT98765432])([AKQJT98765432])/);
  if (!match) return [];
  const [, highRank, startLowRank] = match;
  const highIndex = ranks.indexOf(highRank);
  const startIndex = ranks.indexOf(startLowRank);
  return ranks.slice(highIndex + 1, startIndex + 1).map(r => `${highRank}${r}s`);
};

const expandOffsuit = (notation: string): string[] => {
  const match = notation.match(/^([AKQJT98765432])([AKQJT98765432])/);
  if (!match) return [];
  const [, highRank, startLowRank] = match;
  const highIndex = ranks.indexOf(highRank);
  const startIndex = ranks.indexOf(startLowRank);
  return ranks.slice(highIndex + 1, startIndex + 1).map(r => `${highRank}${r}o`);
};

const parseRangeString = (rangeStr: string): string[] => {
  if (!rangeStr) return [];
  return rangeStr.split(/,?\s+/).flatMap(part => {
    if (part.endsWith('+')) {
      if (part.includes('s')) return expandSuited(part);
      if (part.includes('o')) return expandOffsuit(part);
      if (part.length === 3 && part[0] === part[1]) return expandPairs(part);
    }
    return [part];
  }).filter(Boolean);
};

const ranges = {
  '100bb': {
    'UTG': { open: '77+, A9s+, KJs+, QJs, AJo+, KQo', raise: 'QQ+, AKs, AKo' },
    'HJ': { open: '66+, A8s+, KTs+, QTs+, JTs, ATo+, KQo', raise: 'JJ+, AKs, AKo, AQs' },
    'CO': { open: '55+, A7s+, K9s+, QTs+, JTs, A9o+, KJo+, QJo', raise: 'TT+, AKs, AKo, AJs+, KQs' },
    'BTN': { open: '22+, A2s+, K7s+, Q8s+, J8s+, T8s+, 98s, 87s, 76s, 65s, 54s, A2o+, K8o+, Q9o+, J9o+', raise: '88+, AQs+, AKs, AKo, KJs+' },
    'SB': { open: '22+, A2s+, K6s+, Q8s+, J8s+, T8s+, 98s, 87s, 76s, 65s, 54s, A2o+, K6o+, Q9o+, J9o+', raise: '77+, AJo+, KQs, A5s-A2s' },
    'BB': { open: '', raise: '99+, AKs, AKo, AQs+, KQs, A5s-A3s' }
  },
  '75bb': { 'UTG': { open: '77+, A8s+, KJs+, QJs, AJo+, KQo', raise: 'QQ+, AKs, AKo' }, 'HJ': { open: '66+, A7s+, KTs+, QTs+, JTs, ATo+, KQo', raise: 'JJ+, AKs, AKo, AQs' }, 'CO': { open: '55+, A6s+, K9s+, Q9s+, JTs, A9o+, KJo+, QJo', raise: 'TT+, AKs, AKo, AJs+, KQs' }, 'BTN': { open: '22+, A2s+, K6s+, Q8s+, J8s+, T8s+, 98s, 87s, 76s, 65s, 54s, A2o+, K7o+, Q9o+, J9o+', raise: '88+, AQs+, AKs, AKo, KJs+' }, 'SB': { open: '22+, A2s+, K5s+, Q8s+, J8s+, T8s+, 98s, 87s, 76s, 65s, 54s, A2o+, K5o+, Q8o+, J9o+', raise: '77+, AJo+, KQs, A5s-A2s' }, 'BB': { open: '', raise: '99+, AKs, AKo, AQs+, KQs, A5s-A3s' }},
  '50bb': { 'UTG': { open: '88+, ATs+, KJs+, AJo+, KQo', raise: 'QQ+, AKs, AKo' }, 'HJ': { open: '77+, A9s+, KTs+, QJs, ATo+, KQo', raise: 'JJ+, AKs, AKo, AQs' }, 'CO': { open: '66+, A8s+, K9s+, QTs+, JTs, A9o+, KJo+', raise: 'TT+, AKs, AKo, AJs+, KQs' }, 'BTN': { open: '22+, A2s+, K7s+, Q8s+, J8s+, T8s+, 98s, 87s, 76s, A5o+, K9o+, QTo+', raise: '88+, AQs+, AKs, AKo, KJs+' }, 'SB': { open: '22+, A2s+, K6s+, Q8s+, J8s+, T8s+, A2o+, K8o+, Q9o+', raise: '77+, AJo+, KQs, A5s-A2s' }, 'BB': { open: '', raise: '99+, AKs, AKo, AQs+, KQs' }},
  '25bb': { 'UTG': { open: '22+, A9s+, KTs+, QJs, A8o+, KJo+', raise: '' }, 'HJ': { open: '22+, A7s+, K9s+, QTs+, JTs, A7o+, KTo+, QJo', raise: '' }, 'CO': { open: '22+, A2s+, K8s+, Q9s+, J9s+, T9s, A5o+, K9o+, QTo+, JTo', raise: '' }, 'BTN': { open: '22+, A2s+, K2s+, Q5s+, J7s+, T7s+, 97s+, 87s, 76s, 65s, A2o+, K7o+, Q8o+, J8o+, T8o+', raise: '' }, 'SB': { open: '22+, A2s+, K2s+, Q2s+, J2s+, T2s+, 95s+, 85s+, 75s+, 64s+, 54s, A2o+, K2o+, Q2o+, J7o+, T7o+, 97o+', raise: '' }, 'BB': { open: '', raise: '99+, AKs, AKo, AQs+, KQs' }}
};

// Pre-process ranges for efficient lookup
const processedRanges = Object.fromEntries(
  Object.entries(ranges).map(([stack, positions]) => [
    stack,
    Object.fromEntries(
      Object.entries(positions).map(([pos, actions]) => [
        pos,
        {
          open: new Set(parseRangeString(actions.open)),
          raise: new Set(parseRangeString(actions.raise)),
        }
      ])
    )
  ])
);

export const RangeHelper: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [position, setPosition] = useState('UTG');
    const [stackSize, setStackSize] = useState('100bb');

    const renderGrid = () => {
        const range = processedRanges[stackSize as keyof typeof processedRanges]?.[position as keyof typeof processedRanges[keyof typeof processedRanges]];
        if (!range) return <div className="text-center text-text-muted p-8">No range data.</div>;

        const allPlayableHands = new Set([...range.open, ...range.raise]);
        if (allPlayableHands.size === 0) {
          return <div className="text-center text-text-muted p-8">No opening range from this position.</div>;
        }

        const involvedRanks = new Set<string>();
        allPlayableHands.forEach(hand => {
            involvedRanks.add(hand[0]);
            involvedRanks.add(hand[1]);
        });
        
        const dynamicRanks = ranks.filter(r => involvedRanks.has(r));

        return (
            <div className="grid gap-0.5 p-1 bg-lumen-base rounded-md" style={{ gridTemplateColumns: `repeat(${dynamicRanks.length}, 1fr)`}}>
                {dynamicRanks.map(rowRank => 
                    dynamicRanks.map(colRank => {
                        const rowIndex = ranks.indexOf(rowRank);
                        const colIndex = ranks.indexOf(colRank);
                        let hand: string;
                        let handDisplay: string;

                        if (rowIndex < colIndex) { // Offsuit
                            hand = `${rowRank}${colRank}o`;
                            handDisplay = `${rowRank}${colRank}`;
                        } else if (rowIndex > colIndex) { // Suited
                            hand = `${colRank}${rowRank}s`;
                            handDisplay = `${colRank}${rowRank}`;
                        } else { // Pair
                            hand = `${rowRank}${colRank}`;
                            handDisplay = hand;
                        }
                        
                        const isOpen = range.open.has(hand);
                        const isRaise = range.raise.has(hand);
                        const isPlayable = isOpen || isRaise;

                        let cellClasses = "flex flex-col items-center justify-center aspect-square text-white text-[10px] sm:text-xs font-mono font-bold rounded-sm";
                        if (isOpen) cellClasses += " bg-pro-teal/70";
                        if (isRaise) cellClasses += " border-2 border-lumen-secondary";
                        if (!isPlayable) cellClasses += " bg-black/20 text-text-muted/30";

                        return (
                            <div key={hand} className={cellClasses}>
                                <span>{handDisplay}</span>
                                {rowIndex !== colIndex && <span className="text-[9px] opacity-70">{rowIndex < colIndex ? 'o' : 's'}</span>}
                            </div>
                        );
                    })
                )}
            </div>
        );
    }

    if (!isOpen) {
        return (
            <button
                onClick={() => setIsOpen(true)}
                className="fixed bottom-4 right-4 w-16 h-16 bg-lumen-surface border-2 border-lumen-dim rounded-full flex items-center justify-center p-1 shadow-lg hover:scale-110 hover:border-lumen-primary transition-all"
                aria-label="Open GTO Range Helper"
            >
                <Logo className="w-full h-full rounded-full" />
            </button>
        );
    }
    
    return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="relative bg-pro-dark text-text-primary border border-white/10 shadow-glow-cyan rounded-lg w-full max-w-md p-4 flex flex-col">
                <button 
                    onClick={() => setIsOpen(false)} 
                    className="absolute top-2 right-2 text-text-muted hover:text-text-primary"
                    aria-label="Close GTO Range Helper"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
                
                <h2 className="text-xl font-black text-center mb-4 text-lumen-primary" style={{textShadow: '0 0 10px rgba(0, 198, 0, 0.4)'}}>Compact Range Helper</h2>
                
                 <div className="flex gap-4 mb-4">
                    <div className="flex-1">
                        <label htmlFor="position" className="block text-sm font-medium text-text-muted mb-1">Position</label>
                        <select id="position" value={position} onChange={e => setPosition(e.target.value)} className="block w-full pl-3 pr-10 py-2 text-base bg-lumen-base border border-white/10 focus:outline-none focus:ring-1 focus:ring-lumen-primary focus:border-lumen-primary sm:text-sm rounded-md">
                            {POSITIONS.map(p => <option key={p}>{p}</option>)}
                        </select>
                    </div>
                    <div className="flex-1">
                        <label htmlFor="stack" className="block text-sm font-medium text-text-muted mb-1">Stack Size</label>
                        <select id="stack" value={stackSize} onChange={e => setStackSize(e.target.value)} className="block w-full pl-3 pr-10 py-2 text-base bg-lumen-base border border-white/10 focus:outline-none focus:ring-1 focus:ring-lumen-primary focus:border-lumen-primary sm:text-sm rounded-md">
                            <option value="100bb">100bb</option>
                            <option value="75bb">75bb</option>
                            <option value="50bb">50bb</option>
                            <option value="25bb">25bb</option>
                        </select>
                    </div>
                </div>
                
                {renderGrid()}

                <div className="flex justify-center gap-4 mt-4 text-xs text-text-muted">
                    <div className="flex items-center gap-1.5"><div className="w-3 h-3 bg-pro-teal/70 rounded-sm"></div><span>Open-Raise</span></div>
                    <div className="flex items-center gap-1.5"><div className="w-3 h-3 border-2 border-lumen-secondary rounded-sm"></div><span>3-Bet</span></div>
                </div>
            </div>
        </div>
    );
};
