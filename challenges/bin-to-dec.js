/* 

Given a string that represents a Binary Number, write a function that converts this string into a decimal number. DO NOT use the native parseInt() method. 

For example: 

binToDec('0')   -> 0   == 0 * 2^0
binToDec('11')  -> 3   == 1 * 2^0 + 1 * 2 ^ 1
binToDec('100') -> 4
binToDec('101') -> 5
binToDec('0101') -> 5

For more information on how to read binary, check out this article: 
https://m.wikihow.com/Read-Binary

*/

//multiply each binary digit by 2 to the poweer of its place number
function binToDec(binString,  start = binString.length){
    let array = Array.from(binString);
    //console.log(array)
    let total = 0;
    let multiplier = 1;
    for (let i = 0; i < array.length; i++) {
        let currentNum = Number(array[array.length - i - 1]);
        if (currentNum === 1) {
            total += multiplier
        }
        multiplier *= 2
    }
    return total
}

let test = +`2`
console.log(+test)
console.log(typeof test)


//     let multiplier1 = (1 * 2) ^ start;
//     let multiplier2 = (0 * 2) ^ start;
//  if (array[start] === undefined) {return console.log(total)}
//  else if (array[0] === '1') {total += multiplier1 }
//  else if (array[0] === `0`) {total += multiplier2}
//  return binToDec(binString.slice(1), total, start)



binToDec('0')
binToDec('11')
binToDec('100')
binToDec('101')
binToDec('0101')

// let string = "hello"
// console.log(string[0])
// console.log(typeof string[0])
module.exports = {binToDec};