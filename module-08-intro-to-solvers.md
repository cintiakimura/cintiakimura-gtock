# Module 8: Introduction to Solvers (PioSolver, GTO+, Simple Postflop, etc.)

## Learning Objectives
By the end of this module, you will:
- Understand **how solvers work**: CFR algorithm, abstractions, node locking, and convergence.<grok-card data-id="74b5fa" data-type="citation_card"></grok-card><grok-card data-id="83ced4" data-type="citation_card"></grok-card>
- Set up **basic scenarios** in PioSolver, GTO+, or Simple Postflop.
- **Interpret solver output**: Frequencies, EV diffs, range composition, strategies.
- Use **Range Explorer** and aggregation reports for efficient study.
- Run your first simple solve and recognize GTO patterns.

Solvers approximate Nash Equilibrium for complex spots. They're essential for modern GTO study.

## How Solvers Work: Core Mechanics
Solvers use **Counterfactual Regret Minimization (CFR)**: Iterative algorithm where players "regret" suboptimal actions and adjust frequencies toward equilibrium.

**Key Concepts**:
- **Abstraction**: Simplify the game tree (flop subsets, bet size bucketing) to make computation feasible.<grok-card data-id="c55b0a" data-type="citation_card"></grok-card>
- **Convergence**: Run iterations until strategies stabilize (EV loss <0.01-0.5bb/100, depending on accuracy).
- **Node Locking**: Fix one player's strategy at a node (e.g., opponent overfolds) → solver computes exploitative counterstrategy.<grok-card data-id="9175fe" data-type="citation_card"></grok-card><grok-card data-id="626d52" data-type="citation_card"></grok-card>
- **Matchups**: Real-world frequencies accounting for range-board interactions (not just combo %).

![PioSolver Interface Overview](https://piosolver.com/docs/feature_overview/pio_interface.png)
*(Source: PioSolver Docs – Tree browser, ranges, EV display)<grok-card data-id="2eda1c" data-type="citation_card"></grok-card>

![Solver Output: Frequencies & EV](https://piosolver.com/docs/faq/gto_concept/pio_range_ev.png)
*(Source: PioSolver – Strategy frequencies, EV diffs per hand)<grok-card data-id="45f212" data-type="citation_card"></grok-card>

**Solver Comparison**:

| Solver          | Strengths                          | Best For                  | Price (2025)     |
|-----------------|------------------------------------|---------------------------|------------------|
| **PioSolver**  | Node locking, scripting, precision | Custom trees, exploits<grok-card data-id="fa6f5c" data-type="citation_card"></grok-card> | $475+ Basic     |
| **GTO+**       | Fast, affordable, simple UI       | Beginners, quick solves<grok-card data-id="797e74" data-type="citation_card"></grok-card>  | $75 lifetime    |
| **Simple Postflop** | Speed, visuals, multiway        | Mobile, fast iteration<grok-card data-id="febedb" data-type="citation_card"></grok-card>  | $100+           |
| **GTO Wizard** | Pre-solved library, trainer (free tier) | Practice, no setup<grok-card data-id="e41bb8" data-type="citation_card"></grok-card> | Free/Paid subs  |

## Setting Up Basic Scenarios
**Step-by-Step (PioSolver Example)**:
1. **Ranges**: Load/import preflop ranges (e.g., BTN vs BB).
2. **Tree Config**: Set bet sizes (33%, 66%, 100% pot), stacks (100bb), rake.
3. **Flop Subsets**: Start small (60 flops) for speed.
4. **Build Tree** → **Solve** (aim for 0.1bb accuracy).
5. **Browse**: Navigate tree, view strategies.

**GTO+**: Simpler UI – drag/drop ranges, fewer options.
**Simple Postflop**: Visual tree builder, auto-optimizes sizes.

![PioSolver Tree Setup](https://piosolver.com/docs/quick_start_guide/tree_build.png)
*(Source: PioSolver Quick Start – Basic config screen)<grok-card data-id="17a776" data-type="citation_card"></grok-card>

![GTO+ Solver Output Example](https://www.mypokercoaching.com/wp-content/uploads/2023/02/poker-solver-1.jpg)
*(Source: PokerCoaching – Typical frequencies/EV view)<grok-card data-id="d2d603" data-type="citation_card"></grok-card>

## Interpreting Solver Output
**Key Displays**:
- **Frequencies**: Bet/Check/Raise % per hand (e.g., AA: 60% bet 33%).
- **EV Diff**: Color-coded loss for deviating (red = big mistake).
- **Range Composition**: Value:Bluff ratios, polarized/merged.
- **Aggregation Reports**: Avg c-bet % over flops/turns.

**Pro Tips**:
- Focus on **patterns**: Dry flops = high c-bet; wet = check nuts.
- Use **Range Explorer**: Drill into specific hands vs range.
- **Hotness (Runouts)**: EV by turn/river card (Ctrl+H in Pio).

![Range Explorer in PioSolver](https://piosolver.com/docs/feature_overview/range_explorer.png)
*(Source: PioSolver – Analyze range vs range equity/EV)<grok-card data-id="b6f629" data-type="citation_card"></grok-card>

![EV Comparison Output](https://pokernerve.com/wp-content/uploads/2017/09/gto-solver-small-pairs-1.jpg)
*(Source: PokerNerve – Barreling EVs, range breakdown)<grok-card data-id="89ed42" data-type="citation_card"></grok-card>

## Your First Solve: Practice Spot
1. Download PioSolver Basic/Free or GTO+ trial.
2. Setup: BTN vs BB SRP, K72r flop, 100bb.
3. Solve → Observe: IP cbets 80% small.
4. Node Lock: Opp check-raises 0% → Bet more!

**GTO Wizard Free Alternative**: 1 postflop spot/day + preflop trainer.<grok-card data-id="ce6d7e" data-type="citation_card"></grok-card>

## Key Takeaways
- Solvers = CFR iterations to Nash (via abstractions/convergence).
- Node lock for exploits; interpret via EV/freqs/matchups.
- Start simple: Small trees, focus on patterns > memorization.
- Hardware: 16GB+ RAM, strong CPU for full trees.
- Next: Build preflop solutions.

## Quick Quiz
1. Node locking does what?  
   **Answer: Fixes opp strategy → computes your exploit.**

2. Convergence means?  
   **Answer: Strategies stabilize (low exploitability).**

3. Best beginner solver?  
   **Answer: GTO+ (cheap, fast) or GTO Wizard free.**

Perfect! Phase 3 begins. Next: Building Preflop Solutions. Save as `08-intro-to-solvers.md`.
