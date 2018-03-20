import { Directive, Input, OnChanges, SimpleChanges, Inject } from '@angular/core';
import * as hljs from 'highlight.js/lib/highlight';
import * as hljsTypescript from 'highlight.js/lib/languages/typescript';
import * as hljsScss from 'highlight.js/lib/languages/scss';
import * as hljsCss from 'highlight.js/lib/languages/css'
import * as hljsXml from 'highlight.js/lib/languages/xml';

@Directive({
  selector: '[fsExampleHighlight]',
  host: { '[innerHTML]': 'highlightedCode' }
})
export class FsExampleHighlightDirective implements OnChanges {

  @Input() source: string;
  @Input() language: string;
  highlightedCode: string;
  public hljs = hljs;

  constructor() {
    this.hljs.registerLanguage('ts', hljsTypescript);
    this.hljs.registerLanguage('scss', hljsScss);
    this.hljs.registerLanguage('css', hljsCss);
    this.hljs.registerLanguage('html', hljsXml);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if ((changes['source'] || changes['language']) && this.language && this.source) {
      this.highlightedCode = this.hljs.highlight(this.language, this.source).value;
    }
  }

}
