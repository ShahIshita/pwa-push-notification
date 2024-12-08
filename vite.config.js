import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      manifest: {
        name: "My PWA App",
        short_name: "PWA App",
        description: "A simple PWA using Vue 3 and Vite",
        theme_color: "#ffffff",
        icons: [
          {
            src: "icons/vite.svg",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "icons/vue.svg",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
      registerType: "autoUpdate",
      workbox: {
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/picsum\.photos\/id\/\d+\/200\/300$/i,
            handler: "CacheFirst",
            options: {
              cacheName: "images-cache",
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 7 * 24 * 60 * 60, // Cache for 7 days
              },
            },
          },
        ],
      },
    }),
  ],
});
