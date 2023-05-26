/*Alice plays the following game, loosely based on the card game "21".

Alice starts with 0 points and draws numbers while she has less than k points. During each draw, she gains an integer number of points 
randomly from the range [1, maxPts], where maxPts is an integer. Each draw is independent and the outcomes have equal probabilities.

Alice stops drawing numbers when she gets k or more points.

Return the probability that Alice has n or fewer points.

Answers within 10-5 of the actual answer are considered accepted.*/

var new21Game = function(n, k, maxPts) {
    const dp = new Array(k + 1).fill(0).map(() => new Array(n + 1).fill(0));
  dp[0][0] = 1;

  for (let i = 1; i <= k; i++) {
    for (let j = 1; j <= n; j++) {
      for (let p = 1; p <= maxPts; p++) {
        if (j - p >= 0) {
          dp[i][j] += dp[i - 1][j - p] / maxPts;
        }
      }
    }
  }
  let probability = 0;
  for (let i = 1; i <= n; i++) {
    probability += dp[k][i];
  }
  return probability;
}

console.log(new21Game(10, 1, 10))
console.log(new21Game(6, 1, 10))
console.log(new21Game(21, 17, 10)) // --> .73278 WRONG ANSWER