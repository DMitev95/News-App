//import { apiURL } from "../API/API";

// export async function getNews(category) {
//   const response = await fetch(
//     `https://localhost:7148/api/News/category?category=${category}`
//   );
//   const data = await response.json();
//   if (!response.ok || !data.result) throw Error(`Incorect category!`);
//   return data.result;
// }

export async function getNews(category) {
  try {
    const response = await fetch(
      `https://localhost:7148/api/News/category?category=${category}`
    );
    const data = await response.json();
    if (!response.ok || !data.result) throw Error();
    return data.result;
  } catch {
    throw Error(`Incorect category!`);
  }
}
