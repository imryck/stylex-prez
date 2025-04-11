import path from 'path';
import {fileURLToPath} from 'url';
import {copy} from 'esbuild-plugin-copy';
import stylexPlugin from '@stylexjs/esbuild-plugin';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export const generateBuildConf = (dev) => {
  const targetFolder = dev ? 'www' : 'dist'
  return {
    entryPoints: [dev ? 'src/live-reload.ts' : 'src/App.tsx'],
    outfile: `./${targetFolder}/main.js`,
    bundle: true,
    minify: !dev,
    sourcemap: dev,
    logLevel: dev ? 'info' : 'error',
    loader: {'.svg': 'dataurl'},
    plugins: [
      stylexPlugin({
        dev,
        generatedCSSFileName: path.resolve(__dirname, `${targetFolder}/component.css`),
        // Utilise les CSS layer à la place du polyfill :not(#\#)
        useCSSLayers: true,
        stylexImports: ['@stylexjs/stylex']
      }),
      copy({
        resolveFrom: __dirname,
        assets: {
          from: ['./src/images/*'],
          to: [dev ? './www/images' : './dist/images'],
        },
        watch: true
      }),
    ]
  }
}
