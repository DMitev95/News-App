import React from "react";
import { getNews } from "../Common/Services/apiNews";
import Hero from "./Hero/Hero";
import Home from "./MainContent/Homes/Home";
import { useLoaderData } from "react-router-dom";

const Homepage = () => {
  const news = useLoaderData();

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

export async function loader() {
  const news = await getNews("home");
  return news;
}

export default Homepage;
