import { convertToDate, convertToMoney } from "../src"

const TIMESTAMP = 1725055200000 // Example timestamp in milliseconds
const TIMESTAMP_IN_SECONDS = 1725055200 // Same timestamp but in seconds

describe("convertToDate", () => {
	it("should format a timestamp into a date string with default options", () => {
		const formattedDate = convertToDate(TIMESTAMP)
		expect(formattedDate).toBe("31/08/2024") // Change according to your default locale and format
	})

	it("should handle timestamps in seconds and convert them to milliseconds", () => {
		const formattedDate = convertToDate(TIMESTAMP_IN_SECONDS)
		expect(formattedDate).toBe("31/08/2024") // Change according to your default locale and format
	})

	it("should format a timestamp with a 2-digit year", () => {
		const formattedDate = convertToDate(TIMESTAMP, true)
		expect(formattedDate).toBe("31/08/24") // Change according to your default locale and format
	})

	it("should return a placeholder string if no timestamp is provided", () => {
		const formattedDate = convertToDate()
		expect(formattedDate).toBe("...")
	})

	it("should use custom locale and formatting options", () => {
		const formattedDate = convertToDate(TIMESTAMP, false, {
			locales: "en-US",
			options: { year: "numeric", month: "long", day: "numeric" },
		})
		expect(formattedDate).toBe("August 31, 2024") // Change according to your custom locale and format
	})
})

describe("convertToMoney", () => {
	it("should format a number into a currency string with default options", () => {
		const number = 1234.56
		const formattedMoney = convertToMoney(number)
		expect(formattedMoney.replace(/\s/g, " ")).toBe("1 234,56 €") // Change according to your default locale and format
	})

	it("should handle zero as a valid number", () => {
		const number = 0
		const formattedMoney = convertToMoney(number)
		expect(formattedMoney.replace(/\s/g, " ")).toBe("0,00 €") // Change according to your default locale and format
	})

	it("should return a placeholder string if no number is provided", () => {
		const formattedMoney = convertToMoney()
		expect(formattedMoney).toBe("... €")
	})

	it("should use custom locale and formatting options", () => {
		const number = 1234.56
		const formattedMoney = convertToMoney(number, {
			locales: "en-US",
			options: { style: "currency", currency: "USD" },
		})
		expect(formattedMoney).toBe("$1,234.56") // Change according to your custom locale and format
	})
})
