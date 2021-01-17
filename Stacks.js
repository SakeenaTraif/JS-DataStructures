class Node {
  constructor(color,number, next = null) {
    this.color = color;
    this.number = number;
    this.next= next;
  }

  getDate = () => `${this.number} - ${this.color}`;
}

class Stack {
  constructor(limit = 20) {
    this.top = null;
    this.length = 0;
    this.limit = limit;
  }

  isFull = () => this.length === this.limit;

  isEmpty = () => this.length === 0;

  peek = () => this.isEmpty() ? "No cards left in the deck!" : this.top.getDate();

  push = (color,number) => {
    if (this.isFull()) {
      console.log("The deck is full!");
    } else {
      const newNode = new Node(color,number, this.top);
      this.top = newNode;
      this.length++;
    }
  };

  pop = () => {
    if (this.isEmpty()) {
      console.log("NOTHING LEFT!!");
    } else {
      const popped = this.top;
      this.top = popped.next;
      this.length--;
      return popped.getDate();
    }
  };
}

const colors = ["red","blue","green","yellow"];
const numbers = ["1","2","3","4","5","6","7","8","9"];

const deck = new Stack(52);
const random =(array) => {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
};

while (!deck.isFull()){
  let color = random(colors);
  let number = random(numbers);
  deck.push(color,number);
}

let PlayerCards =5;
let Player1cards =[];
let Player2cards =[];
for (let i =0; i < 5; i++){
  Player1cards.push(deck.pop());
  Player2cards.push(deck.pop());
}

console.log("First Player Cards:");
console.table(Player1cards);
console.log("Second Player Cards:");
console.table(Player2cards);
console.log(`First card in deck:`,deck.peek() );

//console.log(random(color));
//console.log(random(number));