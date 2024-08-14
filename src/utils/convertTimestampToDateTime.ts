/**
 * Converts a timestamp to a formatted date and time string.
 *
 * @param {Object} params - The parameters for the conversion.
 * @param {number} params.timestamp - The timestamp to be converted (in seconds or milliseconds).
 * @param {"short" | "long"} [params.format="long"] - The format of the output date and time string. "short" includes only the date, while "long" includes both date and time.
 * @param {string} [params.dateSeparator="-"] - The separator to use between date components (year, month, day).
 * @param {string} [params.timeSeparator=":"] - The separator to use between time components (hours, minutes, seconds).
 * @returns {string} - The formatted date and time string.
 *
 * The function performs the following steps:
 *
 * 1. Ensures the timestamp is in milliseconds. If the timestamp has fewer than 11 digits, it multiplies by 1000 to convert from seconds to milliseconds.
 * 2. Creates a `Date` object from the timestamp.
 * 3. Extracts the year, month, day, hours, minutes, and seconds from the `Date` object, padding them with leading zeros if necessary.
 * 4. Formats the date and time components using the specified separators.
 * 5. Returns the formatted string based on the specified format:
 *    - `"short"`: Returns only the date part (e.g., "2024-08-14").
 *    - `"long"`: Returns both date and time parts (e.g., "2024-08-14 15:30:00").
 *
 * @example
 * const timestampInSeconds = 1692019800; // Example timestamp in seconds
 * const formattedLong = convertTimestampToDateTime({ timestamp: timestampInSeconds });
 * console.log(formattedLong); // Output: "2024-08-14 12:30:00"
 */
export const convertTimestampToDateTime = ({
	timestamp,
	format = "long",
	dateSeparator = "-",
	timeSeparator = ":",
}: {
	timestamp: number
	format?: "short" | "long"
	dateSeparator?: string
	timeSeparator?: string
}) => {
	// Convert the timestamp to milliseconds if it is in seconds
	const correctTimestamp = timestamp.toString().length > 10 ? timestamp : timestamp * 1000

	// Create a Date object from the timestamp
	const date = new Date(correctTimestamp)

	// Extract date and time components
	const year = String(date.getFullYear())
	const month = String(date.getMonth() + 1).padStart(2, "0")
	const day = String(date.getDate()).padStart(2, "0")
	const hours = String(date.getHours()).padStart(2, "0")
	const minutes = String(date.getMinutes()).padStart(2, "0")
	const seconds = String(date.getSeconds()).padStart(2, "0")

	// Format date and time based on the provided separators
	const formatedDate = [year, month, day].join(dateSeparator)
	const formatedTime = [hours, minutes, seconds].join(timeSeparator)

	// Return the formatted string based on the format option
	return format === "short" ? formatedDate : `${formatedDate} ${formatedTime}`
}
