import { b64DecodeUnicode } from "../src"

describe("b64DecodeUnicode", () => {
	it("should decode a Base64-encoded string to the original UTF-8 string", () => {
		const encodedString = "SGVsbG8sIOS4lueVjA=="
		const decodedString = b64DecodeUnicode(encodedString)
		expect(decodedString).toBe("Hello, 世界")
	})

	it("should decode a simple Base64-encoded string without special characters", () => {
		const encodedString = "SGVsbG8sIEhvd2FyZQ==" // "Hello, Howare"
		const decodedString = b64DecodeUnicode(encodedString)
		expect(decodedString).toBe("Hello, Howare")
	})

	it("should handle empty strings", () => {
		const encodedString = ""
		const decodedString = b64DecodeUnicode(encodedString)
		expect(decodedString).toBe("")
	})

	it("should throw an error for invalid Base64 strings", () => {
		const invalidEncodedString = "InvalidBase64String"
		expect(() => b64DecodeUnicode(invalidEncodedString)).toThrow()
	})

	it("should correctly decode a Base64-encoded string with special characters", () => {
		const encodedString = "JUMwJUEwJCUyMCVFNCU5NiU5NyUwQSUwMDA=" // "%C0%A0$%20%E4%96%97%0A%000"
		const decodedString = b64DecodeUnicode(encodedString)
		expect(decodedString).toBe("%C0%A0$%20%E4%96%97%0A%000")
	})

	it("should correctly decode Base64 strings with Unicode characters", () => {
		const encodedString = "5LiW55WM5a6e5L2c5bCP" // "世界实作小" (Small World in Japanese)
		const decodedString = b64DecodeUnicode(encodedString)
		expect(decodedString).toBe("世界实作小")
	})
})
