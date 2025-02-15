function add(numberA, numberB) {
  return numberA + numberB;
}

function subtract(numberA, numberB) {
  return numberA - numberB;
}

function multiply(numberA, numberB) {
  return numberA * numberB;
}

function divide(numberA, numberB) {
  if (numberB === 0) {
    return "wtf?";
  }
  return numberA / numberB;
}

let firstNumber = null;
let operator = null;
let anotherNumber = null;
let resetScreen = false;

function operate(firstNumber, operator, anotherNumber) {
  switch (operator) {
    case "+":
      return add(firstNumber, anotherNumber);
    case "-":
      return subtract(firstNumber, anotherNumber);
    case "*":
      return multiply(firstNumber, anotherNumber);
    case "/":
      return divide(firstNumber, anotherNumber);
    default:
      return null;
  }
}

const displayDigits = document.querySelector("#display");
const numbers = document.querySelectorAll(".digits");
const addBtn = document.querySelector("#add");
const equalsBtn = document.querySelector("#equals");
const clearBtn = document.querySelector("#clear");
const subtrBtn = document.querySelector("#subtract");
const multiplyBtn = document.querySelector("#multiply");
const divideBtn = document.querySelector("#divide");

// numbers
numbers.forEach((number) => {
  number.addEventListener("click", () => {
    if (resetScreen) {
      displayDigits.textContent = "";
      resetScreen = false;
    }
    if (displayDigits.textContent.length < 10) {
      displayDigits.textContent += number.textContent;
    }
  });
});

function setOperator(newOperator) {
  if (operator !== null && !resetScreen) {
    anotherNumber = parseFloat(displayDigits.textContent);
    firstNumber = operate(firstNumber, operator, anotherNumber);
    displayDigits.textContent = parseFloat(firstNumber.toFixed(5));
  } else {
    firstNumber = parseFloat(displayDigits.textContent);
  }

  operator = newOperator;
  resetScreen = true;
}

addBtn.addEventListener("click", () => setOperator("+"));
subtrBtn.addEventListener("click", () => setOperator("-"));
multiplyBtn.addEventListener("click", () => setOperator("*"));
divideBtn.addEventListener("click", () => setOperator("/"));

equalsBtn.addEventListener("click", () => {
  if (firstNumber !== null && operator !== null) {
    anotherNumber = parseFloat(displayDigits.textContent);
    let result = operate(firstNumber, operator, anotherNumber);
    if (result === "wtf?") {
      displayDigits.textContent = result;
      firstNumber = null;
    } else {
      displayDigits.textContent = parseFloat(result.toFixed(5));
      firstNumber = result;
    }
    operator = null;
    resetScreen = true;
  }
});

clearBtn.addEventListener("click", () => {
  displayDigits.textContent = "";
  firstNumber = null;
  operator = null;
  anotherNumber = null;
  resetScreen = false;
});
