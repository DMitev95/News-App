import React from "react";
import Logo from "../images/logo.png";

const Head = () => {
  return (
    <section className="head">
      <div className="container flexSB paddingTB">
        <div className="logo">
          <img src={Logo} alt="" />
        </div>
        <h1>BEST REAL NEWS</h1>
        <div className="logo">
          <img src={Logo} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Head;
