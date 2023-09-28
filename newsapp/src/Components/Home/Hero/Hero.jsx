import React from "react";
import Card from "./Card";
import "./Hero.css";

const Hero = (props) => {
  return (
    <div>
      <section className="hero">
        <div className="container">
          {props.news.map((item) => {
            return <Card key={item.source.id} item={item} />;
          })}
        </div>
      </section>
    </div>
  );
};

export default Hero;
