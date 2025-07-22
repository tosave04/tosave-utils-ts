/**
 * Fonction qui parse une chaîne de caractères JSON en toute sécurité
 * @param input La chaîne de caractères JSON à parser
 * @returns L'objet parsé ou null si une erreur survient
 */
export function safeJSONParse<T>(input: string): T | null {
	try {
		const sanitizedInput = sanitizeJSON(input)
		return JSON.parse(sanitizedInput)
	} catch (error) {
		const _error =
			error instanceof Error ? `safeJSONParse: ${error.message}` : "safeJSONParse: Une erreur s'est produite"

		if (process.env.NODE_ENV === "development") {
			console.error("Erreur safeJSONParse :", _error)
			console.error("Contenu fautif (début) :", input.slice(0, 200))
		}

		return null
	}
}

/**
 * Nettoie une chaîne JSON en supprimant les caractères de contrôle non autorisés
 * @param input Chaîne JSON brute
 * @returns Chaîne nettoyée
 */
function sanitizeJSON(input: string): string {
	return input.replace(/[\u0000-\u001F\u007F]/g, (char) => {
		return /\n|\r|\t/.test(char) ? char : ""
	})
}
