import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FsExampleComponent } from './components/fs-example-component/fs-example.component';
import { FsExampleService } from './services/fs-example.service';
import { MatIconModule, MatToolbarModule, MatTabsModule, MatCardModule, MatButtonModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { FsExampleHighlightDirective } from './directives/fs-example-highlight.directive';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatToolbarModule,
    MatTabsModule,
    MatCardModule,
    MatButtonModule,
    HttpClientModule
  ],

  exports: [
    FsExampleComponent
  ],
  entryComponents: [
  ],
  declarations: [
    FsExampleComponent,
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
