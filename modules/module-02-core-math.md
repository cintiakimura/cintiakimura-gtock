# Module 2: Core Poker Math

Poker is a game of incomplete information, but math helps us fill in the gaps.

## Pot Odds

Pot odds are the ratio of the current size of the pot to the cost of a contemplated call.

**Formula:** `Pot Odds = (Pot Size + Bet Size) / Bet Size`

If you have a 25% chance of winning (a flush draw on the flop), you need pot odds of at least 3:1 to make a call profitable.

## Equity

Equity is your share of the pot based on the probability of winning if the hand went to showdown.

| Hand Matchup         | Player 1 Equity | Player 2 Equity |
|----------------------|-----------------|-----------------|
| AA vs KK (preflop)   | ~82%            | ~18%            |
| AK vs QQ (preflop)   | ~57%            | ~43%            |
| Flush Draw vs Top Pair | ~35%            | ~65%            |

![Calculating Odds](https://picsum.photos/800/400?random=2)

## Implied Odds

Implied odds consider the potential money you can win on future streets if you hit your hand. This is crucial for playing speculative hands like small pairs and suited connectors.
