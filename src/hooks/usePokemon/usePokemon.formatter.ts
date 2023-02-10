import {
  PokemonBaseTypes,
  PokemonBaseTypesArray,
  PokemonColors,
  PokemonColorsArray,
  PokemonTypesToColorEnum,
} from "@/constants/pokemon-variants";
import { Pokemon, PokemonTypes } from "@/types/pokemon";
import { isOfType } from "@/utils";

export const formatPokemonResponse = (pokemon: Pokemon) => {
  return {
    pokemon: {
      id: handlePokemonId(pokemon.id),
      name: pokemon.name,
      types: handlePokemonTypes(pokemon.types),
      color: handlePokemonColor(pokemon.types),
      image: handlePokemonImage(pokemon),
    },
  };
};

const handlePokemonId = (id: string) => {
  return id.toString().padStart(3, "0");
};

const handlePokemonColor = (pokemonTypes: PokemonTypes) => {
  const baseType = getFirstPokemonType(pokemonTypes);
  return getPokemonColor(baseType);
};

const handlePokemonTypes = (pokemonTypes: PokemonTypes) => {
  return pokemonTypes.map((current) => current.type.name);
};

const getFirstPokemonType = (types: PokemonTypes) => {
  const type = types[0].type.name;
  if (!isOfType<PokemonBaseTypes>(type, PokemonBaseTypesArray)) {
    throw new Error("tipo inválido");
  }
  return type;
};

const getPokemonColor = (type: PokemonBaseTypes) => {
  const color = PokemonTypesToColorEnum[type];
  if (!isOfType<PokemonColors>(color, PokemonColorsArray)) {
    throw new Error("tipo inválido");
  }
  return color;
};

const handlePokemonImage = (pokemon: Pokemon) => {
  return pokemon.sprites.other["official-artwork"].front_default;
};
