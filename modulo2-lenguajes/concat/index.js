// concat para 2 arrays
const concat = (a, b) => [...a, ...b];
console.log('concat (2 arrays):', concat([1, 2], [3, 4])); // [1, 2, 3, 4]

// Opcional: Múltiples arrays
const concatMultiple = (...arrays) =>
  arrays.reduce((acc, curr) => [...acc, ...curr], []);
console.log('concatMultiple:', concatMultiple([1], [2, 3], [4, 5, 6])); // [1, 2, 3, 4, 5, 6]
