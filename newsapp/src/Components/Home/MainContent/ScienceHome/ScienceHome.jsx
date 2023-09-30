import React from "react";
import Heading from "../../../Common/Heading/Heading";
import ScienceHomeChildren from "./ScienceHomeChildren";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../BusinessHome/BusinessHome.css";

const ScienceHome = (props) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="business">
      <Heading title="Science" />
      <div className="content">
        <Slider {...settings}>
          {props.scienceNews.map((item) => {
            return <ScienceHomeChildren key={item.source.id} info={item} />;
          })}
        </Slider>
      </div>
    </section>
  );
};

export default ScienceHome;
