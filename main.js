function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
} 

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operate(a, b, operator) {
  return operator(a,b);
}

console.log(operate(10, 5, divide));