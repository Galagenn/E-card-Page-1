import { defineConfig } from "vite";
import injectHTML from "vite-plugin-html-inject";
import path from "path";

export default defineConfig({
   plugins: [injectHTML()],
   build: {
      rollupOptions: {
         input: {
            main: path.resolve(__dirname, "index.html"),
         },
      },
   },
   server: {
      hmr: {
        overlay: false
      }
    }
});


