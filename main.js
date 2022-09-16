let display = document.querySelector('.display');
let one = document.querySelector('#1');
let two = document.querySelector('#2');
let three = document.querySelector('#3');
let four = document.querySelector('#4');
let five = document.querySelector('#5');
let six = document.querySelector('#6');
let seven = document.querySelector('#7');
let eight = document.querySelector('#8');
let nine = document.querySelector('#9');
let zero = document.querySelector('#0');
let point = document.querySelector('#point');
let plus = document.querySelector('#plus');
let minus = document.querySelector('#subtract');
let times = document.querySelector('#multiply');
let divide = document.querySelector('#divide');
let equals = document.querySelector('#equals');
let clear = document.querySelector('.clear');
let deletes = document.querySelector('.delete');

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