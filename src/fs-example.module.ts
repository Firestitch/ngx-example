import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FsExampleService } from './services/fs-example.service';
import { MatIconModule, MatToolbarModule, MatTabsModule, MatCardModule, MatButtonModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { FsExampleHighlightDirective } from './directives/fs-example-highlight.directive';
import { FsExampleComponent } from './components/fs-example/fs-example.component';
import { FsExamplesComponent } from './components/fs-examples/fs-examples.component';
import { FsIFrameModule } from '@firestitch/iframe';

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
    FsExamplesComponent
  ],
  entryComponents: [
  ],
  declarations: [
    FsExampleComponent,
    FsExamplesComponent,
    FsExampleHighlightDirective
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
