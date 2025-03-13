import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      registerType: "autoUpdate",
      srcDir: 'src',
      filename: 'sw.js',
      strategies: 'injectManifest',
      manifest: {
        name: "Vue PWA",
        short_name: "VuePWA",
        description: "PWA with push notifications",
        theme_color: "#ffffff",
        icons: [
          {
            src: "icons/vue.svg",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
      workbox: {
        runtimeCaching: [],
      },
      devOptions: {
        enabled: true,
        type: "module",
      },
    }),
  ],
});
