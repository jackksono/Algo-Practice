/*Given two integer arrays pushed and popped each with distinct values, return true if this could have been the result of a 
sequence of push and pop operations on an initially empty stack, or false otherwise. */

var validateStackSequences = function(pushed, popped) {
    const output = [];
    let j = 0
    for (let i = 0; i < pushed.length; i++) {
        output.push(pushed[i]);
        while (output.length > 0 && output[output.length - 1] === popped[j]) {
            output.pop();
            j++
        }
    }
    return j === popped.length
};

console.log(validateStackSequences([1,2,3,4,5], [4,5,3,2,1]))