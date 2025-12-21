# Module 15: Putting It All Together (Capstone & Integration)

## Learning Objectives
By the end of this module, you will:
- Integrate **GTO baseline + exploitative adjustments** for live/online differences.
- **Adapt GTO to real opponents** using HUD stats and quick node-locks.
- **Build your own custom ranges** and strategies for specific games/stakes.
- Complete the **Final Project**: Analyze a full session (20-50 hands) using solver comparisons.<grok-card data-id="707dd9" data-type="citation_card"></grok-card><grok-card data-id="715d89" data-type="citation_card"></grok-card>
- Develop a **lifetime improvement plan** for ongoing GTO mastery.

Congratulations! You've completed the core course. This capstone ties it all together for real-world application.

## Live Play vs Online Differences
**Online (6-max, fast)**:
- More GTO-focused (regs everywhere).
- HUDs essential for exploits.
- Rake-heavy: Tighter preflop.

**Live (9-handed, slow)**:
- Wider ranges, limpers common.
- Exploit harder: Value thin, bluff less.
- Adjust: Open tighter early, steal blinds aggressively.

![Live vs Online Range Comparison](https://upswingpoker.com/wp-content/uploads/2018/02/Preflop-Guide-for-RFI-v21-1.pdf#page=1)
*(Source: Upswing Poker – Preflop adjustments for live cash)<grok-card data-id="3c3849" data-type="citation_card"></grok-card>

**Hybrid Approach**: Default GTO, deviate 20-30% based on reads.

## Adapting GTO to Real Opponents
1. **HUD Stats**: Fold to C-bet >65% → Bluff more.
2. **Quick Node-Lock**: In Pio/GTO Wizard, lock opponent fold 80% → Your new strategy.
3. **Population Exploits**: Micros overfold rivers; mids overcall flops.

**Table**:

| Opponent Type | Preflop Adjust | Postflop Adjust                  |
|---------------|----------------|----------------------------------|
| **Fish**      | Wider vs them | Value thin, bluff rivers heavy  <grok-card data-id="483ab6" data-type="citation_card"></grok-card>|
| **Reg**       | GTO baseline  | Subtle exploits (e.g., +5% bluff)|
| **Lag**       | Trap more     | Check-raise light, call stations |

![GTO Wizard Hand Analyzer](https://help.gtowizard.com/how-to-use-the-hand-history-analyzer/)
*(Source: GTO Wizard – Analyze deviations vs GTO)<grok-card data-id="42429c" data-type="citation_card"></grok-card>

## Building Your Own Ranges & Strategies
1. **Custom Solve**: Pio/GTO+ for your rake/stakes.
2. **Simplify**: 80/20 rule – Memorize core, approximate edges.
3. **Personal Charts**: Excel/PDF with your adjustments.

**Pro Tip**: Use GTO Wizard Hand History Analyzer for instant EV loss reports.<grok-card data-id="d21d28" data-type="citation_card"></grok-card><grok-card data-id="433251" data-type="citation_card"></grok-card>

## Final Project: Analyze a Full Session
**Instructions** (2-4 hours):
1. **Play/Select Session**: 1hr online cash/MTT (20-50 hands). Export hand history (.hh).
2. **Upload to Analyzer**: GTO Wizard/InstaGTO/GTOBase – Get EV loss report.<grok-card data-id="485b44" data-type="citation_card"></grok-card><grok-card data-id="054e36" data-type="citation_card"></grok-card>
3. **Pick Top 5 Mistakes**: Solver dive (e.g., under-bluff river?).
4. **Node-Lock Exploits**: Model 2 opponents → New strategies.
5. **Document**: Write 1-page summary (EV lost, fixes, winrate impact).
6. **Submit/Share**: Discord/Reddit for feedback.

**Expected Outcome**: Identify 10-50bb/100 leaks → Fix for +EV jump.

![Session Review Example](https://blog.gtowizard.com/hand-history-analyzer-is-here-patch-notes/)
*(Source: GTO Wizard – HH upload & EV visualization)<grok-card data-id="e35485" data-type="citation_card"></grok-card>

## Lifetime Improvement Plan
- **Daily**: 15min trainer (GTO Wizard free).
- **Weekly**: 1 session review + 1 custom solve.
- **Monthly**: Full preflop refresh + exploit update.
- **Quarterly**: Course re-review + new solver features.

**Track Progress**: bb/100 or ROI – Aim +2bb/100 improvement/3 months.

## Course Completion Checklist
- [ ] All quizzes 90%+
- [ ] Preflop ranges memorized (top 3 positions)
- [ ] 1000+ trainer hands
- [ ] Final project submitted
- [ ] Winrate tracked pre/post-course

## Key Takeaways
- GTO + Exploit = Winning formula.
- Session analysis = Fastest improvement.
- Consistency > Intensity.
- You're now GTO-capable – Crush your games!

**Bonus Resources**:
- GTO Wizard (free tier)<grok-card data-id="b9e949" data-type="citation_card"></grok-card>
- Pio Trainer<grok-card data-id="41d415" data-type="citation_card"></grok-card>
- Join r/poker or Discord communities.

🎉 **Course Complete!** Share your final project results – let's celebrate your progress. Save as `15-capstone-integration.md`.

---

## Full Course README.md (Bonus for GitHub)
```markdown
# Poker GTO Course

15-module comprehensive GTO course. Clone → MkDocs/Jekyll build → Your site!

## Modules
1. [Introduction](01-introduction-to-gto.md)
... (link all)

## Build
mkdocs serve

