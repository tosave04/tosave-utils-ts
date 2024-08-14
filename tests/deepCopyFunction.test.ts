import { deepCopyFunction } from "../src"

describe("deepCopyFunction", () => {
	it("should return a deep copy of a simple object", () => {
		const original = { a: 1, b: 2 }
		const copy = deepCopyFunction(original)
		expect(copy).toEqual(original)
		expect(copy).not.toBe(original) // Ensure it is a different instance
	})

	it("should return a deep copy of a nested object", () => {
		const original = { a: 1, b: { c: 2, d: [3, 4] } }
		const copy = deepCopyFunction(original)
		expect(copy).toEqual(original)
		expect(copy.b).not.toBe(original.b) // Ensure nested objects are different instances
		expect(copy.b.d).not.toBe(original.b.d) // Ensure nested arrays are different instances
	})

	it("should return a deep copy of an array of objects", () => {
		const original = [{ a: 1 }, { b: 2 }]
		const copy = deepCopyFunction(original)
		expect(copy).toEqual(original)
		expect(copy).not.toBe(original) // Ensure it is a different instance
		expect(copy[0]).not.toBe(original[0]) // Ensure nested objects are different instances
	})

	it("should return a deep copy of a deeply nested array and object", () => {
		const original = [{ a: { b: [1, 2, { c: 3 }] } }]
		const copy = deepCopyFunction(original)
		expect(copy).toEqual(original)
		expect(copy).not.toBe(original) // Ensure it is a different instance
		expect(copy[0].a).not.toBe(original[0].a) // Ensure nested objects are different instances
		expect(copy[0].a.b).not.toBe(original[0].a.b) // Ensure nested arrays are different instances
	})

	it("should handle an empty object", () => {
		const original = {}
		const copy = deepCopyFunction(original)
		expect(copy).toEqual(original)
		expect(copy).not.toBe(original) // Ensure it is a different instance
	})

	it("should handle an empty array", () => {
		const original: any[] = []
		const copy = deepCopyFunction(original)
		expect(copy).toEqual(original)
		expect(copy).not.toBe(original) // Ensure it is a different instance
	})

	it("should handle primitive values (no deep copy needed)", () => {
		const original = 42
		const copy = deepCopyFunction(original)
		expect(copy).toBe(original) // Primitive values should be the same instance
	})

	it("should handle null values", () => {
		const original = null
		const copy = deepCopyFunction(original)
		expect(copy).toBe(original) // Null should be the same instance
	})

	it("should handle nested arrays with different types", () => {
		const original: any[] = [1, { a: [2, 3], b: "test" }, [4, 5]]
		const copy = deepCopyFunction(original)
		expect(copy).toEqual(original)
		expect(copy).not.toBe(original) // Ensure it is a different instance
		expect(copy[1].a).not.toBe(original[1].a) // Ensure nested arrays are different instances
		expect(copy[1].b).toBe(original[1].b) // Ensure non-object properties are the same
	})

	it("should ensure that modifying the original array does not affect the deep copy", () => {
		// Initial array with nested objects
		const original = [
			{ name: "Alice", scores: [10, 20] },
			{ name: "Bob", scores: [30, 40] },
		]

		// Create a deep copy of the original array
		const copy = deepCopyFunction(original)

		// Modify the original array
		original[0].name = "Charlie"
		original[1].scores.push(50)

		// Verify that the copy remains unaffected by changes to the original
		expect(copy).toEqual([
			{ name: "Alice", scores: [10, 20] }, // The name should remain "Alice"
			{ name: "Bob", scores: [30, 40] }, // The scores should remain [30, 40]
		])
		expect(copy).not.toBe(original) // Ensure that the copy and the original are different instances
		expect(copy[0]).not.toBe(original[0]) // Ensure that the objects in the copy and the original are different instances
		expect(copy[1]).not.toBe(original[1]) // Ensure that the objects in the copy and the original are different instances
		expect(copy[1].scores).not.toBe(original[1].scores) // Ensure that the nested arrays in the copy and the original are different instances
	})
})
