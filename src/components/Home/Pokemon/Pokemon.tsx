import { formatPokemonNumber } from "../../../Utils";
import RemoveFavorite from "../../../assets/styles/Icons/RemoveFavorite";
import { usePokemonDetails } from "../../../hooks/usePokemons";
import {
  CardHeader,
  CardWrapper,
  ImgPokemon,
  LinkCardStyled,
} from "./Pokemon.style";
interface PropsPokemon {
  name: string;
  isFavoritesPage?: boolean;
  handleRemoveFavorite?: (name: string) => void | undefined;
  id: number;
}

const Pokemon = ({
  name,
  isFavoritesPage,
  handleRemoveFavorite,
  id,
}: PropsPokemon) => {
  const { data: pokemonDetails, isLoading: isPokemonDetailsLoading } =
    usePokemonDetails(name);

  return (
    <CardWrapper>
      {isPokemonDetailsLoading && <div>Loading...</div>}
      <CardHeader>
        <p>{formatPokemonNumber(id)}</p>
        {isFavoritesPage && !!handleRemoveFavorite && (
          <RemoveFavorite
            style={{ cursor: "pointer" }}
            onClick={() => handleRemoveFavorite(name)}
          />
        )}
      </CardHeader>
      <LinkCardStyled
        key={pokemonDetails?.name}
        to={`/${pokemonDetails?.name}`}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <ImgPokemon src={pokemonDetails?.img} alt={pokemonDetails?.name} />
          <p>{pokemonDetails?.name}</p>
        </div>
      </LinkCardStyled>
    </CardWrapper>
  );
};

export default Pokemon;
