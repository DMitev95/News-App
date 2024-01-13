// SearchResultsPage.js
import React from "react";
import { useLocation } from "react-router-dom";

const SearchResultsPage = () => {
  const location = useLocation();
  const searchQuery = new URLSearchParams(location.search).get("query");

  return (
    <div>
      <h2>Search Results for: {searchQuery}</h2>
    </div>
  );
};

export default SearchResultsPage;
