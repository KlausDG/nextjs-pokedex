import {
  PokemonBaseTypes,
  PokemonColors,
  PokemonVariants,
} from "@/constants/pokemon-variants";
import axios from "axios";
import { useEffect, useState } from "react";
import { Image } from "../image/image";
import { Pill } from "../pill/pill";
import { Text } from "../text/text";

import * as Styled from "./card.styles";

export const PokemonCard = ({ data }) => {
  const [pokemon, setPokemon] = useState(null);
  const [pokemonColor, setPokemonColor] = useState(null);

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

  const paddedId = pokemon && pokemon.id.toString().padStart(3, 0);

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
            <Image src={pokemon?.sprites?.front_default} alt={pokemon.name} />
          </Styled.PokemonImageContainer>
        </Styled.Container>
      )}
    </>
  );
};

const getFirstpokemonType = (types: Array<{ type: { name: string } }>) => {
  return types[0].type.name;
};

const getPokemonColor = (type: PokemonBaseTypes) => {
  return PokemonVariants[type] as PokemonColors;
};
