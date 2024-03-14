import stylexPlugin from '@stylexjs/rollup-plugin';

const config = {
  input: './styles.mjs',
  output: {
    file: './dist/main.js',
    format: 'es'
  },
  plugins: [stylexPlugin({
    fileName: 'stylex.css',
    dev: false
  })],
};

export default config;
