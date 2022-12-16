/*
You have an unsorted array of n + 1 numbers, with the numbers from 1 to n.
One number is duplicated. Find it.
ex: [1,5,4,3,6,2,4,7] should return 4
*/

const duplicateNumber = array => {
let maxCount = 0;
let maxElement;
 for (let i = 0; i < array.length; i++) {
    let count = 0;
    for (let j = 0; j < array.length; j++) {
        if (array[i] === array[j]) count++;
    }
    if (count > maxCount) {
        maxCount = count;
        maxElement = array[i]
    }
 }
 return maxElement
};

console.log(duplicateNumber([1,5,4,3,6,2,4,7]))

/* EXTENSION:
You have an unsorted array of n + 1 numbers, with the range of k to k + n - 1, with an extra number that is a duplicate.
(k is not necessarily 1) Find the duplicate. Do this in O(n) time and O(1) space complexity.
ex: [3, 4, 7, 6, 8, 5, 6] should return 6
*/

const duplicateNumberAdvanced = array => {
 let index = 0;
 let count = 1;
 for (let i = 0; i < array.length; i++) {
    if (array[i] === array[index]) {
        count++;
    }
    else {
        count--;
        //index++
 }
 if (count === 0){
    index = i;
    count = 1;
 }
}
return array[index]
}

const duplicateNumberAdvanced2 = (array) => {

const cache = new Set();
for (let i = 0; i < array.length; i++) {
    const numberElement = array[i];

    if (cache.has(numberElement)) return array[i];

    cache.add(numberElement);
}
return null;
}

console.log(duplicateNumberAdvanced([3, 4, 7, 6, 8, 5, 6]))
module.exports = { duplicateNumber, duplicateNumberAdvanced };
