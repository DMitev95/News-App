import React from "react";
import "./Home.css";
import GeneralHome from "../GeneralHome/GeneralHome";
import Search from "../../../Common/Search/Search";
import BusinessHome from "../BusinessHome/BusinessHome";
import ScienceHome from "../ScienceHome/ScienceHome";
import SportsHome from "../SportsHome/SportsHome";

const Home = (props) => {
  return (
    <div className="container">
      <section className="mainContent">
        <GeneralHome generalNews={props.generalNews} />
        <BusinessHome businessNews={props.businessNews} />
        <ScienceHome scienceNews={props.scienceNews} />
        <SportsHome sportsNews={props.sportsNews} />
      </section>
      <section className="sideContent"></section>
    </div>
  );
};

export default Home;
