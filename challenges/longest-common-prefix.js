/* Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "". (Note: All given inputs are in lowercase letters a-z.)

ex: longestCommonPrefix(["flower","flow","flight"]) --> "fl"

longestCommonPrefix(["dog","racecar","car"]) --> "" (There is no common prefix among the input strings)

*/

const longestCommonPrefix = (strs) => {
    if (strs.length === 0) return '';
    if (strs.length === 1) return strs[0];
  for (let i = 0; i < strs[0].length; i++) {
    for (let currentString of strs) {
        if (currentString[i] !== strs[0][i]) {
            return currentString.slice(0, i)
        }
    }
  }
 return strs[0]
};

console.log(longestCommonPrefix(["flower","flow","flight"]));
console.log(longestCommonPrefix(["testing","test","tester"]));

module.exports = { longestCommonPrefix };
