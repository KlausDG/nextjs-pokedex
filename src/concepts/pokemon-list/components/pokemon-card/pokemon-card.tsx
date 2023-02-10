import {
  PokemonBaseTypes,
  PokemonColors,
  PokemonVariants,
} from "@/constants/pokemon-variants";
import { Pokemon } from "@/types/pokemon";
import axios from "axios";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Text, Pill } from "@/components";

import * as Styled from "./pokemon-card.styles";
import { PokemonCardProps } from "./pokemon-card.types";

export const PokemonCard = ({ data }: PokemonCardProps) => {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [pokemonColor, setPokemonColor] = useState<PokemonColors>("gray");

  useEffect(() => {
    axios.get(data.url).then((response) => setPokemon(response.data));
  }, []);

  useEffect(() => {
    if (pokemon) {
      const baseType = getFirstpokemonType(pokemon.types);
      const color = getPokemonColor(baseType);
      setPokemonColor(color);
    }
  }, [pokemon]);

  const paddedId = pokemon && pokemon.id.toString().padStart(3, "0");

  return (
    <>
      {pokemon && (
        <Styled.Container color={pokemonColor}>
          <Styled.PokemonInfoContainer>
            <Text capitalize weight="bold" fontSize="16">
              {pokemon.name}
            </Text>
            <Styled.PokemonTypesContainer>
              {pokemon?.types?.map((prop) => (
                <Pill color={pokemonColor}>
                  <Text capitalize fontSize="8">
                    {prop.type.name}
                  </Text>
                </Pill>
              ))}
            </Styled.PokemonTypesContainer>
          </Styled.PokemonInfoContainer>
          <Styled.PokemonIdContainer>
            <Text weight="bold" color="#2E363E2f">
              #{paddedId}
            </Text>
          </Styled.PokemonIdContainer>
          <Styled.PokemonImageContainer>
            <Image
              src={pokemon?.sprites?.other["official-artwork"]?.front_default}
              alt={pokemon.name}
              width={50}
              height={50}
              blurDataURL="URL"
              placeholder="blur"
            />
          </Styled.PokemonImageContainer>
        </Styled.Container>
      )}
    </>
  );
};

const getFirstpokemonType = (types: Array<{ type: { name: string } }>) => {
  const type = types[0].type.name;
  if (
    isOfType<PokemonBaseTypes>(type, [
      "grass",
      "bug",
      "normal",
      "fire",
      "water",
    ])
  ) {
    return type;
  }
  throw new Error("tipo inválido");
};

const getPokemonColor = (type: string): PokemonColors => {
  return PokemonVariants[type] as PokemonColors;
};

function isOfType<T extends string>(
  value: string,
  unionValues: Array<string>
): value is T {
  return unionValues.includes(value);
}
