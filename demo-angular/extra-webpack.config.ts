import { Configuration } from 'webpack';
const StylexPlugin = require('@stylexjs/webpack-plugin');

export default {
  module: {
    rules: [
      {
        test: /\.stylex.ts$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
  plugins: [
    new StylexPlugin({
      filename: 'stylex.css',
      // get webpack mode and set value for dev
      dev: true,
      // Use statically generated CSS files and not runtime injected CSS.
      // Even in development.
      runtimeInjection: false,
      // optional. default: 'x'
      classNamePrefix: 'x',
      // Required for CSS variable support
      unstable_moduleResolution: {
        // type: 'commonJS' | 'haste'
        // default: 'commonJS'
        type: 'commonJS',
        // The absolute path to the root directory of your project
        rootDir: __dirname,
      },
    }),
  ],
} as Configuration;
