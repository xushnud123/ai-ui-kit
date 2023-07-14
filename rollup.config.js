import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import typescript from "rollup-plugin-typescript2";

export default {
  input: "path/to/entry/file.tsx",
  output: {
    file: "path/to/output/file.js",
    format: "esm",
    sourcemap: true
  },
  plugins: [
    resolve(),
    commonjs(),
    typescript({
      tsconfig: "path/to/tsconfig.json"
    })
  ]
};
