import { createArray, randomArray, arraySum } from "../src"

describe("createArray", () => {
	it("should create an array of specified length with all elements initialized to the given value", () => {
		const result = createArray(5, "x")
		expect(result).toEqual(["x", "x", "x", "x", "x"])
	})

	it("should create an array of specified length with all elements initialized to undefined if no value is provided", () => {
		const result = createArray(4)
		expect(result).toEqual([undefined, undefined, undefined, undefined])
	})

	it("should create an empty array if length is 0", () => {
		const result = createArray(0, "test")
		expect(result).toEqual([])
	})

	it("should create an array of length 1 with the provided value", () => {
		const result = createArray(1, 42)
		expect(result).toEqual([42])
	})
})

describe("randomArray", () => {
	it("should return an array of random elements without replacement", () => {
		const result = randomArray([1, 2, 3, 4, 5], 3)
		expect(result).toHaveLength(3)
		result.forEach((element) => expect(element).toBeLessThan(6))
	})

	it("should return all elements if quantity exceeds array length", () => {
		const result = randomArray([1, 2], 5)
		expect(result).toHaveLength(2)
		expect(result).toEqual(expect.arrayContaining([1, 2]))
	})

	it("should return an empty array if quantity is 0", () => {
		const result = randomArray([1, 2, 3], 0)
		expect(result).toEqual([])
	})

	it("should handle an empty array correctly", () => {
		const result = randomArray([], 3)
		expect(result).toEqual([])
	})

	it("should not modify the original array", () => {
		const originalArray = [1, 2, 3, 4, 5]
		randomArray([...originalArray], 3)
		expect(originalArray).toEqual([1, 2, 3, 4, 5])
	})
})

describe("arraySum", () => {
	it("should return the sum of all values in the array", () => {
		const result = arraySum([10, -2, 5, 0])
		expect(result).toBe(13)
	})

	it("should return 0 for an empty array", () => {
		const result = arraySum([])
		expect(result).toBe(0)
	})

	it("should handle arrays with only one element", () => {
		const result = arraySum([42])
		expect(result).toBe(42)
	})

	it("should handle arrays with negative values", () => {
		const result = arraySum([-1, -2, -3])
		expect(result).toBe(-6)
	})
})
