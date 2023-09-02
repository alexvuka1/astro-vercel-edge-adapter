import { defineConfig } from 'tsup';

export default defineConfig({
    target: ["esnext", "node18"],
    entry: ['src/adapter.ts', 'src/entrypoint.ts'],
    format: ["esm", "cjs"],
    sourcemap: true,
    clean: true,
    dts: true,
    outDir: "dist",
    outExtension({ format }) {
        return {
            js: format === "esm" ? ".mjs" : format === "iife" ? ".js" : ".cjs",
        }
    },
})