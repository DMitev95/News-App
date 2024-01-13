import { apiURL } from "../API/API";

const Search = async (category) => {
  const response = await fetch(
    `https://localhost:7148/api/News/category?category=${category}`
  );
  const data = await response.json();
  return data.result;
};

export default Search;
