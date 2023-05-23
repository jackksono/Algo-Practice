/*In a linked list of size n, where n is even, the ith node (0-indexed) of the linked list is known as the twin of the (n-1-i)th node, if 
0 <= i <= (n / 2) - 1.

For example, if n = 4, then node 0 is the twin of node 3, and node 1 is the twin of node 2. These are the only nodes with twins for n = 4.
The twin sum is defined as the sum of a node and its twin.

Given the head of a linked list with even length, return the maximum twin sum of the linked list.*/

var pairSum = function(head) {
    let maxSum = 0;
  let curr = head;

  // Traverse the linked list
  while (curr !== null) {
    // Find the twin node
    let twinIndex = getSize(head) - 1 - getIndex(head, curr);
    let twinNode = getNode(head, twinIndex);

    // Calculate the twin sum and update maxSum if necessary
    let twinSum = curr.val + twinNode.val;
    maxSum = Math.max(maxSum, twinSum);

    // Move to the next pair of nodes
    curr = curr.next.next;
  }

  return maxSum;
}

// Helper function to get the size of the linked list
function getSize(head) {
  let size = 0;
  let curr = head;
  while (curr !== null) {
    size++;
    curr = curr.next;
  }
  return size;
}

// Helper function to get the node at a given index
function getNode(head, index) {
  let curr = head;
  for (let i = 0; i < index; i++) {
    curr = curr.next;
  }
  return curr;
}

// Helper function to get the index of a given node
function getIndex(head, node) {
  let curr = head;
  let index = 0;
  while (curr !== node) {
    curr = curr.next;
    index++;
  }
  return index;
};

console.log(getIndex(6,[[0,1],[0,2],[2,5],[3,4],[4,2]])) //answer