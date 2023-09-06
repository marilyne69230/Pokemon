import { NgModule, LOCALE_ID } from '@angular/core';

import { registerLocaleData } from '@angular/common';
import * as fr from '@angular/common/locales/fr';

import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { HomeComponent } from './home/home.component';
import { ArticleComponent } from './article/article.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { Error404Component } from './error404/error404.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { UserComponent } from './user/user.component';
import { HttpClientModule } from '@angular/common/http';
import { UserDetailComponent } from './user-detail/user-detail.component';
// ajouter les autres component à la suite

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    HomeComponent,
    ArticleComponent,
    NavBarComponent,
    Error404Component,
    PokemonDetailComponent,
    UserComponent,
    UserDetailComponent
  ],
  // dépendances externe
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr-FR'}
  ],
  // la ou on met le composant principal
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor() {
    registerLocaleData(fr.default);
  }
}
