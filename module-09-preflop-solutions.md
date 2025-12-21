# Module 9: Building and Studying Preflop Solutions

## Learning Objectives
By the end of this module, you will:
- Use **preflop solvers** like MonkerSolver, GTO Wizard AI, or RangeConverter for accurate solutions.
- Create and memorize **simplified GTO preflop ranges** for cash games and tournaments.
- Adjust ranges for **rake**, **antes**, **stack depth**, and game type.
- Study effectively: Drill charts, understand deviations, and integrate into play.

Preflop solutions are computationally intensive—dedicated solvers handle multiway, exact Nash.

## Preflop Solvers Overview
**MonkerSolver**: Gold standard for preflop/multiway (exact, no abstraction errors).
- Handles 6-max/full ring, multiway spots.
- Outputs: Range viewer, frequencies.

![MonkerSolver Calculation Interface](https://monkerware.com/images/solvercalc2.png)
*(Source: MonkerWare – Running preflop solves)*

![MonkerSolver Views Example](https://monkerware.com/images/viewsexample.png)
*(Source: MonkerWare – Detailed range outputs)*

![MonkerViewer Range Visualization](https://monkerware.com/images/v1.png)
*(Source: MonkerWare – Studying solved ranges)*

**GTO Wizard Preflop**: AI-powered (2025), fast, pre-solved library + custom.
- Free basic access, premium for deep custom.

![GTO Wizard Preflop Solutions Example](https://blog.gtowizard.com/wp-content/uploads/2022/10/all-you-need-to-know-about-our-solutions-image-3.jpg)
*(Source: GTO Wizard – Preflop solution overview)*

![GTO Wizard Button Preflop Chart](https://blog.gtowizard.com/wp-content/uploads/2023/11/gto-wizard-playing-preflop-from-the-button-in-pkos-image-4.png)
*(Source: GTO Wizard – Position-specific preflop ranges)*

![GTO Wizard Range Morphology](https://blog.gtowizard.com/wp-content/uploads/2024/09/gto-wizard-preflop-range-morphology-image-extra-1.png)
*(Source: GTO Wizard – Advanced preflop range analysis)*

**Other Tools**: RangeConverter, Preflop Academy charts.

![Simplified GTO Preflop Chart](https://v.fastcdn.co/t/e5012f85/5530bbe0/1736027436-65097607-904x606-gto-poker-charts.png)
*(Source: PokerCoaching – Printable simplified ranges)*

![Reddit Simplified Cash Ranges](https://preview.redd.it/i-created-130-simplified-gto-cash-game-ranges-for-lower-v0-kh5jcms8iejd1.png?width=1463&format=png&auto=webp&s=29c52598aa40f4c6f8607cd2456138a59c45ddfb)
*(Source: Reddit Poker Community – User-created simplified GTO charts)*

## Building Preflop Solutions
**Steps**:
1. **Define Game**: 6-max/9-max, cash/MTT, stack depths.
2. **Rake/Ante Structure**: Critical—high rake tightens opens.
3. **Run Solve**: Monker (days for full), GTO Wizard AI (minutes).
4. **Export Charts**: RFI, vs RFI, 3-bet/4-bet by position.
5. **Simplify**: Bucket hands (e.g., all Axs raise).

**Common 100bb 6-Max Cash (Low Rake)**:
- BTN RFI: 45-50%
- BB vs BTN: 40% defend

## Deviations & Adjustments
- **High Rake (e.g., low stakes online)**: Tighter RFI (-5-10%), fewer bluffs.
- **Antes (MTT)**: Wider opens (+10%), more 3-bets.
- **Short Stack**: Push/fold charts (Nash).

![Rake/Ante Adjustment Example](https://blog.gtowizard.com/wp-content/uploads/2025/02/gto-wizard-how-to-respond-to-large-preflop-raises-in-poker-image-8.png)
*(Source: GTO Wizard – Responding to adjustments like large raises/rake impact)*

![Stack Depth Preflop Changes](https://blog.gtowizard.com/wp-content/uploads/2023/10/gto-wizard-how-stack-sizes-change-your-range-image-1.png)
*(Source: GTO Wizard – Range changes with stack size/rake)*

![Push/Fold Chart for Short Stacks](https://v.fastcdn.co/t/e5012f85/5530bbe0/1736027497-65097614-960x531-push-fold-preflop-ch.jpg)
*(Source: PokerCoaching – Tournament short stack solutions)*

## Studying & Memorizing
- **Daily Drill**: 20 spots/position (apps: Preflop Trainer, GTO Wizard).
- **Understand Why**: Suited connectors IP (implied odds), Ax blockers for 3-bets.
- **Progression**: Start simplified charts → full solver nuances.
- **Review Hands**: Compare played ranges to solved.

## Key Takeaways
- Use Monker/GTO Wizard for accurate preflop GTO.
- Simplify charts for table use; study full for depth.
- Adjust for rake/antes first—biggest EV leaks.
- Memorize top 20% ranges perfectly; approximate rest.
- Next: Dive into postflop solver practice.

## Quick Quiz
1. High rake: Adjust RFI how?  
   **Answer: Tighter (fewer marginal hands)**

2. Tool for exact multiway preflop?  
   **Answer: MonkerSolver**

3. Antes in MTT: RFI change?  
   **Answer: Wider (+5-15%)**

Great! You're building a solid preflop game. Next: Postflop Solver Practice. Save as `09-preflop-solutions.md`.
