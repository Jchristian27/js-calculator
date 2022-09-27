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
let currentCalculationValue = [];
let currentNumberValue = [];

currentCalculationDiv.innerHTML = "<h2 style='color: #E5E4E2'>0</h2>";
currentNumberDiv.innerHTML = "<h2>0</h2>";

function add(a, b) {
  let sum = (a + b);
  let sumArr = Array.from(sum);
  let lastElement = sumArr.length - 1;
  let secondToLastElement = lastElement - 1;
  if (sumArr[lastElement] && sumArr[secondToLastElement] === '0') {
    return Math.trunc(sum);
  } else {
    return sum;
  }
};

function subtract(a, b) {
  let difference = (a - b);
  let differenceArr = Array.from(difference);
  let lastElement = differenceArr.length - 1;
  let secondToLastElement = lastElement - 1;
  if (differenceArr[lastElement] && differenceArr[secondToLastElement] === '0') {
    return Math.trunc(difference);
  } else {
    return difference;
  }
};

function multiply(a, b) {
  let product = (a * b);
  let productArr = Array.from(product);
  let lastElement = productArr.length - 1;
  let secondToLastElement = lastElement - 1;
  if (productArr[lastElement] && productArr[secondToLastElement] === '0') {
    return Math.trunc(product);
  } else {
    return product;
  }
};

function divide(a, b) {
  let quotient = (a / b);
  let quotientArr = Array.from(quotient);
  let lastElement = quotientArr.length - 1;
  let secondToLastElement = lastElement - 1;
  if (quotientArr[lastElement] && quotientArr[secondToLastElement] === '0') {
    return Math.trunc(quotient);
  } else {
    return quotient;
  }
};

function operate(a, b, operator) {
  if (operator === '+') {
    sum = add(a,b).toFixed(2);
    return sum;
  } else if (operator === '-') {
    difference = subtract(a,b).toFixed(2);
    return difference;
  } else if (operator === '×') {
    product = multiply(a,b).toFixed(2);
    return product;
  } else if (operator === '÷') {
    quotient = divide(a,b).toFixed(2);
    return quotient;
  } else {
    window.alert("An error has occured. Please press CLEAR and try again.")
  }
};

function addToDisplay(symbol) {
  if (Array.from(currentNumberValue).length >= 10) {
    // Do nothing because currentNum is too big to fit on the display.
  } else {
    if (currentNumberDiv.innerHTML === "<h2>0</h2>") {
      currentNumberValue.push(symbol);  
      currentNumberDiv.innerHTML = `<h2>${symbol}</h2>`;
    } else {
        currentNumberValue.push(symbol); 
        let cNVString = currentNumberValue.join("").replaceAll(",", ""); 
        currentNumberDiv.innerHTML = `<h2>${cNVString}</h2>`;
        console.log(currentNumberValue);
      }
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
  let currentNumberDivArr = Array.from(currentNumberValue);
  if (currentNumberDivArr.includes('.')) {
    //window.alert("You can only use one decimal per number!");
  } else {
    addToDisplay('.');
  }
});

//operate(parse)

plus.addEventListener('click', function() {
  if (currentCalculationValue.length < 2) {
    currentCalculationValue.push(currentNumberValue.join(""));
    currentCalculationValue.push('+');
    let cNVString = currentNumberValue.join("").replaceAll(",", ""); 
    currentCalculationDiv.innerHTML = `<h2>${cNVString} +</h2>`;
    currentNumberValue = []; 
  } else {
    currentCalculationValue.push(currentNumberValue.join(""));
    console.log(currentCalculationValue[0]);
    console.log(currentCalculationValue[1]);
    console.log(currentCalculationValue[2]);
    let newNumValue = operate(parseFloat(currentCalculationValue[0]), parseFloat(currentCalculationValue[2]), currentCalculationValue[1]);
    console.log(newNumValue);
    currentNumberValue = [];
    currentCalculationValue = [];
    currentCalculationValue.push(newNumValue);
    currentCalculationValue.push('+');
    currentCalculationDiv.innerHTML = `<h2>${newNumValue} +</h2>`;
  }
});

minus.addEventListener('click', function() {
  if (currentCalculationValue.length < 2) {
    currentCalculationValue.push(currentNumberValue.join(""));
    currentCalculationValue.push('-');
    let cNVString = currentNumberValue.join("").replaceAll(",", ""); 
    currentCalculationDiv.innerHTML = `<h2>${cNVString} -</h2>`;
    currentNumberValue = []; 
  } else {
    currentCalculationValue.push(currentNumberValue.join(""));
    console.log(currentCalculationValue[0]);
    console.log(currentCalculationValue[1]);
    console.log(currentCalculationValue[2]);
    let newNumValue = operate(parseFloat(currentCalculationValue[0]), parseFloat(currentCalculationValue[2]), currentCalculationValue[1]);
    console.log(newNumValue);
    currentNumberValue = [];
    currentCalculationValue = [];
    currentCalculationValue.push(newNumValue);
    currentCalculationValue.push('-');
    currentCalculationDiv.innerHTML = `<h2>${newNumValue} -</h2>`;
  }
});

divides.addEventListener('click', function() {
  if (currentCalculationValue.length < 2) {
    currentCalculationValue.push(currentNumberValue.join(""));
    currentCalculationValue.push('÷');
    let cNVString = currentNumberValue.join("").replaceAll(",", ""); 
    currentCalculationDiv.innerHTML = `<h2>${cNVString} ÷</h2>`;
    currentNumberValue = []; 
  } else {
    currentCalculationValue.push(currentNumberValue.join(""));
    console.log(currentCalculationValue[0]);
    console.log(currentCalculationValue[1]);
    console.log(currentCalculationValue[2]);
    if (currentCalculationValue[2] == 0) {
      window.alert("You can't divide by zero silly!");
      currentCalculationValue.pop();
      currentNumberValue = [];
      //currentCalculationDiv.innerHTML = `<h2>${a} ${operator}</h2>`;
    } else {
      currentCalculationValue.push(currentNumberValue.join(""));
      let newNumValue = operate(parseFloat(currentCalculationValue[0]), parseFloat(currentCalculationValue[2]), currentCalculationValue[1]);
      console.log(newNumValue);
      currentNumberValue = [];
      currentCalculationValue = [];
      currentCalculationValue.push(newNumValue);
      currentCalculationValue.push('÷');
      currentCalculationDiv.innerHTML = `<h2>${newNumValue} ÷</h2>`;
    }
  }
});

times.addEventListener('click', function() {
 if (currentCalculationValue.length < 2) {
    currentCalculationValue.push(currentNumberValue.join(""));
    currentCalculationValue.push('×');
    let cNVString = currentNumberValue.join("").replaceAll(",", ""); 
    currentCalculationDiv.innerHTML = `<h2>${cNVString} ×</h2>`;
    currentNumberValue = []; 
  } else {
    currentCalculationValue.push(currentNumberValue.join(""));
    console.log(currentCalculationValue[0]);
    console.log(currentCalculationValue[1]);
    console.log(currentCalculationValue[2]);
    let newNumValue = operate(parseFloat(currentCalculationValue[0]), parseFloat(currentCalculationValue[2]), currentCalculationValue[1]);
    console.log(newNumValue);
    currentNumberValue = [];
    currentCalculationValue = [];
    currentCalculationValue.push(newNumValue);
    currentCalculationValue.push('×');
    currentCalculationDiv.innerHTML = `<h2>${newNumValue} ×</h2>`;
  }
});

equals.addEventListener('click', function() {
  arrLength = currentCalculationValue.length;
  if (currentCalculationValue.length < 1 || (currentCalculationValue.length < 3
     && currentNumberDiv.innerHTML === '<h2></h2>')) {
      // Do nothing because there aren't two numbers to operate on yet.
  } else {
    currentCalculationDiv.innerHTML += `<h2>${currentNumberValue} =</h2>`;
    numToPush = stringToNum(currentNumberValue);
    currentCalculationValue.push(numToPush);
    operate(currentCalculationValue[0], currentCalculationValue[2], 
    currentCalculationValue[1]);
    console.log(currentNumberValue);
    console.log(currentCalculationValue);
  }
});

clear.addEventListener('click', function() {
  currentCalculationValue = [];
  currentNumberValue = [];
  currentCalculationDiv.innerHTML = "<h2 style='color: #E5E4E2'>0</h2>";
  currentNumberDiv.innerHTML = "<h2>0</h2>";
});

deletes.addEventListener('click', function() {
  currentNumberValue.pop();
  let cNVString = currentNumberValue.join("").replaceAll(",", ""); 
  currentNumberDiv.innerHTML = `<h2>${cNVString}</h2>`;
});