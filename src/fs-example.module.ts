
import { NgModule, ModuleWithProviders, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FsExampleService } from './services/fs-example.service';
import { MatIconModule, MatToolbarModule, MatTabsModule, MatCardModule, MatButtonModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { FsExampleHighlightDirective } from './directives/fs-example-highlight.directive';
import { FsExampleComponent } from './components/fs-example/fs-example.component';
import { FsExampleHighlightComponent } from './components/fs-example-highlight/fs-example-highlight.component';
import { FsExamplesComponent } from './components/fs-examples/fs-examples.component';
import { FsIFrameModule, FsIFrame } from '@firestitch/iframe';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatToolbarModule,
    MatTabsModule,
    MatCardModule,
    MatButtonModule,
    HttpClientModule,
    FsIFrameModule
  ],

  exports: [
    FsExampleComponent,
    FsExamplesComponent,
    FsExampleHighlightComponent,
    FsExampleHighlightDirective
  ],
  entryComponents: [
  ],
  declarations: [
    FsExampleComponent,
    FsExamplesComponent,
    FsExampleHighlightComponent,
    FsExampleHighlightDirective
  ],
  providers: [
    FsExampleService
  ],
})
export class FsExampleModule {
  static forRoot(config?): ModuleWithProviders {
    return {
      ngModule: FsExampleModule,
      providers: [
        { provide: 'FS_EXAMPLE_CONFIG', useValue: config },
        FsExampleService
      ]
    };
  }

  constructor(@Inject('FS_EXAMPLE_CONFIG') private config,
              private fsIFrame: FsIFrame) {

                debugger;

    if (!config) {
      config = {};
    }

    if (config.iframeObserveBody!==false) {
      fsIFrame.observeBody();
    }
  }
}
