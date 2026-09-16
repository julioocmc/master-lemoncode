// Head
const head = ([first]) => first;
console.log('head:', head(['Banana', 'Manzana', 'Naranja'])); // "Banana"

// Tail
const tail = ([, ...rest]) => rest;
console.log('tail:', tail([1, 2, 3, 4])); // [2, 3, 4]

// Init
const init = (array) => array.slice(0, -1);
console.log('init:', init(['a', 'b', 'c', 'd'])); // ["a", "b", "c"]

// Last
const last = (array) => array[array.length - 1];
console.log('last:', last([10, 20, 30])); // 30
