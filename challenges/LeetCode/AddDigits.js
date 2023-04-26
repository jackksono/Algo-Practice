/* Given an integer num, repeatedly add all its digits until the result has only one digit, and return it.*/

var addDigits = function(num) {
    
    const stringToNum = num => Number(num)
    const values = Array.from(String(num), stringToNum)

    let sum = 0;

    for (let i = 0; i < values.length; i++) {
        sum+=values[i]
    }
    
    while (sum > 9) {
        const newValues = Array.from(String(sum), stringToNum);
        sum = 0;
        for (let i = 0; i < newValues.length; i++) {
            sum += newValues[i]
        }
    }
    return sum
};

console.log(addDigits(38))