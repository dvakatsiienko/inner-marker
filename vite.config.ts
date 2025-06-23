/* Core */

import vitePluginTailwind from '@tailwindcss/vite';
import vitePluginReact from '@vitejs/plugin-react-swc';
import path from 'node:path';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
    plugins: [vitePluginReact(), vitePluginTailwind()],
    resolve: { alias: { '@': path.resolve(__dirname, './src') } },
});
