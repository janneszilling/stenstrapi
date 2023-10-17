import { PrerenderConfig } from '@stencil/core';

export const config: PrerenderConfig = {
  afterHydrate(document, url) {
    document.title = url.pathname;
  },

  hydrateOptions() {
    return {
      prettyHtml: true,
    };
  },
};
