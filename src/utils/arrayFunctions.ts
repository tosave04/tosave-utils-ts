/**
 * Creates an array of a specified length with all elements initialized to a given value.
 * If no value is provided, each element will be initialized to `undefined`.
 *
 * @param {number} length - The number of elements in the array.
 * @param {any} [value] - The value to initialize each element of the array with. Defaults to `undefined` if not provided.
 * @returns {any[]} - An array of the specified length where each element is set to the provided value or `undefined`.
 *
 * @example
 * const array1 = createArray(5, "x");
 * console.log(array1); // Output: ["x", "x", "x", "x", "x"]
 *
 * const array2 = createArray(3, 42);
 * console.log(array2); // Output: [42, 42, 42]
 *
 * const array3 = createArray(4);
 * console.log(array3); // Output: [undefined, undefined, undefined, undefined]
 */
export const createArray = (length: number, value?: any): any[] => {
	return Array.from({ length }, () => value)
}

/**
 * Selects a specified number of random elements from an array without replacement.
 *
 * @param {any[]} array - The array from which to select random elements.
 * @param {number} quantity - The number of random elements to select.
 * @returns {any[]} - An array containing the randomly selected elements.
 *
 * The function performs the following steps:
 *
 * 1. It checks if the requested quantity is greater than the length of the array. If so, it adjusts the quantity to the array's length.
 * 2. It iterates up to the specified quantity, each time selecting a random index from the remaining elements in the array.
 * 3. The element at the randomly chosen index is removed from the original array to avoid reselection.
 * 4. The removed element is added to a new array which will be returned at the end.
 *
 * Note that this method modifies the original array by removing selected elements.
 *
 * Examples:
 * - If `array = [1, 2, 3, 4, 5]` and `quantity = 3`, the function might return `[3, 1, 5]`.
 * - If `quantity` exceeds the length of the array, e.g., `array = [1, 2]` and `quantity = 5`, it will return `[1, 2]`.
 */
export const randomArray = (array: any[], quantity: number): any[] => {
	const newArray: any[] = []

	// Ensure the requested quantity does not exceed the array's length
	const arrayLength = array.length
	const maxQuantity = arrayLength > quantity ? quantity : arrayLength

	for (let i = 0; i < maxQuantity; i++) {
		const random = Math.floor(Math.random() * array.length)
		const randomElement = array[random]

		// Remove the selected element from the array to prevent reselection
		array.splice(random, 1)

		newArray.push(randomElement)
	}

	return newArray
}

/**
 * Sums all the values in an array.
 *
 * This function uses the `reduce` method to calculate the total sum of all elements in the provided array.
 * It iterates through each element and accumulates the sum starting from an initial value.
 *
 * @param {number[]} numbers - An array of numbers to be summed.
 * @returns {number} - The total sum of all values in the array.
 *
 * @example
 * const mixedArray = [10, -2, 5, 0];
 * const sumMixed = mixedArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
 * console.log(sumMixed); // Output: 13
 */
export const arraySum = (numbers: number[]): number =>
	numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
