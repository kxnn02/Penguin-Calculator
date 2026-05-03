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

