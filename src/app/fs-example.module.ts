import { NgModule, ModuleWithProviders, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacyTabsModule as MatTabsModule } from '@angular/material/legacy-tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatLegacyTooltipModule as MatTooltipModule } from '@angular/material/legacy-tooltip';

import { FsIFrameModule, FsIFrame } from '@firestitch/iframe';

import { HIGHLIGHT_OPTIONS, HighlightModule } from 'ngx-highlightjs';

import { FsExampleComponent } from './components/fs-example/fs-example.component';
import { FsExampleHighlightComponent } from './components/fs-example-highlight/fs-example-highlight.component';
import { FsExamplesComponent } from './components/fs-examples/fs-examples.component';
import { FsExampleService } from './services/fs-example.service';
import { CopierService } from './services/copier';
import { highlightOptionsFactory } from './factories/fact';


@NgModule({
  imports: [
    CommonModule,

    MatIconModule,
    MatToolbarModule,
    MatTabsModule,
    MatCardModule,
    MatButtonModule,
    MatTooltipModule,

    HttpClientModule,
    FsIFrameModule.forRoot(),
    HighlightModule,
  ],

  exports: [
    FsExampleComponent,
    FsExamplesComponent,
    FsExampleHighlightComponent,
  ],
  declarations: [
    FsExampleComponent,
    FsExamplesComponent,
    FsExampleHighlightComponent,
  ],
  providers: [],
})
export class FsExampleModule {
  static forRoot(config?): ModuleWithProviders<FsExampleModule> {
    return {
      ngModule: FsExampleModule,
      providers: [
        {
          provide: HIGHLIGHT_OPTIONS,
          useFactory: highlightOptionsFactory,
        },
        { provide: 'FS_EXAMPLE_CONFIG', useValue: config },
        FsExampleService,
        CopierService,
      ]
    };
  }

  constructor(@Inject('FS_EXAMPLE_CONFIG') private config,
              private fsIFrame: FsIFrame) {

    if (!config) {
      config = {};
    }

    if (config.iframeObserveBody !== false) {
      fsIFrame.observeBody();
    }
  }
}
