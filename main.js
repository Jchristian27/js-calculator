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

one.addEventListener('click', function() {
  currentNumber.innerHTML += "<h2>1</h2>";
});

two.addEventListener('click', function() {
  currentNumber.innerHTML += "<h2>2</h2>";
});

three.addEventListener('click', function() {
  currentNumber.innerHTML += "<h2>3</h2>";
});

four.addEventListener('click', function() {
  currentNumber.innerHTML += "<h2>4</h2>";
});

five.addEventListener('click', function() {
  currentNumber.innerHTML += "<h2>5</h2>";
});

six.addEventListener('click', function() {
  currentNumber.innerHTML += "<h2>6</h2>";
});

seven.addEventListener('click', function() {
  currentNumber.innerHTML += "<h2>7</h2>";
});

eight.addEventListener('click', function() {
  currentNumber.innerHTML += "<h2>8</h2>";
});

nine.addEventListener('click', function() {
  currentNumber.innerHTML += "<h2>9</h2>";
});

zero.addEventListener('click', function() {
  currentNumber.innerHTML += "<h2>0</h2>";
});

point.addEventListener('click', function() {
  currentNumber.innerHTML += "<h2>.</h2>";
});

plus.addEventListener('click', function() {
  currentNumber.innerHTML += "<h2>+</h2>";
});

minus.addEventListener('click', function() {
  currentNumber.innerHTML += "<h2>-</h2>";
});

divides.addEventListener('click', function() {
  currentNumber.innerHTML += "<h2>÷</h2>";
});

times.addEventListener('click', function() {
  currentNumber.innerHTML += "<h2>×</h2>";
});

equals.addEventListener('click', function() {
  currentNumber.innerHTML += "<h2>=</h2>";
});

deletes.addEventListener('click', function() {
  display.innerHTML = "<h2>0</h2>";
});

clear.addEventListener('click', function() {
  display.innerHTML = "<h2>0</h2>";
});