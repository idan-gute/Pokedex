import { useEffect, useState } from "react";
import useLocalStorage from "../../hooks/useLocalStorage";
import Pokemon from "../Home/Pokemon/Pokemon";
import { IPokemonDetails } from "../../Types";
import { ListWrapper } from "../Home/PokemonList/PokemonList.style";

const Favorites = () => {
  const [favoritePokemon,setFavoritepokemons] = useLocalStorage<IPokemonDetails[]>("favoritePokemon", []);
  const [favorites, setFavorites] = useState<IPokemonDetails[]>([]);

  useEffect(() => {
    if (favoritePokemon.length > 0) {
      setFavorites(favoritePokemon);
    }
  }, [favoritePokemon]);

  const handleRemoveFavorite = (favoriteName: string) => {
    const updatedFavorites = favorites.filter(item => item.name !== favoriteName);
    setFavorites(updatedFavorites)
    setFavoritepokemons(updatedFavorites)
  };

  return (
    <div style={{textAlign:'center'}}>
      {favorites.length == 0 ? (
        <p>No favorite quotes yet.</p>
      ) : (
        <ListWrapper>
            {favorites.map((pokemon: IPokemonDetails,idx) => (
              <Pokemon key={pokemon.url} name={pokemon.name} isFavoritesPage handleRemoveFavorite={handleRemoveFavorite} index={idx} />
            ))}
        </ListWrapper>
      )}
    </div>
  );
};

export default Favorites;
