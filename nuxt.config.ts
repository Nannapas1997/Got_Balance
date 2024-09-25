// https://nuxt.com/docs/api/configuration/nuxt-config
import Vue from '@vitejs/plugin-vue';
import VueInspector from 'vite-plugin-vue-inspector';
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: [
    '~/assets/css/main.css',

  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },


})
