import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, "index.html"),
                portfolio: resolve(__dirname, "portfolio/portfolio.html"),
                skyrimSteelWarAxe: resolve(
                    __dirname,
                    "portfolio/skyrim-steel-war-axe/skyrim-steel-war-axe.html"
                ),
            },
        },
    },
});
