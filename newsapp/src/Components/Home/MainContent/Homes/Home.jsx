import React from "react";
import "./Home.css";
import GeneralHome from "../GeneralHome/GeneralHome";
import BusinessHome from "../BusinessHome/BusinessHome";
import ScienceHome from "../ScienceHome/ScienceHome";
import SportsHome from "../SportsHome/SportsHome";
import Side from "../../SideContent/Side/Side";

const Home = (props) => {
  return (
    <>
      <main>
        <div className="container">
          <section className="mainContent">
            <GeneralHome generalNews={props.generalNews} />
            <BusinessHome businessNews={props.businessNews} />
            <ScienceHome scienceNews={props.scienceNews} />
            <SportsHome sportsNews={props.sportsNews} />
          </section>
          <section className="sideContent">
            <Side />
          </section>
        </div>
      </main>
    </>
  );
};

export default Home;
