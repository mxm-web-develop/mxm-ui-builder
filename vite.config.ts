import vueI18n from "@intlify/vite-plugin-vue-i18n";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import { fileURLToPath, URL } from "url";
import { defineConfig } from "vite";
import eslintPlugin from "vite-plugin-eslint";

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  plugins: [
    vue(),
    vueI18n({
      include: resolve(__dirname, "./src/locales/**"),
      runtimeOnly: false,
    }),
    eslintPlugin(),
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src")
      // fileURLToPath(new URL("./src", import.meta.url)),
      // "components": fileURLToPath(new URL("./src/components", import.meta.url)),
      // "widgets/*": fileURLToPath(new URL("./src/widgets", import.meta.url)),
      // "pages/*": fileURLToPath(new URL("./src/pages", import.meta.url)),
      // "layouts/*": fileURLToPath(new URL("./src/layouts", import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        // additionalData: `@use "@/styles/boot.scss" as *;`,
      },
    },
  },
  server: { port: 3009 },
});
