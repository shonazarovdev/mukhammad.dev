import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
            '@components': path.resolve(__dirname, './src/components'),
            '@helpers': path.resolve(__dirname, './src/helpers'),
            '@assets': path.resolve(__dirname, './src/assets'),
        },
    },
    plugins: [react()],
})