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

  const scienceNews = news.filter((item) => {
    if (item.category === "science") {
      return true;
    } else {
      return false;
    }
  });
  const sportsNews = news.filter((item) => {
    if (item.category === "sports") {
      return true;
    } else {
      return false;
    }
  });
  const businessNews = news.filter((item) => {
    if (item.category === "business") {
      return true;
    } else {
      return false;
    }
  });

  const herowNews = [
    scienceNews.slice(0, 1)[0],
    scienceNews.slice(0, 1)[0],
    sportsNews.slice(0, 1)[0],
    businessNews.slice(0, 1)[0],
  ];
  console.log(herowNews);

  return (
    <>
      <Hero news={businessNews.slice(0, 4)} />
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
