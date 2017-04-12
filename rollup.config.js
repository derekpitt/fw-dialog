import typescript from 'rollup-plugin-typescript2';
import babel from 'rollup-plugin-babel';

export default {
  entry: "src/index.ts",
  dest: "dist/fw-dialog.js",
  plugins: [
    typescript(),
    babel()
  ]
}
