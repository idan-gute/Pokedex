export type IChildren = {
    children: React.ReactNode
  }

  export type PokemonListResponse = {
    name: string;
    url: string;
  };

  type Stat = {
    base_stat: number;
    effort: number;
    stat: {
      name: string;
      url: string;
    };
  };
  
  export type IPokemonType = {
    slot: number;
    type: {
      name: string;
      url: string;
    };
  };

  export type IPokemonDetails = {
    name: string;
    url: string;
    img: string;
    stats: Stat[];
    types: IPokemonType[]; 
  };

