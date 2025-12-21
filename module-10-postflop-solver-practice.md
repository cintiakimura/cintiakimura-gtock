# Module 10: Postflop Solver Practice

## Learning Objectives
By the end of this module, you will:
- Perform **spot-by-spot analysis** (flop c-bet, turn check-raise, river decisions) using solvers.
- Use **common simplifications/abstractions** (flop subsets, bet size bucketing) for faster solves.
- Apply **scripting and bulk analysis** to study multiple boards efficiently.
- Drill solver outputs: Recognize patterns in frequencies, EV diffs, and range mixes.
- Review real hands against solver strategies for practical application.

Now that you know solvers, it's time to practice. Focus on high-frequency spots like SRP IP/OOP.

## Spot-by-Spot Analysis
Break down trees node-by-node:

1. **Flop C-Bet**: Setup BTN vs BB SRP, K72r. Solve → Analyze: 80% cbet small? Why (range adv)?
2. **Turn Check-Raise**: After checked flop, turn blank. Defender CR freq? (nuts + draws).
3. **River Decisions**: Brick river → Overbet polarized? Bluff blockers (A-high).

**Example Workflow (Pio/GTO+)**:
- Load ranges.
- Set 3 sizes (33/66/100%).
- Solve subset (60 flops).
- Browse: Hotkeys for EV comparison.

![PioSolver Postflop Tree Example](https://piosolver.com/docs/feature_overview/pio_interface.png)<grok-card data-id="b1f81d" data-type="citation_card"></grok-card>

![GTO+ Solver Strategy View](https://www.mypokercoaching.com/wp-content/uploads/2023/02/poker-solver-1.jpg)<grok-card data-id="3f57e6" data-type="citation_card"></grok-card>

![Simple Postflop Spot Analysis](https://simplepoker.com/en/Solutions/Simple_Postflop) (visual tree)<grok-card data-id="7650f9" data-type="citation_card"></grok-card>

## Common Simplifications & Abstractions
Solvers can't compute full game tree (1,755 flops × runouts = impossible).

- **Flop Subsets**: Solve 60-200 representative flops (e.g., Pio "FAST" preset).
- **Bet Size Bucketing**: Limit to 2-4 sizes (33%, 66%, 100%, overbet).
- **Accuracy Tradeoff**: 0.5bb/100 for study (faster than 0.1bb).
- **No Loss**: <1% EV sacrifice vs full solve.<grok-card data-id="07c708" data-type="citation_card"></grok-card><grok-card data-id="5c86b9" data-type="citation_card"></grok-card>

![Flop Subsets Abstraction](https://blog.gtowizard.com/wp-content/uploads/2023/02/gto-wizard-multiway-mechanics-blog-article-thumbnail-image.jpg)<grok-card data-id="321a12" data-type="citation_card"></grok-card>

![Pio Abstractions Example](https://piosolver.com/docs/faq/gto_concept/pio_range_ev.png)<grok-card data-id="f0def1" data-type="citation_card"></grok-card>

## Scripting & Bulk Analysis
Run 100+ flops overnight:

**Pio Script Example**:

"Solve 100 dry flops
for flop in dry_flops.txt:
load_tree flop
solve accuracy=0.5
save_results "results/${flop}.pios"


**Aggregate Reports**: Avg c-bet % by texture (GTO Wizard excels here).

![Bulk Flop Reports](https://blog.gtowizard.com/wp-content/uploads/2023/09/c-betting-ip-in-3-bet-pots-image-1.png)<grok-card data-id="855bd2" data-type="citation_card"></grok-card>

![GTO Wizard Aggregate Analysis](https://blog.gtowizard.com/wp-content/uploads/2022/11/range-morphology-image-10.png)<grok-card data-id="7a07e5" data-type="citation_card"></grok-card>

## Practice Routine
1. **Daily**: 1 full tree (BTN vs BB SRP dry/wet).
2. **Weekly**: Bulk 50 flops, note patterns (e.g., "IP cbets 75% dry").
3. **Hand Review**: Upload to solver/GTO Wizard → Diff your play.
4. **Trainer Mode**: Play vs solution (Simple GTO Trainer/Pio CTRL+T).

**Pro Tip**: Start with GTO Wizard free daily spot → upgrade for unlimited.

![Solver Trainer Interface](https://pbs.twimg.com/media/G7y2mj9WMAAupiZ.jpg)<grok-card data-id="b37a3d" data-type="citation_card"></grok-card>

## Key Takeaways
- Spot-by-spot: Flop → bet wide dry; turn → CR polarized; river → size for bluff:val.
- Simplify: Subsets/buckets = 99% EV, 10x faster.
- Bulk/Script: Study textures at scale.
- Integrate: Review sessions vs solver weekly.
- Next: Exploiting deviations.

## Quick Quiz
1. Why use flop subsets?  
   **Answer: Reduce 1,755 flops to 100 reps (computable)**

2. Bulk analysis best for?  
   **Answer: Avg freqs across textures (patterns)**

3. Abstraction EV loss?  
   **Answer: <1% with proper bucketing**

Killer module! Phase 4 next. Save as `10-postflop-solver-practice.md`.
