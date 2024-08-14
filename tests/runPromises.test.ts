import { runPromises } from "../src"

describe("runPromises", () => {
	test("should execute multiple promises and return results in order", async () => {
		const promise1 = Promise.resolve("result1")
		const promise2 = Promise.resolve("result2")
		const promise3 = Promise.resolve("result3")

		const results = await runPromises([promise1, promise2, promise3])

		expect(results).toEqual(["result1", "result2", "result3"])
	})

	test("should handle a mix of promises and immediate values", async () => {
		const promise1 = Promise.resolve(10)
		const immediateValue = 20
		const promise2 = Promise.resolve(30)

		const results = await runPromises([promise1, immediateValue, promise2])

		expect(results).toEqual([10, 20, 30])
	})

	test("should handle an empty array", async () => {
		const results = await runPromises([])

		expect(results).toEqual([])
	})

	test("should handle an array of promises that reject", async () => {
		const promise1 = Promise.reject(new Error("error1"))
		const promise2 = Promise.reject(new Error("error2"))

		await expect(runPromises([promise1, promise2])).rejects.toThrow("error1")
	})

	test("should handle an array with a mix of resolved and rejected promises", async () => {
		const promise1 = Promise.resolve("success1")
		const promise2 = Promise.reject(new Error("error2"))
		const promise3 = Promise.resolve("success3")

		await expect(runPromises([promise1, promise2, promise3])).rejects.toThrow("error2")
	})

	test("should handle promises that resolve with non-string values", async () => {
		const promise1 = Promise.resolve(42)
		const promise2 = Promise.resolve(true)
		const promise3 = Promise.resolve({ key: "value" })

		const results = await runPromises([promise1, promise2, promise3])

		expect(results).toEqual([42, true, { key: "value" }])
	})

	test("should handle promises that resolve with complex objects", async () => {
		const promise1 = Promise.resolve({ a: 1, b: 2 })
		const promise2 = Promise.resolve([{ c: 3 }])
		const promise3 = Promise.resolve(() => "function result")

		const results = await runPromises([promise1, promise2, promise3])

		expect(results).toEqual([{ a: 1, b: 2 }, [{ c: 3 }], expect.any(Function)])
	})
})
