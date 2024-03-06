import { IPokemonDetails } from "../../../Types";
import { usePokemonList } from "../../../hooks/usePokemons";
import Pokemon from "../Pokemon/Pokemon";

const PokemonList = () => {
  const { data: pokemonListData, isLoading: isPokemonListLoading } = usePokemonList();

  if (isPokemonListLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {pokemonListData.map((pokemon: IPokemonDetails) => (
        <Pokemon key={pokemon.url} name={pokemon.name} />
      ))}
    </div>
  );
};

export default PokemonList;
