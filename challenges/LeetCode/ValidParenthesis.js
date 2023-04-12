/*Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.*/

var isValid = function(s) {
    const stack = [];
    
    const matching = {
      ')': '(',
      '}': '{',
      ']': '[',
    };
    for (let i = 0; i < s.length; i++) {
      const char = s[i];
      //console.log(matching[char])
      if (matching[char]) {
        //console.log(stack)
        if (stack.length === 0 || stack.pop() !== matching[char]) {
          return false;
        }
      } else {
        stack.push(char);
        //console.log(stack)
      }
    }
    return stack.length === 0;
  }

//console.log(isValid('()'))
console.log(isValid('()[]{}'))