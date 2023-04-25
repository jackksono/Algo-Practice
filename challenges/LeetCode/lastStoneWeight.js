var lastStoneWeight = function(stones) {
    while (stones.length > 1) {
        stones.sort((a, b) => a - b); // sort stones in ascending order
        const y = stones.pop(); // heaviest stone
        const x = stones.pop(); // second heaviest stone
        if (x !== y) {
            stones.push(y - x); // smash stones and add the result to the array
        }
    }
    return stones.length === 1 ? stones[0] : 0; // return last remaining stone or 0 if none left
};