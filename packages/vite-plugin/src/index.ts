import type { Plugin } from "vite";

interface ReactNativeWebOptions {
  /**
   * Additional packages to include in SSR noExternal and optimizeDeps.
   */
  externalPackages?: string[];
}

export default function tanexpoVitePlugin(options: ReactNativeWebOptions = {}): Plugin {
  return {
    name: "vite-plugin-tanexpo",
    config(_config, { command, mode, isSsrBuild }) {
      const isBuild = command === "build" || isSsrBuild === true;

      const rnwLibraries = [
        "react-native-web",
        "inline-style-prefixer",
        "css-to-react-native",
        "hyphenate-style-name",
        "style-to-css-string",
      ];

      const noExternal = [
        ...rnwLibraries,
        ...(options.externalPackages || []),
        ...(isBuild ? ["styleq"] : []),
      ];

      return {
        resolve: {
          alias: [
            // Standard React Native Web aliasing
            { find: "react-native", replacement: "react-native-web" },
            { find: /^react-native\//, replacement: "react-native-web/" },

            // Deep internal redirects (often required by legacy RN libraries)
            {
              find: "react-native/Libraries/Image/AssetRegistry",
              replacement: "react-native-web/dist/modules/AssetRegistry",
            },
            {
              find: "react-native/Libraries/EventEmitter/RCTDeviceEventEmitter$",
              replacement:
                "react-native-web/dist/vendor/react-native/NativeEventEmitter/RCTDeviceEventEmitter",
            },
            {
              find: "react-native/Libraries/vendor/emitter/EventEmitter$",
              replacement: "react-native-web/dist/vendor/react-native/emitter/EventEmitter",
            },
            {
              find: "react-native/Libraries/EventEmitter/NativeEventEmitter$",
              replacement: "react-native-web/dist/vendor/react-native/NativeEventEmitter",
            },

            // Path corrections for ESM compatibility in prefixers
            {
              find: /^inline-style-prefixer\/lib\/(.*)/,
              replacement: "inline-style-prefixer/es/$1",
            },
            {
              find: /^inline-style-prefixer\/lib$/,
              replacement: "inline-style-prefixer/es",
            },
            {
              find: /^css-in-js-utils\/lib\/(.*)/,
              replacement: "css-in-js-utils/es/$1",
            },
            {
              find: /^css-in-js-utils\/lib$/,
              replacement: "css-in-js-utils/es",
            },

            ...(isBuild
              ? [
                  { find: /^styleq\/(.*)/, replacement: "styleq/dist/$1" },
                  { find: /^styleq$/, replacement: "styleq/dist/styleq" },
                ]
              : []),
          ],
          // Prioritize .web extensions for React Native Web support
          extensions: [
            ".web.tsx",
            ".web.ts",
            ".web.jsx",
            ".web.js",
            ".tsx",
            ".ts",
            ".jsx",
            ".js",
            ".mjs",
            ".json",
          ],
        },
        define: {
          __DEV__: JSON.stringify(mode !== "production"),
          global: "window",
        },
        optimizeDeps: {
          include: rnwLibraries,
        },
        ssr: {
          noExternal: noExternal,
        },
      };
    },
  };
}
