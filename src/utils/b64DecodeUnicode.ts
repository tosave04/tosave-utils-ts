/**
 * Decodes a Base64-encoded string to a UTF-8 string.
 *
 * @param {string} str - The Base64-encoded string to be decoded.
 * @returns {string} - The decoded UTF-8 string.
 *
 * @throws {Error} - An error is thrown if the input string is not a valid Base64-encoded string.
 *
 * The function performs the following steps:
 *
 * 1. Decodes the Base64-encoded string to its original binary representation using `atob`. This function converts Base64 back into a string where each character represents an 8-bit byte.
 * 2. Converts the binary string to a percent-encoded URI component using `Array.prototype.map` and `charCodeAt`. Each character’s code is converted to a percent-encoded hexadecimal sequence (`%XX`).
 * 3. Uses `decodeURIComponent` to convert the percent-encoded URI component back into the original UTF-8 string.
 *
 * @example
 * const encodedString = "SGVsbG8sIOS4lueVjA==";
 * const decodedString = b64DecodeUnicode(encodedString);
 * console.log(decodedString); // Output will be "Hello, 世界"
 */
export const b64DecodeUnicode = (str: string): string => {
	try {
		return decodeURIComponent(
			Array.prototype.map
				.call(atob(str), function (c) {
					return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2)
				})
				.join("")
		)
	} catch (error) {
		throw new Error(error instanceof Error ? error.message : "An error has occurred")
	}
}
