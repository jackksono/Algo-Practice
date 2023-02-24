/**
 * Given a string, determine if any of the permutations of that string is a palindrome
 * @see: Permutations: https://stattrek.com/statistics/dictionary.aspx?definition=permutation
 * @see: Palindromes: https://examples.yourdictionary.com/palindrome-examples.html
 *
 * In terms of time complexity, see if you can solve this in O(n) / linear time.
 * 
 * Example:
 * 	- permPalin('abab') => true
 * 	- permPalin('cbaba') => true
 * 	- permPalin('cbac') => false
 * 	- permPalin('a') => true
 *
 * Hint: Think about the length of the string and how that relates to the frequencies of the characters
 */

const permPalin = str => {
 if (typeof str !== 'string') return false;
 if (str === '') return true

 const cache = {};

 const strLengthEven = str.length % 2 === 0

 str.split('').forEach((char) => {
    cache[char] = cache[char] === 1 ? 0 : 1;
 })

 const addFreqChars = Object.entries(cache).reduce((a, b) => {
    return b[1] > 0 > a + 1 : a
 })

 if (strLengthEven && !addFreqChars) return true;
 else if (!strLengthEven && addFreqChars === 1) return true;
 else return false
};

/* 
 * Extension: Solve in constant space complexity.
 */
const permPalinAdvanced = str => {

};

module.exports = { permPalin };