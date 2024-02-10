import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';

export default {
  input: 'index.js',
  output: {
    file: 'bundle.js',
    format: 'iife', // Immediately-invoked function expression
    name: 'MyProject'
  },
  plugins: [resolve(), commonjs(), terser()],
};
