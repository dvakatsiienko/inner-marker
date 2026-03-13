import vitePluginTailwind from '@tailwindcss/vite';
import vitePluginReact from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [vitePluginReact(), vitePluginTailwind()],
  resolve: { tsconfigPaths: true },
});
