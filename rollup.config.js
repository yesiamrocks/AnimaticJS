import terser from "@rollup/plugin-terser";

const input = "src/animatic.js";

export default [
  // ESM - Unminified
  {
    input,
    output: {
      file: "dist/animatic.esm.js",
      format: "esm",
      sourcemap: true,
    },
  },
  // ESM - Minified
  {
    input,
    output: {
      file: "dist/animatic.esm.min.js",
      format: "esm",
      sourcemap: true,
    },
    plugins: [terser()],
  },

  // UMD - Unminified
  {
    input,
    output: {
      file: "dist/animatic.js",
      format: "umd",
      name: "AnimaticJS",
      sourcemap: true,
    },
  },
  // UMD - Minified
  {
    input,
    output: {
      file: "dist/animatic.min.js",
      format: "umd",
      name: "AnimaticJS",
      sourcemap: true,
    },
    plugins: [terser()],
  },

  // CJS - Unminified
  {
    input,
    output: {
      file: "dist/animatic.cjs.js",
      format: "cjs",
      sourcemap: true,
    },
  },
  // CJS - Minified
  {
    input,
    output: {
      file: "dist/animatic.cjs.min.js",
      format: "cjs",
      sourcemap: true,
    },
    plugins: [terser()],
  },
];
