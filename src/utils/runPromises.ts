/**
 * Executes an array of promises (or values) concurrently and returns an array of resolved results.
 *
 * The function accepts an array that can contain a mix of promises and regular values.
 * It ensures that all items are treated as promises by converting non-promise values
 * into resolved promises. It then executes all the promises concurrently and
 * collects the results in an array, preserving the order of the input.
 *
 * @template T - A tuple of types representing the resolved values of the promises.
 *
 * @param {Array<Promise<any> | any>} promises - An array of promises or values.
 * Each element can be either a promise or a regular value. Non-promise values
 * will be automatically wrapped in a promise.
 *
 * @returns {Promise<T[]>} - A promise that resolves to an array containing the results
 * of each promise (or value) in the input array. The order of the results will
 * match the order of the input promises.
 *
 * @throws {Error} - An error is thrown if the input is not an array or if an error occurs during promise resolution.
 *
 * @example
 * // Example with mixed promises and values
 * const promise1 = Promise.resolve(42);
 * const value2 = 'hello';
 * const promise3 = new Promise<string>((resolve) => setTimeout(() => resolve('world'), 1000));
 *
 * runPromises([promise1, value2, promise3])
 *   .then(results => {
 *     console.log(results); // Output: [42, 'hello', 'world']
 *   });
 */
export function runPromises<T extends any[]>(promises: [...{ [K in keyof T]: Promise<T[K]> | T[K] }]): Promise<T[]> {
	try {
		// Convert non-promise values to promises
		const promiseArray = promises.map((p) => Promise.resolve(p))

		// Use Promise.all to execute promises concurrently and collect results
		return Promise.all(promiseArray)
	} catch (error) {
		throw new Error(error instanceof Error ? error.message : "An error has occurred")
	}
}
