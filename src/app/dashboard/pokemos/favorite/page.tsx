const FavoritePokemonPage = () => {
  return (
    <section className="max-h-full max-w-full text-slate-900 p-2">
      <h2 className="text-4xl font-bold">Favorite Pokemos-List</h2>

      <div className="max-w-full  h-[calc(100vh-4rem)] overflow-x-auto grid grid-cols-[repeat(auto-fill,minmax(15rem,1fr))] gap-6">
        {/* <PokemonCard key={pokemon.id} pokemon={pokemon} /> */}
      </div>
    </section>
  );
};

export default FavoritePokemonPage;
