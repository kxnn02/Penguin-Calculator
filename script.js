// Display elements
const previousMathElement = document.getElementById("previous-math");
const currentValueElement = document.getElementById("current-value");

// Button groups
const numberButtons = document.querySelectorAll(".btn-number");
const operatorButtons = document.querySelectorAll(".btn-operator");

// Single utility buttons 
const equalsButton = document.getElementById("equals");
const deleteButton = document.getElementById("backspace");
const allClearButton = document.getElementById("clear");

// State variables 
let currentOperand = "";
let previousOperand = "";
let operation = null;

// Arithmetic Functions 

// Add number function
const add = (a, b) => a + b;

// Subtract number function 
const subtract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide = (a, b) => b == 0 ? "Error: Calculator Frozen" : a / b;

// OPERATE function
const operate = (operator, a, b) => {
    // Convert a, b from strings to actual numbers 
    const num1 = parseFloat(a);
    const num2 = parseFloat(b);

    switch (operator) {
        case "+":
            return add(num1, num2);
        case "−":
            return subtract(num1, num2);
        case "×":
            return multiply(num1, num2);
        case "÷":
            return divide(num1, num2)
        default:
            return null;
    }
}

const appendNumber = number => {
    // prevent multiple decimal points
    if (number === "." && currentOperand.includes(".")) {
        return;
    }

    // Add the new number to the existing string 
    currentOperand = currentOperand.toString() + number.toString();
};

// when a user click a number button, 
numberButtons.forEach(button => {
    button.addEventListener("click", () => {
        appendNumber(button.innerText);
        updateDisplay();
    });
});

const updateDisplay = () => {
    // If currentOperand is empty, show '0', otherwise show currentOperand
    currentValueElement.innerText = currentOperand === "" ? "0" : currentOperand;
    previousMathElement.innerText = previousOperand;
};

const chooseOperation = selectedOperator => {
    // If screen is empty, prevent user from clicking operators (+, -, etc)
    if (currentOperand === "") {
        return;
    }

    // If we have a previous number, calculate it 
    // (This is how 5 + 5 + 5 becomes 10 + 5)
    if (previousOperand !== "") {
        compute(); // i will write this later 
    }

    // Store the operator the  user clicked
    operation = selectedOperator;

    // Move the current number to the previous box
    previousOperand = currentOperand;

    // Clear - Empty the current number box so they can type the next one
    currentOperand = "";

};

// Event listener for the operator buttons
operatorButtons.forEach(button => {
    button.addEventListener("click", () => {
        chooseOperation(button.innerText);
        updateDisplay();
    })
})

const compute = () => {
    // Check if operation or the currentOperad is empty
    if (operation === null || currentOperand === "" || previousOperand === "") {
        return;
    }

    // Do the math
    const result = operate(operation, previousOperand, currentOperand);

    currentOperand = result.toString();// Convert back to string so we can keep typing
    operation = null;
    previousOperand = "";
};

equalsButton.addEventListener("click", () => {
    compute();
    updateDisplay();
});
