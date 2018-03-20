import './../tools/assets/playground.scss';

import { NgModule } from '@angular/core';
import { AppComponent } from './app/app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FsExampleModule } from '../src';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from './app/material.module';
import { InputExampleComponent } from './app/components/input-example/input-example.component';

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
    InputExampleComponent
  ],
  providers: [],
})
export class PlaygroundModule {
}
