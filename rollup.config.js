export default {
  input: './src/main.js',
  output: {
    file: 'index.js',
    format: 'cjs'
  },
  plugins: [
    babel({
      exclude: 'node_modules/**'  // 排除node_module下的所有文件
    })
  ]
}