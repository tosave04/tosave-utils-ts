/**
 * Encodes a string from UTF-8 to Base64 format.
 *
 * @param {string} str - The string to be encoded in Base64.
 * @returns {string} - The Base64-encoded string.
 *
 * @throws {Error} - An error is thrown if the input string cannot be encoded.
 *
 * The function performs the following steps:
 *
 * 1. Encodes the input string as a UTF-8 encoded URI component using `encodeURIComponent`. This handles special characters and ensures that the string is correctly encoded for Base64 conversion.
 * 2. Replaces percent-encoded UTF-8 characters (`%XX`) in the encoded URI component with their corresponding characters using `String.fromCharCode` and `parseInt`.
 * 3. Converts the resulting string into a Base64-encoded string using `btoa`.
 *
 * @example
 * const originalString = "Hello, 世界";
 * const encodedString = b64EncodeUnicode(originalString);
 * console.log(encodedString); // Output will be a Base64-encoded string of "Hello, 世界"
 */
export const b64EncodeUnicode = (str: string): string => {
	try {
		return btoa(
			encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function (_, p1) {
				return String.fromCharCode(parseInt(p1, 16))
			})
		)
	} catch (error) {
		throw new Error(error instanceof Error ? error.message : "An error has occurred")
	}
}
