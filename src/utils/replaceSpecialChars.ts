/**
 * Normalizes a string by removing special characters and diacritics, and retaining only alphanumeric characters and spaces.
 *
 * @param {string} str - The input string to be normalized.
 * @returns {string} - The normalized string containing only alphanumeric characters and spaces.
 *
 * The function performs the following steps:
 *
 * 1. **Normalization**: Converts the string to Unicode Normalization Form D (NFD), which separates characters from their diacritical marks. For example, "é" becomes "e" followed by a combining accent character.
 * 2. **Remove Diacritics**: Uses a regular expression to remove combining diacritical marks (accents) from the string.
 * 3. **Remove Non-ASCII Characters**: Removes characters that are outside the standard ASCII range (0x00 to 0x7F), effectively stripping out any non-ASCII characters.
 * 4. **Remove Special Characters**: Removes any remaining characters that are not alphanumeric or whitespace.
 *
 * The result is a string that contains only ASCII alphanumeric characters and spaces, with all accents and special characters removed.
 *
 * @example
 * const normalized1 = replaceSpecialChars("Crème brûlée à la mode");
 * console.log(normalized1); // Output: "Creme brulee a la mode"
 *
 * const normalized2 = replaceSpecialChars("Déjà vu! 123");
 * console.log(normalized2); // Output: "Deja vu 123"
 *
 * const normalized3 = replaceSpecialChars("Café ☕️");
 * console.log(normalized3); // Output: "Cafe "
 */
export const replaceSpecialChars = (str: string): string =>
	str
		// Normalize to NFD to separate characters from their diacritical marks
		.normalize("NFD")
		// Remove diacritical marks (accents)
		.replace(/[\u0300-\u036f]/g, "")
		// Remove non-ASCII characters
		.replace(/[^\x00-\x7F]/g, "")
		// Remove special characters, retaining only alphanumeric characters and spaces
		.replace(/[^a-zA-Z0-9\s]/g, "")
