export const formatDate = (date: number | Date | string): string => {
  const parsedDate = new Date(date);
  if (isNaN(parsedDate.getTime())) return "";
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(parsedDate);
};
