# Module 4: Flop Play in Single Raised Pots (SRP)

## Learning Objectives
By the end of this module, you will:
- Classify flop **board textures** (dry, wet, dynamic, static) and understand their impact on strategy.<grok-card data-id="339c54" data-type="citation_card"></grok-card><grok-card data-id="6ccdb2" data-type="citation_card"></grok-card>
- Master **c-bet strategies** as the preflop aggressor (IP/OOP): sizing, frequency, polarized vs merged.
- Learn **defender strategies**: check-raise, check-call, check-fold frequencies.
- Analyze common SRP spots (BTN vs BB, CO vs BB) using solver-derived principles.
- Apply GTO heuristics for profitable flop decisions.

SRP = Single Raised Pot (one preflop raise, caller(s) flat). High SPR (~13:1), so control pot and build ranges.

## Board Texture Classification
Board texture dictates range interaction, fold equity, and bet sizing.

| Texture   | Description                          | Examples                  | C-Bet Freq (IP Aggressor) | Sizing     |
|-----------|--------------------------------------|---------------------------|---------------------------|------------|
| **Dry**   | Disconnected, rainbow, few draws    | K♠ 7♦ 2♣, A♣ 4♥ 3♦      | 70-90%                   | Small (33%)<grok-card data-id="c15663" data-type="citation_card"></grok-card><grok-card data-id="2bb7b9" data-type="citation_card"></grok-card> |
| **Wet**   | Connected, suited, many draws       | 9♥ 8♥ 7♠, J♦ T♦ Q♣       | 40-60%                   | Large (66-75%)<grok-card data-id="f722ae" data-type="citation_card"></grok-card> |
| **Static**| Top pair likely best to river       | A♠ K♦ 2♣                 | High (80%)               | Medium    |
| **Dynamic**| Nuts change often                  | 8♠ 7♠ 6♦                 | Lower (50%)              | Large<grok-card data-id="df0b9f" data-type="citation_card"></grok-card><grok-card data-id="20bc2b" data-type="citation_card"></grok-card> |

![Board Texture Examples (Dry vs Wet)](https://www.888poker.com/magazine/sites/magazine.888poker.com/files/styles/article_featured_retina/public/field/image/2020-01/Poker-Position-Charts-6-max.jpg)
*(Source: 888Poker – Visual flop types; adapt for textures)<grok-card data-id="852977" data-type="citation_card"></grok-card>

![Wet vs Dry Board Diagram](https://blog.gtowizard.com/wp-content/uploads/2022/11/what-are-pot-odds-in-poker-image-6.png)
*(Source: GTO Wizard – Texture impact on strategy)<grok-card data-id="b89250" data-type="citation_card"></grok-card>

**Rule**: Dry/static = bet high freq/small size (range advantage). Wet/dynamic = bet lower freq/large size (protect/charge draws).<grok-card data-id="fcbaaa" data-type="citation_card"></grok-card>

## C-Bet Strategies (Aggressor IP/OOP)
**IP (e.g., BTN vs BB)**: Bet 60-80% freq overall. Polarized on wet (nuts + air), merged on dry.

**OOP (e.g., UTG vs BB)**: Bet 50-70% (check more to pot control).<grok-card data-id="5a357f" data-type="citation_card"></grok-card>

**Sizing Guide** (100bb SRP):
- Small (25-33% pot): Dry, high equity boards (protect medium strength).
- Medium (50-66%): Paired, balanced.
- Large (75%+): Wet, deny equity.

**Example Freqs** (BTN IP vs BB SRP):<grok-card data-id="4b9b5a" data-type="citation_card"></grok-card>
- Dry (K72r): 85% cbet (33% pot).
- Wet (987ss): 55% cbet (75% pot).

![GTO C-Bet Frequency Quiz Example](https://upswingpoker.com/wp-content/uploads/2021/08/gto-cbet-quiz.jpg)
*(Source: Upswing – IP SRP cbet ranges on various flops)<grok-card data-id="b78115" data-type="citation_card"></grok-card>

![Flop C-Bet Chart SRP](https://www.splitsuit.com/wp-content/uploads/2020/02/Poker-Ranges-Guide.jpg)
*(Source: SplitSuit – Preflop/postflop range interaction for cbets)<grok-card data-id="eaca79" data-type="citation_card"></grok-card>

**What to Bet**:
- Value: Top pair+, overpairs, sets.
- Bluffs: Gutshots, backdoors, blockers (A/K blocks calls).
- Balance: Value:Bluff ~2:1 on small, 1:1 on large.

## Defender Strategies (BB vs BTN SRP)
After check:
- **Check-Raise**: 8-15% (nuts + semi-bluffs on wet/dynamic).
- **Check-Call**: Medium strength (pairs, draws IP-favored).
- **Check-Fold**: 40-60% (air, weak pairs on dry).

**Example**: On wet 9♥8♥7♠ – CR 12% (sets, combo draws), call 25%.

![Defender Check-Raise Range](https://blog.gtowizard.com/wp-content/uploads/2023/03/gto-wizard-understanding-blockers-in-poker-image-20.jpg)
*(Source: GTO Wizard – Defender responses in SRP)<grok-card data-id="44b1df" data-type="citation_card"></grok-card>

**Donk-Bet**: Rare in SRP GTO (<5%, polarized on very wet boards OOP).

## Key Takeaways
- Texture > Position: Dry = spam cbets, wet = selective/large.
- IP: Bet wide/small on good boards.
- OOP: Check more, but bet dry aggressively.
- Drill: Use GTO Wizard free trainer for SRP flops.
- Exploit: Vs overfolders – cbet more; vs stations – value thin.

## Quick Quiz
1. On K♦ 5♣ 2♥ (dry/static), IP cbet freq?  
   **Answer: 80-90% (small size)**

2. Wet board like J♥ T♥ 9♠: Preferred sizing?  
   **Answer: Large (66-75% pot)**

3. Defender on dynamic wet: Primary check-raise hands?  
   **Answer: Nuts + strong draws (semi-bluffs)**

Awesome! Module 4 complete. Next: Turn & River in SRP. Save as `04-flop-srp.md`.
