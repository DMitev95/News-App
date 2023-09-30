import { test } from "../../../DummyData";
import React, { useEffect, useState } from "react";

const Search = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    const fetchData = () => {
      const data = test;
      setNews(data.articles);
    };
    fetchData();
  }, []);

  return news;
};

export default Search;
