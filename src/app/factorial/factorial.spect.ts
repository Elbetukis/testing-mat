import { calculateFactorial } from './factorial';

describe('calculateFactorial', () => {
  it('should return 0 if x is negative', () => {
    expect(calculateFactorial(-1)).toBe(0);
    expect(calculateFactorial(-5)).toBe(0);
  });

  it('should return 1 if x is 0', () => {
    expect(calculateFactorial(0)).toBe(1);
  });

  it('should return 2 if x is 2', () => {
    expect(calculateFactorial(2)).toBe(2);
  });

  it('should return 6 if x is 3', () => {
    expect(calculateFactorial(3)).toBe(6);
  });

  it('should return 24 if x is 4', () => {
    expect(calculateFactorial(4)).toBe(24);
  });

  it('should return 120 if x is 5', () => {
    expect(calculateFactorial(5)).toBe(120);
  });

  it('should return 0 if x > 15', () => {
    expect(calculateFactorial(16)).toBe(0);
    expect(calculateFactorial(100)).toBe(0);
  });
});
