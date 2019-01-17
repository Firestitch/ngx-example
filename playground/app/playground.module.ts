import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FsMessageModule } from '@firestitch/message';
import { FsExampleModule } from '@firestitch/example';

import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { AppMaterialModule } from './material.module';
import { InputExampleComponent } from './components/input-example/input-example.component';

@NgModule({
  bootstrap: [ AppComponent ],
  imports: [
    BrowserModule,
    FsExampleModule.forRoot({ iframeObserveBody: true }),
    FsMessageModule.forRoot(),
    ToastrModule.forRoot({ preventDuplicates: true }),
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
