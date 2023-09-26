import { months } from "./constants";

export const formatDisplayDate = (date) => {
  const d = new Date(date);

  const formattedDate = `${d.getDate()} de ${months[d.getMonth()]} de ${d.getFullYear()}`;

  return formattedDate
}