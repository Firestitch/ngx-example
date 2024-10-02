import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FsExampleModule } from '@firestitch/example';

import { AppComponent } from './app.component';
import { AppMaterialModule } from './material.module';
import { InputExampleComponent } from './components/input-example/input-example.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  bootstrap: [ AppComponent ],
  imports: [
    BrowserModule,
    FormsModule,
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
