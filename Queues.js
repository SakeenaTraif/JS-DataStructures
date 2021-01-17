class Node {
    constructor(groupSize , next = null) {
      this.groupSize = groupSize;
      this.next = next;
    }
  }
  
  class Queue {
    constructor() {
      this.front = null;
      this.back = null;
      this.groupSize = groupSize;
      this.limit = this.limit;
      this.waitingtime = 0;
    }
  
    isFull = () => this.groupSize === this.limit;
  
    isEmpty = () => this.length === 0;
  
    peek = () => this.waitingtime;

    addNode =(groupSize) => {
        const newNode = new Node(groupSize);
        if (this.isEmpty())  this.front =newNode;
        else this.back.next= newNode;
        
        this.back = newNode;
    };

    enqueue = (groupSize) => {
      if (this.isFull()) {
        console.log("Queue Overflow");
      } else {
        const newNode = new Node(groupSize);
        if (this.isEmpty()) {
          this.front = newNode;
          this.back = newNode;
        } else {
          this.back.next = newNode;
          this.back = newNode;
        }
        this.length++;
      }
    };
  
    dequeue = () => {
      if (this.isEmpty()) {
        console.log("Queue is emty,no one to ride!");
      } else {
        const removed = this.front;
        if (this.length === 1) {
          this.front = null;
          this.back = null;
        } else {
          this.front = removed.next;
        }
        this.length--;
         removed.waitingtime-= removed.groupSize *30 ;
        return removed.groupSize;
      }
    };
  }

  const timeSchedualed = Date.now();
  while (Data.now() === waitingtime){
      this.back.next= newNode;
  }
  
  const Park = new Queue();
  Park.enqueue(["Sakeena","Sara","Reem"]);
  Park.enqueue(["Ali"]);
  Park.enqueue(["Laila"]);
  Park.enqueue(["Ayman"]);
  Park.enqueue(["Mahmood"]);
  
  console.log(Park.peek());
  console.log(Park.dequeue());
  console.log(Park.peek());