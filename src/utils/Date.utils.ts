export const formatDate = (date: Date): string =>
  date.toLocaleDateString().split("/").reverse().join("-");
