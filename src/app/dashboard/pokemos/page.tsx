import { PokemonCard } from '@/components';
import { getPokemos } from '@/helpers/getPokemons';

export const metadata = {
  title: 'Pokemos List',
  description: 'This is the list of all pokemos',
};

const PokemosPage = async () => {
  const pokemos = await getPokemos(151);
  return (
    <section className="max-h-full max-w-full text-slate-900 p-2">
      <h2 className="text-4xl font-bold">Pokemos List</h2>

      <div className="max-w-full  max-h-[calc(100vh-4rem)] overflow-x-auto grid grid-cols-[repeat(auto-fill,minmax(15rem,1fr))] gap-6">
        {pokemos.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </section>
  );
};

export default PokemosPage;
