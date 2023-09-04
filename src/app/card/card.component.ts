import { Component } from '@angular/core';
import { Pokemon } from '../pokemons';
import { POKEMONS } from '../mock-pokemons-list';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-card',
  templateUrl: `card.component.html`
})
export class CardComponent {

  constructor(
    private service:PokemonService,
  ){}

  title: string = 'pokemon-app';
  pokemonList: Pokemon[] = POKEMONS;
  pokemonListService:Pokemon[]= [];
  index: number = Math.floor(Math.random() * 12);

  getPokemon(){
    this.pokemonListService = this.service.fetchAllPokemon();
    return this.pokemonListService;
  }

  ngOnInit(): void {
    console.log("C'est moi wsh");
    console.table(this.pokemonList);
    console.log(this.getPokemon());
  }

  selectPokemon(form: number): void{
    if(form > this.pokemonList.length || form < 1){
      console.log("Il n existe pas !");
    }else{
      console.log("Vous avez selectionner : "+ this.pokemonList[form-1].name);
    }
  }

  cliquePokemon(id:number):void{
    console.log("Vous avez selectionner : "+ this.pokemonList[id-1].name);
  }


}