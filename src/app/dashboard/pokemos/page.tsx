import { PokemonCard } from '@/components';
import { PokemonResponse } from '@/interfaces/Pokemos.interface';

const getPokemos = async (limit = 20, offset = 0) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);

  const data: PokemonResponse = await response.json();

  const pokemons = data.results.map((pokemon) => ({
    id: pokemon.url.split('/').at(-2)!,
    name: pokemon.name,
  }));
  return pokemons;
};

const PokemosPage = async () => {
  const pokemos = await getPokemos(151);
  return (
    <section className="max-h-full max-w-full text-slate-900 p-2">
      <h2 className="text-4xl font-bold">Pokemos List</h2>

      <div className="max-w-full  h-[calc(100vh-4rem)] overflow-x-auto grid grid-cols-[repeat(auto-fill,minmax(15rem,1fr))] gap-6">
        {pokemos.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </section>
  );
};

export default PokemosPage;
