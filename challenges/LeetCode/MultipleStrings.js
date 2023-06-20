/*Given two non-negative integers num1 and num2 represented as strings, return the product of num1 and num2, also represented as a string.*/

var multiply = function(num1, num2) {
    const output = Number(num1) * Number(num2)
    return output.toString()
};

console.log(multiply("2", "3"))