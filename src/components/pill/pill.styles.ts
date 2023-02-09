import styled from "styled-components";
import { PillColorOptions } from "./pill.types";

export const Container = styled.div`
  background-color: ${(props) =>
    PillColorOptions[props.color as keyof typeof PillColorOptions]};
  color: white;
  border-radius: 30px;
  width: fit-content;
  padding: 3px 12px 2px 12px;
  line-height: 1;
  vertical-align: middle;
`;
