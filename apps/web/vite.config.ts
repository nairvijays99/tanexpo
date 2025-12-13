import { defineConfig } from "vite";
import { devtools } from "@tanstack/devtools-vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import viteTsConfigPaths from "vite-tsconfig-paths";
import { nitro } from "nitro/vite";
import path from "path";

const config = defineConfig({
  plugins: [
    devtools(),
    nitro(),
    // this is the plugin that enables path aliases
    viteTsConfigPaths({
      projects: ["./tsconfig.json"],
    }),
    tanstackStart(),
    viteReact(),
  ],
  resolve: {
    alias: [
      {
        find: "@app/ui",
        replacement: path.resolve(__dirname, "../../packages/ui/src"),
      },
      {
        find: "react-native",
        replacement: "react-native-web",
      },
    ],
  },
  optimizeDeps: {
    include: ["react-native-web"],
  },
  server: {
    fs: {
      allow: ["..", "../../packages"], // allow serving files from monorepo packages
    },
  },
});

export default config;
