import { NgModule, ModuleWithProviders, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';

import { FsIFrameModule, FsIFrame } from '@firestitch/iframe';

import { HIGHLIGHT_OPTIONS, HighlightModule } from 'ngx-highlightjs';

import { FsExampleComponent } from './components/fs-example/fs-example.component';
import { FsExampleHighlightComponent } from './components/fs-example-highlight/fs-example-highlight.component';
import { FsExamplesComponent } from './components/fs-examples/fs-examples.component';
import { FsExampleService } from './services/fs-example.service';
import { CopierService } from './services/copier';
import { highlightOptionsFactory } from './factories/fact';


@NgModule({ exports: [
        FsExampleComponent,
        FsExamplesComponent,
        FsExampleHighlightComponent,
    ],
    declarations: [
        FsExampleComponent,
        FsExamplesComponent,
        FsExampleHighlightComponent,
    ], imports: [CommonModule,
        MatIconModule,
        MatToolbarModule,
        MatTabsModule,
        MatCardModule,
        MatButtonModule,
        MatTooltipModule,
        FsIFrameModule.forRoot(),
        HighlightModule], providers: [provideHttpClient(withInterceptorsFromDi())] })
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
