import { useQuery } from "react-query";
import { IPokemonDetails } from "../Types";
const URL = "https://pokeapi.co/api/v2/pokemon/";

const usePokemonList = () => {
  return useQuery("pokemonList", async () => {
    const response = await fetch(URL);
    const data = await response.json();
    return data.results;
  });
};

const usePokemonDetails = (name: string) => {
  return useQuery(["pokemonDetails", name], async () => {
    const response = await fetch(URL + name);
    const data = await response.json();

    const modifiedData: IPokemonDetails = {
      name: data?.name,
      url: data?.url,
      img: data?.sprites?.front_default,
      stats: data?.stats,
      types: data?.types,
    };

    return modifiedData;
  });
};

export { usePokemonList, usePokemonDetails };
