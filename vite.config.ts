import path from 'node:path';
import vitePluginTailwind from '@tailwindcss/vite';
import vitePluginReact from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [vitePluginReact(), vitePluginTailwind()],
  resolve: { alias: { '@': path.resolve(__dirname, './src') } },
});
