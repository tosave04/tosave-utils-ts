import { safeJSONParse } from "../src/utils/safeJSONParse"

describe("safeJSONParse", () => {
	let consoleErrorSpy: jest.SpyInstance

	beforeEach(() => {
		consoleErrorSpy = jest.spyOn(console, "error").mockImplementation(() => {})
	})

	afterEach(() => {
		consoleErrorSpy.mockRestore()
	})

	test("parses a valid JSON string successfully", () => {
		const validJSON = '{"name":"Alice","age":25}'
		const result = safeJSONParse<{ name: string; age: number }>(validJSON)
		expect(result).toEqual({ name: "Alice", age: 25 })
		expect(consoleErrorSpy).not.toHaveBeenCalled()
	})

	test("returns null and logs error (in development) when JSON is invalid", () => {
		const invalidJSON = '{"name": "Alice", "age": }'
		const result = safeJSONParse(invalidJSON)
		expect(result).toBeNull()
		if (process.env.NODE_ENV === "development") {
			expect(consoleErrorSpy).toHaveBeenCalledTimes(1)
		} else {
			expect(consoleErrorSpy).not.toHaveBeenCalled()
		}
	})

	test("does not log error when NODE_ENV is not development", () => {
		const originalEnv = process.env.NODE_ENV
		process.env.NODE_ENV = "production"

		const invalidJSON = '{"data": "missing end quote}'
		const result = safeJSONParse(invalidJSON)
		expect(result).toBeNull()
		expect(consoleErrorSpy).not.toHaveBeenCalled()

		process.env.NODE_ENV = originalEnv
	})
})
