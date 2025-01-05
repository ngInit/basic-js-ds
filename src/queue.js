const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
      this.length = 0;
      this.head = 0;
      this.tail = 0;
  }

  getUnderlyingList() {
    return this.head;
  }

  enqueue(value) {
    const queueList = new ListNode(value);
    if (this.head) {
        this.tail.next = queueList;
    } else {
        this.head = queueList;
    }
    this.tail = queueList;
    this.length++;
  }

  dequeue() {
    const currentElem = this.head;
    this.head = this.head.next;
    this.length--;
    return currentElem.value;
  }
}

module.exports = {
  Queue
};
