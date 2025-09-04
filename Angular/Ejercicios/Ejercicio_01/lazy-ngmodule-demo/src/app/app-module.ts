import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Conocenos } from './conocenos/conocenos';
import { Contacto } from './contacto/contacto';
import { About } from './about/about';

@NgModule({
  declarations: [
    App,
    Conocenos,
    Contacto,
    About
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
