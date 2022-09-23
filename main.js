const display = document.querySelector('.display');
let currentCalculationDiv = document.querySelector('.calculation-display');
let currentNumberDiv = document.querySelector('.current-number');
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
let currentCalculationValue = [ ];
let currentNumberValue = '';

currentCalculationDiv.innerHTML = "<h2 style='color: #E5E4E2'>0</h2>";
currentNumberDiv.innerHTML = "<h2>0</h2>";

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
  if (operator === '+') {
    currentNumberDiv.innerHTML = `<h2>${add(a,b).toFixed(2)}</h2>`;
  } else if (operator === '-') {
    currentNumberDiv.innerHTML = `<h2>${subtract(a,b).toFixed(2)}</h2>`;
  } else if (operator === '×') {
    currentNumberDiv.innerHTML = `<h2>${multiply(a,b).toFixed(2)}</h2>`;
  } else {
    currentNumberDiv.innerHTML = `<h2>${divide(a,b).toFixed(2)}</h2>`;
  }
};

function addToDisplay(symbol) {
  if (currentNumberDiv.innerHTML === "<h2>0</h2>") {
    currentNumberDiv.innerHTML = `<h2>${symbol}</h2>`;
    currentNumberValue += symbol;
    console.log(currentNumberValue);
    console.log(currentCalculationValue);
  } else {
    currentNumberDiv.innerHTML += `<h2>${symbol}</h2>`;
    currentNumberValue += symbol;
    console.log(currentNumberValue);
    console.log(currentCalculationValue);
  }
}

function stringToNum(string) {
  num = parseFloat(string)
  return num;
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
  currentCalculationDiv.innerHTML = `<h2>${currentNumberValue} +</h2>`;
  numToPush = stringToNum(currentNumberValue);
  currentCalculationValue.push(numToPush);
  currentCalculationValue.push('+');
  console.log(currentNumberValue);
  console.log(currentCalculationValue);
  currentNumberValue = '';
  currentNumberDiv.innerHTML = '<h2></h2>';
});

minus.addEventListener('click', function() {
  currentCalculationDiv.innerHTML = `<h2>${currentNumberValue} -</h2>`;
  numToPush = stringToNum(currentNumberValue);
  currentCalculationValue.push(numToPush);
  currentCalculationValue.push('-');
  console.log(currentNumberValue);
  console.log(currentCalculationValue);
  currentNumberValue = '';
  currentNumberDiv.innerHTML = '<h2></h2>';
});

divides.addEventListener('click', function() {
  currentCalculationDiv.innerHTML = `<h2>${currentNumberValue} ÷</h2>`;
  numToPush = stringToNum(currentNumberValue);
  currentCalculationValue.push(numToPush);
  currentCalculationValue.push('÷');
  console.log(currentNumberValue);
  console.log(currentCalculationValue);
  currentNumberValue = '';
  currentNumberDiv.innerHTML = '<h2></h2>';
});

times.addEventListener('click', function() {
  currentCalculationDiv.innerHTML = `<h2>${currentNumberValue} ×</h2>`;
  numToPush = stringToNum(currentNumberValue);
  currentCalculationValue.push(numToPush);
  currentCalculationValue.push('×');
  console.log(currentNumberValue);
  console.log(currentCalculationValue);
  currentNumberValue = '';
  currentNumberDiv.innerHTML = '<h2></h2>';
});

equals.addEventListener('click', function() {
  currentCalculationDiv.innerHTML += `<h2>${currentNumberValue} =</h2>`;
  numToPush = stringToNum(currentNumberValue);
  currentCalculationValue.push(numToPush);
  operate(currentCalculationValue[0], currentCalculationValue[2], 
  currentCalculationValue[1]);
  console.log(currentNumberValue);
  console.log(currentCalculationValue);
});

clear.addEventListener('click', function() {
  currentCalculationValue = [ ];
  currentNumberValue = '';
  currentCalculationDiv.innerHTML = "<h2 style='color: #E5E4E2'>0</h2>";
  currentNumberDiv.innerHTML = "<h2>0</h2>";
});

deletes.addEventListener('click', function() {
  currentCalculationDiv.innerHTML = "<h2 style='color: #E5E4E2'>0</h2>";
  currentNumberDiv.innerHTML = "<h2>0</h2>";
});