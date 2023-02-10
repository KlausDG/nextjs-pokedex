export enum PokemonBaseTypesEnum {
  grass = "green",
  bug = "green",
  normal = "gray",
  fire = "red",
  water = "blue",
}

export type PokemonBaseTypes = keyof typeof PokemonBaseTypesEnum;

export const PokemonBaseTypesArray = Object.keys(PokemonBaseTypesEnum);

export enum PokemonColorsEnum {
  green = "green",
  gray = "gray",
  red = "red",
  blue = "blue",
}

export type PokemonColors = keyof typeof PokemonColorsEnum;

export const PokemonColorsArray = Object.keys(PokemonColorsEnum);
