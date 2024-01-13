// SearchForm.js
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Assuming the components are in the same directory

const SearchForm = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    if (searchTerm !== "") {
      navigate(`/Search?query=${searchTerm}`);
    }
  };

  useEffect(() => {
    if (searchTerm !== "") {
      const delayDebounceFn = setTimeout(() => {
        navigate(`/Search?query=${searchTerm}`);
        console.log(searchTerm);
      }, 500);

      return () => clearTimeout(delayDebounceFn);
    }
  }, [navigate, searchTerm]);

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchForm;
