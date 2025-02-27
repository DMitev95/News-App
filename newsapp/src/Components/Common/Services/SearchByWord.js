import { apiURLByWord } from "../API/API";

// const SearchByWord = async (searchWord) => {
//   const response = await fetch(
//     `https://localhost:7148/api/News/word?word=${searchWord}`
//   );
//   const data = await response.json();
//   return data.result;
// };

// export default SearchByWord;

const apiKey = import.meta.env.VITE_NEWS_API_KEY;

const SearchByWord = async (searchWord) => {
  const response = await fetch(
    `${apiURLByWord}&q=${searchWord}&sortBy=popularity&apiKey=${apiKey}`
  );
  const data = await response.json();
  return data.articles
    .filter(
      (article) => article.author && article.author.toLowerCase() !== "unknown"
    )
    .map((article, index) => ({
      ...article,
      id: `${index}-${new Date().getTime()}`,
    }));
};

export default SearchByWord;
