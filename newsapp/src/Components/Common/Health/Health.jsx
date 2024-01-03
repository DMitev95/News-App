import React, { useEffect, useState } from "react";
import Search from "../Search/Search";
import { News } from "../News/News";

const Health = () => {
  const category = "health";
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
        <div className="container paddingTB categoryContent">
          {news.map((item) => {
            return <News key={item.id} info={item} />;
          })}
        </div>
      </section>
    </>
  );
};

export default Health;
