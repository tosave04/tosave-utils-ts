/**
 * Executes an array of functions that return promises in sequence.
 *
 * Each function in the array is executed in the order it appears, with each promise starting only after
 * the previous one has been resolved. The result of each promise is passed to the next function in the sequence.
 * The type of the final result is inferred based on the return type of the last function in the sequence.
 *
 * @param {Array<Func<any, any>>} funcs - An array of functions where each function takes the result of the previous promise
 *                                        and returns a promise or a direct result. The type of the final result is inferred
 *                                        from the last function in the array.
 * @returns {Promise<InferReturnType<T>>} - A promise that resolves with the result of the last function in the sequence.
 *                                          The type of the result is inferred from the last function.
 *
 * @example
 * // Define functions that return promises
 * const func1 = (prev: string) => Promise.resolve(1); // Returns a number
 * const func2 = (prev: number) => Promise.resolve("result"); // Returns a string
 * const func3 = (prev: string) => Promise.resolve(true); // Returns a boolean
 *
 * // Execute functions in sequence
 * runPromiseInSequence([func1, func2, func3])
 *   .then(result => {
 *     console.log(result); // Output: true
 *   });
 *
 * @example
 * // Define functions with different return types
 * const funcA = (prev: number) => Promise.resolve(10); // Returns a number
 * const funcB = (prev: number) => Promise.resolve("hello"); // Returns a string
 * const funcC = (prev: string) => Promise.resolve(false); // Returns a boolean
 *
 * // Execute functions in sequence
 * runPromiseInSequence([funcA, funcB, funcC])
 *   .then(result => {
 *     console.log(result); // Output: false
 *   });
 */
export function runPromiseInSequence<T extends Func<any, any>[]>(funcs: T): Promise<InferReturnType<T>> {
	return funcs.reduce(async (promiseChain, currentFunc) => {
		const chainedResult = await promiseChain
		return await currentFunc(chainedResult)
	}, Promise.resolve() as Promise<Parameters<T[0]>[0]>)
}

/**
 * Type alias for a function that takes a previous result of type `T` and returns a promise or a value of type `R`.
 *
 * @template T - The type of the previous result
 * @template R - The type of the result returned by the function
 */
type Func<T, R> = (previousResult: T) => Promise<R> | R

/**
 * Infers the return type of the last function in a sequence of functions.
 *
 * @template T - An array of functions. Each function in the array must conform to `Func<any, any>`.
 * @returns The inferred return type of the last function in the array.
 */
type InferReturnType<T> = T extends (infer U)[] ? (U extends Func<any, infer R> ? R : never) : never
