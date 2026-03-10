#!/usr/bin/env node

/**
 * Node.js CLI Calculator
 * 
 * Supported Operations:
 * - Addition (+)
 * - Subtraction (-)
 * - Multiplication (*)
 * - Division (/)
 * - Modulo (%)
 * - Exponentiation (^)
 * - Square Root (sqrt)
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

// Modulo: takes two numbers and returns the remainder of a divided by b
function modulo(a, b) {
  if (b === 0) {
    throw new Error('Cannot perform modulo with zero');
  }
  return a % b;
}

// Power: returns base raised to the exponent
function power(base, exponent) {
  return Math.pow(base, exponent);
}

// Square Root: returns the square root of n with error handling for negative numbers
function squareRoot(n) {
  if (n < 0) {
    throw new Error('Cannot calculate square root of a negative number');
  }
  return Math.sqrt(n);
}

// Main CLI handler
function main() {
  const args = process.argv.slice(2);

  if (args.length < 2) {
    console.log('Usage: calculator <number1> <operation> [number2]');
    console.log('Operations: + (add), - (subtract), * (multiply), / (divide), % (modulo), ^ (power), sqrt (square root)');
    process.exit(1);
  }

  const num1 = parseFloat(args[0]);
  const operation = args[1];

  if (isNaN(num1)) {
    console.error('Error: Invalid number input');
    process.exit(1);
  }

  let result;

  // Handle single-argument operations (sqrt)
  if (operation === 'sqrt') {
    try {
      result = squareRoot(num1);
      console.log(`sqrt(${num1}) = ${result}`);
    } catch (error) {
      console.error(`Error: ${error.message}`);
      process.exit(1);
    }
    return;
  }

  // Handle two-argument operations
  if (args.length < 3) {
    console.error('Error: This operation requires two numbers');
    process.exit(1);
  }

  const num2 = parseFloat(args[2]);

  if (isNaN(num2)) {
    console.error('Error: Invalid number input');
    process.exit(1);
  }

  try {
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
      case '%':
        result = modulo(num1, num2);
        break;
      case '^':
        result = power(num1, num2);
        break;
      default:
        console.error(`Error: Unknown operation '${operation}'`);
        console.log('Supported operations: +, -, *, /, %, ^, sqrt');
        process.exit(1);
    }

    console.log(`${num1} ${operation} ${num2} = ${result}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
}

// Export functions for testing
module.exports = {
  add,
  subtract,
  multiply,
  divide,
  modulo,
  power,
  squareRoot
};

// Run main if script is executed directly
if (require.main === module) {
  main();
}
