import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ArticleComponent } from './article/article.component';
import { Error404Component } from './error404/error404.component';

// ajoouter toutes les urls
const routes: Routes = [
  // path c apres ip le / et component c le nom du component qu'on a créer
  {path: '', component: HomeComponent},
  {path: 'article', component: ArticleComponent},
  {path: '**', component: Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
