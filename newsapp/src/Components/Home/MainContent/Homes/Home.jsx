import React from "react";
import "./Home.css";
import GeneralHome from "../GeneralHome/GeneralHome";
import Search from "../../../Common/Search/Search";
import BusinessHome from "../BusinessHome/BusinessHome";
import ScienceHome from "../ScienceHome/ScienceHome";
import SportsHome from "../SportsHome/SportsHome";

const Home = () => {
  const data = Search();
  return (
    <div className="container">
      <section className="mainContent">
        <GeneralHome generalNews={data} />
        <BusinessHome businessNews={data} />
        <ScienceHome scienceNews={data} />
        <SportsHome sportsNews={data} />
      </section>
      <section className="sideContent"></section>
    </div>
  );
};

export default Home;
