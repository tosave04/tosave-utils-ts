/**
 * Converts a phone number to E.164 format.
 *
 * @param {string} phone - The phone number to be converted.
 * @param {number} [defaultCountryCode=33] - The default country code to use if none is provided in the phone number.
 * @returns {string} - The phone number formatted in E.164 format.
 *
 * The function performs the following steps:
 *
 * 1. Trims any leading or trailing whitespace from the input phone number.
 * 2. Checks if the phone number already contains a country code by looking for the presence of a plus sign (`+`) or opening parenthesis (`(`).
 * 3. Removes all non-numeric characters from the phone number.
 * 4. If a country code is present in the original phone number:
 *    - Extracts the country code (assumed to be the first two digits after any `+` or `(`).
 *    - Extracts the rest of the phone number, removing any leading zero.
 *    - Returns the phone number in E.164 format with the extracted country code.
 * 5. If no country code is present:
 *    - Removes any leading zero from the phone number.
 *    - Appends the default country code (provided as a parameter) to the phone number.
 *    - Returns the phone number in E.164 format with the default country code.
 *
 * @example
 * const formattedNumber1 = convertPhoneToE164("+33 123 456 789");
 * console.log(formattedNumber1); // Output: "+33123456789"
 *
 * const formattedNumber2 = convertPhoneToE164("0123456789", 1);
 * console.log(formattedNumber2); // Output: "+10123456789"
 */
export const convertPhoneToE164 = (phone: string, defaultCountryCode: number = 33): string => {
	// Remove leading and trailing whitespace
	const phoneString = phone.trim()

	// Check if the phone number already has a country code
	const haveCountryCode = phoneString.match(/(\+|\()/)

	// Remove non-numeric characters
	const numericOnly = phone.replace(/\D/g, "")

	// Format in E.164 with the +
	if (haveCountryCode) {
		const countryCode = numericOnly.slice(0, 2)
		const phonePart = numericOnly.slice(2).replace(/^0/, "")
		return `+${countryCode}${phonePart}`
	} else {
		const phonePart = numericOnly.replace(/^0/, "")
		return `+${String(defaultCountryCode)}${phonePart}`
	}
}
