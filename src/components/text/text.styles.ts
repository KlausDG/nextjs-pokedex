import styled, { css } from "styled-components";
import { TextStylesProps } from "./text.types";

export const TextElement = styled.p<TextStylesProps>`
  color: white;

  ${({ capitalize }) =>
    capitalize &&
    css`
      &::first-letter {
        text-transform: capitalize;
      }
    `}

  ${({ weight, fontSize, color }) =>
    css`
      color: ${color};
      font-weight: ${weight};
      font-size: ${fontSize}px;
    `}
`;
