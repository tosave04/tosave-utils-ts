/**
 * Validates an email address format using a regular expression.
 *
 * @param {string} email - The email address to validate.
 * @returns {boolean} - Returns `true` if the email format is valid, `false` otherwise.
 *
 * The function uses a regular expression (`regex`) to check if the provided email address
 * matches a common email format pattern. The pattern allows for a sequence of word characters
 * (letters, digits, and underscores), possibly followed by dots or hyphens, followed by an "@" symbol,
 * a domain name, and a top-level domain with 2 to 3 letters.
 *
 * - Example of valid emails: `user@example.com`, `name.lastname@example.co.uk`
 * - Example of invalid emails: `user@com`, `user@.com`, `user@domain,com`
 */
export const validateEmail = (email: string) => {
	const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
	return regex.test(email)
}

/**
 * Validates a name based on common naming conventions using a regular expression.
 *
 * @param {string} name - The name to validate.
 * @returns {boolean} - Returns `true` if the name meets the criteria, `false` otherwise.
 *
 * The function uses a regular expression (`regex`) to ensure that the name:
 *
 * - Contains only letters (both uppercase and lowercase).
 * - Optionally includes hyphens (`-`) and apostrophes (`'`) which are commonly used in names (e.g., "O'Connor", "Mary-Jane").
 * - Is between 2 and 50 characters long.
 *
 * This helps to ensure that the name is reasonably formatted and of appropriate length.
 *
 * Examples of valid names:
 * - `John`
 * - `Mary-Jane`
 * - `O'Connor`
 * - `José`
 *
 * Examples of invalid names:
 * - `J` (too short)
 * - `John123` (contains numbers)
 * - `Anne-Marie!` (contains invalid special character)
 * - `A very long name that exceeds the maximum allowed length for validation purposes` (too long)
 */
export const validateName = (name: string): boolean => {
	const regex = /^[A-Za-zÀ-ÖØ-ÿ' -]{2,50}$/
	return regex.test(name)
}

/**
 * Validates if a string is a valid number and optionally checks if it falls within a specified range.
 *
 * @param {string} value - The string to validate as a number.
 * @param {number} [min] - Optional minimum value for the number. If not provided, no minimum constraint is applied.
 * @param {number} [max] - Optional maximum value for the number. If not provided, no maximum constraint is applied.
 * @returns {boolean} - Returns `true` if the string is a valid number and falls within the optional range, `false` otherwise.
 *
 * The function uses a regular expression (`regex`) to ensure that the input is a valid number, which can be:
 * - An integer (e.g., `123`, `-456`)
 * - A floating-point number (e.g., `3.14`, `-0.001`)
 *
 * The function then converts the string to a number and checks if it falls within the provided `min` and `max` range constraints.
 *
 * Examples of valid numbers:
 * - `123`
 * - `-456`
 * - `3.14`
 * - `0.001`
 *
 * Examples of invalid numbers:
 * - `abc` (not a number)
 * - `123abc` (contains non-numeric characters)
 * - `99999999999999999999999999` (exceeds max if a max is defined and is a too-large number)
 * - `-123.456` (if outside the defined range)
 */
export const validateNumber = (value: string, min?: number, max?: number): boolean => {
	const regex = /^-?\d*\.?\d+$/

	if (!regex.test(value)) return false

	const num = parseFloat(value)

	if ((min !== undefined && num < min) || (max !== undefined && num > max)) {
		return false
	}

	return true
}

/**
 * Validates a password based on common security criteria using a regular expression.
 *
 * @param {string} password - The password to validate.
 * @returns {boolean} - Returns `true` if the password meets the security criteria, `false` otherwise.
 *
 * The function uses a regular expression (`regex`) to ensure that the password:
 *
 * - Is at least 8 characters long.
 * - Contains at least one uppercase letter.
 * - Contains at least one lowercase letter.
 * - Contains at least one digit.
 * - Contains at least one special character (e.g., `@`, `#`, `$`, etc.).
 *
 * This helps to enforce strong password practices, ensuring that passwords are not easily guessable.
 *
 * Examples of valid passwords:
 * - `StrongPass1!`
 * - `P@ssw0rd123`
 *
 * Examples of invalid passwords:
 * - `password` (no uppercase, no digit, no special character)
 * - `12345678` (no letters, no special character)
 * - `Password1` (no special character)
 */
export const validatePassword = (password: string): boolean => {
	const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/
	return regex.test(password)
}

/**
 * Validates a phone number format using a regular expression.
 *
 * @param {string} phone - The phone number to validate.
 * @returns {boolean} - Returns `true` if the phone number format is valid, `false` otherwise.
 *
 * The function uses a regular expression (`regex`) to check if the provided phone number
 * matches common phone number formats. The pattern is designed to allow:
 *
 * - Optional leading "+" for international numbers.
 * - Digits, spaces, hyphens, or periods as separators.
 * - Optional area codes enclosed in parentheses.
 *
 * Examples of valid phone numbers:
 * - `+1-800-555-5555`
 * - `(123) 456-7890`
 * - `123-456-7890`
 * - `1234567890`
 *
 * Examples of invalid phone numbers:
 * - `123-abc-7890`
 * - `123456-`
 */
export const validatePhone = (phone: string): boolean => {
	const regex = /^\+?(\d[\d-. ]+)?(\([\d-. ]+\))?[\d-. ]+\d$/
	return regex.test(phone)
}
