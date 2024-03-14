import fs from 'fs';
import esbuild from 'esbuild';
import { generateBuildConf } from './esbuild-conf.mjs';

const ctx = await esbuild.context(generateBuildConf(true));
await ctx.watch();
fs.copyFileSync('src/index.html', 'www/index.html');
await ctx.serve({
  servedir: 'www',
  port: 3002
});
