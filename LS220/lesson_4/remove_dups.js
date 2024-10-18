// Write a function `removeDuplicates` that removes all
// nodes with duplicate values from a sorted linked list,
// leaving only distinct values from the original list.
// The function should take the head of the sorted linked
// list as input and return the modified list. The list
// should remain sorted after removing duplicates. If the
// list becomes empty after removing all duplicates,
// return null.

// Example:
// Input: head = [1, 2, 2, 3, 3, 4, 5, 5]
// Output: [1, 4]
// Explanation: The values 2, 3, and 5 appear multiple times, so
//              they are removed. Only 1 and 4 remain as unique
//              values.

class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

function printLinkedList(head) {
  let currentNode = head;
  let listStr = '';
  while (currentNode !== null) {
    listStr += currentNode.val + ' -> ';
    currentNode = currentNode.next;
  }
  listStr += 'null';
  console.log(listStr);
}

function createLinkedList(arr) {
  let head = new ListNode(0);
  let current = head;
  arr.forEach(val => {
    current.next = new ListNode(val);
    current = current.next;
  });
  return head.next;
}

function removeDuplicates(head) {
  let falseHead = new ListNode();
  falseHead.next = head;
  let prev = falseHead;
  let curr = head;
  let isDup = false;

  while (curr.next || isDup) {
    if (curr.next && curr.next.val === curr.val) {
      curr.next = curr.next.next;
      isDup = true;
    } else if (isDup) {
      prev.next = prev.next.next;
      curr = prev;
      isDup = false;
    } else {
      prev = curr;
      curr = curr.next
    }
  }
  return falseHead.next;

}

/*
Steps: 
[1, 1, 1, 2, 3]
- False head starts and points to the real head.
- Prev = falseHead.


- Start by looking at the value of curr and storing it as the "cuurValue".
  - If the next value is the same, point to curr.next.next.
  - Removed element bool = true;
  - Continue
- If removedElement is true
  - prev.next = prev.next.next
  - curr = prev
- Else
  - prev = curr
  - curr = curr.next
*/

let list1 = createLinkedList([1, 2, 2, 3, 3, 4, 5, 5]);
let list2 = createLinkedList([1, 1, 1, 2, 3]);
let list3 = createLinkedList([1, 2, 3, 4, 5]);
let list4 = createLinkedList([1, 1, 1, 1, 1]);
let list5 = createLinkedList([1, 2, 2, 3, 3, 3, 4, 4, 5, 5, 5]);

printLinkedList(removeDuplicates(list1)); // Expected: 1 -> 4 -> null
printLinkedList(removeDuplicates(list2)); // Expected: 2 -> 3 -> null
printLinkedList(removeDuplicates(list3)); // Expected: 1 -> 2 -> 3 -> 4 -> 5 -> null
printLinkedList(removeDuplicates(list4)); // Expected: null
printLinkedList(removeDuplicates(list5)); // Expected: 1 -> null