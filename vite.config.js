import { defineConfig } from "vite";
import injectHTML from "vite-plugin-html-inject";
import path from "path";

export default defineConfig({
   plugins: [injectHTML()],
   build: {
      rollupOptions: {
         input: {
            main: path.resolve(__dirname, "index.html"),
            qrpage: path.resolve(__dirname, "src/html/pages/qrpage.html"),
            register: path.resolve(__dirname, "src/html/pages/regirster.html"),
            add: path.resolve(__dirname, "src/html/pages/add.html"),

         },
      },
   },
   server: {
      hmr: {
        overlay: false
      }
    }
});
