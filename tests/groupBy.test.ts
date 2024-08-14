import { groupBy } from "../src" // Ajustez le chemin d'importation si nécessaire

describe("groupBy", () => {
	it("should group objects by the specified property", () => {
		const data = [
			{ id: 1, category: "A", value: 10 },
			{ id: 2, category: "B", value: 20 },
			{ id: 3, category: "A", value: 30 },
			{ id: 4, category: "B", value: 40 },
		]

		const expected = {
			A: [
				{ id: 1, category: "A", value: 10 },
				{ id: 3, category: "A", value: 30 },
			],
			B: [
				{ id: 2, category: "B", value: 20 },
				{ id: 4, category: "B", value: 40 },
			],
		}

		expect(groupBy(data, "category")).toEqual(expected)
	})

	it("should throw an error if the array is null or undefined", () => {
		expect(() => {
			groupBy(null as any, "category")
		}).toThrow(new Error("Cannot read properties of null (reading 'reduce')"))

		expect(() => {
			groupBy(undefined as any, "category")
		}).toThrow(new Error("Cannot read properties of undefined (reading 'reduce')"))
	})

	it("should handle an empty array", () => {
		const data: any[] = []

		const expected: Record<string, any[]> = {}

		expect(groupBy(data, "category")).toEqual(expected)
	})
})
