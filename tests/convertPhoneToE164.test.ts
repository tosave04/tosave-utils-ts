import { convertPhoneToE164 } from "../src"

describe("convertPhoneToE164", () => {
	it("should correctly format a phone number with a country code", () => {
		const formattedNumber = convertPhoneToE164("+33 123 456 789")
		expect(formattedNumber).toBe("+33123456789")
	})

	it("should format a phone number with a leading zero and no country code", () => {
		const formattedNumber = convertPhoneToE164("0123456789", 1)
		expect(formattedNumber).toBe("+1123456789")
	})

	it('should handle phone number with country code but without "+" sign', () => {
		const formattedNumber = convertPhoneToE164("33 123 456 789")
		expect(formattedNumber).toBe("+3333123456789")
	})

	it("should handle phone number with country code enclosed in parentheses", () => {
		const formattedNumber = convertPhoneToE164("(33) 123 456 789")
		expect(formattedNumber).toBe("+33123456789")
	})

	it("should handle phone number with special characters and spaces", () => {
		const formattedNumber = convertPhoneToE164("  +33 (123) 456-789 ")
		expect(formattedNumber).toBe("+33123456789")
	})

	it("should handle phone number with only digits and leading zero", () => {
		const formattedNumber = convertPhoneToE164("0123456789")
		expect(formattedNumber).toBe("+33123456789")
	})

	it("should handle phone number with non-numeric characters but no country code", () => {
		const formattedNumber = convertPhoneToE164("abc 1234 def 5678", 44)
		expect(formattedNumber).toBe("+4412345678")
	})

	it("should handle phone number with non-numeric characters and leading zero with a default country code", () => {
		const formattedNumber = convertPhoneToE164("!@# 01234 *5678", 49)
		expect(formattedNumber).toBe("+4912345678")
	})

	it("should handle an empty string gracefully", () => {
		const formattedNumber = convertPhoneToE164("")
		expect(formattedNumber).toBe("+33")
	})

	it("should handle phone number with a single digit", () => {
		const formattedNumber = convertPhoneToE164("0")
		expect(formattedNumber).toBe("+33")
	})
})
