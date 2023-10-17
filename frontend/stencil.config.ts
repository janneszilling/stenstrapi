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
      // comment the following line to disable service workers in production
      serviceWorker: null,
      baseUrl: 'https://myapp.local/',
      prerenderConfig: 'services/prerender.config.ts',
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
