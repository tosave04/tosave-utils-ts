import { b64EncodeUnicode } from "../src"

describe("b64EncodeUnicode", () => {
	it("should correctly encode a string to Base64", () => {
		const originalString = "Hello, 世界"
		const encodedString = b64EncodeUnicode(originalString)
		expect(encodedString).toBe("SGVsbG8sIOS4lueVjA==")
	})

	it("should encode an empty string to Base64", () => {
		const originalString = ""
		const encodedString = b64EncodeUnicode(originalString)
		expect(encodedString).toBe("")
	})

	it("should encode a string with special characters to Base64", () => {
		const originalString = "Base64 encoding is fun!"
		const encodedString = b64EncodeUnicode(originalString)
		expect(encodedString).toBe("QmFzZTY0IGVuY29kaW5nIGlzIGZ1biE=")
	})

	it("should encode a string with URL-safe characters to Base64", () => {
		const originalString = "Hello, World!"
		const encodedString = b64EncodeUnicode(originalString)
		expect(encodedString).toBe("SGVsbG8sIFdvcmxkIQ==")
	})

	it("should handle strings with non-ASCII characters correctly", () => {
		const originalString = "こんにちは" // Japanese for "Hello"
		const encodedString = b64EncodeUnicode(originalString)
		expect(encodedString).toBe("44GT44KT44Gr44Gh44Gv")
	})

	it("should encode a string with emojis correctly", () => {
		const originalString = "Hello 👋"
		const encodedString = b64EncodeUnicode(originalString)
		expect(encodedString).toBe("SGVsbG8g8J+Riw==")
	})
})
