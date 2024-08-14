import { runPromiseInSequence } from "../src"

describe("runPromiseInSequence", () => {
	it("should execute functions in sequence and return the final result", async () => {
		// Define functions that return promises
		const promiseFunc1 = async () => "result"
		const promiseFunc2 = (previousResult: string) => Promise.resolve(`${previousResult}2`)
		const promiseFunc3 = (previousResult: string) =>
			Promise.resolve(previousResult.replace(/\d/, ($0) => (+$0 + 1).toString()))

		const result = await runPromiseInSequence([promiseFunc1, promiseFunc2, promiseFunc3])
		expect(result).toBe("result3")
	})

	it("should handle functions with different return types", async () => {
		// Define functions that return different types
		const promiseFunc1 = () => Promise.resolve(1)
		const promiseFunc2 = (previousResult: number) => Promise.resolve(previousResult === 1 ? "result" : "")
		const promiseFunc3 = async (previousResult: string) => previousResult.length > 0

		const result = await runPromiseInSequence([promiseFunc1, promiseFunc2, promiseFunc3])
		expect(result).toBe(true)
	})
})
