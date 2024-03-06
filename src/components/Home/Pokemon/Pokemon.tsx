import RemoveFavorite from "../../../assets/styles/Icons/RemoveFavorite";
import { usePokemonDetails } from "../../../hooks/usePokemons";
import { LinkCardStyled } from "../Pokemon.style";
interface PropsPokemon {
  name: string;
  isFavoritesPage?: boolean;
  handleRemoveFavorite?: (name: string) => void | undefined;
}

const Pokemon = ({
  name,
  isFavoritesPage,
  handleRemoveFavorite,
}: PropsPokemon) => {

  const { data: pokemonDetails, isLoading: isPokemonDetailsLoading } = usePokemonDetails(name);

  return (
    <div>
      {isPokemonDetailsLoading && <div>Loading...</div>}
      {isFavoritesPage && !!handleRemoveFavorite && (
        <RemoveFavorite onClick={() => handleRemoveFavorite(name)} />
      )}
      <LinkCardStyled key={pokemonDetails?.name} to={`/${pokemonDetails?.name}`}>
        <img
          src={pokemonDetails?.img}
          alt={pokemonDetails?.name}
        />
        <p>{pokemonDetails?.name}</p>
      </LinkCardStyled>
    </div>
  );
};

export default Pokemon;
