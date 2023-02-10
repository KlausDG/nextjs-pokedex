export type Pokemon = {
  id: string;
  name: string;
  sprites: {
    other: {
      ["official-artwork"]: {
        front_default: string;
      };
    };
  };
  types: PokemonTypes;
};

export type PokemonTypes = Array<{
  type: {
    name: string;
  };
}>;
