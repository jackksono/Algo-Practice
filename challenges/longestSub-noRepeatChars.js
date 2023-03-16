//Given a string s, find the length of the longest substring without repeating characters.

var lengthOfLongestSubstring = function(s) {
    if (s.charCodeAt(0) <= 32) return 1
    let string = '';
    let tempStr = '';
    for (let i = 0; i < s.length; i++) {
      	// if (tempStr.length > string.length) string = tempStr
        if (tempStr.includes(s[i]) && tempStr.length > string.length) {
            string = tempStr;
            tempStr = ''
        } 
        else if (tempStr.includes(s[i])) return tempStr.length
        else tempStr += s[i]
        // console.log(string)
        // console.log(tempStr)
    }
    //if (string.length > tempStr.length) return string.length
    if (string.length > tempStr.length) return string.length
    else return tempStr.length
};

console.log(lengthOfLongestSubstring('abcabc')) //3
console.log(lengthOfLongestSubstring('bbbb')) //1
console.log(lengthOfLongestSubstring('pwwkew')) //3
console.log(lengthOfLongestSubstring('au'))