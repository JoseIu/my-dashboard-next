'use client';
import { useAppSelector } from '@/store';
import { PokemonCard } from '../pokemon-card/PokemonCard';

export const PokemonFavGrid = () => {
  const pokemosFav = useAppSelector((state) => state.pokemons.favorites);
  const favoritePokemons = Object.values(pokemosFav);

  return (
    <div className="max-w-full  max-h-[calc(100vh-4rem)] overflow-x-auto grid grid-cols-[repeat(auto-fill,minmax(15rem,1fr))] gap-6">
      {!favoritePokemons.length ? (
        <span>No hay nada</span>
      ) : (
        <>
          {favoritePokemons.map((pokemon) => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
          ))}
        </>
      )}
    </div>
  );
};
