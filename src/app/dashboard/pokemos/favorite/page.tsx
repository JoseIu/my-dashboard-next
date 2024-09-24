import { PokemonFavGrid } from '@/components';

const FavoritePokemonPage = () => {
  return (
    <section className="max-h-full max-w-full text-slate-900 p-2">
      <h2 className="text-4xl font-bold">Favorite Pokemos-List</h2>

      <PokemonFavGrid />
    </section>
  );
};

export default FavoritePokemonPage;
