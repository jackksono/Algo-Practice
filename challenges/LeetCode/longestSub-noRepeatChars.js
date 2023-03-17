//Given a string s, find the length of the longest substring without repeating characters.

// var lengthOfLongestSubstring = function(s) {
//     if (s.charCodeAt(0) <= 40) return 1
//     let string = '';
//     let tempStr = '';
//     for (let i = 0; i < s.length; i++) {
//       	// if (tempStr.length > string.length) string = tempStr
//         if (tempStr.includes(s[i]) && tempStr.length > string.length) {
//             string = tempStr;
            
//             tempStr = ''
//         } 
//         else if (tempStr.includes(s[i])) return tempStr.length
//         else tempStr += s[i]
//         // console.log(string)
//         // console.log(tempStr)
//     }
//     //if (string.length > tempStr.length) return string.length
//     console.log(string)
//     console.log(tempStr)
//     if (string.length > tempStr.length) return string.length
//     else return tempStr.length
// };

function lengthOfLongestSubstring(s) {
    let temp = "";
    let maxLength = 0;
    
    for (let i = 0; i < s.length; i++) {
      let char = s[i];
      let index = temp.indexOf(char);
      if (index !== -1) {
        temp = temp.slice(index + 1);
      }
      temp += char;
      console.log(temp)
      console.log(maxLength)
      maxLength = Math.max(maxLength, temp.length);
    }
    
    return maxLength;
  }

console.log(lengthOfLongestSubstring('abcabc')) //3
console.log(lengthOfLongestSubstring('bbbb')) //1
console.log(lengthOfLongestSubstring('pwwkew')) //3
console.log(lengthOfLongestSubstring('au'))
console.log(lengthOfLongestSubstring(' '))