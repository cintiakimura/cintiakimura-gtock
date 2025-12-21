# Module 3: Preflop Fundamentals

## Learning Objectives
By the end of this module, you will:
- Understand **absolute** and **relative position** and why position is king in poker.
- Memorize simplified **GTO preflop ranges** for Raise First In (RFI), vs RFI, 3-bet, and 4-bet by position.
- Learn how **stack depths** (100bb deep, shallow, deep) affect preflop play.
- Visualize and use **preflop charts** effectively for cash games and tournaments.
- Apply intro to preflop range construction and common adjustments (rake, antes).

Preflop is ~30-40% of your EV in modern poker. Mastering it creates postflop advantages.

## Position is King: Absolute vs Relative
**Absolute Position**: Your fixed seat relative to the button (BTN).
- Early (UTG/MP): Tight ranges (10-15%).
- Late (CO/BTN): Wider (30-50%).
- Blinds (SB/BB): Steal wide, defend selectively.

**Relative Position**: Your position vs the preflop raiser (IP = in position postflop).
- IP: Wider defending/calling (play more hands).
- OOP: Tighter (avoid tough postflop spots).

**6-Max Table Diagram** (Standard for online cash):

![6-Max Poker Positions Diagram](https://www.888poker.com/magazine/sites/magazine.888poker.com/files/styles/article_featured_retina/public/field/image/2020-01/Poker-Position-Charts-6-max.jpg)
*(Source: 888Poker – Absolute positions in 6-max)*<grok-card data-id="e715e7" data-type="citation_card"></grok-card>

![Position Names Full Ring](https://www.tightpoker.com/wp-content/uploads/2021/06/poker-table-positions.jpg)
*(Source: TightPoker – Including relative considerations)*<grok-card data-id="8a9175" data-type="citation_card"></grok-card>

**Rule**: Always prioritize IP postflop. From BTN/SB, raise 40-60% vs blinds.

## Preflop Ranges by Position (100bb 6-Max Cash GTO)
Simplified, solver-derived (GTO Wizard/Upswing style). RFI = Raise First In (2.2-2.5x).

| Position | RFI Range (~%) | Example Hands                  | 3-Bet (vs RFI) | 4-Bet |
|----------|----------------|-------------------------------|----------------|-------|
| **UTG**  | 14-16%        | 77+, AJo+, ATs+, KQs+, QJs+   | QQ+/AK (8%)   | JJ+/AK |
| **MP**   | 18-20%        | 66+, ATo+, A9s+, KJo+, KTs+   | TT+/AQ+ (10%) | QQ+/AK |
| **CO**   | 25-28%        | 44+, A2s+, K9s+, Q9s+, J9s+   | 99+/AJ+ (12%) | KK+/AA |
| **BTN**  | 40-45%        | 22+, A2s+, K2s+, Q5s+, J7s+   | 77+/ATo+ (18%)| JJ+/AK |
| **SB**   | 55-65% (vs BB)| Any pair, A2s+, suited broadway| 66+/AJo+ (25%)| TT+/AK |

![6-Max RFI Preflop Chart](https://www.splitsuit.com/wp-content/uploads/2020/02/Poker-Ranges-Guide.jpg)
*(Source: SplitSuit – Visual RFI ranges by position)*<grok-card data-id="983147" data-type="citation_card"></grok-card>

![Upswing RFI Guide](https://upswingpoker.com/wp-content/uploads/2018/02/Preflop-Guide-for-RFI-v21-1.pdf#page=1)
*(Source: Upswing Poker – Detailed RFI PDF preview)*<grok-card data-id="6910ae" data-type="citation_card"></grok-card>

**Vs RFI Defending** (e.g., BB vs BTN open):
- Mix: Fold 50-60%, Call 20-30%, 3-Bet 10-15%.
- BB vs BTN: Call 88s-JTs, AJo+, 3-bet bluffs like A5s, K9s.

![BB Vs BTN Preflop Chart](https://pbs.twimg.com/media/Ggs-refXIAIBNLt.jpg)
*(Source: GTO Preflop X Post – Recent solver chart)*<grok-card data-id="c0c389" data-type="citation_card"></grok-card>

## Stack Depth Effects
**100bb (Standard)**: Balanced raises, deep postflop play.

**Shallow (20-50bb MTT)**: Wider RFI, more 3-bet shoves, push/fold.
- RFI: +10-20% hands (e.g., BTN 60%).
- Nash push/fold from SB/BB.

**Deep (150-200bb+ Cash)**: Slightly tighter early, more suited connectors (implied odds).
- Open smaller (2x), defend wider IP.

![Stack Depth Preflop Adjustment](https://blog.gtowizard.com/wp-content/uploads/2023/10/how-stack-sizes-change-your-range-image-5.png)
*(Source: GTO Wizard – 50bb vs 100bb RFI comparison)*<grok-card data-id="61f5d0" data-type="citation_card"></grok-card>

![Shallow Stack Charts](https://cdn.prod.website-files.com/5e6616ad415f1e3b494ddec8/63e13c372642e7954c66f951_main-image-blog-push-fold-chart.jpg)
*(Source: PokerCode – Push/fold for short stacks)*<grok-card data-id="225efe" data-type="citation_card"></grok-card>

## Preflop Charts & Visualization
Use tools like GTO Wizard (free preflop), RangeConverter, or printables.
- **Green**: Raise/Mix
- **Blue**: Call
- **Red**: 3-Bet/Fold

Practice: Quiz yourself on 10 hands per position daily.

![GTO Preflop Range Matrix](https://www.splitsuit.com/nitropack_static/YUrpQHCEKnGlLqwoNETaEVBthvFFCVkE/assets/images/optimized/rev-09de70b/www.splitsuit.com/wp-content/uploads/2020/02/Poker-Range-Matrix.png)
*(Source: SplitSuit – 13x13 range viewer)*<grok-card data-id="1d58c1" data-type="citation_card"></grok-card>

## Adjustments: Rake, Antes, Game Type
- **High Rake**: Tighter RFI (play fewer pots).
- **Antes (MTT)**: Wider opens (+5-10%).
- **Tournaments**: ICM near bubble (tighter calls).

**Example**: 100bb 6-Max Cash (low rake) vs MTT (antes).

## Key Takeaways
- **Position > Cards**: Open wider late.
- Memorize RFI: UTG 15%, BTN 45%.
- Stack depth: Shallow = shove more, deep = spec connectors.
- Start with charts, deviate exploitatively (e.g., vs limpers).
- Next: Flop SRP – but drill preflop daily!

## Quick Quiz
1. What's your RFI range from BTN (100bb)?  
   **Answer: ~42% (22+, A2s+, K2s+, Q4s+, suited broadway/gappers)**

2. BB vs CO RFI: Defend frequency?  
   **Answer: ~35-40% (call + 3-bet)**

3. At 30bb, adjust RFI how?  
   **Answer: Wider, more shoves IP**

Great progress! Next: Flop Play in SRP. Save as `03-preflop-fundamentals.md`.
