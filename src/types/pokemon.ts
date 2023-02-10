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
  types: Array<{
    type: {
      name: string;
    };
  }>;
};
