// vite.config.js
import { defineConfig } from 'vite';
import tailwindcss from 'tailwindcss';
import React from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    React(),
    tailwindcss('./tailwind.config.js'),
  ],
});
