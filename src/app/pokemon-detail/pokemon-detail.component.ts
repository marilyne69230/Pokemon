import { Component } from '@angular/core';
import { Pokemon } from '../pokemons';
import { POKEMONS } from '../mock-pokemons-list';
import { PokemonService } from '../pokemon.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: `pokemon-detail.component.html`,
  
})
export class PokemonDetailComponent {

  pokemon:Pokemon|undefined;

  constructor(private PokemonService: PokemonService, private route: ActivatedRoute) {
    this.route.params.subscribe( params => {
      const pokemonId = +params['id'];
      this.getPokemonById(pokemonId -1);


    })

  }

  ngOneInit(): void {

  }

  getPokemonById(id:number){
    this.pokemon = this.PokemonService.fetchById(id);
  }
  
  fetchByName(pokemon:string) {
    return pokemon;
  }

  fetchById(id:number): Pokemon|undefined {
    return POKEMONS[id];
  }
}
