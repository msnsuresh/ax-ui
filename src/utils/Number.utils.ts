export const roundOff = (value: number): string => {
  return (Math.round(value * 100) / 100).toFixed(2);
};
