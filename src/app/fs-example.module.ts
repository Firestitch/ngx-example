import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule, inject } from '@angular/core';
import { ROUTER_CONFIGURATION, RouterModule } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';

import { FsIFrame, FsIFrameModule } from '@firestitch/iframe';

import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { HIGHLIGHT_OPTIONS, HighlightModule } from 'ngx-highlightjs';

import { FsExampleHighlightComponent } from './components/fs-example-highlight/fs-example-highlight.component';
import { FsExampleComponent } from './components/fs-example/fs-example.component';
import { FsExamplesComponent } from './components/fs-examples/fs-examples.component';
import { highlightOptionsFactory } from './factories/fact';
import { CopierService } from './services/copier';
import { FsExampleService } from './services/fs-example.service';


@NgModule({
  exports: [
    FsExampleComponent,
    FsExamplesComponent,
    FsExampleHighlightComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    MatToolbarModule,
    MatTabsModule,
    MatCardModule,
    MatButtonModule,
    MatTooltipModule,
    FsIFrameModule.forRoot(),
    HighlightModule,
    FsExampleComponent,
    FsExamplesComponent,
    FsExampleHighlightComponent,
  ],
  providers: [provideHttpClient(withInterceptorsFromDi())],
})
export class FsExampleModule {
  private _config = inject<any>('FS_EXAMPLE_CONFIG' as any);
  private _iframe = inject(FsIFrame);

  constructor() {
    const _config = this._config;
    const _iframe = this._iframe;

    if (_config.iframeObserveBody !== false) {
      _iframe.observeBody();
    }
  }

  public static forRoot(config?): ModuleWithProviders<FsExampleModule> {
    return {
      ngModule: FsExampleModule,
      providers: [
        {
          provide: ROUTER_CONFIGURATION,
          useValue: {
            scrollPositionRestoration: 'enabled',
            anchorScrolling: 'enabled',
          },
        },
        {
          provide: HIGHLIGHT_OPTIONS,
          useFactory: highlightOptionsFactory,
        },
        { provide: 'FS_EXAMPLE_CONFIG', useValue: config },
        FsExampleService,
        CopierService,
      ],
    };
  }
}
