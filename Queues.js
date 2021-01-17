class Node {
    constructor(groupSize , next = null) {
      this.groupSize = groupSize;
      this.next = next;
    }
  }
  
  class Queue {
    constructor(limit = 5) {
      this.front = null;
      this.back = null;
      this.length= 0;
      this.limit = limit;
      this.waitingtime = 0;
    }
  
    isFull = () => this.groupSize === this.limit;
  
    isEmpty = () => this.length === 0;
  
    peek = () => this.isEmpty() ? `You can ride, no time to wait! ` : this.waitingtime;

    addNode =(groupSize) => {
        const newNode = new Node(groupSize);
        if (this.isEmpty())  this.front =newNode;
        else this.back.next= newNode;
        
        this.back = newNode;
        this.length++;
        this.waitingtime += groupSize * 0.5;
    };

    enqueue = (groupSize) => {
      if (this.isFull()) {
        console.log(`The line is full, you can come after ${this.waitingtime}`);
      } else {
          let peopleNum = groupSize;
          while (peopleNum > 12) {
              this.addNode(12)
              peopleNum -= 12;
          }
          this.addNode(peopleNum);
      }
    };
  
    dequeue = () => {
      if (this.isEmpty()) {
        console.log("Queue is empty,no one to ride!");
      } else {
        const removed = this.front;
        if (this.length === 1) {
          this.front = null;
          this.back = null;
        } else {
          this.front = removed.next;
        }
        this.length--;
        this.waitingtime -= removed.groupSize *0.5 ; // I can multi by 30 or 0.5
        return removed.groupSize;
      }
    };
  }

 
  
  const Park = new Queue(5);
  console.log(Park.peek());
  Park.enqueue(6);
  console.log(Park.peek());
  Park.enqueue(12);
  console.log(Park.peek());
  Park.enqueue(18);
  console.log(Park.peek());
  Park.enqueue(40);
  console.log(Park.peek());
  
  console.log(Park.dequeue());
  console.log(Park.dequeue());
  console.log("This many in queue: ", Park.waitingtime *2);
  console.log(Park.peek());

  // check the Back node
  console.log("Back node: ", Park.back.groupSize);