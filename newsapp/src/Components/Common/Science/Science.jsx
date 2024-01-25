import React, { useEffect, useState } from "react";
import NewsList from "../News/NewsList";
import Search from "../Search/Search";

const Science = () => {
  const category = "science";
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

export default Science;
