import React, { useEffect, useState } from "react";
import Search from "../Search/Search";
import { BusinessChildren } from "./BusinessChildren";

const Business = () => {
  const category = "business";
  const [news, setNews] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await Search(category);
      setNews(data);
    };
    fetchData();
  }, [category]);

  console.log(news);

  return (
    <>
      <section className="business">
        <div className="container paddingTB">
          {news.map((item) => {
            return <BusinessChildren key={item.id} info={item} />;
          })}
        </div>
      </section>
    </>
  );
};

export default Business;
