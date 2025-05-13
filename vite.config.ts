import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
//import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  base: "/visteriya/",
  plugins: [react()],
  //this setting allows you to write variables directly without importing
  // css:{
  //   preprocessorOptions:{
  //     scss: {
  //       additionalData: '@import "src/styles/_variables.scss";'
  //     }
  //   }
  // },
  // resolve: {
  //   alias: {
  //     '@': path.resolve(__dirname, 'src'),
  //   }
  // }
});
