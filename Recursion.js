const numbers = [
    [1, 2, 3, 4],
    [3, 6, [5, 6], 8, 2,[2, 4], 9],
    [4, 2, [6, 7, [2, 6, 1]]]
]

add = (number) => {
 sum = 0;
 numbers.forEach((number) => sum++);
 return sum;
};

/*sumDeep = ([ item = numbers, ...rest ] = []) => {
  item === numbers ? 0 : Array.isArray (item) ? sumDeep (item) + sumDeep (rest) : item + sumDeep (rest);
};*/

console.log( `Sum = ${add()}`);
//console.log(`sum = ${sumDeep()}`);