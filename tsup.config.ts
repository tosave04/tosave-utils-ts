import { defineConfig } from "tsup"

export default defineConfig({
	entry: {
		index: "src/index.ts",
	},
	outDir: "dist",
	format: ["cjs", "esm"], // esm (ECMAScript Module): Uses modern ECMAScript module syntax (import and export), cjs (CommonJS): Uses CommonJS module syntax (require and module.exports).
	target: "es6",
	sourcemap: true,
	minify: true,
	splitting: false,
	clean: true,
	dts: true, // Generate declaration file (.d.ts)
})
