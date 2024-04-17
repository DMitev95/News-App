const SearchByWord = async (searchWord) => {
  const response = await fetch(
    `https://localhost:7148/api/News/word?word=${searchWord}`
  );
  const data = await response.json();
  return data.result;
};

export default SearchByWord;
