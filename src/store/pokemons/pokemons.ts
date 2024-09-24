import { SimplePokemon } from '@/interfaces/Pokemos.interface';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PokemonsState {
  favorites: { [key: string]: SimplePokemon };
}

const initialState: PokemonsState = {
  favorites: {},
};

const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    setFavoritePokemons(state, action: PayloadAction<{ [key: string]: SimplePokemon }>) {
      state.favorites = action.payload;
    },

    toggleFavorite(state, action: PayloadAction<SimplePokemon>) {
      const pokemon = action.payload;

      const existPokemon = !!state.favorites[pokemon.id];

      if (existPokemon) {
        delete state.favorites[pokemon.id];
        return;
      }

      state.favorites[pokemon.id] = pokemon;
    },
  },
});

export const { toggleFavorite, setFavoritePokemons } = pokemonsSlice.actions;

export default pokemonsSlice.reducer;
