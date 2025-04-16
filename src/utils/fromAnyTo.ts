type ExpectedTypes = { number: number; string: string; boolean: boolean; array: any[]; object: Record<string, any> }

/**
 * Récupère une valeur d'un type spécifique attendu à partir d'une valeur de type any.
 *
 * @param expected - Le type attendu ('number', 'string', 'boolean', 'array' ou 'object')
 * @returns Une fonction qui prend une valeur et retourne soit la valeur convertie dans le type attendu, soit undefined
 *
 * @example
 * fromAnyTo("number")(123) // retourne 123
 * fromAnyTo("string")("abc") // retourne "abc"
 * fromAnyTo("number")("123") // retourne 123
 * fromAnyTo("string")(123) // retourne "123"
 * fromAnyTo("number")("abc") // retourne undefined
 */
export function fromAnyTo<K extends keyof ExpectedTypes>(expected: K) {
	return (value: any): ExpectedTypes[K] | undefined => {
		if (expected === "number") {
			if (typeof value === "number" && !isNaN(value)) return value as ExpectedTypes[K]
			if (typeof value === "string" && !isNaN(Number(value))) return Number(value) as ExpectedTypes[K]
		} else if (expected === "string") {
			if (typeof value === "string") return value as ExpectedTypes[K]
			if (typeof value === "number") return String(value) as ExpectedTypes[K]
		} else if (expected === "boolean") {
			if (typeof value === "boolean") return value as ExpectedTypes[K]
		} else if (expected === "array") {
			if (Array.isArray(value) && value.length > 0) return value as ExpectedTypes[K]
		} else if (expected === "object") {
			if (typeof value === "object" && value !== null && !Array.isArray(value)) return value as ExpectedTypes[K]
		}
		return undefined
	}
}

/**
 * On attend une valeur de type "number" à partir de any.
 * @returns La valeur convertie en number ou undefined si la conversion échoue
 * @example
 * fromAnyToNumber(123) // retourne 123
 * fromAnyToNumber("123") // retourne 123
 * fromAnyToNumber("abc") // retourne undefined
 */
export const fromAnyToNumber = fromAnyTo("number")

/**
 * On attend une valeur de type "string" à partir de any.
 * @returns La valeur convertie en string ou undefined si la conversion échoue
 * @example
 * fromAnyToString(123) // retourne "123"
 * fromAnyToString("abc") // retourne "abc"
 * fromAnyToString(true) // retourne undefined
 */
export const fromAnyToString = fromAnyTo("string")

/**
 * On attend une valeur de type "boolean" à partir de any.
 * @returns La valeur convertie en boolean ou undefined si la conversion échoue
 * @example
 * fromAnyToBoolean(true) // retourne true
 * fromAnyToBoolean("true") // retourne undefined
 * fromAnyToBoolean(1) // retourne undefined
 */
export const fromAnyToBoolean = fromAnyTo("boolean")

/**
 * On attend une valeur de type "array" à partir de any.
 * @returns La valeur convertie en array ou undefined si la conversion échoue
 * @example
 * fromAnyToArray([1, 2, 3]) // retourne [1, 2, 3]
 * fromAnyToArray("abc") // retourne undefined
 */
export const fromAnyToArray = fromAnyTo("array")

/**
 * On attend une valeur de type "object" à partir de any.
 * @returns La valeur convertie en object ou undefined si la conversion échoue
 * @example
 * fromAnyToObject({ a: 1, b: 2 }) // retourne { a: 1, b: 2 }
 * fromAnyToObject("abc") // retourne undefined
 */
export const fromAnyToObject = fromAnyTo("object")
