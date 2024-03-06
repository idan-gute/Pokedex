export const formatPokemonNumber = (index: number): string => {
    const number = index + 1; 
    if (number < 10) {
      return `#00${number}`;
    } else if (number < 100) {
      return `#0${number}`;
    } else {
      return `#${number}`;
    }
  };