// Sum all the numbers of the array except the highest and the lowest number
// If the highest and lowest numbers appear more than once, exclude ALL occurrences
//
// e.g. sumWithoutHighestAndLowest([6, 2, 1, 8, 10]) => 16
// e.g. sumWithoutHighestAndLowest([1, 1, 11, 2, 3]) => 5

const sumWithoutHighestAndLowest = array => {
	let sortedArray = array.sort((a, b) => a - b);
	
	let firstValue = sortedArray[0];
	let lastValue = sortedArray[sortedArray.length - 1];
	
	sortedArray.unshift(0);

	return sortedArray.reduce((acc, curr) => {
		if (curr === firstValue || curr === lastValue) {
			return acc;
		} else {
			return acc + curr;
		}
	});
};

console.log(sumWithoutHighestAndLowest([6, 2, 1, 8, 10]));

module.exports = sumWithoutHighestAndLowest;
