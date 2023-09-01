import { Component } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: `article.component.html`,
})
export class ArticleComponent {

  afficheArticle(article: string) {
    console.log('Vous avez sélctionné cette article :' + article);
  }

  resultForm(form: string) {
    console.log('Vous avez écrit dans le formulaire ceux-ci' + form);
  }

  Articles: string[] = [
    "Pokemon Article 1",
    "Pokemon Article 2",
    "Pokemon Article 3",
    "Pokemon Article 4",
  ]
}
