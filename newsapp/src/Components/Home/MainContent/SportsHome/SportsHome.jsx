import React from "react";
import Slider from "react-slick";
import Heading from "../../../Common/Heading/Heading";
import { SportsHomeChildren } from "./SportsHomeChildren";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SportsHome.css";

const SportsHome = (props) => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0",
    slidesToShow: 1,
    speed: 500,
    rows: 2,
    slidesPerRow: 1,
  };
  return (
    <section className="sport-home">
      <Heading title="Sport" />
      <div className="content">
        <Slider {...settings}>
          {props.sportsNews.map((item) => {
            return <SportsHomeChildren key={item.id} info={item} />;
          })}
        </Slider>
      </div>
    </section>
  );
};

export default SportsHome;
