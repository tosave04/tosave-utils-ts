/**
 * Fonction qui parse une chaîne de caractères JSON en toute sécurité
 * @param input La chaîne de caractères JSON à parser
 * @returns L'objet parsé ou null si une erreur survient
 */
export function safeJSONParse<T>(input: string): T | null {
	try {
		const parsed = JSON.parse(input)
		return parsed // Renvoie l'objet parsé si tout se passe bien
	} catch (error) {
		const _error = error instanceof Error ? error.message : "Une erreur s'est produite"
		process.env.NODE_ENV === "development" && console.error("Erreur safeJSONParse :", _error)
		return null
	}
}
