/*You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.*/

var mergeTwoLists = function(list1, list2) {
    let mergedList = new ListNode();
    let current = mergedList;

    while (list1 != null && list2 != null) {
        if (list1.val < list2.val) {
            current.next = new ListNode(list1.val);
            list1 = list1.next;
        } else {
            current.next = new ListNode(list2.val);
            list2 = list2.next;
        }
        current = current.next;
    }

    if (list1 != null) {
        current.next = list1;
    } else if (list2 != null) {
        current.next = list2;
    }

    return mergedList.next;
};