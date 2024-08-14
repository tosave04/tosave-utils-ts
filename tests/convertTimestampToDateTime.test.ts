import { convertTimestampToDateTime } from "../src"

const TIMESTAMP = 1725055200 // Example timestamp in seconds
const PHP_TIMESTAMP = 1725055200000 // Same timestamp but in milliseconds

describe("convertTimestampToDateTime", () => {
	it("should correctly format a timestamp in long format with default separators", () => {
		const timestampInSeconds = TIMESTAMP // Example timestamp in seconds
		const formattedLong = convertTimestampToDateTime({ timestamp: timestampInSeconds })
		expect(formattedLong).toBe("2024-08-31 00:00:00")
	})

	it("should correctly format a timestamp in short format with default separators", () => {
		const timestampInSeconds = TIMESTAMP // Example timestamp in seconds
		const formattedShort = convertTimestampToDateTime({ timestamp: timestampInSeconds, format: "short" })
		expect(formattedShort).toBe("2024-08-31")
	})

	it("should correctly format a timestamp in long format with custom separators", () => {
		const timestampInSeconds = TIMESTAMP // Example timestamp in seconds
		const formattedLong = convertTimestampToDateTime({
			timestamp: timestampInSeconds,
			dateSeparator: "/",
			timeSeparator: ".",
		})
		expect(formattedLong).toBe("2024/08/31 00.00.00")
	})

	it("should correctly handle a timestamp in milliseconds", () => {
		const timestampInMilliseconds = PHP_TIMESTAMP // Same timestamp but in milliseconds
		const formattedLong = convertTimestampToDateTime({ timestamp: timestampInMilliseconds })
		expect(formattedLong).toBe("2024-08-31 00:00:00")
	})

	it("should handle timestamp with only seconds and return formatted long", () => {
		const timestampInSeconds = 0 // Epoch time
		const formattedLong = convertTimestampToDateTime({ timestamp: timestampInSeconds })
		expect(formattedLong).toBe("1970-01-01 01:00:00")
	})

	it("should handle timestamp with only seconds and return formatted short", () => {
		const timestampInSeconds = 0 // Epoch time
		const formattedShort = convertTimestampToDateTime({ timestamp: timestampInSeconds, format: "short" })
		expect(formattedShort).toBe("1970-01-01")
	})

	it("should handle edge case with large timestamp values", () => {
		const largeTimestamp = 32503680000000 // A large timestamp (approx year 3000)
		const formattedLong = convertTimestampToDateTime({ timestamp: largeTimestamp })
		expect(formattedLong).toBe("3000-01-01 01:00:00")
	})

	it("should handle empty timestamp gracefully", () => {
		const formattedLong = convertTimestampToDateTime({ timestamp: NaN })
		expect(formattedLong).toBe("NaN-NaN-NaN NaN:NaN:NaN")
	})
})
