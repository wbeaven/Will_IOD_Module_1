// This function returns the addition of two numbers
function Add(a, b) {
  return a + b;
}

// Addition tests
function AddTests() {
  if (Add(5, 6) !== 11) {
    throw new Error("Addition test 1 failed");
  }
  if (Add(-7, -3) !== -10) {
    throw new Error("Addition test 2 failed");
  }
  if (Add(6.07, 8.4) !== 14.47) {
    throw new Error("Addition test 3 failed");
  }
}

// This function returns the subtraction of two numbers
function Subtract(a, b) {
  return a - b;
}

// Subtraction tests
function SubtractTests() {
  if (Subtract(17, 5) !== 12) {
    throw new Error("Subtraction test 1 failed");
  }
  if (Subtract(-3, -5) !== 2) {
    throw new Error("Subtraction test 2 failed");
  }
  if (Subtract(9.6, 2.5) !== 7.1) {
    throw new Error("Subtraction test 3 failed");
  }
}

// This function returns the multiplication of two numbers
function Multiply(a, b) {
  return a * b;
}

// Multiplication tests
function MultiplyTests() {
  if (Multiply(4, 7) !== 28) {
    throw new Error("Multiplication test 1 failed");
  }
  if (Multiply(-9, 6) !== -54) {
    throw new Error("Multiplication test 2 failed");
  }
  if (Multiply(6.84, 5.5) !== 37.62) {
    throw new Error("Multiplication test 3 failed");
  }
}

// This function returns the division of two numbers
function Divide(a, b) {
  return a / b;
}

// Division tests
function DivideTests() {
  if (Divide(40, 8) !== 5) {
    throw new Error("Division test 1 failed");
  }
  if (Divide(-48, 3) !== -16) {
    throw new Error("Division test 2 failed");
  }
  if (Divide(11, 10) !== 1.1) {
    throw new Error("Division test 3 failed");
  }
}

// This function returns a string plus the name variable
function Name(name) {
  return `Hello ${name}!`;
}

// Name tests
function NameTests() {
  if (Name("Jake") !== "Hello Jake!") {
    throw new Error("Name test 1 failed");
  }
  if (Name("") !== "Hello !") {
    throw new Error("Name test 2 failed");
  }
  if (Name(null) !== "Hello null!") {
    throw new Error("Name test 3 failed");
  }
  if (Name(undefined) !== "Hello undefined!") {
    throw new Error("Name test 4 failed");
  }
}

AddTests();
SubtractTests();
MultiplyTests();
DivideTests();
NameTests();
console.log("All tests successful");
