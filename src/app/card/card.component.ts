import { Component } from '@angular/core';
import { PokemonClass } from '../pokemons';
import { POKEMONS } from '../mock-pokemons-list';

@Component({
  selector: 'app-card',
  templateUrl: `card.component.html`
})
export class CardComponent {

  title: string = 'pokemon-app';
  pokemonList: PokemonClass[] = POKEMONS;
  
  
  ngOnInit(): void {
    console.log("Je viens de charger")
    // comme console.log mais afficher sous forme de tableau
    console.table(this.pokemonList);


    this.selectPokemon(this.pokemonList[0]);
  }
  
    selectPokemon(pokemon: PokemonClass): void {
      // afficher le nom du pokemon
      console.log("Vous avez sélectionné ce pokémon : " + pokemon['name'])

    }
}
