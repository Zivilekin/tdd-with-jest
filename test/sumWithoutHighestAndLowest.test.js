// Sum all the numbers of the array except the highest and the lowest number
// If the highest and lowest numbers appear more than once, exclude ALL occurrences
//
// e.g. sumWithoutHighestAndLowest([6, 2, 1, 8, 10]) => 16
// e.g. sumWithoutHighestAndLowest([1, 1, 11, 2, 3]) => 5


const sumWithoutHighestAndLowest = require('../src/sumWithoutHighestAndLowest.js');

it('should sum the numbers when they doesn\'t repeat', () => {
    expect(sumWithoutHighestAndLowest([6, 2, 1, 8, 10])).toBe(16);
});

it('should sum the numbers when the highest one repeats', () => {
    expect(sumWithoutHighestAndLowest([1, 1, 11, 2, 3])).toBe(5);
});

it('should sum the numbers when the lowest one repeats', () => {
    expect(sumWithoutHighestAndLowest([10, 2, 1, 8, 10])).toBe(10);
});

it('should sum the numbers when the lowest one repeats more than two times', () => {
    expect(sumWithoutHighestAndLowest([1, 2, 1, 1, 10])).toBe(2);
});

it('should return 0 when all the numbers in an array is the same', () => {
    expect(sumWithoutHighestAndLowest([8, 8, 8, 8, 8])).toBe(0);
});
