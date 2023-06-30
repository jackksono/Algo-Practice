/* Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.*/

var letterCombinations = function(digits) {
    if (digits.length === 0) return [];
    
    const digitMap = {
        '2': 'abc',
        '3': 'def',
        '4': 'ghi',
        '5': 'jkl',
        '6': 'mno',
        '7': 'pqrs',
        '8': 'tuv',
        '9': 'wxyz',
    };
    
    const combinations = [];
    
    const backtrack = (currentCombination, nextDigits) => {
        if (nextDigits.length === 0) {
        combinations.push(currentCombination);
        return;
        }
    
        const currentDigit = nextDigits[0];
        
        const letters = digitMap[currentDigit];
    
        for (let i = 0; i < letters.length; i++) {
        backtrack(currentCombination + letters[i], nextDigits.slice(1));
        }
    };
    
    backtrack('', digits);
    
    return combinations;
};

console.log(letterCombinations("23"))