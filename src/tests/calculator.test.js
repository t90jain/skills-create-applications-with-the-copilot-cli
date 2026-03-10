const {
  add,
  subtract,
  multiply,
  divide,
  modulo,
  power,
  squareRoot
} = require('../calculator');

describe('Calculator - Basic Operations', () => {
  describe('add', () => {
    test('should add two positive numbers', () => {
      expect(add(5, 3)).toBe(8);
    });

    test('should add a positive and negative number', () => {
      expect(add(10, -5)).toBe(5);
    });

    test('should add two negative numbers', () => {
      expect(add(-5, -3)).toBe(-8);
    });

    test('should add zero', () => {
      expect(add(5, 0)).toBe(5);
    });
  });

  describe('subtract', () => {
    test('should subtract two positive numbers', () => {
      expect(subtract(10, 3)).toBe(7);
    });

    test('should subtract a negative number', () => {
      expect(subtract(10, -5)).toBe(15);
    });

    test('should subtract and get a negative result', () => {
      expect(subtract(3, 10)).toBe(-7);
    });

    test('should subtract zero', () => {
      expect(subtract(5, 0)).toBe(5);
    });
  });

  describe('multiply', () => {
    test('should multiply two positive numbers', () => {
      expect(multiply(5, 3)).toBe(15);
    });

    test('should multiply positive and negative numbers', () => {
      expect(multiply(5, -3)).toBe(-15);
    });

    test('should multiply two negative numbers', () => {
      expect(multiply(-5, -3)).toBe(15);
    });

    test('should multiply by zero', () => {
      expect(multiply(5, 0)).toBe(0);
    });
  });

  describe('divide', () => {
    test('should divide two positive numbers', () => {
      expect(divide(10, 2)).toBe(5);
    });

    test('should divide positive and negative numbers', () => {
      expect(divide(10, -2)).toBe(-5);
    });

    test('should divide two negative numbers', () => {
      expect(divide(-10, -2)).toBe(5);
    });

    test('should divide resulting in a decimal', () => {
      expect(divide(10, 3)).toBeCloseTo(3.333, 2);
    });

    test('should throw error when dividing by zero', () => {
      expect(() => divide(10, 0)).toThrow('Cannot divide by zero');
    });

    test('should throw error for any number divided by zero', () => {
      expect(() => divide(0, 0)).toThrow('Cannot divide by zero');
    });
  });
});

describe('Calculator - Extended Operations', () => {
  describe('modulo', () => {
    test('should calculate modulo with 5 % 2', () => {
      expect(modulo(5, 2)).toBe(1);
    });

    test('should calculate modulo with positive numbers', () => {
      expect(modulo(10, 3)).toBe(1);
    });

    test('should calculate modulo with negative dividend', () => {
      expect(modulo(-10, 3)).toBe(-1);
    });

    test('should calculate modulo with negative divisor', () => {
      expect(modulo(10, -3)).toBe(1);
    });

    test('should return zero when divisible', () => {
      expect(modulo(10, 5)).toBe(0);
    });

    test('should throw error when modulo by zero', () => {
      expect(() => modulo(10, 0)).toThrow('Cannot perform modulo with zero');
    });

    test('should calculate modulo of zero', () => {
      expect(modulo(0, 5)).toBe(0);
    });
  });

  describe('power', () => {
    test('should calculate power with 2 ^ 3', () => {
      expect(power(2, 3)).toBe(8);
    });

    test('should calculate power with 2 ^ 8', () => {
      expect(power(2, 8)).toBe(256);
    });

    test('should calculate square with 5 ^ 2', () => {
      expect(power(5, 2)).toBe(25);
    });

    test('should calculate power with negative exponent', () => {
      expect(power(2, -2)).toBe(0.25);
    });

    test('should calculate power with zero exponent', () => {
      expect(power(5, 0)).toBe(1);
    });

    test('should calculate power with 1 as base', () => {
      expect(power(1, 100)).toBe(1);
    });

    test('should calculate power with negative base and even exponent', () => {
      expect(power(-2, 2)).toBe(4);
    });

    test('should calculate power with negative base and odd exponent', () => {
      expect(power(-2, 3)).toBe(-8);
    });

    test('should calculate power with zero base', () => {
      expect(power(0, 5)).toBe(0);
    });

    test('should calculate power with decimal base', () => {
      expect(power(1.5, 2)).toBe(2.25);
    });
  });

  describe('squareRoot', () => {
    test('should calculate square root with √16', () => {
      expect(squareRoot(16)).toBe(4);
    });

    test('should calculate square root of perfect squares', () => {
      expect(squareRoot(9)).toBe(3);
    });

    test('should calculate square root of 1', () => {
      expect(squareRoot(1)).toBe(1);
    });

    test('should calculate square root of 0', () => {
      expect(squareRoot(0)).toBe(0);
    });

    test('should calculate square root resulting in decimal', () => {
      expect(squareRoot(2)).toBeCloseTo(1.414, 3);
    });

    test('should calculate square root of large number', () => {
      expect(squareRoot(100)).toBe(10);
    });

    test('should throw error for negative numbers', () => {
      expect(() => squareRoot(-4)).toThrow('Cannot calculate square root of a negative number');
    });

    test('should throw error for any negative number', () => {
      expect(() => squareRoot(-1)).toThrow('Cannot calculate square root of a negative number');
    });

    test('should throw error for -16', () => {
      expect(() => squareRoot(-16)).toThrow('Cannot calculate square root of a negative number');
    });

    test('should calculate square root of decimal number', () => {
      expect(squareRoot(0.25)).toBe(0.5);
    });
  });
});
