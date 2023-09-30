import React from "react";
import "./Home.css";
import GeneralHome from "../GeneralHome/GeneralHome";
import Search from "../../../Common/Search/Search";

const Home = () => {
  const data = Search();
  return (
    <>
      <div className="container">
        <section className="mainContent">
          <GeneralHome generalNews={data} />
        </section>
        <section className="sideContent"></section>
      </div>
    </>
  );
};

export default Home;
