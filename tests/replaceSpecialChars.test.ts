import { replaceSpecialChars } from "../src"

describe("replaceSpecialChars", () => {
	it("should remove diacritics and special characters", () => {
		const result1 = replaceSpecialChars("Crème brûlée à la mode")
		expect(result1).toBe("Creme brulee a la mode")

		const result2 = replaceSpecialChars("Déjà vu! 123")
		expect(result2).toBe("Deja vu 123")

		const result3 = replaceSpecialChars("Café ☕️")
		expect(result3).toBe("Cafe ")
	})

	it("should remove non-ASCII characters", () => {
		const result1 = replaceSpecialChars("你好，世界") // Chinese characters
		expect(result1).toBe("")

		const result2 = replaceSpecialChars("안녕하세요") // Korean characters
		expect(result2).toBe("")

		const result3 = replaceSpecialChars("こんにちは") // Japanese characters
		expect(result3).toBe("")
	})

	it("should handle strings with only special characters and numbers", () => {
		const result = replaceSpecialChars("!@#$%^&*()_+1234567890")
		expect(result).toBe("1234567890")
	})

	it("should handle empty string", () => {
		const result = replaceSpecialChars("")
		expect(result).toBe("")
	})

	it("should handle strings with only spaces", () => {
		const result = replaceSpecialChars("    ")
		expect(result).toBe("    ")
	})

	it("should handle strings with only special characters", () => {
		const result = replaceSpecialChars("~`!@#$%^&*()_+|{}[]:\";'<>?,./")
		expect(result).toBe("")
	})
})
