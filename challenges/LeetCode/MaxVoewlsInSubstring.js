/*Given a string s and an integer k, return the maximum number of vowel letters in any substring of s with length k.

Vowel letters in English are 'a', 'e', 'i', 'o', and 'u'.*/


var maxVowels = function(s, k) {

const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
  let maxCount = 0;
  let count = 0;

  // Count vowels in first window of length k
  for (let i = 0; i < k; i++) {
    if (vowels.has(s[i])) {
      count++;
    }
  }
  maxCount = count;

  // Slide window and update count of vowels
  for (let i = k; i < s.length; i++) {
    if (vowels.has(s[i - k])) {
      count--;
    }
    if (vowels.has(s[i])) {
      count++;
    }
    maxCount = Math.max(maxCount, count);
  }

  return maxCount;
}










