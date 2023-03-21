var isPalindrome = function(x) {
    for (let i = 0; i < x.length; i++) {
        console.log(x[i])
        if (x[i] === x[x - 1 - i]) return true
        else return false
    }
    
};

console.log(isPalindrome(121))