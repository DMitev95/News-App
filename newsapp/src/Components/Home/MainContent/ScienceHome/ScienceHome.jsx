import React from "react";
import Heading from "../../../Common/Heading/Heading";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ScienceHome.css";
import NewsForHomePage from "../NewsForHomepage/NewsForHomePage";

const ScienceHome = (props) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 910,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 2,
          dots: true,
        },
      },
    ],
  };

  return (
    <section className="science-home">
      <Heading title="Science" />
      <div className="content">
        <Slider {...settings}>
          {props.scienceNews.map((item) => {
            return <NewsForHomePage key={item.id} info={item} />;
          })}
        </Slider>
      </div>
    </section>
  );
};

export default ScienceHome;
