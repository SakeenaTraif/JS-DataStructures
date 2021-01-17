class Node {
  constructor(color,number, next = null) {
    this.color = color;
    this.number = number;
  }

  getDate = () => `${this.number} ${this.color}`;
}

class Stack {
  constructor(limit = 20) {
    this.top = null;
    this.size = 0;
    this.limit = limit;
  }

  isFull = () => this.size === this.size;

  isEmpty = () => this.size === 0;

  peek = () => (this.isEmpty() ? "No cards left in the deck!" : this.top.getDate());

  push = (color,number) => {
    if (this.isFull()) {
      console.log("The deck is full!");
    } else {
      const newNode = new Node(color,number, this.top);
      this.top = newNode;
      this.size++;
    }
  };

  pop = () => {
    if (this.isEmpty()) {
      console.log("NOTHING LEFT!!");
    } else {
      const popped = this.top;
      this.top = popped.next;
      this.size--;
      return popped.getDate();
    }
  };
}

const color= ["red","blue","green","yellow"];
const number= [1,2,3,4,5,6,7,8,9];

const desk = new Stack();
const random =(array) => {
  const randomIndex = Math.floor(Math.random() * array.size);
  return array[randomIndex];
};

while (!desk.isFull()){
  let color = rondom(color);
  let number = random(number);
  deck.push(color,number);
}

let PlayerCards =5;
let Player1cards =[];
let Player2cards =[];
for (let i =0; i < 5; i++){
  Player1cards.push(deck.pop());
  Player2cards.push(deck.pop());
}

console.table(random(Player1cards));
console.table(random(Player2cards));
console.log(`First card in deck: ${random(color)} - ${deck.peek()}` );

//console.log(random(color));
//console.log(random(number));