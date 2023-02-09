export const PokemonVariants = {
  grass: "green",
  bug: "green",
  normal: "gray",
  fire: "red",
  water: "blue"
}

export type PokemonBaseTypes = keyof typeof PokemonVariants;

export type PokemonColors = keyof typeof PokemonColorsEnum;

export enum PokemonColorsEnum {
  green = "green",
  gray = "gray",
  red = "red",
  blue = "blue"
}