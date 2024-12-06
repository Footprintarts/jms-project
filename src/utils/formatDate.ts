export const formatDate = (date: string | number | Date, config?: any) => {
  const defaultOptions = { day: "numeric", month: "short", year: "numeric" };
  const options = config ? config : defaultOptions;

  return new Date(date).toLocaleDateString("en-us", options);
};
