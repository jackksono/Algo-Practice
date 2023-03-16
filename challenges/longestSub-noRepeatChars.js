//Given a string s, find the length of the longest substring without repeating characters.

var lengthOfLongestSubstring = function(s) {
    if (s.charCodeAt(0) <= 32) return 1
    let string = '';
    for (let i = 0; i < s.length; i++) {
      	// if (tempStr.length > string.length) string = tempStr
        if (string.includes(s[i])) return string.length
        else string += s[i]
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