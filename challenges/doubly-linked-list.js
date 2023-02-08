/*
  * Below, you are provided the construtors for a doubly linked list as well as a constructor for the nodes it's composed of
  * Construct a doubly linked list & modify it's prototype to contain methods named 'add' and 'remove'
  * The 'add' method should add an additional node to the end of the doubly linked list
  * The 'remove' method should remove the first instance of a node containing a specific value from the doubly linked list
  
  Example doubly linked list
  null <-> 4 <-> 9 <-> 2 <-> 1 <-> null

  Example after using 'add' method to add 6
  null <-> 4 <-> 9 <-> 2 <-> 1 <-> 6 <-> null

  Example after using 'remove' method to remove 2
  null <-> 4 <-> 9 <-> 1 <-> 6 <-> null

  NOTE: must use non-arrow functions for object constructors and prototype methods
  @see: https://dmitripavlutin.com/when-not-to-use-arrow-functions-in-javascript/
*/

function DoublyLinkedList() {
  this.head = null;
  this.tail = null;
}

function ListNode(val) {
  this.val = val;
  this.next = null;
  this.prev = null;
}

/*
This method should add a node to the end of the doubly linked list
 */
DoublyLinkedList.prototype.add = function (val) {

  const node = new Node(val);

  if (!this.head) {
    this.head = node;
    this.tail = node;
  }
  else {
    node.prev = this.tail
    this.tail.next = node;
    this.tail = node;
  }
};

/*
This method should remove the first instance of a node with the inputted value from the doubly linked list
 */
DoublyLinkedList.prototype.remove = function (val) {
  if (!this.head && this.tail) return;
  let current = this.head
  //remove the head
  if (current.val === val) {
    //if only a single node
    if (current === this.tail) {
      this.head = null;
      this.tail = null;
      return;
    }
    //if multiple nodes
    this.head = this.head.next;
    this.head.prev = null;
    return;
  }
  //remove from middle
  let previous = current;
  current = current.next
  while (current && current !== this.tail) {
    if (current.val === val) {
      previous.next = current.next;
      current.next.prev = previous;
      return;
    } else {
      previous = previous.next;
      current = current.next;
    }
  }
};

module.exports = { DoublyLinkedList };