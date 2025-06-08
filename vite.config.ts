/* Core */
import { defineConfig } from "vite";
import path from "path";
import vitePluginReact from "@vitejs/plugin-react-swc";
import vitePluginTailwind from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [vitePluginReact(), vitePluginTailwind()],
  resolve: { alias: { "@": path.resolve(__dirname, "./src") } },
});
