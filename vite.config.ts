import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import { defineConfig } from 'vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
    resolve: {
        alias: {
            '@components': resolve(__dirname, 'src/components'),
            '@routes': resolve(__dirname, 'src/routes'),
        },
    },
});