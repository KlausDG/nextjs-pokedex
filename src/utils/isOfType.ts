export const isOfType = <T extends string>(
  value: string,
  unionValues: Array<string>
): value is T => {
  return unionValues.includes(value);
};
