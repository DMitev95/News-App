import React from "react";
import Heading from "../../../Common/Heading/Heading";
import Slider from "react-slick";
import "./GeneralHome.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import GeneralHomeChildren from "./GeneralHomeChildren";

const GeneralHome = (props) => {
  const settings = {
    className: "center",
    centerMode: false,
    infinite: true,
    centerPadding: "",
    slidesToShow: 2,
    speed: 500,
    rows: 4,
    slidesPerRow: 1,
    dots: false,
    autoplay: true,
    autoplaySpeed: 7000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <section className="general-home">
        <Heading title="General" />
        <div className="content">
          <Slider {...settings}>
            {props.generalNews.map((item) => {
              return <GeneralHomeChildren key={item.id} info={item} />;
            })}
          </Slider>
        </div>
      </section>
    </>
  );
};

export default GeneralHome;
