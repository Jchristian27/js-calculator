const display = document.querySelector('.display');
const currentCalculation = document.querySelector('.calculation-display');
const currentNumber = document.querySelector('.current-number');
const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const seven = document.getElementById('seven');
const eight = document.getElementById('eight');
const nine = document.getElementById('nine');
const zero = document.getElementById('zero');
const point = document.getElementById('point');
const plus = document.getElementById('plus');
const minus = document.getElementById('subtract');
const times = document.getElementById('multiply');
const divides = document.getElementById('divide');
const equals = document.getElementById('equals');
const clear = document.querySelector('.clear');
const deletes = document.querySelector('.delete');

currentCalculation.innerHTML = '<h2>69 + 420</h2>';

function add(a, b) {
  return a + b;
};

function subtract(a, b) {
  return a - b;
};

function multiply(a, b) {
  return a * b;
};

function divide(a, b) {
  return a / b;
};

function operate(a, b, operator) {
  return operator(a,b);
};

function addToDisplay(symbol) {
  currentNumber.innerHTML += `<h2>${symbol}</h2>`
}

one.addEventListener('click', function() {
  addToDisplay('1');
});

two.addEventListener('click', function() {
  addToDisplay('2');
});

three.addEventListener('click', function() {
  addToDisplay('3');
});

four.addEventListener('click', function() {
  addToDisplay('4');
});

five.addEventListener('click', function() {
  addToDisplay('5');
});

six.addEventListener('click', function() {
  addToDisplay('6');
});

seven.addEventListener('click', function() {
  addToDisplay('7');
});

eight.addEventListener('click', function() {
  addToDisplay('8');
});

nine.addEventListener('click', function() {
  addToDisplay('9');
});

zero.addEventListener('click', function() {
  addToDisplay('0');
});

point.addEventListener('click', function() {
  addToDisplay('.');
});

plus.addEventListener('click', function() {
  addToDisplay('+');
});

minus.addEventListener('click', function() {
  addToDisplay('-');
});

divides.addEventListener('click', function() {
  addToDisplay('÷');
});

times.addEventListener('click', function() {
  addToDisplay('×');
});

equals.addEventListener('click', function() {
  addToDisplay('=');
});

deletes.addEventListener('click', function() {
  display.innerHTML = "<h2>0</h2>";
  currentNumber.innerHTML = "<h2>0</h2>";
});

clear.addEventListener('click', function() {
  display.innerHTML = "<h2>0</h2>";
  currentNumber.innerHTML = "<h2>0</h2>";
});

