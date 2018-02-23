import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FsExampleComponent } from './components/fs-example-component/fs-example.component';
import { FsExampleService } from './services/fs-example.service';
import { MatIconModule, MatToolbarModule, MatTabsModule, MatCardModule, MatButtonModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import * as hljs from 'highlight.js/lib/highlight';
import * as hljsTypescript from 'highlight.js/lib/languages/typescript';
import * as hljsScss from 'highlight.js/lib/languages/scss';
import * as hljsXml from 'highlight.js/lib/languages/xml';
import { HighlightJsModule, HIGHLIGHT_JS } from 'angular-highlight-js';

export function highlightJsFactory() {
  hljs.registerLanguage('ts', hljsTypescript);
  hljs.registerLanguage('scss', hljsScss);
  hljs.registerLanguage('html', hljsXml);
  return hljs;
}

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatToolbarModule,
    MatTabsModule,
    MatCardModule,
    MatButtonModule,
    HttpClientModule,
    HighlightJsModule.forRoot({
      provide: HIGHLIGHT_JS,
      useFactory: highlightJsFactory
    })
  ],

  exports: [
    FsExampleComponent
  ],
  entryComponents: [
  ],
  declarations: [
    FsExampleComponent
  ],
  providers: [
    FsExampleService
  ],
})
export class FsExampleModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: FsExampleModule,
      providers: [FsExampleService]
    };
  }
}
