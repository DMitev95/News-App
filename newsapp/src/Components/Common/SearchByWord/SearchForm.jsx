// SearchForm.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Assuming the components are in the same directory

const SearchForm = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    navigate(`/Search?query=${searchTerm}`);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={handleKeyPress}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchForm;
