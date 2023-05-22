const cssModulesPlugin = require('esbuild-css-modules-plugin');

require('esbuild')
  .build({
    logLevel: 'info',
    entryPoints: {
      index: './index.tsx',
    },
    bundle: true,
    outdir: 'dist',
    plugins: [
      cssModulesPlugin({
        localsConvention: 'camelCase',
      }),
    ],
  })
  .catch(() => process.exit(1));
