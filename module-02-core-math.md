# Module 2: Core Poker Math & Concepts

## Learning Objectives
By the end of this module, you will:
- Master the fundamental math tools that underpin all GTO decisions.
- Calculate pot odds, equity, and required fold equity accurately.
- Understand Expected Value (EV) and how to use it for decision-making.
- Construct and analyze ranges using combinatorics (combos).
- Grasp the impact of blockers, unblockers, and card removal effects.

These concepts are the building blocks of modern poker strategy. Without them, interpreting solver output or building ranges becomes guesswork.

## Pot Odds
**Pot odds** are the ratio of the current pot size to the cost of a contemplated call. They tell you the minimum equity you need to profitably call.

**Formula**:  
Pot Odds = (Pot Size + Opponent's Bet) : Bet Amount  
Or as a percentage: Required Equity = Bet / (Pot Size + Bet + Bet)

**Example**:  
Pot is $100, opponent bets $50.  
Total pot after call: $200.  
You need to call $50.  
Pot odds: $150 : $50 = 3:1  
Required equity: 50 / (100 + 50 + 50) = 25%  
If your hand has >25% equity, calling is +EV.

![Poker Pot Odds Chart](https://www.888poker.com/magazine/sites/magazine.888poker.com/files/inline-images/Poker%20Pot%20Odds%20Chart.jpg)
*(Source: 888 Poker – Standard pot odds reference chart)*

![Pot Odds Visualization](https://blog.gtowizard.com/wp-content/uploads/2022/11/what-are-pot-odds-in-poker-image-6.png)
*(Source: GTO Wizard – Diagram showing pot odds calculation in action)*

## Equity and Fold Equity
**Equity** is your share of the pot based on the probability of winning at showdown (assuming no further action).

**Fold Equity** is the additional equity gained from opponents folding to your bets/bluffs.

**Total EV of a bluff** = (Fold Equity × Pot) + (Equity vs Call × Final Pot) - Cost when called.

**Example**: You bluff $100 into a $100 pot. Opponent folds 60% of the time. Your hand has 20% equity when called.  
EV = (0.6 × $100) + (0.4 × 0.2 × $300) - (0.4 × $100) = +$8 (profitable bluff).

![Poker Equity Chart Example](https://www.888poker.com/magazine/sites/magazine.888poker.com/files/inline-images/Poker%20Odds%20Chart%20Outs%20and%20Equities_2.jpg)
*(Source: 888 Poker – Equity and outs reference chart)*

![Equity Calculation Illustration](https://pokerati.com/wp-content/uploads/2025/07/poker-equity-1024x604.jpg)
*(Source: Pokerati – Visual breakdown of equity in a hand)*

## Expected Value (EV)
**Expected Value** measures the long-term profitability of a decision.

**Basic EV Formula**:  
EV = (Probability of Winning × Amount Won) - (Probability of Losing × Amount Lost)

In poker, we often break decisions into immediate EV and consider multi-street implications in solvers.

**Example Hand**:  
You have a flush draw (9 outs) on the flop. Pot $200, opponent bets $100.  
Your equity ≈ 35% (rule of 4: 9 outs × 4 = 36% to river).  
Required equity: ~25%.  
Calling is +EV even ignoring fold equity.

Use EV to compare lines: Betting vs checking, calling vs raising, etc.

## Range Construction and Polarization
A **range** is the spectrum of hands a player could have in a spot.

- **Merged range**: Strong value + medium strength + some bluffs.
- **Polarized range**: Nuts + bluffs, skipping medium hands.

GTO ranges balance value-to-bluff ratios based on board texture and bet sizing.

![Poker Range Matrix Visualization](https://www.splitsuit.com/nitropack_static/YUrpQHCEKnGlLqwoNETaEVBthvFFCVkE/assets/images/optimized/rev-09de70b/www.splitsuit.com/wp-content/uploads/2020/02/Poker-Range-Matrix.png)
*(Source: SplitSuit Poker – Classic 13x13 range grid)*

![Hand Range Example](https://pokerati.com/wp-content/uploads/2025/03/Hand-Ranges-in-Poker.jpg)
*(Source: Pokerati – Visualizing polarized vs merged ranges)*

![Range Construction Diagram](https://pokerati.com/wp-content/uploads/2025/03/Poker-ranges.jpg)
*(Source: Pokerati – Building ranges by position)*

## Combo Counting and Combinatorics
There are 1,326 possible starting hands in Hold'em, but we count **combinations** (combos) for precision.

- Suited hands (e.g., AKs): 4 combos
- Offsuit hands (e.g., AKo): 12 combos
- Pocket pairs: 6 combos

**Formula for unpaired hand**: 16 combos total (4 suited + 12 offsuit)  
When cards are on board or in your hand, remove those combos (card removal).

**Example**: Villain's range includes AA. How many combos left if you hold an Ace?  
Normally 6 combos → now only 3 (blockers reduce combos).

![Poker Combos Counting Example](https://pokercoaching.com/blog/wp-content/uploads/2023/05/combos-pic.png)
*(Source: Poker Coaching – Visual combo breakdown)*

![Combinatorics Illustration](https://pokernerve.com/wp-content/uploads/2018/01/maxresdefault-1.jpg)
*(Source: PokerNerve – Counting combos in ranges)*

![Advanced Combo Example](https://pokerati.com/wp-content/uploads/2025/03/Poker-combo-counting-1024x576.jpg)
*(Source: Pokerati – Step-by-step combo counting)*

## Blockers and Unblockers
**Blockers**: Cards in your hand that reduce combos in villain's range (great for bluffing).  
**Unblockers**: Cards you don't hold that keep villain's calling/bluff-catching range wide.

**Example**: Holding A♠ on a flush draw board blocks villain's nut flush → good bluff spot.  
Holding low spades unblocks their flush → they call more.

![Blockers Illustration](https://blog.gtowizard.com/wp-content/uploads/2023/03/gto-wizard-understanding-blockers-in-poker-image-20.jpg)
*(Source: GTO Wizard – Blockers in action on a board)*

![Unblockers Example](https://upswingpoker.com/wp-content/uploads/2022/01/unblockers-1200x800-no-read-1200x675.png)
*(Source: Upswing Poker – Strategic use of unblockers)*

## Key Takeaways
- Pot odds and equity are your baseline for calls.
- EV drives every profitable decision.
- Combos and blockers refine range analysis.
- Practice these mentally at the table—GTO solvers rely on them heavily.

## Quick Quiz
1. Pot is $100, opponent bets $100. What equity do you need to call?  
   **Answer: 33% (100 / (100 + 100 + 100))**

2. How many combos of AK does villain have preflop?  
   **Answer: 16 (4 suited + 12 offsuit)**

3. You hold A♦ on a board with flush possible. This is a good bluff because:  
   a) It blocks nuts  
   b) It unblocks nuts  
   **Answer: a)**

Excellent work! You're now equipped with the math foundation. Next: Preflop Fundamentals.
