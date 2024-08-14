/**
 * Creates a deep copy of the provided object or array.
 *
 * @param {T} inObject - The object or array to be deeply copied.
 * @returns {T} - A new object or array that is a deep copy of the input.
 *
 * The function checks if the input is an object. If it's not, the input value
 * is returned as is (e.g., if it's a primitive type). If the input is an object
 * or array, the function initializes a new array or object accordingly.
 *
 * The function then iterates over the keys of the input object, and for each key,
 * it recursively calls itself to perform a deep copy of the value. This ensures
 * that nested objects and arrays are also deeply copied.
 *
 * Finally, the deep copied object or array is returned.
 */
export const deepCopyFunction = <T>(inObject: T): T => {
	let outObject: any, value: any, key: keyof T

	if (typeof inObject !== "object" || inObject === null) {
		return inObject // Return the value if inObject is not an object
	}

	// Create an array or object to hold the values
	outObject = Array.isArray(inObject) ? [] : {}

	for (key in inObject) {
		value = inObject[key]

		// Recursively (deep) copy for nested objects, including arrays
		outObject[key] = deepCopyFunction(value)
	}

	return outObject as T
}
