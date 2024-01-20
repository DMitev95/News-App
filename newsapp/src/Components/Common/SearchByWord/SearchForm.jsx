import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./SearchForm.css";

const SearchForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    if (searchTerm !== "") {
      const delayDebounceFn = setTimeout(() => {
        navigate(`/Search?query=${searchTerm}`);
      }, 500);
      return () => clearTimeout(delayDebounceFn);
    }
  }, [navigate, searchTerm]);

  useEffect(() => {
    if (location.pathname !== "/Search") {
      setSearchTerm("");
    }
  }, [location.pathname]);

  return (
    <form>
      <input
        className="search"
        type="text"
        value={`${searchTerm}`}
        placeholder="Search for specific news"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </form>
  );
};

export default SearchForm;
