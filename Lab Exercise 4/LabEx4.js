function Add(a, b) {
  return a + b;
}
function Subtract(a, b) {
  return a - b;
}
function Multiply(a, b) {
  return a * b;
}
function Divide(a, b) {
  return a / b;
}

let x = 5;
let y = 4;

console.log(x + " + " + y + " = " + Add(x, y));
console.log(x + " - " + y + " = " + Subtract(x, y));
console.log(x + " * " + y + " = " + Multiply(x, y));
console.log(x + " / " + y + " = " + Divide(x, y));

function Name(name) {
  console.log(`Hello ${name}!`);
}

Name("Peter");
