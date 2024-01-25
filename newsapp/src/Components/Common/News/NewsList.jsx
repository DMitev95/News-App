import React, { useState } from "react";
import { News } from "./News";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./NewsList.css";

export default function NewsList({ news }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const settings = {
    dots: true,
    dotsClass: "slick-dots",
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    rows: 4,
    customPaging: (i) => (
      <div className={`custom-dot ${currentSlide === i ? "active" : ""}`}>
        {i + 1}
      </div>
    ),
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
  };
  return (
    <div className="container paddingTB categoryContent">
      <Slider {...settings}>
        {news.map((item) => {
          return <News key={item.id} info={item} />;
        })}
      </Slider>
    </div>
  );
}
