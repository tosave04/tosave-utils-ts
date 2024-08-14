import { validateEmail, validateName, validateNumber, validatePassword, validatePhone } from "../src"

describe("Validation Functions", () => {
	// Email validation tests
	describe("validateEmail", () => {
		it("should return true for valid emails", () => {
			expect(validateEmail("user@example.com")).toBe(true)
			expect(validateEmail("name.lastname@example.co.uk")).toBe(true)
			expect(validateEmail("user+alias@example.io")).toBe(false)
		})

		it("should return false for invalid emails", () => {
			expect(validateEmail("user@com")).toBe(false)
			expect(validateEmail("user@.com")).toBe(false)
			expect(validateEmail("user@domain,com")).toBe(false)
			expect(validateEmail("user@domain")).toBe(false)
			expect(validateEmail("@domain.com")).toBe(false)
		})
	})

	// Name validation tests
	describe("validateName", () => {
		it("should return true for valid names", () => {
			expect(validateName("John")).toBe(true)
			expect(validateName("Mary-Jane")).toBe(true)
			expect(validateName("O'Connor")).toBe(true)
			expect(validateName("José")).toBe(true)
		})

		it("should return false for invalid names", () => {
			expect(validateName("J")).toBe(false) // too short
			expect(validateName("John123")).toBe(false) // contains numbers
			expect(validateName("Anne-Marie!")).toBe(false) // contains invalid special character
			expect(validateName("A very long name that exceeds the maximum allowed length for validation purposes")).toBe(
				false
			) // too long
		})
	})

	// Number validation tests
	describe("validateNumber", () => {
		it("should return true for valid numbers", () => {
			expect(validateNumber("123")).toBe(true)
			expect(validateNumber("-456")).toBe(true)
			expect(validateNumber("3.14")).toBe(true)
			expect(validateNumber("0.001")).toBe(true)
		})

		it("should return false for invalid numbers", () => {
			expect(validateNumber("abc")).toBe(false) // not a number
			expect(validateNumber("123abc")).toBe(false) // contains non-numeric characters
			expect(validateNumber("99999999999999999999999999", undefined, 1000)).toBe(false) // exceeds max if a max is defined
			expect(validateNumber("-123.456", 0, 100)).toBe(false) // outside the defined range
		})

		it("should respect the min and max range", () => {
			expect(validateNumber("50", 10, 100)).toBe(true)
			expect(validateNumber("5", 10, 100)).toBe(false) // less than min
			expect(validateNumber("150", 10, 100)).toBe(false) // greater than max
		})
	})

	// Password validation tests
	describe("validatePassword", () => {
		it("should return true for valid passwords", () => {
			expect(validatePassword("StrongPass1!")).toBe(true)
			expect(validatePassword("P@ssw0rd123")).toBe(true)
		})

		it("should return false for invalid passwords", () => {
			expect(validatePassword("password")).toBe(false) // no uppercase, no digit, no special character
			expect(validatePassword("12345678")).toBe(false) // no letters, no special character
			expect(validatePassword("Password1")).toBe(false) // no special character
			expect(validatePassword("!@#45678")).toBe(false) // no uppercase letter
		})
	})

	// Phone validation tests
	describe("validatePhone", () => {
		it("should return true for valid phone numbers", () => {
			expect(validatePhone("+1-800-555-5555")).toBe(true)
			expect(validatePhone("(123) 456-7890")).toBe(true)
			expect(validatePhone("123-456-7890")).toBe(true)
			expect(validatePhone("1234567890")).toBe(true)
		})

		it("should return false for invalid phone numbers", () => {
			expect(validatePhone("123-abc-7890")).toBe(false) // contains letters
			expect(validatePhone("123456-")).toBe(false) // incomplete number
			expect(validatePhone("phone-number")).toBe(false) // non-numeric
			expect(validatePhone("(123)")).toBe(false) // incomplete
		})
	})
})
