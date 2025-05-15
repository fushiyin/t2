import js from "@eslint/js";
import prettier from "eslint-plugin-prettier";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import { defineConfig } from "eslint/config";
import globals from "globals";

export default defineConfig([
	{
		ignores: [
			"dist/**",
			"node_modules/**",
			".git/**",
			".prettierrc.cjs",
			"package.json",
			"package-lock.json",
			"eslint.config.mjs",
			"*.config.js",
			"*.config.cjs",
			"*.config.mjs",
		],
		files: ["**/*.{js,mjs,cjs,jsx}"],
		languageOptions: {
			ecmaVersion: "latest",
			sourceType: "module",
			globals: {
				...globals.browser,
			},
			parserOptions: {
				ecmaFeatures: {
					jsx: true,
				},
			},
		},
		plugins: {
			prettier,
			react,
			"react-hooks": reactHooks,
			"react-refresh": reactRefresh,
		},
		settings: {
			react: {
				version: "detect",
			},
		},
		rules: {
			...js.configs.recommended.rules,
			...react.configs.recommended.rules,
			...reactHooks.configs.recommended.rules,
			"prettier/prettier": [
				"error",
				{
					arrowParens: "always",
					bracketSameLine: false,
					objectWrap: "preserve",
					bracketSpacing: true,
					semi: true,
					endOfLine: "auto",
					printWidth: 100,
					tabWidth: 4,
					useTabs: true,
					quoteProps: "as-needed",
					trailingComma: "all",
					singleAttributePerLine: true,
					htmlWhitespaceSensitivity: "css",
					vueIndentScriptAndStyle: true,
					proseWrap: "preserve",
					insertPragma: false,
					requirePragma: false,
					embeddedLanguageFormatting: "auto",
					singleQuote: false,
					jsxSingleQuote: false,
					experimentalOperatorPosition: "end",
					experimentalTernaries: false,
				},
			],
			"react/prop-types": "off",
			"react/react-in-jsx-scope": "off",
			"react-hooks/exhaustive-deps": "warn",
			"react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
			"no-unused-vars": ["error", { varsIgnorePattern: "^[A-Z_]" }],
			quotes: ["error", "double"],
			"max-len": [
				"warn",
				{
					code: 100,
					tabWidth: 4,
					ignoreUrls: true,
					ignoreStrings: true,
					ignoreTemplateLiterals: true,
					ignoreRegExpLiterals: true,
				},
			],
		},
	},
]);
