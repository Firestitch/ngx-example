import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppMaterialModule } from '../playground/app/material.module';

import { FsExampleComponent } from './components/fs-example-component/fs-example.component';
import { FsExampleService } from './services/fs-example.service';

@NgModule({
  imports: [
    CommonModule,
    AppMaterialModule
  ],
  // do I need this?
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
export class FsComponentModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: FsComponentModule,
      providers: [FsExampleService]
    };
  }
}
