import { useQuery } from "react-query";
import { getPokemon } from "../../repository";
import { formatPokemonResponse } from "./usePokemon.formatter";
import { UsePokemonReturn } from "./usePokemon.types";

export const usePokemon = (url: string): UsePokemonReturn => {
  const pokemonQuery = useQuery(url, () => getPokemon(url));

  if (!pokemonQuery.isSuccess) {
    return {
      pokemon: {
        id: "",
        name: "",
        types: [],

        color: "gray",
        image: "",
      },
    };
  }

  return formatPokemonResponse(pokemonQuery.data);
};
