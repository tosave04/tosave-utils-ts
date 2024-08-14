/**
 * Extracts the first name and last name from a full name string.
 *
 * @param {string} fullName - The full name string to be split into first name and last name.
 * @returns {{ surname: string, given_name: string }} - An object containing the extracted last name (`surname`) and first name (`given_name`).
 *
 * The function performs the following steps:
 *
 * 1. Splits the full name string into an array of words using spaces as delimiters.
 * 2. Determines the number of words in the array to handle different cases:
 *    - **One word**: Assumes the single word is the first name.
 *    - **Two words**: Guesses which word is the last name based on length (the longer word is assumed to be the last name).
 *    - **Three or more words**: Assumes the last word is the last name and combines the rest into the first name.
 * 3. Returns an object with `surname` (last name) and `given_name` (first name).
 *
 * @example
 * const name1 = "John Smith";
 * const result1 = retrieveFirstLastNameFromString(name1);
 * console.log(result1); // Output: { surname: "Smith", given_name: "John" }
 *
 * const name2 = "Alice Mary Johnson";
 * const result2 = retrieveFirstLastNameFromString(name2);
 * console.log(result2); // Output: { surname: "Johnson", given_name: "Alice Mary" }
 *
 * const name3 = "Cher";
 * const result3 = retrieveFirstLastNameFromString(name3);
 * console.log(result3); // Output: { surname: "", given_name: "Cher" }
 */
export const retrieveFirstLastNameFromString = (fullName: string): { surname: string; given_name: string } => {
	// Split the full name into words
	const words = fullName
		.replace(/\s{2,}/g, " ")
		.replace(/\d/g, "")
		.trim()
		.split(" ")

	// Determine the length of the array
	const length = words.length

	// Initialize variables for last name and first name
	let surname = "" // Last name
	let given_name = "" // First name

	// Handle different cases based on the number of words
	if (length === 1) {
		// Single word, consider it as the first name
		given_name = words[0]
	} else if (length === 2) {
		// Two words, guess the order based on length
		// If the first word is compound, it's considered a first name
		if (words[0].length > words[1].length && !words[0].includes("-")) {
			surname = words[0]
			given_name = words[1]
		} else {
			surname = words[1]
			given_name = words[0]
		}
	} else {
		// Three or more words, assume the last word is the last name
		surname = words[length - 1]
		// Join the remaining words as the first name
		given_name = words.slice(0, length - 1).join(" ")
	}

	// Return the results
	return { surname, given_name }
}
