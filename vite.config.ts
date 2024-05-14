import { defineConfig } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react";
import { libInjectCss } from "vite-plugin-lib-inject-css";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), libInjectCss(), dts({ include: ["lib"] })],
	build: {
		lib: {
			entry: resolve(__dirname, "src/lib/main.ts"),
			formats: ["es"],
		},
		copyPublicDir: false,

		rollupOptions: {
			external: ["react", "react/jsx-runtime"],
		},
	},
});
