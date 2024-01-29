import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, "index.html"),
                experience: resolve(__dirname, "experience/experience.html"),
                portfolio: resolve(__dirname, "portfolio/portfolio.html"),
                skyrimSteelWarAxe: resolve(
                    __dirname,
                    "portfolio/skyrim-steel-war-axe/skyrim-steel-war-axe.html"
                ),
                amzUpholstery: resolve(
                    __dirname,
                    "portfolio/amz-upholstery/amz-upholstery.html"
                ),
                concreteTiles: resolve(
                    __dirname,
                    "portfolio/concrete-tiles/concrete-tiles.html"
                ),
                scifiPowerStation: resolve(
                    __dirname,
                    "portfolio/sci-fi-power-station/sci-fi-power-station.html"
                ),
            },
        },
    },
});
