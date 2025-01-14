class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.back = null;
  }
  peek() {
    // Returns the value of the top most element without removing it.
    if (this.front) return this.front.val;
    // If the queue is empty, it returns `null`.
    return null;
  }

  enqueue(value) {
    // Adds an item to the queue
    let newEntry = new ListNode(value);
    if (!this.back) {
      this.front = newEntry;
    } else {
      this.back.next = newEntry;
    }
    this.back = newEntry;
  }

  dequeue() {
    // Removes the item from the queue and returns it
    let returnable = null;
    if (this.front) {
      returnable = this.front.val;
      this.front = this.front.next;
    }
    if (!this.front) {
      this.back = null;
    }
    return returnable;


    // If the queue is empty, it returns `null`.
  }
}

const myQueue = new Queue();
myQueue.enqueue(1);
console.log('Front element:', myQueue.peek());  // logs 'Front element: 1'
myQueue.enqueue(2);
console.log('Front element:', myQueue.peek());  // logs 'Front element: 1'
myQueue.enqueue(3);
console.log('Front element:', myQueue.peek());  // logs 'Front element: 1'
myQueue.dequeue();
console.log('Front element after dequeue:', myQueue.peek());  // logs 'Front element after dequeue: 2'
myQueue.dequeue();
console.log('Front element after dequeue:', myQueue.peek());  // logs 'Front element after dequeue: 3'
myQueue.dequeue();
console.log('Peek on empty queue:', myQueue.peek());  // logs 'Peek on empty queue: null'
console.log('`back` on empty queue:', myQueue.back);  // logs '`back` on empty queue: null'