#!/usr/bin/env node

/**
 * Node.js CLI Calculator
 * 
 * Supported Operations:
 * - Addition (+)
 * - Subtraction (-)
 * - Multiplication (*)
 * - Division (/)
 */

// Addition: takes two numbers and returns their sum
function add(a, b) {
  return a + b;
}

// Subtraction: takes two numbers and returns their difference
function subtract(a, b) {
  return a - b;
}

// Multiplication: takes two numbers and returns their product
function multiply(a, b) {
  return a * b;
}

// Division: takes two numbers and returns their quotient
function divide(a, b) {
  if (b === 0) {
    throw new Error('Cannot divide by zero');
  }
  return a / b;
}

// Main CLI handler
function main() {
  const args = process.argv.slice(2);

  if (args.length < 3) {
    console.log('Usage: calculator <number1> <operation> <number2>');
    console.log('Operations: + (add), - (subtract), * (multiply), / (divide)');
    process.exit(1);
  }

  const num1 = parseFloat(args[0]);
  const operation = args[1];
  const num2 = parseFloat(args[2]);

  if (isNaN(num1) || isNaN(num2)) {
    console.error('Error: Invalid number input');
    process.exit(1);
  }

  let result;

  switch (operation) {
    case '+':
      result = add(num1, num2);
      break;
    case '-':
      result = subtract(num1, num2);
      break;
    case '*':
      result = multiply(num1, num2);
      break;
    case '/':
      result = divide(num1, num2);
      break;
    default:
      console.error(`Error: Unknown operation '${operation}'`);
      console.log('Supported operations: +, -, *, /');
      process.exit(1);
  }

  console.log(`${num1} ${operation} ${num2} = ${result}`);
}

// Export functions for testing
module.exports = {
  add,
  subtract,
  multiply,
  divide
};

// Run main if script is executed directly
if (require.main === module) {
  main();
}
