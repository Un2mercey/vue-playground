import vue from '@vitejs/plugin-vue';
import { URL, fileURLToPath } from 'node:url';
import { ConfigEnv, defineConfig, loadEnv } from 'vite';

// https://vitejs.dev/config/
export default ({ mode }: ConfigEnv) => {
    process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

    return defineConfig({
        base: process.env.VITE_BASE_URL,
        plugins: [
            vue({
                script: {
                    propsDestructure: true,
                },
            }),
        ],
        resolve: {
            alias: {
                '@': fileURLToPath(new URL('./src', import.meta.url)),
            },
        },
    });
};
