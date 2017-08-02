/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to
   write your logic.
*/

function handValue (hand) {
  let total = 0;
  let aces = [];

  for (let i = 0; i < hand.length; i++) {
    if (hand[i] === 'A') {
      aces.push(hand[i]);
      continue;
    }

    if (hand[i] === 'J' || hand[i] === 'Q' || hand[i] === 'K') {
      total += 10;
      continue;
    }

    total += parseInt(hand[i]); // it's definitely a number card
  }

  for (let i = 0; i < aces.length; i++) {
    if ((21 - total) >= 11) {
      total += 11;
    } else {
      total += 1;
    }
  }

  return total;
}

/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/
