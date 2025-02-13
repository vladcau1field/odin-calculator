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
const numbers = document.querySelectorAll(".digits");

numbers.forEach((number) => {
  number.addEventListener("click", () => {
    if (displayDigits.textContent.length < 10) {
      displayDigits.textContent += number.textContent;
    }
  });
});

const addBtn = document.querySelector("#add");

addBtn.addEventListener("click", () => {
  let before = displayDigits.textContent;
  console.log(before);
  if (displayDigits.textContent != "") {
    if (displayDigits.textContent.length < 10) {
      displayDigits.textContent = "+";
    }
  }
});
