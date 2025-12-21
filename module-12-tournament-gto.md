# Module 12: Game Theory in Tournaments

## Learning Objectives
By the end of this module, you will:
- Understand **ICM (Independent Chip Model)** and how it assigns $EV to chip stacks based on payouts.<grok-card data-id="31711a" data-type="citation_card"></grok-card><grok-card data-id="62ffb8" data-type="citation_card"></grok-card>
- Differentiate **Chip EV (cEV)** vs **$EV** and when to prioritize each.
- Apply **ICM adjustments** for bubble, final tables, and pay jumps.
- Use **preflop push/fold charts** (Nash/ICM) for short stacks.
- Learn **Future Game Simulations (FGS)** for advanced modeling beyond basic ICM.

Tournaments aren't cash games—chips aren't linear value. ICM is crucial for late-stage EV maximization.

## ICM: Independent Chip Model Explained
**ICM** calculates a stack's **$EV** by estimating finishing position probabilities × payouts.

**Formula Basics**: $EV = Σ (P(finish i-th) × Prize_i)

**Example** (4 players left, payouts: 1st $500, 2nd $300, 3rd $150, 4th $50):
- Equal stacks (25% chips): Each ~$250.
- Unequal (Player A: 70% chips): A worth <$350 (can't guarantee 1st).<grok-card data-id="b51f4f" data-type="citation_card"></grok-card>

Chips have **diminishing marginal value**—short stacks shove wide (+cEV), big stacks fold more (protect $EV).

![ICM Stack Value Example](https://upswingpoker.com/wp-content/uploads/2021/06/ICM-poker-introduction.png)
*(Source: Upswing Poker – ICM vs chip value visualization)<grok-card data-id="342377" data-type="citation_card"></grok-card>

![ICM Final Table Payouts](https://www.pokerstrategy.com/news/content/Poker-Basics-ICM-Final-Table-Deals_118214/icm-deal-example.png)
*(Source: PokerStrategy – ICM deal example with probabilities)<grok-card data-id="b94e4f" data-type="citation_card"></grok-card>

## Chip EV vs $EV
| Metric     | Definition                          | When to Use                          |
|------------|-------------------------------------|--------------------------------------|
| **cEV**   | Expected chips won (linear)        | Early tournament, deep stacks        |
| **$EV**   | Expected dollars (ICM-adjusted)    | Bubble, pay jumps, final table<grok-card data-id="dbb505" data-type="citation_card"></grok-card> |

**Key**: +cEV call can be -$EV late (e.g., bubble shove you cover → fold to preserve $EV).

![cEV vs ICM Range Comparison](https://www.pokerstrategy.com/news/content/Comparing-a-ChipEV-range-to-an-ICM-range_123587/chip-ev-icm-hijack.png)
*(Source: PokerStrategy – Hijack vs UTG+2: ICM tighter than cEV)<grok-card data-id="af20b1" data-type="citation_card"></grok-card>

## Preflop Push/Fold Charts (Nash/ICM)
Short stacks (≤15bb): Push/fold only.

**Nash (Heads-Up cEV)**: Wider shoves.
**ICM-Adjusted**: Tighter calls/shoves near bubble/FT.

**10bb Examples** (9-handed, moderate ICM):
- BTN Push: 45-50% (22+, A2s+, K9s+, QTs+, suited broadway).
- BB Call: 15-20% (TT+, AQs+).

![Tournament Push/Fold Charts](https://upswingpoker.com/wp-content/uploads/2016/01/push-fold-charts.png)
*(Source: Upswing Poker – ICMIZER-derived push/fold by position)<grok-card data-id="15a57e" data-type="citation_card"></grok-card>

![Red Chip 10bb Push Ranges](https://redchippoker.com/wp-content/uploads/2023/05/push-fold-charts-redchip.png)
*(Source: Red Chip Poker – No/low/high ICM push from positions)<grok-card data-id="385340" data-type="citation_card"></grok-card>

**Tools**: ICMIZER, HRC, GTO Wizard (free preflop trainer).

## Bubble & Final Table Adjustments
- **Bubble**: Shorts shove wide, mediums fold tight, bigs steal.
- **Final Table**: Pay jumps → tighter calls, exploit shorts.
- **ICM Pressure**: OOP vs covering stack → super tight (e.g., fold AJ).<grok-card data-id="b703ca" data-type="citation_card"></grok-card>

![FT OOP vs Covering Stack](https://blog.gtowizard.com/wp-content/uploads/2025/03/icm-oop-covering-stack.png)
*(Source: GTO Wizard – ICM survival guide FT spot)<grok-card data-id="db917e" data-type="citation_card"></grok-card>

## Future Game Simulations (FGS)
**FGS** > ICM: Simulates full future play (postflop, multiway) for accurate $EV.

- ICM assumes random all-ins.
- FGS models GTO play → better for mid/late MTT.

**Tools**: Monker (preflop), PIO with ICM scripts, GTO Wizard 2025 ICM postflop.<grok-card data-id="0d7e87" data-type="citation_card"></grok-card>

## Key Takeaways
- ICM: Chips ≠ dollars—protect stack near jumps.
- +cEV early; +$EV late.
- Memorize 10bb push/fold; adjust for ICM.
- FGS for precision; ICM quick calc.
- Study: ICMIZER free trial, GTO Wizard trainer.

## Quick Quiz
1. Big stack on bubble: Strategy?  
   **Answer: Steal wide (ICM pressure on mediums/shorts)**

2. +cEV but -$EV?  
   **Answer: Marginal call FT (risk busting)**

3. FGS vs ICM?  
   **Answer: FGS simulates full play (more accurate)**

FT mastery unlocked! Next: Advanced Strategies. Save as `12-tournament-gto.md`.
