function add(numberA, numberB) {
  return numberA + numberB;
}

function subsctract(numberA, numberB) {
  return numberA - numberB;
}

function multiply(numberA, numberB) {
  return numberA * numberB;
}

function divide(numberA, numberB) {
  return numberA / numberB;
}

let firstNumber = null;
let operator = null;
let anotherNumber = null;

function operate(firstNumber, operator, anotherNumber) {
  if (operator == "+") {
    return add(firstNumber, anotherNumber);
  } else if (operator == "-") {
    return subsctract(firstNumber, anotherNumber);
  } else if (operator == "*") {
    return multiply(firstNumber, anotherNumber);
  } else if (operator == "/") {
    return divide(firstNumber, anotherNumber);
  }
}

const displayDigits = document.querySelector("#display");
const numbers = document.querySelectorAll(".digits");
const currentDigits = document.querySelector("#currentDigits");
const addBtn = document.querySelector("#add");
const equalsBtn = document.querySelector("#equals");
const clearBtn = document.querySelector("#clear");
const substrBtn = document.querySelector("#substract");
const multiplyBtn = document.querySelector("#multiply");

// numbers
numbers.forEach((number) => {
  number.addEventListener("click", () => {
    if (displayDigits.textContent.length < 10) {
      displayDigits.textContent += number.textContent;
    }
  });
});

// +
addBtn.addEventListener("click", () => {
  if (displayDigits.textContent != "") {
    firstNumber = parseFloat(displayDigits.textContent);
    operator = "+";
    displayDigits.textContent = "";
  }
});

equalsBtn.addEventListener("click", () => {
  if (firstNumber != null && operator != null) {
    anotherNumber = parseFloat(displayDigits.textContent);
    console.log(operate(firstNumber, operator, anotherNumber));
    displayDigits.textContent = operate(firstNumber, operator, anotherNumber);
  }
});

clearBtn.addEventListener("click", () => {
  displayDigits.textContent = "";
  firstNumber = null;
  operator = null;
  anotherNumber = null;
});

substrBtn.addEventListener("click", () => {
  if (displayDigits.textContent != "") {
    firstNumber = parseFloat(displayDigits.textContent);
    operator = "-";
    displayDigits.textContent = "";
  }
});

multiplyBtn.addEventListener("click", () => {
  if (displayDigits.textContent != "") {
    firstNumber = parseFloat(displayDigits.textContent);
    operator = "*";
    displayDigits.textContent = "";
  }
});
