import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
export default defineConfig({
  plugins: [VitePWA({ injectRegister: "inline" })],
  build: { assetsInlineLimit: 0 },
});
