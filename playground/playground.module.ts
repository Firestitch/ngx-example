import './../tools/assets/playground.scss';

import { NgModule } from '@angular/core';
import { AppComponent } from './app/app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FsExampleModule } from '../src';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from './app/material.module';
import { FsInputComponent } from './assets/components/fs-input-component/fs-input-component.component';

@NgModule({
  bootstrap: [ AppComponent ],
  imports: [
    BrowserModule,
    FsExampleModule,
    BrowserAnimationsModule,
    AppMaterialModule
  ],
  declarations: [
    AppComponent,
    FsInputComponent
  ],
  providers: [],
})
export class PlaygroundModule {
}
