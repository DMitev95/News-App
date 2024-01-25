import React, { useEffect, useState } from "react";
import Search from "../Search/Search";
import NewsList from "../News/NewsList";

const NewsByCategory = ({ category }) => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await Search(category);
      setNews(data);
    };
    fetchData();
  }, [category]);

  return (
    <>
      <section className="content">
        <NewsList news={news} />
      </section>
    </>
  );
};

export default NewsByCategory;
