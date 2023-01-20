/*
Write a function to delete the first instance of a node in a singly linked list.
The function should return the deleted node, or undefined if the value was not found.

Example: 
Given a linked list:
 
('a' -> 'b' -> 'c' -> 'b' -> 'd')
 
And given a value, 'b', the linked list after calling your function should look like:

('a' -> 'c' -> 'b' -> 'd')

And the evaluated result would be the removed node with the value of 'b'.

How might you remove a linked list value without adding extra properties to the constructor functions?

*/

// NOTE: needs to be es5 function definition
function LinkedList() {
  this.head = null;
}

// NOTE: needs to be es5 function definition
function Node(val) {
  this.val = val;
  this.next = null;
}

const linkedListRemove = (ll, val) => {
  let currNode = ll.head;
  //edge case of head reasssignment
  if (currNode.val === val) {
    ll.head = ll.head.next;
    currNode.next = null;
    return currNode
  }
  //everything else will be handlded here
  while (currNode.next) {
    //logic to find the next node with value
    if (currNode.next.val === val) {
      let removedNode = currNode.next;
      currNode.next = currNode.next.next;
      return removedNode
    }
    //moving the current node forward
    currNode = currNode.next
  }
};


/*
Extension: 
* Write a function to delete the first instance of a node in a singly linked list with a space complexity of O(1). 
* Write a function to delete the all instances of a node in a singly linked list.

Example: 
Given a linked list:
 
('a' -> 'b' -> 'd' -> 'c' -> 'd')
 
 And given a value, 'd', the evaluated result of calling your function should be:

 ('a' -> 'b' -> 'c')

*/

const linkedListRemoveMultiple = (ll, val) => {
 while (ll.head.val === val) {
  ll.head = ll.head.next;
 }
 
}

module.exports = { LinkedList, Node, linkedListRemove, linkedListRemoveMultiple };
