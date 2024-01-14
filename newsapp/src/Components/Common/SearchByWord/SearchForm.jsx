// SearchForm.js
import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom"; // Assuming the components are in the same directory

const SearchForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    if (searchTerm !== "") {
      const delayDebounceFn = setTimeout(() => {
        navigate(`/Search?query=${searchTerm}`);
        console.log(searchTerm);
      }, 500);

      return () => clearTimeout(delayDebounceFn);
    }
  }, [navigate, searchTerm]);

  useEffect(() => {
    if (location.pathname !== "/Search") setSearchTerm("");
  }, [location.pathname]);

  return (
    <form>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button>Search</button>
    </form>
  );
};

export default SearchForm;
