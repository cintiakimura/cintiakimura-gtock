# Module 5: Turn & River Play in SRP

## Learning Objectives
By the end of this module, you will:
- Understand **continuation betting (barreling)** on turn/river: frequencies, range construction, and sizing.
- Master **probe bets** and **delayed c-bets** as key GTO tools.
- Learn **river strategies**: overbetting (polarized/merged), value betting thin, bluffing with blockers.
- Analyze multi-street dynamics in SRP (e.g., BTN vs BB).
- Apply heuristics for turn/river decisions without a solver.

SRP turn/river: SPR drops (flop ~13:1 → turn ~6:1 → river ~2:1). Bets get larger, ranges polarize more.

## Turn Play in SRP
**Barreling**: Continuing aggression after flop action.

**IP Aggressor (e.g., BTN vs BB)**: Bet 50-70% freq.  
- **Dry turn cards**: High freq (merged, small/medium size).  
- **Wet/dynamic turns**: Lower freq (polarized, large size) – protect vs draws.  

**Delayed C-Bet**: Check flop → bet turn (25-40% freq overall).  
- Use: Medium strength (top pair, overpairs) to pot control + induce bluffs.  
- Bluff: Backdoor draws, gutshots improving.

**Defender Responses**: Raise 5-10%, call 20-30%, fold rest (MDF ~40-50% vs small).

| Turn Spot (BTN IP SRP) | Bet Freq | Sizing | Value/Bluff Ratio |
|------------------------|----------|--------|-------------------|
| **Dry (e.g., K72r → 4)** | 70%     | 33-50% | Merged (2:1)     |
| **Wet (e.g., 987ss → J)**| 50%     | 75%+   | Polarized (1:1)  |

![Delayed C-Bet Example](https://blog.gtowizard.com/wp-content/uploads/2023/09/delayed-c-betting-image-1.png)<grok-card data-id="c2daa5" data-type="citation_card"></grok-card>
*(Source: GTO Wizard – Check flop, bet turn with medium hands)*

![Turn Barreling in SRP](https://blog.gtowizard.com/wp-content/uploads/2024/01/turn-barreling-3bet-pots-image-5.png)<grok-card data-id="a80ce5" data-type="citation_card"></grok-card>
*(Source: GTO Wizard – Barrel freqs on turn)*

**Probe Bets (Defender OOP)**: After check-check flop, bet turn 20-30% (small size, polarized: nuts + air).

![Probe Bet Strategy](https://blog.gtowizard.com/wp-content/uploads/2024/02/turn-probe-bet-image-2.png)<grok-card data-id="bc8222" data-type="citation_card"></grok-card>
*(Source: GTO Wizard – OOP probe after x/x flop)*

## River Play in SRP
**Pots large, info max**: Bluff with blockers (block value calls), value thin (TPTK+).

**Sizing**:
- **Small (33-50%)**: Merged (thin value + bluffs).
- **Medium (75%)**: Balanced.
- **Large/Overbet (100-150%)**: Polarized (nuts + air). Use on scary boards.

**Bluff:Value Ratio** ≈ Bet Size / (2 + Bet Size). E.g., overbet 125% pot → bluff ~38%.

**Example**: River completes flush. Overbet nuts (sets/flush), bluff missed draws + A/K blockers.

![River Overbet SRP](https://pbs.twimg.com/media/GmUXKNKXYAApUQV.png)<grok-card data-id="89bccb" data-type="citation_card"></grok-card>
*(Source: AtomicSolver X – River overbet after small flop/turn)*

![River Bluff Catchers](https://upswingpoker.com/wp-content/uploads/2021/08/river-probing-quiz.jpg)<grok-card data-id="3812db" data-type="citation_card"></grok-card>
*(Source: Upswing – River decisions vs barrels)*

**Defender River MDF**: Defend ~33% vs pot bet (call/raise to prevent exploits).

## Multi-Street Example: BTN vs BB SRP
- Flop dry: Cbet 33% → Turn blank: Barrel 50% medium.
- Flop wet x/x: Probe small → River brick: Overbet polarized.

**Key Heuristic**: Bet turn/river when you have **range advantage** (more nuts/bluffs).

## Key Takeaways
- **Turn**: Barrel selectively (texture-driven), delay cbets for balance.
- **River**: Size up for polarization; bluff blockers, value TPTK+.
- IP > OOP: Bet more IP.
- Practice: GTO Wizard trainer for SRP turn/river spots.
- Exploit: Vs passive → value thin; vs aggro → overfold traps.

## Quick Quiz
1. After x/x dry flop, turn blank: IP barrel freq?  
   **Answer: 60-70% (merged, medium size)**

2. River overbet: Ideal bluff type?  
   **Answer: Blockers to value (A/K on flush river)**

3. Probe bet sizing OOP turn?  
   **Answer: Small (25-33%, polarized)**

Nailed it! Next: 3-Bet/4-Bet Pots. Save as `05-turn-river-srp.md`.
