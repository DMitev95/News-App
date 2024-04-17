import React, { useEffect, useState } from "react";
import Search from "../Common/Services/Search";
import Hero from "./Hero/Hero";
import Home from "./MainContent/Homes/Home";
import Loader from "../Ui/Loader";

const Homepage = () => {
  const category = "home";
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
  }, []);

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

  return isLoading ? (
    <Loader />
  ) : (
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
