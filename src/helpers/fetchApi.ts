import { Pokemonn } from '@/interfaces/Pokemon.interface';
import { notFound } from 'next/navigation';

export const getPokemon = async (id: string) => {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {
      cache: 'force-cache', //TODO: check if this is necessary
    });
    const pokemon: Pokemonn = await response.json();
    return pokemon;
  } catch (error) {
    console.error(error);
    notFound();
  }
};
