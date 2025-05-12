import { defineConfig } from "vite";
import path from "path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react-swc";
import fs from "node:fs";
import * as esbuild from "esbuild";

// https://vite.dev/config/
const sourceJSPattern = /\/src\/.*\.js$/;
const rollupPlugin = (matchers) => ({
	name: "js-in-jsx",
	load(id) {
		if (matchers.some((matcher) => matcher.test(id))) {
			const file = fs.readFileSync(id, { encoding: "utf-8" });
			return esbuild.transformSync(file, { loader: "jsx" });
		}
	},
});

export default defineConfig({
	plugins: [react(), tailwindcss()],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "src"),
		},
	},
	build: {
		rollupOptions: {
			plugins: [rollupPlugin([sourceJSPattern])],
		},
		commonjsOptions: {
			transformMixedEsModules: true,
		},
	},
	esbuild: {
		loader: "jsx",
		include: [sourceJSPattern],
		exclude: [],
	},
	optimizeDeps: {
		esbuildOptions: {
			loader: {
				".js": "jsx",
			},
		},
	},
});
