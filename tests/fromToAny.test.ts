import { fromAnyTo, fromAnyToNumber, fromAnyToString, fromAnyToBoolean, fromAnyToArray, fromAnyToObject } from "../src"

describe("fromToAny", () => {
	describe("when expected type is 'number'", () => {
		it("should return the same number if passed a valid number", () => {
			const convertToNumber = fromAnyTo("number")
			expect(convertToNumber(123)).toBe(123)
		})

		it("should convert a numeric string to a number", () => {
			const convertToNumber = fromAnyTo("number")
			expect(convertToNumber("456")).toBe(456)
		})

		it("should return undefined if a non-convertible string is provided", () => {
			const convertToNumber = fromAnyTo("number")
			expect(convertToNumber("abc")).toBeUndefined()
		})
	})

	describe("when expected type is 'string'", () => {
		it("should return the same string if passed a string", () => {
			const convertToString = fromAnyTo("string")
			expect(convertToString("hello")).toBe("hello")
		})

		it("should convert a number to a string", () => {
			const convertToString = fromAnyTo("string")
			expect(convertToString(789)).toBe("789")
		})

		it("should return undefined when provided a value that is not a string or number", () => {
			const convertToString = fromAnyTo("string")
			expect(convertToString(true)).toBeUndefined()
		})
	})

	describe("when expected type is 'boolean'", () => {
		it("should return the same boolean if passed a boolean", () => {
			const convertToBoolean = fromAnyTo("boolean")
			expect(convertToBoolean(true)).toBe(true)
		})

		it("should return undefined when provided a non-boolean value", () => {
			const convertToBoolean = fromAnyTo("boolean")
			expect(convertToBoolean("true")).toBeUndefined()
		})
	})

	describe("when expected type is 'array'", () => {
		it("should return the same array if passed a non-empty array", () => {
			const convertToArray = fromAnyTo("array")
			const arr = [1, 2, 3]
			expect(convertToArray(arr)).toEqual(arr)
		})

		it("should return undefined if passed an empty array", () => {
			const convertToArray = fromAnyTo("array")
			expect(convertToArray([])).toBeUndefined()
		})

		it("should return undefined if not an array", () => {
			const convertToArray = fromAnyTo("array")
			expect(convertToArray("not an array")).toBeUndefined()
		})
	})

	describe("when expected type is 'object'", () => {
		it("should return the same object if passed a valid object (non-null and not an array)", () => {
			const convertToObject = fromAnyTo("object")
			const obj = { key: "value" }
			expect(convertToObject(obj)).toEqual(obj)
		})

		it("should return undefined if passed null", () => {
			const convertToObject = fromAnyTo("object")
			expect(convertToObject(null)).toBeUndefined()
		})

		it("should return undefined if passed an array", () => {
			const convertToObject = fromAnyTo("object")
			expect(convertToObject([1, 2, 3])).toBeUndefined()
		})

		it("should return undefined for non-object values", () => {
			const convertToObject = fromAnyTo("object")
			expect(convertToObject("string")).toBeUndefined()
		})
	})
})

describe("fromAnyToNumber", () => {
	it("should return the same number if a valid number is passed", () => {
		expect(fromAnyToNumber(123)).toBe(123)
	})

	it("should convert a numeric string to a number", () => {
		expect(fromAnyToNumber("123")).toBe(123)
	})

	it("should return undefined for a non-convertible string", () => {
		expect(fromAnyToNumber("abc")).toBeUndefined()
	})

	it("should return undefined for a boolean input", () => {
		expect(fromAnyToNumber(true)).toBeUndefined()
	})
})

describe("fromAnyToString", () => {
	it("should return the same string if a string is passed", () => {
		expect(fromAnyToString("abc")).toBe("abc")
	})

	it("should convert a number to a string", () => {
		expect(fromAnyToString(123)).toBe("123")
	})

	it("should return undefined for a boolean input", () => {
		expect(fromAnyToString(true)).toBeUndefined()
	})

	it("should return undefined for an object input", () => {
		expect(fromAnyToString({ key: "value" })).toBeUndefined()
	})
})

describe("fromAnyToBoolean", () => {
	it("should return the same boolean if a boolean is passed", () => {
		expect(fromAnyToBoolean(true)).toBe(true)
		expect(fromAnyToBoolean(false)).toBe(false)
	})

	it("should return undefined for a numeric input", () => {
		expect(fromAnyToBoolean(1)).toBeUndefined()
	})

	it("should return undefined for a string input", () => {
		expect(fromAnyToBoolean("true")).toBeUndefined()
	})
})

describe("fromAnyToArray", () => {
	it("should return the same array if passed a non-empty array", () => {
		const arr = [1, 2, 3]
		expect(fromAnyToArray(arr)).toEqual(arr)
	})

	it("should return undefined if passed an empty array", () => {
		expect(fromAnyToArray([])).toBeUndefined()
	})

	it("should return undefined if the input is not an array", () => {
		expect(fromAnyToArray("not an array")).toBeUndefined()
	})
})

describe("fromAnyToObject", () => {
	it("should return the same object if a valid object is passed", () => {
		const obj = { a: 1, b: 2 }
		expect(fromAnyToObject(obj)).toEqual(obj)
	})

	it("should return undefined if passed null", () => {
		expect(fromAnyToObject(null)).toBeUndefined()
	})

	it("should return undefined if passed an array", () => {
		expect(fromAnyToObject([1, 2, 3])).toBeUndefined()
	})

	it("should return undefined for non-object values", () => {
		expect(fromAnyToObject("abc")).toBeUndefined()
	})
})
