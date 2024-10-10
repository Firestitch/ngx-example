import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FsExampleModule } from '../../src/app/fs-example.module';

import { AppComponent } from './app.component';
import { InputExampleComponent } from './components/input-example/input-example.component';
import { AppMaterialModule } from './material.module';

@NgModule({
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([]),
    FsExampleModule.forRoot({ iframeObserveBody: true }),
    BrowserAnimationsModule,
    AppMaterialModule,
  ],
  declarations: [
    AppComponent,
    InputExampleComponent,
  ],
})
export class PlaygroundModule {
}
