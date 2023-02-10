export type PillProps = {
  children: React.ReactNode;
  color: ColorOptions;
};

type ColorOptions = keyof typeof PillColorOptions;

export enum PillColorOptions {
  green = "#60E2C8",
  red = "#F58D8D",
  blue = "#6FC1F9",
  gray = "#C8CCD2",
}
