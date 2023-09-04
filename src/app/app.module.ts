import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { HomeComponent } from './home/home.component';
import { ArticleComponent } from './article/article.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
// ajouter les autres component à la suite

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    HomeComponent,
    ArticleComponent,
    NavBarComponent,
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
