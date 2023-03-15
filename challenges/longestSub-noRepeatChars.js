//Given a string s, find the length of the longest substring without repeating characters.

var lengthOfLongestSubstring = function(s) {
    if (s === null) return 1
    let string = '';
    let tempStr = '';
    for (let i = 0; i < s.length; i++) {
      	if (tempStr.length > string.length) string = tempStr
        else if (tempStr.includes(s[i])) string = tempStr
        else tempStr += s[i]
    }
    return string.length
};

console.log('abcabcabc') //3
console.log('bbbb') //1
console.log('pwwkew') //3