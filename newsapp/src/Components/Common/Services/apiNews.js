import { apiURL } from "../API/API";

export async function getNews(category) {
  const response = await fetch(
    `https://localhost:7148/api/News/category?category=${category}`
  );
  if (!response.ok) throw Error(`Incorect category!`);
  const data = await response.json();
  return data.result;
}
