'use client';
import { SimplePokemon } from '@/interfaces/Pokemos.interface';
import { toggleFavorite } from '@/store/pokemons/pokemons';
import Image from 'next/image';
import Link from 'next/link';
import { IoHeart, IoHeartOutline } from 'react-icons/io5';
import { useAppDispatch, useAppSelector } from '../../store/index';

type PokemonCardProps = {
  pokemon: SimplePokemon;
};

export const PokemonCard = ({ pokemon }: PokemonCardProps) => {
  const isFavorite = useAppSelector((state) => !!state.pokemons.favorites[pokemon.id]);
  const dispatch = useAppDispatch();
  const onToggle = () => {
    dispatch(toggleFavorite(pokemon));
  };
  return (
    <article className="py-5 rounded-md bg-slate-900 text-white flex flex-col items-center justify-center gap-2">
      <Image
        priority={false}
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
        alt={pokemon.name}
        width={80}
        height={80}
        className="w-20"
      />
      <h3 className="capitalize">{pokemon.name}</h3>
      <Link
        href={`/dashboard/pokemos/${pokemon.name}`}
        className="py-1 px-6 mb-4 text-white font-normal border-solid border rounded-full  border-sky-100"
      >
        Details
      </Link>

      <div className="flex items-center gap-2 cursor-pointer" onClick={onToggle}>
        {isFavorite ? (
          <IoHeart size={30} className="text-red-700" />
        ) : (
          <IoHeartOutline size={30} className="text-red-700" />
        )}
        <span>{isFavorite ? 'Your favorite' : 'Not your favorite'}</span>
      </div>
    </article>
  );
};
