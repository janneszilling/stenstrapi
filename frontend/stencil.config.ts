import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import dotenv from 'rollup-plugin-dotenv';

// https://stenciljs.com/docs/config

export const config: Config = {
  globalScript: 'src/global/app.ts',
  taskQueue: 'async',
  outputTargets: [
    {
      type: 'www',
      serviceWorker: {
        unregister: true,
      },
      baseUrl: 'https://stockrain.de/',
      prerenderConfig: './prerender.config.js',
    },
    {
      type: 'dist-hydrate-script',
      dir: 'dist/prerender',
    },
  ],
  plugins: [
    sass({
      injectGlobalPaths: ['src/theme/fonts.scss', 'src/theme/font.sizes.scss'],
    }),
    dotenv(),
  ],
  globalStyle: 'src/global/global.scss',
};
