import { PokemonBaseTypes, PokemonColors } from "@/constants/pokemon-variants";

export type UsePokemonReturn = {
  pokemon: {
    id: string;
    name: string;
    types: Array<PokemonBaseTypes> | [];
    color: PokemonColors;
    image: string;
  };
};
