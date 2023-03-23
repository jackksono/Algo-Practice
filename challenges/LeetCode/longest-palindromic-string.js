//Given a string s, return the longest palindromic substring in s.

var longestPalindrome = function(s) {
   let longest = "";
   
   //helper function to check if a substring is palindromic
   function isPalindrome(str) {
    return str === str.split('').reverse().join('');
   }

   //iterate over all possible substrings of s
   for (let i = 0; i < s.length; i++) {
    //console.log(s[i])
    for (let j = 1; j <= s.length; j++) {
        //console.log(s[j])
        let substring = s.slice(i, j);
        //console.log(substring)
        if (isPalindrome(substring) && substring.length > longest.length) {
            //console.log(substring)
            longest = substring
        }
    }
   }
   return longest
};

console.log(longestPalindrome('babad'))
//console.log(longestPalindrome('cbbd'))