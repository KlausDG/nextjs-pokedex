import styled from "styled-components";
import { CardColorOptions, ContainerProps } from "./pokemon-card.types";

export const Container = styled.div<ContainerProps>`
  position: relative;
  padding: 22px 12px;
  width: 150px;
  height: 100px;
  background-color: ${(props) =>
    CardColorOptions[props.color as keyof typeof CardColorOptions]};

  border-radius: 15px;
`;

export const PokemonInfoContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const PokemonTypesContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const PokemonIdContainer = styled.section`
  position: absolute;
  top: 10px;
  right: 15px;
`;

export const PokemonImageContainer = styled.section`
  position: absolute;
  top: 40px;
  right: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
