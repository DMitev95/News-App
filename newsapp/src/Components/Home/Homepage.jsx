import React, { useEffect, useState } from "react";
import Search from "../Common/Search/Search";
import Hero from "./Hero/Hero";
import Home from "./MainContent/Homes/Home";

const Homepage = () => {
  const topNews = Search();

  return (
    <>
      <Hero news={topNews} />
      <Home />
    </>
  );
};

export default Homepage;
