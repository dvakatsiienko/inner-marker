/* Core */
import { defineConfig } from "vite";
import vitePluginReact from "@vitejs/plugin-react-swc";
import vitePluginTailwind from "@tailwindcss/vite";
import { NodePackageImporter } from "sass-embedded";

// https://vite.dev/config/
export default defineConfig({
  plugins: [vitePluginReact(), vitePluginTailwind()],
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern",
        importers: [new NodePackageImporter()],
      },
    },
  },
});
