const { NotImplementedError } = require('../extensions/index.js');

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
    this.tail = null; // конец очереди 
    this.head = null  // начало очереди 
    
  }
  getUnderlyingList() {
 return this.head
  }

  enqueue( value ) {
    let obj = new ListNode(value)
     if(this.head !== null){
       this.tail.next = obj
       this.tail = obj
     }else{
       this.tail = obj
       this.head = obj
     }
   }
   
     
   
     dequeue() {
    let headObj = this.head
    this.head = this.head.next
    return headObj.value
   }
}

module.exports = {
  Queue
};
