import { useEffect, useState } from "react";
import useLocalStorage from "../../hooks/useLocalStorage";
import Pokemon from "../Home/Pokemon/Pokemon";
import { IPokemonDetails } from "../../Types";

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
    <div>
      {favorites.length === 0 ? (
        <p>No favorite quotes yet.</p>
      ) : (
        <div>
          <div>
            {favorites.map((pokemon: IPokemonDetails) => (
              <Pokemon key={pokemon.url} name={pokemon.name} isFavoritesPage handleRemoveFavorite={handleRemoveFavorite} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Favorites;
