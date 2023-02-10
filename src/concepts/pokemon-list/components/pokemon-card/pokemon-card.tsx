import {
  PokemonBaseTypes,
  PokemonBaseTypesArray,
  PokemonBaseTypesEnum,
  PokemonColors,
} from "@/constants/pokemon-variants";
import { Pokemon } from "@/types/pokemon";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";

import { Text, Pill } from "@/components";

import * as Styled from "./pokemon-card.styles";
import { PokemonCardProps } from "./pokemon-card.types";
import { PokemonImage } from "../pokemon-image";
import { isOfType } from "@/utils";

export const PokemonCard = ({ data }: PokemonCardProps) => {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [pokemonColor, setPokemonColor] = useState<PokemonColors>("gray");

  useEffect(() => {
    axios.get(data.url).then((response) => setPokemon(response.data));
  }, []);

  useEffect(() => {
    handlePokemonColor();
  }, [pokemon]);

  const paddedId = pokemon && pokemon.id.toString().padStart(3, "0");

  const handlePokemonColor = useCallback(() => {
    if (pokemon) {
      const baseType = getFirstPokemonType(pokemon.types);
      const color = getPokemonColor(baseType);
      setPokemonColor(color);
    }
  }, [pokemon]);

  const getPokemonImage = () => {
    return pokemon?.sprites.other["official-artwork"].front_default;
  };

  const getFirstPokemonType = (types: Array<{ type: { name: string } }>) => {
    const type = types[0].type.name;
    if (isOfType<PokemonBaseTypes>(type, PokemonBaseTypesArray)) {
      return type;
    }
    throw new Error("tipo inválido");
  };

  const getPokemonColor = (type: PokemonBaseTypes): PokemonColors => {
    return PokemonBaseTypesEnum[type] as PokemonColors;
  };

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
                <Pill key={prop.type.name} color={pokemonColor}>
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
            <PokemonImage src={getPokemonImage()!} alt={pokemon.name} />
          </Styled.PokemonImageContainer>
        </Styled.Container>
      )}
    </>
  );
};
