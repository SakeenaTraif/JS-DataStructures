const numbers = [
    [1, 2, 3, 4],
    [3, 6, [5, 6], 8, 2,[2, 4], 9],
    [4, 2, [6, 7, [2, 6, 1]]]
];

const add = (number) => {
 let sum = 0;
 number.forEach((element) => {
   if (typeof element === 'number' ) sum+= element;
   else sum+= add(element);
});
return sum;
};
console.log( `Sum = ${add(numbers)}`);


/*sumDeep = ([ item = numbers, ...rest ] = []) => {
  item === numbers ? 0 : Array.isArray (item) ? sumDeep (item) + sumDeep (rest) : item + sumDeep (rest);
};*/
//console.log(`sum = ${sumDeep()}`);