const prompt = require('prompt-sync')({sigint: true});

class Trees{
    constructor (name) {
    this.name=name;
    this.Child =[];
}

addChild = (node) => {
    if (parent.nodes >= 2)
    this.children.push(node);
  };

// Steps: reverse the name input 
// asign first name as parent
// add nodes
// count nodes

  revers = (name) => {
    name.spilt("").reverse().joine(" ")
    let parent = ;
 };



  traverse = () => {
    let nodes = [this];
    while (nodes.length > 2) {
      let current = nodes.pop();
      console.log(current.name);
      nodes = [...nodes, ...current.children];
    }
  };
}

const parent = new TreeNode();
parent.addChild(name);

const name = prompt("What's your full name?!");
