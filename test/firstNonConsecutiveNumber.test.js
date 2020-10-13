const firstNonConsecutiveNumber = require("../src/firstNonConsecutiveNumber");

// write test cases to ensure firstNonConsecutiveNumber() works as expected

it('should return result with two non-consecutive numbers', () => {
    expect(firstNonConsecutiveNumber([1,3])).toBe(3);
});

it('should return result with more than two numbers', () => {
    expect(firstNonConsecutiveNumber([1,2,4,5,6])).toBe(4);
});

it('should return result when an array contains negative numbers', () => {
    expect(firstNonConsecutiveNumber([-1,0,1,-10])).toBe(-10);
});

it('should return null when all numbers are consecutive numbers', () => {
    expect(firstNonConsecutiveNumber([1,2,3,4,5,6])).toBe(null);
});
