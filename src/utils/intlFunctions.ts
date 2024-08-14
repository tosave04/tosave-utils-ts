/**
 * Converts a given timestamp to a formatted date string, with customizable locale and formatting options.
 *
 * @param {number} [timestamp] - The timestamp to be converted to a date format. If not provided, the function returns a placeholder string ("...").
 * @param {boolean} [year2digit] - If true, the year will be formatted as a 2-digit number; otherwise, it will be formatted as a 4-digit number.
 * @param {Object} [params] - An optional object to specify custom formatting options.
 * @param {Intl.LocalesArgument} [params.locales="fr-FR"] - The locale(s) to use for formatting. Defaults to French ("fr-FR").
 * @param {Intl.DateTimeFormatOptions} [params.options={ year: year2digit ? "2-digit" : "numeric", month: "numeric", day: "numeric" }] - Options for formatting the date. Defaults to day/month/year format with a customizable year format.
 * @returns {string} - A formatted string representing the date. If the timestamp is not provided, it returns a placeholder string ("...").
 *
 * The function first checks if the `timestamp` is not provided or is `undefined`. If so, it returns the placeholder string ("…").
 * If the `timestamp` appears to be in seconds (e.g., a Unix timestamp from PHP), the function converts it to milliseconds to match JavaScript's `Date` object format.
 * The `Intl.DateTimeFormat` API is then used with the specified or default locale and options to format the timestamp into a date string.
 */
export const convertToDate = (
	timestamp?: number,
	year2digit?: boolean,
	params: { locales?: Intl.LocalesArgument; options?: Intl.DateTimeFormatOptions } = {
		locales: "fr-FR",
		options: { year: year2digit ? "2-digit" : "numeric", month: "numeric", day: "numeric" },
	}
) => {
	if (!timestamp) return "..."

	// If the timestamp is in seconds (ex: php), convert it to milliseconds (js)
	if (timestamp < 10000000000) timestamp *= 1000

	return new Intl.DateTimeFormat(params.locales, params.options).format(new Date(timestamp))
}

/**
 * Converts a given number to a formatted currency string, with customizable locale and formatting options.
 *
 * @param {number} [number] - The number to be converted to a currency format.
 * @param {Object} [params] - An optional object to specify custom formatting options.
 * @param {Intl.LocalesArgument} [params.locales="fr-FR"] - The locale(s) to use for formatting. Defaults to French ("fr-FR").
 * @param {Intl.NumberFormatOptions} [params.options={ style: "currency", currency: "EUR" }] - Options for formatting. Defaults to Euro currency.
 * @returns {string} - A formatted string representing the number in the specified currency format.
 *                     If the input is `undefined` or `null`, it returns a placeholder string ("... €").
 *
 * The function first checks if the `number` is not provided or is `undefined`/`null`. If so, it returns the placeholder string "… €".
 * Otherwise, it uses the `Intl.NumberFormat` API with the provided `locales` and `options` parameters to format the number.
 * The default locale is "fr-FR" (French), and the default formatting option styles the number as currency in euros ("EUR").
 */
export const convertToMoney = (
	number?: number,
	params: { locales?: Intl.LocalesArgument; options?: Intl.NumberFormatOptions } = {
		locales: "fr-FR",
		options: { style: "currency", currency: "EUR" },
	}
) => {
	if (!number && number !== 0) return "... €"
	return new Intl.NumberFormat(params.locales, params.options).format(number)
}
