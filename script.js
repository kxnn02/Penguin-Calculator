/**
 * PENGUIN CALCULATOR LOGIC
 * Hand-coded with ice-cool precision.
 */

// --- 1. DOM SELECTORS ---
// Selecting display areas where numbers and operators appear
const previousMathElement = document.getElementById("previous-math");
const currentValueElement = document.getElementById("current-value");

// Selecting groups of buttons for bulk event listener attachment
const numberButtons = document.querySelectorAll(".btn-number");
const operatorButtons = document.querySelectorAll(".btn-operator");

// Selecting unique utility buttons for specific logic
const equalsButton = document.getElementById("equals");
const deleteButton = document.getElementById("backspace");
const allClearButton = document.getElementById("clear");

// --- 2. CALCULATOR STATE ---
// These variables track the 'memory' of the calculator during use
let currentOperand = "";   // The number currently being typed (Room A)
let previousOperand = "";  // The number waiting in storage (Room B)
let operation = null;      // The selected math operator (+, -, etc.)

// --- 3. CORE ARITHMETIC ENGINE ---
// Pure functions that perform basic math on two numbers
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => (b === 0 ? "Error: Calculator Frozen" : a / b);

/**
 * The 'Brain' of the operation.
 * Takes the stored values and routes them to the correct math function.
 */
const operate = (operator, a, b) => {
    // Convert string inputs to actual numbers for math calculation
    const num1 = parseFloat(a);
    const num2 = parseFloat(b);

    switch (operator) {
        case "+": return add(num1, num2);
        case "−": return subtract(num1, num2); // Matching the 'Em Dash' symbol from HTML
        case "×": return multiply(num1, num2);
        case "÷": return divide(num1, num2);
        default: return null;
    }
}

// --- 4. INPUT LOGIC ---

/**
 * Adds a digit to the current operand string.
 * Includes a guard to prevent multiple decimal points.
 */
const appendNumber = (number) => {
    // If user clicks a dot and we already have one, stop here.
    if (number === "." && currentOperand.includes(".")) return;

    // Convert to string to ensure we concatenate (1 + 2 = "12") instead of adding (1 + 2 = 3)
    currentOperand = currentOperand.toString() + number.toString();
};

/**
 * Handles the logic when an operator (+, -, etc) is clicked.
 * It moves the current number to storage to prepare for the next input.
 */
const chooseOperation = (selectedOperator) => {
    // If no number has been typed yet, don't allow an operator
    if (currentOperand === "") return;

    // If there's already math waiting (e.g., 5 + 5 +), compute it first
    if (previousOperand !== "") {
        compute();
    }

    operation = selectedOperator;
    previousOperand = currentOperand; // The 'Move' to storage
    currentOperand = "";             // Clear the main input for the next number
};

/**
 * The Final Act: Performs the math based on current state and displays the result.
 */
const compute = () => {
    // Guard: Ensure we have all 3 pieces needed for a calculation
    if (operation === null || currentOperand === "" || previousOperand === "") return;

    const result = operate(operation, previousOperand, currentOperand);

    // Set result as the current input so user can perform more math on it
    currentOperand = result.toString();
    
    // Clear the memory for the next operation
    operation = null;
    previousOperand = "";
};

// --- 5. JANITOR FUNCTIONS (CLEANUP) ---

/**
 * Wipes all variables clean (Reset to Factory Settings)
 */
const clear = () => {
    currentOperand = "";
    previousOperand = "";
    operation = null;
}

/**
 * Removes only the last character typed (Backspace)
 */
const deleteNumber = () => {
    currentOperand = currentOperand.toString().slice(0, -1);
}

// --- 6. DISPLAY SYNC ---

/**
 * Refreshes the HTML to match the current state variables.
 * This is the only function that touches the user's screen.
 */
const updateDisplay = () => {
    // Show '0' if screen is empty, otherwise show the current number
    currentValueElement.innerText = currentOperand === "" ? "0" : currentOperand;
    
    // Show the previous number and the operator in the history area
    previousMathElement.innerText = operation !== null 
        ? `${previousOperand} ${operation}` 
        : previousOperand;
};

// --- 7. EVENT LISTENERS ---

// Digits
numberButtons.forEach(button => {
    button.addEventListener("click", () => {
        appendNumber(button.innerText);
        updateDisplay();
    });
});

// Operators (+, -, etc.)
operatorButtons.forEach(button => {
    button.addEventListener("click", () => {
        chooseOperation(button.innerText);
        updateDisplay();
    });
});

// Equals
equalsButton.addEventListener("click", () => {
    compute();
    updateDisplay();
});

// All Clear
allClearButton.addEventListener("click", () => {
    clear();
    updateDisplay();
});

// Backspace
deleteButton.addEventListener("click", () => {
    deleteNumber();
    updateDisplay();
});