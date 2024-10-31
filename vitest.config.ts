import { fileURLToPath } from 'node:url';
import { mergeConfig } from 'vite';
import type { ConfigEnv } from 'vite';
import { defineConfig } from 'vitest/config';
import viteConfig from './vite.config';

// https://vitest.dev/config/
export default (configEnv: ConfigEnv) =>
    mergeConfig(
        viteConfig(configEnv),
        defineConfig({
            test: {
                root: fileURLToPath(new URL('./', import.meta.url)),
                globals: true,
                ui: true,
                environment: 'jsdom',
                coverage: {
                    enabled: true,
                    reporter: 'html',
                },
                reporters: ['default', 'html'],
                typecheck: {
                    enabled: true,
                    checker: 'vue-tsc',
                },
            },
        }),
    );
