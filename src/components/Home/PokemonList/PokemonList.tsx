import { useState } from "react";
import { IPokemonDetails, PokemonListResponse } from "../../../Types";
import { usePokemonList } from "../../../hooks/usePokemons";
import Pokemon from "../Pokemon/Pokemon";

const PokemonList = () => {
  const { data: pokemonListData, isLoading: isPokemonListLoading } =
    usePokemonList();
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPokemonList =
    pokemonListData &&
    pokemonListData?.filter((pokemon: PokemonListResponse) =>
      pokemon.name.includes(searchQuery)
    );

  if (isPokemonListLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search by name or number..."
        />
      </div>
      {!isPokemonListLoading &&
        filteredPokemonList.map((pokemon: IPokemonDetails) => (
          <Pokemon key={pokemon.url} name={pokemon.name} />
        ))}
    </div>
  );
};

export default PokemonList;
