// clone merge

function clone(source) {
  return { ...source };
}

const original = { name: 'Julio', role: 'Developer' };
const copy = clone(original);
console.log('clone (nuevo objeto):', copy);
console.log('clone (¿misma referencia?):', original === copy); // falso

// Merge
function merge(source, target) {
  return { ...target, ...source };
}

const a = { name: 'Maria', surname: 'Ibañez', country: 'SPA' };
const b = { name: 'Luisa', age: 31, married: true };

console.log('merge:', merge(a, b));
// { name: "Maria", age: 31, married: true, surname: "Ibañez", country: "SPA" }
