import { Link, useParams } from "react-router-dom";
import { usePokemonDetails } from "../../hooks/usePokemons";
import RightArrow from "../../assets/styles/Icons/RightArrow";
import useLocalStorage from "../../hooks/useLocalStorage";
import { ButtonLike } from "./PokemonDetails.style";
import { FiHeart } from "react-icons/fi";
import { IPokemonDetails, IPokemonType } from "../../Types";

const PokemonDetails = () => {
  const { name } = useParams();

  const { data: pokemonDetails, isLoading: isPokemonDetailsLoading } =
    usePokemonDetails(name || "");

  const [favoritePokemon, setFavoritepokemons] = useLocalStorage<
    IPokemonDetails[]
  >("favoritePokemon", []);

  const isFavoritePokemon = favoritePokemon?.some(
    (favPokemon) => favPokemon?.name === pokemonDetails?.name
  );

  const handleToggleFavorite = () => {
    if (isFavoritePokemon) {
      setFavoritepokemons(
        favoritePokemon?.filter(
          (favPokemon) => favPokemon?.name !== pokemonDetails?.name
        )
      );
    } else{
      setFavoritepokemons( [...favoritePokemon, pokemonDetails]);
    }
  };

  if (isPokemonDetailsLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div>
        <RightArrow />
        <Link to="/">Home page</Link>
      </div>
      <div>
        <ButtonLike onClick={handleToggleFavorite}>
          <FiHeart
            color={isFavoritePokemon ? "red" : "gray"}
            size={24}
            style={{
              cursor: "pointer",
              border: "none",
              background: "none",
            }}
          />
        </ButtonLike>
        <div>
          <img src={pokemonDetails?.img} alt={pokemonDetails?.name} />
          <h2>{pokemonDetails?.name}</h2>
          {pokemonDetails?.types.map(({ type }: IPokemonType) => (
            <div key={type.name}>{type.name}</div>
          ))}
        </div>
        <div>
          <div>
            <h2>Description</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis
              perferendis, commodi aut ab et veniam eveniet similique esse ipsam
              quibusdam nihil laudantium deleniti fugit nobis laborum sapiente
              nostrum dolores distinctio?
            </p>
          </div>
          <div>
            <h2>stats</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetails;
