import React from "react";
import Card from "./Card";
import "./Hero.css";

const Hero = (props) => {
  const firstForNews = props.news.slice(0, 4);
  return (
    <div>
      <section className="hero">
        <div className="container">
          {firstForNews.map((item) => {
            return <Card key={item.source.id} item={item} />;
          })}
        </div>
      </section>
    </div>
  );
};

export default Hero;
