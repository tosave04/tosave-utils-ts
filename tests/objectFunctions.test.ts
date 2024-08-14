import { objectKeyAverage, objectKeyMax, objectKeyMin, objectKeySum } from "../src"

describe("objectKeyAverage", () => {
	it("should calculate the average of numeric values correctly", () => {
		const data = [{ amount: "10" }, { amount: "20" }, { amount: "not a number" }, { amount: "30" }]
		const average = objectKeyAverage(data, "amount")
		expect(average).toBe(20) // (10 + 20 + 30) / 3
	})

	it("should return 0 if there are no valid numeric values", () => {
		const data = [{ amount: "not a number" }, { amount: "also not a number" }]
		const average = objectKeyAverage(data, "amount")
		expect(average).toBe(0)
	})

	it("should handle empty array", () => {
		const data: { amount?: string }[] = []
		const average = objectKeyAverage(data, "amount")
		expect(average).toBe(0)
	})

	it("should handle cases where the key is missing", () => {
		const data = [{ otherKey: "10" }, { otherKey: "20" }]
		const average = objectKeyAverage(data, "amount")
		expect(average).toBe(0)
	})
})

describe("objectKeyMax", () => {
	it("should return NaN", () => {
		const data = [{ value: "10" }, { value: "20" }, { value: "not a number" }, { value: "30" }]
		const max = objectKeyMax(data, "value")
		expect(max).toBe(NaN)
	})

	it("should return NaN if there are no valid numeric values", () => {
		const data = [{ value: "not a number" }, { value: "also not a number" }]
		const max = objectKeyMax(data, "value")
		expect(max).toBe(NaN)
	})

	it("should handle empty array", () => {
		const data: { value?: string }[] = []
		const max = objectKeyMax(data, "value")
		expect(max).toBe(0)
	})

	it("should return NaN where the key is missing", () => {
		const data = [{ otherKey: "10" }, { otherKey: "20" }]
		const max = objectKeyMax(data, "value")
		expect(max).toBe(NaN)
	})
})

describe("objectKeyMin", () => {
	it("should return NaN", () => {
		const data = [{ value: "10" }, { value: "20" }, { value: "not a number" }, { value: "5" }]
		const min = objectKeyMin(data, "value")
		expect(min).toBe(NaN)
	})

	it("should return NaN if there are no valid numeric values", () => {
		const data = [{ value: "not a number" }, { value: "also not a number" }]
		const min = objectKeyMin(data, "value")
		expect(min).toBe(NaN)
	})

	it("should handle empty array", () => {
		const data: { value?: string }[] = []
		const min = objectKeyMin(data, "value")
		expect(min).toBe(Infinity)
	})

	it("should return NaN where the key is missing", () => {
		const data = [{ otherKey: "10" }, { otherKey: "20" }]
		const min = objectKeyMin(data, "value")
		expect(min).toBe(NaN)
	})
})

describe("objectKeySum", () => {
	it("should calculate the sum of numeric values correctly", () => {
		const data = [{ value: "10" }, { value: "20" }, { value: "not a number" }, { value: "30" }]
		const sum = objectKeySum(data, "value")
		expect(sum).toBe(60) // 10 + 20 + 30
	})

	it("should return 0 if there are no valid numeric values", () => {
		const data = [{ value: "not a number" }, { value: "also not a number" }]
		const sum = objectKeySum(data, "value")
		expect(sum).toBe(0)
	})

	it("should handle empty array", () => {
		const data: { value?: string }[] = []
		const sum = objectKeySum(data, "value")
		expect(sum).toBe(0)
	})

	it("should handle cases where the key is missing", () => {
		const data = [{ otherKey: "10" }, { otherKey: "20" }]
		const sum = objectKeySum(data, "value")
		expect(sum).toBe(0)
	})
})
