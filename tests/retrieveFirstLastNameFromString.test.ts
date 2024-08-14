import { retrieveFirstLastNameFromString } from "../src"

describe("retrieveFirstLastNameFromString", () => {
	it("should handle single word names", () => {
		const result = retrieveFirstLastNameFromString("Cher")
		expect(result).toEqual({ surname: "", given_name: "Cher" })
	})

	it("should handle two word names", () => {
		const result1 = retrieveFirstLastNameFromString("John Smith")
		expect(result1).toEqual({ surname: "Smith", given_name: "John" })

		const result2 = retrieveFirstLastNameFromString("Alice Mary")
		expect(result2).toEqual({ surname: "Alice", given_name: "Mary" })

		const result3 = retrieveFirstLastNameFromString("Adam West")
		expect(result3).toEqual({ surname: "West", given_name: "Adam" })
	})

	it("should handle names with more than two words", () => {
		const result1 = retrieveFirstLastNameFromString("Alice Mary Johnson")
		expect(result1).toEqual({ surname: "Johnson", given_name: "Alice Mary" })

		const result2 = retrieveFirstLastNameFromString("John Michael Smith")
		expect(result2).toEqual({ surname: "Smith", given_name: "John Michael" })

		const result3 = retrieveFirstLastNameFromString("Cherilyn Sarkisian")
		expect(result3).toEqual({ surname: "Sarkisian", given_name: "Cherilyn" })

		const result4 = retrieveFirstLastNameFromString("Sarah Jessica Parker")
		expect(result4).toEqual({ surname: "Parker", given_name: "Sarah Jessica" })
	})

	it("should handle names with special characters and extra spaces", () => {
		const result1 = retrieveFirstLastNameFromString("Jean-Paul Sartre")
		expect(result1).toEqual({ surname: "Sartre", given_name: "Jean-Paul" })

		const result2 = retrieveFirstLastNameFromString("François Hollande")
		expect(result2).toEqual({ surname: "Hollande", given_name: "François" })

		const result3 = retrieveFirstLastNameFromString("   Marie   Curie   ")
		expect(result3).toEqual({ surname: "Curie", given_name: "Marie" })

		const result4 = retrieveFirstLastNameFromString("Elena  Gilbert ")
		expect(result4).toEqual({ surname: "Gilbert", given_name: "Elena" })
	})

	it("should handle empty strings", () => {
		const result = retrieveFirstLastNameFromString("")
		expect(result).toEqual({ surname: "", given_name: "" })
	})

	it("should handle names with numbers", () => {
		const result1 = retrieveFirstLastNameFromString("John Doe 2")
		expect(result1).toEqual({ surname: "John", given_name: "Doe" })

		const result2 = retrieveFirstLastNameFromString("2 Doe John")
		expect(result2).toEqual({ surname: "John", given_name: "Doe" })
	})
})
