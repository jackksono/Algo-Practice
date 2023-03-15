//Given a string s, find the length of the longest substring without repeating characters.

var lengthOfLongestSubstring = function(s) {
    if (s.charCodeAt(0) <= 32) return 1
    let string = '';
    let tempStr = '';
    for (let i = 0; i < s.length; i++) {
      	if (tempStr.length > string.length) string = tempStr
        else if (tempStr.includes(s[i])) string = tempStr
        else tempStr += s[i]
        // console.log(string)
        // console.log(tempStr)
    }
    //if (string.length > tempStr.length) return string.length
    return string.length
};

console.log(lengthOfLongestSubstring('abcabcabc')) //3
console.log(lengthOfLongestSubstring('bbbb')) //1
console.log(lengthOfLongestSubstring('pwwkew')) //3
console.log(lengthOfLongestSubstring('au'))