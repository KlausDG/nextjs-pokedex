import { PillProps } from "./pill.types";

import * as Styled from "./pill.styles";

export const Pill = ({ children, color }: PillProps) => {
  return <Styled.Container color={color}>{children}</Styled.Container>;
};
