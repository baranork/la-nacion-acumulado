import { apiUrl } from "../utils/constants";

export const getArticles = () => {
  return fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    return data
  });
};
