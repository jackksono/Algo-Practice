var addTwoNumbers = function(l1, l2) {
    let carry = 0;
    let dummy = new ListNode();
    let curr = dummy;
    
    while (l1 || l2 || carry) {
      let sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
      carry = Math.floor(sum / 10);
      curr.next = new ListNode(sum % 10);
      curr = curr.next;
      l1 = l1 ? l1.next : null;
      l2 = l2 ? l2.next : null;
    }
    return dummy.next; 
};