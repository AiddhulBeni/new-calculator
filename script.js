let currentOperand = "";
let previousOperand = "";
let operation = null;

const display = document.querySelector(".display");

function clear() {
  currentOperand = "";
  previousOperand = "";
  operation = null;
}

function appendNumber(number) {
  currentOperand = currentOperand.toString() + number.toString();
}

function chooseOperation(operator) {
  if (currentOperand === "") return;
  if (previousOperand !== "") {
    compute();
  }
  operation = operator;
  previousOperand = currentOperand;
  currentOperand = "";
}

function compute() {
  let computation;
  const prev = parseFloat(previousOperand);
  const current = parseFloat(currentOperand);
  if (isNaN(prev) || isNaN(current)) return;
  switch (operation) {
    case "+":
      computation = prev + current;
      break;
    case "-":
      computation = prev - current;
      break;
    case "×":
      computation = prev * current;
      break;
    case "÷":
      computation = prev / current;
      break;
    default:
      return;
  }
  currentOperand = computation;
  operation = null;
  previousOperand = "";
}

function updateDisplay() {
  display.innerHTML = currentOperand;
}

const numberButtons = document.querySelectorAll("[data-number]");

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    appendNumber(button.innerHTML);
    updateDisplay();
  });
});

const operatorButtons = document.querySelectorAll("[data-operator]");

operatorButtons.forEach((button) => {
  button.addEventListener("click", () => {
    chooseOperation(button.innerHTML);
    updateDisplay();
  });
});

const equalsButton = document.querySelector("[data-equals]");

equalsButton.addEventListener("click", () => {
  compute();
  updateDisplay();
});

const clearButton = document.querySelector("[data-clear]");

clearButton.addEventListener("click", () => {
  clear();
  updateDisplay();
});
