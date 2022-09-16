const display = document.querySelector('.display');
const one = document.getElementById('#one');
const two = document.getElementById('#two');
const three = document.getElementById('#three');
const four = document.getElementById('#four');
const five = document.getElementById('#five');
const six = document.getElementById('#six');
const seven = document.getElementById('#seven');
const eight = document.getElementById('#eight');
const nine = document.getElementById('#nine');
const zero = document.getElementById('#zero');
const point = document.getElementById('#point');
const plus = document.getElementById('#plus');
const minus = document.getElementById('#subtract');
const times = document.getElementById('#multiply');
const divides = document.getElementById('#divide');
const equals = document.getElementById('#equals');
const clear = document.querySelector('.clear');
const deletes = document.querySelector('.delete');

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

display.addEventListener('click', function() {
  display.innerHTML = "<h2>TEST</h2>";
})

clear.addEventListener('click', function() {
  display.innerHTML = "<h2>0</h2>";
});

two.addEventListener("click", function() {
  display.innerHTML = "<h2>1</h2>";
})