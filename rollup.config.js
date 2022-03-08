import pkg from "./package.json";
import typescript from "rollup-plugin-typescript2";
import vue from "rollup-plugin-vue";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import postcss from "rollup-plugin-postcss";
import { terser } from "rollup-plugin-terser";
import postcssImport from "postcss-import";
import tailwindcss from "tailwindcss";
import generatePackageJson from "rollup-plugin-generate-package-json";
import { resolve } from "path";
function createEntry(options) {
  const config = {
    input: ["./src/components/index.ts"],
    external: ["vue"],
    output: {
      file: resolve(__dirname, options.file),
      name: options.name,
      exports: "named",
      format: options.format,
      globals: {
        vue: "Vue",
      },
    },
    plugins: [
      nodeResolve(),
      typescript({
        tsconfigOverride: {
          compilerOptions: {
            declaration: options.format === "es",
          },
          // include: ["src/components/**/*.vue"],
          exclude: ["node_modules", "src/stories", "src/pages", "src/main.ts"],
        },
      }),
      vue(),
      postcss({
        extensions: [".css"],
        extract: resolve("mxmui/style.css"),
        plugins: [postcssImport(), tailwindcss()],
      }),
      generatePackageJson({
        outputFolder: "mxmui",
        baseContents: (pkg) => ({
          name: pkg.name + "-lib",
          version: pkg.version,
          license: pkg.license,
          module: "index.esm.js",
          main: "index.js",
          umd: "index.js",
          typings: "components/index.d.ts",
          author: "mxm",
        }),
      }),
      terser(),
    ],
  };
  return config;
}

export default [
  createEntry({ file: pkg.module, format: "es", name: pkg.name }),
  createEntry({ file: pkg.umd, format: "umd", name: pkg.name }),
];
