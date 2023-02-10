import { useQuery } from "react-query";
import { getPokemon } from "../../repository";
import { formatPokemonResponse } from "./usePokemon.formatter";

export const usePokemon = (url: string) => {
  const pokemonQuery = useQuery(url, () => getPokemon(url));

  if (!pokemonQuery.isSuccess) {
    return {
      pokemon: {
        id: "",
        name: "",
        types: [],
        color: "",
        image: "",
      },
    };
  }

  return formatPokemonResponse(pokemonQuery.data);
};
