import './../tools/assets/playground.scss';

import { NgModule } from '@angular/core';
import { AppComponent } from './app/app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FsComponentModule } from '../src';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from './app/material.module';
import { FsExamplesComponent } from './app/components/fs-examples/fs-examples.component';

import { FsInputComponent } from './app/components/fs-input-component/fs-input-component.component';
import { FsRadioComponent } from './app/components/fs-radio-component/fs-radio-component.component';

@NgModule({
  bootstrap: [ AppComponent ],
  imports: [
    BrowserModule,
    FsComponentModule,
    BrowserAnimationsModule,
    AppMaterialModule
  ],
  declarations: [
    AppComponent,
    FsExamplesComponent,
    FsInputComponent,
    FsRadioComponent
  ],
  providers: [],
})
export class PlaygroundModule {
}