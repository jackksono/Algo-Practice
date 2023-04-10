/*Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.*/

var isValid = function(s) {
  const arr = s.split('')
  console.log(arr)
  let newArr = [];
  console.log(newArr)

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '(' || arr[i] === '{' || arr[i] === '[') {
        newArr.push(arr[i])}
        console.log(newArr)
        if (newArr.length === 0) return false

        if (arr.pop() === ')') {
            if (newArr[0] === '(' || '{' || '[') return true
        }

        if (arr.pop() === ']') {
            if (newArr[0] === '(' || '{' || '[') return true
        }

        if (arr.pop() === '}') {
            if (newArr[0] === '(' || '{' || '[') return true
        }
    else return false
  }
}

//console.log(isValid('()'))
console.log(isValid('()[]{}'))