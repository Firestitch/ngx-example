import './../tools/assets/playground.scss';

import { NgModule } from '@angular/core';
import { AppComponent } from './app/app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FsComponentModule } from '../src';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from './app/material.module';
import { FsExampleComponent } from './app/components/fs-example/fs-example.component';
import { FsExamplesComponent } from './app/components/fs-examples/fs-examples.component';

@NgModule({
  bootstrap: [ AppComponent ],
  imports: [
    BrowserModule,
    FsComponentModule,
    BrowserAnimationsModule,
    AppMaterialModule
  ],
  entryComponents: [
  ],
  declarations: [
    AppComponent,
    FsExampleComponent,
    FsExamplesComponent
  ],
  providers: [
  ],
})
export class PlaygroundModule {
}
