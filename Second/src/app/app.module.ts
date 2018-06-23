import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MarvCOmpComponent } from './marv-comp/marv-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    MarvCOmpComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
