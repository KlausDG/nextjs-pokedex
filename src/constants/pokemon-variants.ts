export enum PokemonTypesToColorEnum {
  grass = "green",
  bug = "green",
  normal = "gray",
  fire = "red",
  water = "blue",
}

export type PokemonBaseTypes = keyof typeof PokemonTypesToColorEnum;

export const PokemonBaseTypesArray = Object.keys(PokemonTypesToColorEnum);

export enum PokemonColorsEnum {
  green = "green",
  gray = "gray",
  red = "red",
  blue = "blue",
}

export type PokemonColors = keyof typeof PokemonColorsEnum;

export const PokemonColorsArray = Object.keys(PokemonColorsEnum);
