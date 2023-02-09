export type TextProps = TextStylesProps & {
  children: React.ReactNode;
};

export type TextStylesProps = {
  capitalize?: boolean;
  weight?: TextWeights;
  fontSize?: TextSizes;
  color?: string;
};

export type TextWeights = "bold" | "normal";
export type TextSizes = "4" | "8" | "12" | "16";
