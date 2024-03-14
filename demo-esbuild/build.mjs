import fs from 'fs';
import esbuild from 'esbuild';
import { generateBuildConf } from "./esbuild-conf.mjs";

esbuild.build(generateBuildConf(false));
fs.copyFileSync('src/index.dist.html', 'dist/index.html');
fs.cpSync('./src/images', 'dist/images', {recursive: true});

console.log(`run 'npm run server' then open http://localhost:8082`);
