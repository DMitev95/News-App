import React from "react";
import Heading from "../../../Common/Heading/Heading";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./BusinessHome.css";
import NewsForHomePage from "../NewsForHomepage/NewsForHomePage";

const BusinessHome = (props) => {
  const settings = {
    className: "center",
    centerMode: false,
    infinite: true,
    centerPadding: "",
    slidesToShow: 2,
    speed: 500,
    rows: 1,
    slidesPerRow: 1,
    dots: false,
    autoplay: false,
    autoplaySpeed: 7000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };

  return (
    <>
      <section className="business-home">
        <Heading title="Business" />
        <div className="content">
          <Slider {...settings}>
            {props.businessNews.map((item) => {
              return <NewsForHomePage key={item.id} info={item} />;
            })}
          </Slider>
        </div>
      </section>
    </>
  );
};

export default BusinessHome;
