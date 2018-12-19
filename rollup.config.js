import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
export default {
  input: './src/main.js',
  output: {
    file: 'index.js',
    format: 'cjs'
  },
  plugins: [
    resolve(),
    babel({
      exclude: 'node_modules/**'  // 排除node_module下的所有文件
    })
  ]
}