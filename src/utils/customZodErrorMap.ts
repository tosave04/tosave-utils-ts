/**
 * Carte de messages personnalisés pour chaque type d'erreur en Français (FR).
 *
 * A custom error map function for Zod that provides personalized error messages for each type of validation error.
 *
 * @example
 * import { z, type ZodErrorMap } from "zod"
 * z.setErrorMap(customErrorMap as ZodErrorMap)
 *
 * @param issue - The error object containing details about the validation issue, such as its code, expected value, and context-specific properties.
 * @param ctx - The context object that includes a default error message. This is used when a validation error code is not explicitly handled.
 *
 * The function handles multiple error cases including:
 * - invalid_type: When the type of the input does not match the expected type.
 * - invalid_literal: When the input does not match the expected literal value.
 * - custom: For custom validation errors.
 * - invalid_union & invalid_union_discriminator: When none of the union types validate.
 * - invalid_enum_value: When the input is not one of the allowed enum values.
 * - unrecognized_keys: When extra, unexpected keys are present in an object.
 * - invalid_arguments & invalid_return_type: When function arguments or return types do not match expectations.
 * - invalid_date: When the input is not a valid date.
 * - invalid_string: For various string validations, including email, URL, regex validations, or other string-specific constraints.
 * - too_small: For values (strings, numbers, arrays) that are smaller than the minimum allowed.
 * - too_big: For values (strings, numbers, arrays) that exceed the maximum allowed.
 * - invalid_intersection_types: When intersection types fail validation.
 * - not_multiple_of: When a number is not a multiple of a specified value.
 * - not_finite: When a number is infinite or not a number (NaN).
 *
 * @returns An object containing a 'message' property with a customized error message derived from the validation error's properties.
 *
 * This function is registered as the global error map for Zod by calling `z.setErrorMap(customErrorMap)`, ensuring that all validations utilize these custom error messages.
 */
export const customZodErrorMap = (issue: any, ctx: any) => {
	switch (issue.code) {
		case "invalid_type":
			return { message: `❌ Mauvais type pour ${issue.path[0]} : attendu ${issue.expected}, reçu ${issue.received}` }
		case "invalid_literal":
			return { message: `⚠️ ${issue.path[0]} doit être exactement ${issue.expected}` }
		case "custom":
			return { message: "⚠️ Validation personnalisée non respectée (${issue.path[0]})" }
		case "invalid_union":
		case "invalid_union_discriminator":
			return { message: `⚠️ Aucune des options possibles n'est valide pour ${issue.path[0]}` }
		case "invalid_enum_value":
			return { message: `🚨 Valeur invalide pour ${issue.path[0]}, attendu : ${issue.options.join(", ")}` }
		case "unrecognized_keys":
			return { message: `🚨 Clés inconnues détectées dans l'objet ${issue.path[0]}` }
		case "invalid_arguments":
			return { message: `🚨 Arguments invalides pour ${issue.path[0]}` }
		case "invalid_return_type":
			return { message: `🚨 Type de retour invalide pour ${issue.path[0]}` }
		case "invalid_date":
			return { message: `📅 Date invalide (${issue.path[0]})` }
		case "invalid_string":
			switch (issue.validation) {
				case "email":
					return { message: `📧 ${issue.path[0]} invalide (exemple: nom@domaine.com)` }
				case "url":
					return { message: `🌐 ${issue.path[0]} invalide (exemple: https://www.example.com)` }
				case "regex":
					return { message: `🔤 ${issue.path[0]} invalide (regex non respectée)` }
				default:
					return { message: `🔤 ${issue.path[0]} invalide (${issue.validation.toString().toUpperCase()} attendu)` }
			}
		case "too_small":
			switch (issue.type) {
				case "string":
					return { message: `📝 ${issue.path[0]} trop court (min: ${issue.minimum} caractères)` }
				case "number":
					return { message: `🔢 ${issue.path[0]} trop petit (min: ${issue.minimum})` }
				case "array":
					return { message: `📋 Liste ${issue.path[0]} trop courte (min: ${issue.minimum} éléments)` }
				default:
					return { message: `🔻 ${issue.path[0]} trop petit (min: ${issue.minimum})` }
			}

		case "too_big":
			switch (issue.type) {
				case "string":
					return { message: `📝 ${issue.path[0]} trop long (max: ${issue.maximum} caractères)` }
				case "number":
					return { message: `🔢 ${issue.path[0]} trop grand (max: ${issue.maximum})` }
				case "array":
					return { message: `📋 Liste ${issue.path[0]} trop longue (max: ${issue.maximum} éléments)` }
				default:
					return { message: `🔺 ${issue.path[0]} trop grand (max: ${issue.maximum})` }
			}

		case "invalid_intersection_types":
			return { message: `🚨 Types d'intersection invalides (${issue.path[0]})` }
		case "not_multiple_of":
			return { message: `🚨 ${issue.path[0]} doit être un multiple de ${issue.multipleOf}` }
		case "not_finite":
			return { message: `⚠️ Nombre ${issue.path[0]} invalide (infini ou NaN)` }
		default:
			return { message: ctx.defaultError } // 🔥 Message par défaut si non géré
	}
}
