import { apiURL } from "../API/API";

// export async function getNews(category) {
//   try {
//     const response = await fetch(
//       `https://localhost:7148/api/News/category?category=${category}`
//     );
//     const data = await response.json();
//     if (!response.ok || !data.result) throw Error();
//     return data.result;
//   } catch {
//     throw Error(`Incorect category!`);
//   }
// }

const apiKey = import.meta.env.VITE_NEWS_API_KEY;

export async function getNews(category) {
  try {
    // If category is "home", fetch from multiple categories
    if (category === "home") {
      const categories = ["business", "sports", "science"];

      // Fetch news for each category and add category to each article
      const newsPromises = categories.map(async (cat) => {
        const response = await fetch(
          `${apiURL}&category=${cat.toLowerCase()}&pageSize=10&sortBy=popularity&apiKey=${apiKey}`
        );
        const data = await response.json();
        if (!response.ok || !data.articles) throw new Error();

        // Add category field to each article
        return data.articles
          .filter(
            (article) =>
              article.author && article.author.toLowerCase() !== "unknown"
          )
          .map((article, index) => ({
            ...article,
            id: `${cat}-${index}-${new Date().getTime()}`,
            category: cat, // Add category tag
          }));
      });

      // Wait for all API requests to complete
      const newsResults = await Promise.all(newsPromises);
      const allNews = newsResults.flat(); // Merge all category results
      return allNews;
    }

    // Normal request if category is not "home"
    const response = await fetch(
      `${apiURL}&category=${category.toLowerCase()}&pageSize=100&sortBy=popularity&apiKey=${apiKey}`
    );
    const data = await response.json();
    if (!response.ok || !data.articles) throw new Error();

    // Add category field to each article
    return data.articles
      .filter(
        (article) =>
          article.author && article.author.toLowerCase() !== "unknown"
      )
      .map((article, index) => ({
        ...article,
        id: `${category}-${index}-${new Date().getTime()}`,
        category, // Add category tag
      }));
  } catch {
    throw new Error(`Incorrect category!`);
  }
}
