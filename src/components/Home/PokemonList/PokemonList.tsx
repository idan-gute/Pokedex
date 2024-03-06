import { useState } from "react";
import { IPokemonDetails, PokemonListResponse } from "../../../Types";
import { usePokemonList } from "../../../hooks/usePokemons";
import Pokemon from "../Pokemon/Pokemon";
import { ListWrapper, SearchInput } from "./PokemonList.style";

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
      <SearchInput
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search by name or number..."
      />
      <ListWrapper>
        {!isPokemonListLoading &&
          filteredPokemonList.map((pokemon: IPokemonDetails,idx) => (
            <Pokemon key={pokemon.url} name={pokemon.name} index={idx} />
          ))}
      </ListWrapper>
    </div>
  );
};

export default PokemonList;
