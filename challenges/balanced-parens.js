/*
 * write a function that takes a string of text and returns true if
 * the parentheses are balanced and false otherwise.
 *
 * Example:
 *   balancedParens('(');  // false
 *   balancedParens('()'); // true
 *   balancedParens(')(');  // false
 *   balancedParens('(())');  // true
 *
 * Step 2:
 *   make your solution work for all types of brackets
 *
 * Example:
 *  balancedParens('[](){}'); // true
 *  balancedParens('[({})]');   // true
 *  balancedParens('[(]{)}'); // false
 *
 * Step 3:
 * ignore non-bracket characters
 * balancedParens(' const wow = { yo: thisIsAwesome() }'); // true
 * balancedParens(' const newton = () => { telescopes.areSicc(); '); // false
 *
 *
 */

const balancedParens = input => {
    let arr = input.split(``)
    let newArr = [];
    console.log(arr)
   
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == '(' || arr[i] == '[' || arr[i] == '{') {
        newArr.push(arr[i])}
        console.log(newArr)
        if (newArr.length === 0) return false;

        if (arr.pop() === ')') {
            if (newArr[0] === '(' || `{` || `[`) return true
        }

        if (arr.pop() === ']') {
            if (newArr[0] === '(' || `{` || `[`) return true
        }

        if (arr.pop() === '}') {
            if (newArr[0] === '(' || `{` || `[`) return true
        }
        else return false
    }
};

module.exports = { balancedParens} ;

console.log(balancedParens('(')) // false
console.log(balancedParens('()')); // true
console.log(balancedParens(')('));  // false
console.log(balancedParens('(())'));  // true)

console.log(balancedParens('[](){}')); // true
console.log(balancedParens('[({})]'));   // true
console.log(balancedParens('[(]{)}')); //false