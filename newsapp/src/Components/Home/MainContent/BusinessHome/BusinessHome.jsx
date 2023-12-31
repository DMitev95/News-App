import React from "react";
import Heading from "../../../Common/Heading/Heading";
import BusinessHomeChildren from "./BusinessHomeChildren";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./BusinessHome.css";

const BusinessHome = (props) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  return (
    <>
      <section className="business-home">
        <Heading title="Business" />
        <div className="content">
          <Slider {...settings}>
            {props.businessNews.map((item) => {
              return <BusinessHomeChildren key={item.id} info={item} />;
            })}
          </Slider>
        </div>
      </section>
    </>
  );
};

export default BusinessHome;
