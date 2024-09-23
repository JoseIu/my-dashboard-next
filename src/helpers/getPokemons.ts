import { PokemonResponse } from '@/interfaces/Pokemos.interface';

export const getPokemos = async (limit = 20, offset = 0) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);

  const data: PokemonResponse = await response.json();

  const pokemons = data.results.map((pokemon) => ({
    id: pokemon.url.split('/').at(-2)!,
    name: pokemon.name,
  }));
  return pokemons;
};
