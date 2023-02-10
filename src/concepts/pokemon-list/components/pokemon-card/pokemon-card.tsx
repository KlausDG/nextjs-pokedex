import { Text, Pill } from "@/components";

import * as Styled from "./pokemon-card.styles";
import { PokemonCardProps } from "./pokemon-card.types";
import { PokemonImage } from "../pokemon-image";
import { usePokemon } from "@/hooks";

export const PokemonCard = ({ data }: PokemonCardProps) => {
  const { pokemon } = usePokemon(data.url);

  return (
    <>
      {pokemon && (
        <Styled.Container color={pokemon.color}>
          <Styled.PokemonInfoContainer>
            <Text capitalize weight="bold" fontSize="16">
              {pokemon.name}
            </Text>
            <Styled.PokemonTypesContainer>
              {pokemon.types.map((type) => (
                <Pill key={type} color={pokemon.color}>
                  <Text capitalize fontSize="8">
                    {type}
                  </Text>
                </Pill>
              ))}
            </Styled.PokemonTypesContainer>
          </Styled.PokemonInfoContainer>
          <Styled.PokemonIdContainer>
            <Text weight="bold" color="#2E363E2f">
              #{pokemon.id}
            </Text>
          </Styled.PokemonIdContainer>
          <Styled.PokemonImageContainer>
            {pokemon.image && (
              <PokemonImage src={pokemon.image} alt={pokemon.name} />
            )}
          </Styled.PokemonImageContainer>
        </Styled.Container>
      )}
    </>
  );
};
