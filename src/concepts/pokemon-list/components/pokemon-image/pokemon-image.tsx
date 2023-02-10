import Image from "next/image";
import { PokemonImageProps } from "./pokemon-image.types";

export const PokemonImage = ({ src, alt }: PokemonImageProps) => {
  return <Image src={src} alt={alt} width={50} height={50} />;
};
