import vue from '@vitejs/plugin-vue';
import { URL, fileURLToPath } from 'node:url';
import { ConfigEnv, defineConfig, loadEnv } from 'vite';
import { PreRenderedChunk, PreRenderedAsset } from 'rollup';
import kebabCase from 'lodash-es/kebabCase';

// https://vitejs.dev/config/
export default ({ mode }: ConfigEnv) => {
    process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
    const manifest = mode === 'production';
    const sourcemap = mode !== 'production';
    const minify = mode === 'production' ? 'esbuild' : false;
    const input = fileURLToPath(new URL('./index.html', import.meta.url));
    const chunkFileNames = ({ name }: PreRenderedChunk) => `js/${kebabCase(name)}.js`;
    const assetFileNames = ({ name }: PreRenderedAsset) => {
        if (name && name.includes('.css')) {
            const [fileName, ext] = name.split('.');
            return `css/${kebabCase(fileName)}.${ext}`;
        }
        return 'assets/[name]';
    };

    return defineConfig({
        base: process.env.VITE_BASE_URL,
        plugins: [vue({ script: { propsDestructure: true } })],
        build: {
            manifest,
            sourcemap,
            minify,
            rollupOptions: {
                input,
                output: {
                    format: 'es',
                    chunkFileNames,
                    assetFileNames,
                    entryFileNames: 'js/[name].js',
                },
            }
        },
        resolve: {
            alias: {
                '@': fileURLToPath(new URL('./src', import.meta.url)),
            },
        },
    });
};
