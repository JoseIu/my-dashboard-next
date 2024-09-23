import { SimplePokemon } from '@/interfaces/Pokemos.interface';
import Image from 'next/image';
import Link from 'next/link';
type PokemonCardProps = {
  pokemon: SimplePokemon;
};

export const PokemonCard = ({ pokemon }: PokemonCardProps) => {
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
        className="py-1 px-6 text-white font-normal border-solid border rounded-full  border-sky-100"
      >
        Details
      </Link>
    </article>
  );
};
