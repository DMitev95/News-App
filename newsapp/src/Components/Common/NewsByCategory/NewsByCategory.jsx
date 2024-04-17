import React, { useEffect, useState } from "react";
import Search from "../Services/Search";
import NewsList from "../News/NewsList";
import Loader from "../../Ui/Loader";
import "./NewsByCategory.css";

const NewsByCategory = ({ category }) => {
  const [news, setNews] = useState([]);
  const [isLoading, setIsloading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      setIsloading(true);
      const data = await Search(category);
      setNews(data);
      setIsloading(false);
    };
    fetchData();
  }, [category]);

  return isLoading ? <Loader /> : <NewsList news={news} />;
};

export default NewsByCategory;
