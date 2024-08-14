/**
 * Groups an array of objects by a specified property.
 *
 * This function creates an object where each key is a unique value of the specified property,
 * and the corresponding value is an array of objects that have that property value.
 *
 * @param {Array<Record<string, any>>} array - The array of objects to group.
 * @param {string} property - The property by which to group the objects.
 * @returns {Record<string, Array<Record<string, any>>>} - An object where keys are unique property values and values are arrays of objects.
 *
 * @throws {Error} - An error is thrown if the array is not provided or if the property is not found in an object.
 *
 * @example
 * const data = [
 *   { id: 1, category: 'A', value: 10 },
 *   { id: 2, category: 'B', value: 20 },
 *   { id: 3, category: 'A', value: 30 },
 *   { id: 4, category: 'B', value: 40 },
 * ];
 *
 * const grouped = groupBy(data, 'category');
 * console.log(grouped);
 * // Output:
 * // {
 * //   A: [
 * //     { id: 1, category: 'A', value: 10 },
 * //     { id: 3, category: 'A', value: 30 }
 * //   ],
 * //   B: [
 * //     { id: 2, category: 'B', value: 20 },
 * //     { id: 4, category: 'B', value: 40 }
 * //   ]
 * // }
 */
export function groupBy<T>(array: T[], property: keyof T): Record<string, T[]> {
	try {
		return array.reduce((acc, obj) => {
			const key = obj[property] as unknown as string
			if (!acc[key]) {
				acc[key] = []
			}
			acc[key].push(obj)
			return acc
		}, {} as Record<string, T[]>)
	} catch (error) {
		throw new Error(error instanceof Error ? error.message : "An error has occurred")
	}
}
