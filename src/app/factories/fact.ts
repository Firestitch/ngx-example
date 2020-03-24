import { HighlightOptions } from 'ngx-highlightjs';


export function highlightOptionsFactory(): HighlightOptions {
  return {
    languages: {
      typescript: () => import('highlight.js/lib/languages/typescript'),
      scss: () => import('highlight.js/lib/languages/scss'),
      html: () => import('highlight.js/lib/languages/xml'),
      css: () => import('highlight.js/lib/languages/css'),
    },
  };
}
