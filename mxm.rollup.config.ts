import pkg from "./package.json";
import typescript from "rollup-plugin-typescript2";
import vue from "rollup-plugin-vue";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import postcss from "rollup-plugin-postcss";
import { terser } from "rollup-plugin-terser";
import postcssImport from "postcss-import";
import tailwindcss from "tailwindcss";
import image from "@rollup/plugin-image";
import generatePackageJson from "rollup-plugin-generate-package-json";
import commonjs from "@rollup/plugin-commonjs";
import { resolve } from "path";
import alias from "@rollup/plugin-alias";
const appName = "@mxmweb/vue3-ui";
const version = "1.0.5";
const paths = {
  root: resolve(__dirname + "/src/"),
  input: resolve(__dirname, "/src/components/index.ts"),
  output: resolve(__dirname, appName + ".js"),
  postcss: resolve(__dirname, "postcss.config.js"),
  tailwindcss: resolve(__dirname, "tailwind.config.js"),
};
const { dependencies } = pkg;
function createEntry(options) {
  const config = {
    input: ["./src/components/index.ts"],
    external: [
      "vue",
      "ts-debounce",
      "@headlessui/vue",
      "@heroicons/vue",
      "qrcode-vue3",
    ],
    output: {
      file: appName + "/index.js",
      format: options.format,
      name: "appName",
    },
    plugins: [
      commonjs(),
      nodeResolve(),
      alias({
        entries: [{ find: "@", replacement: paths.root }],
      }),
      typescript({
        tsconfigOverride: {
          compilerOptions: {
            declaration: options.format === "es",
          },
          // include: ["src/components/**/*.vue"],
          exclude: [
            "node_modules",
            "src/stories",
            "src/slg",
            "src/widgets",
            "src/pages",
            "vite.config.ts",
            // "src/components",
            "src/main.ts",
          ],
        },
      }),
      image(),
      vue(),
      postcss({
        minimize: true,
        config: true,
        extensions: [".css"],
        extract: resolve(appName + "/style.css"),
        plugins: [postcssImport(), tailwindcss(paths.tailwindcss)],
      }),
      generatePackageJson({
        outputFolder: appName,
        baseContents: (pkg) => ({
          name: appName,
          version: version,
          license: "MIT",
          // module: "index.esm.js",
          main: "index.js",
          // umd: "index.js",
          typings: "/index.d.ts",
          author: "mxm",
          dependencies: dependencies,
        }),
      }),
      terser(),
    ],
  };
  return config;
}

export default [createEntry({ format: "es" })];
