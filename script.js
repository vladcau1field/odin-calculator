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

let firstNumber;
let operator;
let anotherNumber;

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
const one = document.querySelector("#1");
const two = document.querySelector("#2");
const three = document.querySelector("#3");
const four = document.querySelector("#4");
const five = document.querySelector("#5");
const six = document.querySelector("#6");
const seven = document.querySelector("#7");
const eight = document.querySelector("#8");
const nine = document.querySelector("#9");
const zero = document.querySelector("#0");
displayDigits.textContent = "hello";
