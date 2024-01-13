// SearchForm.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { News } from "../News/News"; // Assuming the components are in the same directory

const SearchForm = () => {
  //   const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await fetch(
        `https://localhost:7148/api/News/word?word=${searchTerm}`
      );
      const data = await response.json();

      // Update state with search results
      setSearchResults(data.result);
      //   navigate("/Search");
    } catch (error) {
      console.error("Error making API request:", error);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      {searchResults.length > 0 &&
        searchResults.map((data) => {
          return <News info={data} />;
        })}
    </div>
  );
};

export default SearchForm;
