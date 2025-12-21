# Module 13: Advanced Strategies

## Learning Objectives
By the end of this module, you will:
- Master **overbetting** strategies (polarized and merged) on flop, turn, and river.
- Use **low-frequency plays** effectively: donk-bets, probe bets, check-raises with strong hands.
- Understand **mixed strategies** and randomization in GTO (why solvers mix).
- Apply advanced concepts: indifference, leverage ratios, blocker effects in bluffs/value.
- Integrate these into your game for high-level balance and exploitation.

These are the "pro-level" tools that separate good GTO players from elite ones.

## Overbetting: Polarized & Merged
**Overbet** = Bet >100% pot (125-200% common).

**Polarized Overbet**: Nuts + bluffs (river most common).
- Ratio: ~1:1 bluff:value (leverage forces folds).
- Best when: Board scares (flush/straight completes), villain capped.

**Merged Overbet**: Thin value + medium strength (less common, turn/river IP).
- Protects equity, denies realization.

**Example River Spot** (BTN vs BB SRP, river flush completes):
- Overbet 150%: Sets/full houses value, missed draws + A-high blockers bluff.

![River Overbet Polarized](https://blog.gtowizard.com/wp-content/uploads/2024/01/turn-barreling-3bet-pots-image-5.png)
*(Source: GTO Wizard – River overbet frequencies and ranges)*

![Overbet Leverage Diagram](https://upswingpoker.com/wp-content/uploads/2022/01/overbetting-poker-strategy-1200x675.png)
*(Source: Upswing Poker – Overbet sizing and polarization)*

**Turn Overbet**: Less frequent, usually polarized (combo draws, nuts).

## Low-Frequency Plays
GTO mixes rare actions for balance.

**Donk-Bet** (Lead OOP into aggressor):
- Freq: <10% flop/turn (polarized: nuts + strong draws on wet boards).
- Purpose: Deny equity, protect, induce raises.

![Donk-Bet Strategy](https://blog.gtowizard.com/wp-content/uploads/2023/11/donk-betting-image-1.png)
*(Source: GTO Wizard – OOP donk frequencies and ranges)*

**Probe Bet** (OOP bet after x/x flop):
- Turn: 20-30% (polarized small size).
- River: Rare, nuts trap.

![Probe Bet Example](https://blog.gtowizard.com/wp-content/uploads/2024/02/turn-probe-bet-image-2.png)
*(Source: GTO Wizard – Turn probe after check-check flop)*

**Check-Raise with Strong Hands**:
- Mix sets/overpairs into CR range (don't always slowplay).
- Prevents opponent from betting wide profitably.

![Strong Hand Check-Raise](https://blog.gtowizard.com/wp-content/uploads/2023/09/c-betting-oop-in-3-bet-pots-image-1.png)
*(Source: GTO Wizard – Mixing value into check-raises)*

## Mixed Strategies & Randomization
Solvers mix because opponent is **indifferent**:
- Villain folds exactly enough vs your bluffs.
- You randomize to prevent exploitation.

**Example**: Bluff 42.7% with gutshot → villain calls/folds perfectly.

**At Table**: Use mental coin flip (e.g., watch second hand: even = bluff, odd = check).

![Mixed Strategy Output](https://piosolver.com/docs/faq/gto_concept/pio_range_ev.png)
*(Source: PioSolver – Exact mixing frequencies per hand)*

## Advanced Concepts
**Indifference**: Opponent has 0 EV difference between actions → you exploit any deviation.

**Leverage Ratio**: Pot : Bet size → determines bluff freq.
- 150% overbet → ~38% bluffs needed.

**Blocker Effects**:
- Bluff with nut blockers (A on flush river).
- Value with draw blockers (unblock calls).

![Advanced Blocker Play](https://blog.gtowizard.com/wp-content/uploads/2023/03/gto-wizard-understanding-blockers-in-poker-image-20.jpg)
*(Source: GTO Wizard – Blocker/unblocker strategy)*

## Key Takeaways
- Overbet polarized rivers (scary runouts), merged turns IP.
- Mix donks/probes 10-30% for balance (nuts + air).
- Check-raise strong hands sometimes.
- Randomize mixes; study indifference points.
- These plays add ~1-3bb/100 when used correctly.

## Quick Quiz
1. River overbet 150%: Bluff:value ratio approx?  
   **Answer: 1:1 (38-40% bluffs)**

2. Donk-bet best with?  
   **Answer: Polarized (nuts + strong draws)**

3. Why mix strategies?  
   **Answer: Make opponent indifferent (unexploitable)**

Elite level reached! Next: Mental Game & Study Routine. Save as `13-advanced-strategies.md`.
