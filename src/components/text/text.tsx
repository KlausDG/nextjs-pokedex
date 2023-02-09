import { TextElement } from "./text.styles";
import { TextProps } from "./text.types";

export const Text = ({
  children,
  capitalize = false,
  weight = "normal",
  fontSize = "12",
  color = "white",
}: TextProps) => {
  return (
    <TextElement
      capitalize={capitalize}
      weight={weight}
      fontSize={fontSize}
      color={color}
    >
      {children}
    </TextElement>
  );
};
