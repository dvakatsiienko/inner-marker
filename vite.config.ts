import vitePluginTailwind from '@tailwindcss/vite';
import vitePluginReact from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [vitePluginReact({ compiler: true }), vitePluginTailwind()],
  resolve: { tsconfigPaths: true },
});
