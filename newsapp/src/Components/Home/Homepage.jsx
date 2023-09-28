import React, { useEffect, useState } from "react";
import Search from "../Common/Search/Search";
import Hero from "./Hero/Hero";

const Homepage = () => {
  const [topNews, setTopNews] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await Search();
      setTopNews(data.articles);
    };
    fetchData();
    console.log(topNews);
  }, []);

  return (
    <div>
      <Hero news={topNews} ivan={true} />
    </div>
  );
};

export default Homepage;
