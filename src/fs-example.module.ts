import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FsInputComponent } from './components/fs-input-component/fs-input-component.component';
import { FsRadioComponent } from './components/fs-radio-component/fs-radio-component.component';
import { FsComponentService } from './services/fs-component.service';
import { ElementsService } from './services/elements.service';
import { ELEMENTS } from './elements';

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
    FsInputComponent,
    FsRadioComponent
  ],
  entryComponents: [
  ],
  declarations: [
    FsInputComponent,
    FsRadioComponent
  ],
  providers: [
    FsComponentService,
    {provide: 'elementService', useClass: ElementsService},
    {provide: 'elements', useValue: ELEMENTS}
  ],
})
export class FsComponentModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: FsComponentModule,
      providers: [FsComponentService]
    };
  }
}
