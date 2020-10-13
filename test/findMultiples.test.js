const findMultiples = require("../src/findMultiples");

// findMultiples(2, 6) // return [2, 4, 6] as 2, 4, and 6 are the multiples of 2 up to 6.


// write test cases to ensure findMultiples() works as expected

it('should return array of numbers with limit is higher than the base', () => {
    expect(findMultiples(2,6)).toEqual([2,4,6]);
});

it('should return array of numbers with limit is not multiple of the base', () => {
    expect(findMultiples(3,10)).toEqual([3,6,9]);
});

it('should return array of one number when limit is the same number as the base', () => {
    expect(findMultiples(4,4)).toEqual([4]);
});
