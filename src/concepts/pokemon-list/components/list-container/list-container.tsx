import { ComponentWithChildren } from "@/types";
import * as Styled from "./list-cointainer.styles";

export const ListContainer = ({ children }: ComponentWithChildren) => {
  return <Styled.Container>{children}</Styled.Container>;
};
