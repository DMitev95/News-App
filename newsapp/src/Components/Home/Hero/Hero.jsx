import React from "react";
import Card from "./Card";
import "./Hero.css";

const Hero = (props) => {
  const firstFourNews = props.news.slice(0, 4);
  return (
    <div>
      <section className="hero">
        <div className="container">
          {firstFourNews.map((item) => {
            return <Card key={item.id} item={item} />;
          })}
        </div>
      </section>
    </div>
  );
};

export default Hero;
