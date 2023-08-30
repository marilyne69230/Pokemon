import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h1>Welcome Angular {{title}}</h1>
  <p>{{pokemonList[0]}}</p>`
})
export class AppComponent {
  title: string = 'pokemon-app';
  pokemonList = ["Pickachu", "Salameche", "Lippoutu"];

  ngOnInit(): void {
    console.log("Je viens de charger")
    // comme console.log mais afficher sous forme de tableau
    console.table(this.pokemonList);
  }
}
