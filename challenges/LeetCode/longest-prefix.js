var longestCommonPrefix = function(strs) {
    if (strs.length === 0) {
        return "";
      }
    
      let prefix = "";
      for (let i = 0; i < strs[0].length; i++) {
        const char = strs[0][i];
       // console.log(char)
        for (let j = 1; j < strs.length; j++) {
            //console.log(strs[j][i])
          if (strs[j][i] !== char) {
            return prefix;
          }
        }
        prefix += char;
    }
      return prefix;
}

console.log(longestCommonPrefix(['flower', 'flow', 'flight']))
console.log(longestCommonPrefix([""]))
console.log(longestCommonPrefix["a"])