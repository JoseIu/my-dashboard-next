'use client';
import { useEffect } from 'react';
import { Provider } from 'react-redux';
import { store } from './';
import { setFavoritePokemons } from './pokemons/pokemons';

type Props = {
  children: React.ReactNode;
};

export const Providers = ({ children }: Props) => {
  useEffect(() => {
    const favoritesPokemons = JSON.parse(localStorage.getItem('favorite-pokemons') || '{}');
    store.dispatch(setFavoritePokemons(favoritesPokemons));
  }, []);
  return <Provider store={store}>{children}</Provider>;
};
