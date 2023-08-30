import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// ajouter les autres component à la suite

@NgModule({
  declarations: [
    AppComponent
  ],
  // dépendances externe
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  // la ou on met le composant principal
  bootstrap: [AppComponent]
})
export class AppModule { }
