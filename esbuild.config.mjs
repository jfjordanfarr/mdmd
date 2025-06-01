import esbuild from 'esbuild';

await esbuild.build({
  entryPoints: ['src/index.ts'],
  bundle: true,
  outfile: 'dist/index.mjs',
  platform: 'node',
  format: 'esm',
  sourcemap: true,
  // Externalize dependencies that shouldn't be bundled
  external: ['myst-parser', 'myst-common', 'unist-builder'],
}).catch((e) => {
  console.error('esbuild build failed:', e);
  process.exit(1);
});

console.log('esbuild build complete: dist/index.mjs');
