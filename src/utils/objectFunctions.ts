/**
 * Calculates the average value for a specific key across an array of objects.
 *
 * @param {Record<string, any>[]} data - An array of objects, each potentially containing the key whose values are to be averaged.
 * @param {string} key - The key in the objects whose values will be averaged.
 * @returns {number} - The average of the values for the specified key. If there are no valid numeric values, the function returns 0.
 *
 * The function performs the following steps:
 *
 * 1. **Sum Calculation**: Uses the `objectKeySum` function to calculate the total sum of the values for the specified key.
 * 2. **Count Valid Values**: Filters the array to count how many valid (numeric and greater than zero) values exist for the specified key.
 * 3. **Calculate Average**: Divides the total sum by the number of valid values. Ensures at least 1 is used as the denominator to avoid division by zero.
 * 4. **Return the Average**: Returns the calculated average.
 *
 * @example
 * const data = [
 *     { amount: "10" },
 *     { amount: "20" },
 *     { amount: "not a number" },
 *     { amount: "30" }
 * ];
 * const average = objectKeyAverage(data, "amount");
 * console.log(average); // Output: 15
 */
export const objectKeyAverage = (data: Record<string, any>[], key: string): number =>
	objectKeySum(data, key) / Math.max(data.filter((line) => Number(line?.[key]) > 0).length, 1)

/**
 * Finds the maximum value for a specific key across an array of objects.
 *
 * @param {Record<string, any>[]} data - An array of objects, each potentially containing the key whose maximum value is to be determined.
 * @param {string} key - The key in the objects whose maximum value is to be found.
 * @returns {number} - The maximum value for the specified key. If no valid numeric values are found, returns 0.
 *
 * The function performs the following steps:
 *
 * 1. **Reduce**: Uses the `reduce` method to iterate through the array and find the maximum value.
 *    - **Convert to Number**: Converts the value of the key to a number using `Number()`.
 *    - **Math.max**: Compares the current value with the accumulator to find the maximum.
 * 2. **Initialization of Accumulator**: Initializes the accumulator to `0`, which is a suitable default for finding the maximum.
 * 3. **Return the Maximum**: Returns the maximum value found or `0` if no valid values are present.
 *
 * @example
 * const data = [
 *     { value: "10" },
 *     { value: "20" },
 *     { value: "not a number" },
 *     { value: "30" }
 * ];
 * const max = objectKeyMax(data, "value");
 * console.log(max); // Output: 30
 */
export const objectKeyMax = (data: Record<string, any>[], key: string): number =>
	data.reduce((acc, curr) => Math.max(acc, Number(curr?.[key])), 0)

/**
 * Finds the minimum value for a specific key across an array of objects.
 *
 * @param {Record<string, any>[]} data - An array of objects, each potentially containing the key whose minimum value is to be determined.
 * @param {string} key - The key in the objects whose minimum value is to be found.
 * @returns {number} - The minimum value for the specified key. If no valid numeric values are found, returns Infinity.
 *
 * The function performs the following steps:
 *
 * 1. **Reduce**: Uses the `reduce` method to iterate through the array and find the minimum value.
 *    - **Convert to Number**: Converts the value of the key to a number using `Number()`.
 *    - **Math.min**: Compares the current value with the accumulator to find the minimum.
 * 2. **Initialization of Accumulator**: Initializes the accumulator to `Infinity`, which ensures that any valid number will be less than the initial value.
 * 3. **Return the Minimum**: Returns the minimum value found or `Infinity` if no valid values are present.
 *
 * @example
 * const data = [
 *     { value: "10" },
 *     { value: "20" },
 *     { value: "not a number" },
 *     { value: "5" }
 * ];
 * const min = objectKeyMin(data, "value");
 * console.log(min); // Output: 5
 */
export const objectKeyMin = (data: Record<string, any>[], key: string): number =>
	data.reduce((acc, curr) => Math.min(acc, Number(curr?.[key])), Infinity)

/**
 * Calculates the sum of values for a specific key across an array of objects.
 *
 * @param {Record<string, any>[]} data - An array of objects, each potentially containing the key whose values are to be summed.
 * @param {string} key - The key in the objects whose values are to be summed.
 * @returns {number} - The total sum of the values for the specified key. Non-numeric values are ignored, and if no valid numeric values are found, returns 0.
 *
 * The function performs the following steps:
 *
 * 1. **Reduce**: Uses the `reduce` method to iterate through the array and compute the sum.
 *    - **Convert to Number**: Converts the value of the key to a number using `Number()`.
 *    - **Check for NaN**: Uses `Number.isNaN()` to check if the converted value is not a number, and if so, skips it.
 *    - **Accumulate Sum**: Adds valid numeric values to the accumulator.
 * 2. **Initialization of Accumulator**: Initializes the accumulator to `0`, which is the starting point for the sum calculation.
 * 3. **Return the Sum**: Returns the total sum of the valid numeric values found for the specified key.
 *
 * @example
 * const data = [
 *     { value: "10" },
 *     { value: "20" },
 *     { value: "not a number" },
 *     { value: "30" }
 * ];
 * const sum = objectKeySum(data, "value");
 * console.log(sum); // Output: 60
 */
export const objectKeySum = (data: Record<string, any>[], key: string): number =>
	data.reduce((acc, curr) => (Number.isNaN(Number(curr?.[key])) ? acc : acc + Number(curr[key])), 0)
