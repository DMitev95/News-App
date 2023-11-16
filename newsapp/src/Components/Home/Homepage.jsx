import React, { useEffect, useState } from "react";
import Search from "../Common/Search/Search";
import Hero from "./Hero/Hero";
import Home from "./MainContent/Homes/Home";

const Homepage = () => {
  const category = "home";
  const [news, setNews] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await Search(category);
      setNews(data);
    };
    fetchData();
  }, [category]);
  console.log(news);

  const scienceNews = news.filter((item) => item.category === "science");
  const sportsNews = news.filter((item) => item.category === "sports");
  const businessNews = news.filter((item) => item.category === "business");

  const herowNews = [];

  if (scienceNews.length > 0) {
    herowNews.push(scienceNews[0]);
  }

  if (scienceNews.length > 1) {
    herowNews.push(scienceNews[1]);
  }

  if (sportsNews.length > 0) {
    herowNews.push(sportsNews[0]);
  }

  if (businessNews.length > 0) {
    herowNews.push(businessNews[0]);
  }

  return (
    <>
      <Hero news={herowNews} />
      <Home
        generalNews={news}
        scienceNews={scienceNews}
        businessNews={businessNews}
        sportsNews={sportsNews}
      />
    </>
  );
};

export default Homepage;
