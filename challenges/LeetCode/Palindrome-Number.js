var isPalindrome = function(x) {
    //convert number to string
    const string = x.toString()
    //reverse the number by splitting it into an array of characters, reversing the order and then joining it back together
    const reversedStr = string.split('').reverse('').join('')
    return string === reversedStr
};

console.log(isPalindrome(121))
console.log(isPalindrome(1331))