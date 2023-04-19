/*Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.*/

var generateParenthesis = function(n) {
    const result = [];

  function helper(currentString, open, close) {
    if (currentString.length === n * 2) {
      result.push(currentString);
      return;
    }

    if (open < n) {
      helper(currentString + "(", open + 1, close);
    }

    if (close < open) {
      helper(currentString + ")", open, close + 1);
    }
  }

  helper("", 0, 0);

  return result;
};