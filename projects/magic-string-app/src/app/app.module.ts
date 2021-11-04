import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MagicStringLibModule } from 'magic-string-lib'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MagicStringLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
