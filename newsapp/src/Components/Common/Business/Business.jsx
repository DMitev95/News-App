import React, { useEffect, useState } from "react";
import Search from "../Search/Search";
import { News } from "../News/News";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Business.css";

const Business = () => {
  const category = "business";
  const [currentSlide, setCurrentSlide] = useState(0);
  const [news, setNews] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await Search(category);
      setNews(data);
    };
    fetchData();
  }, [category]);

  const settings = {
    dots: true,
    dotsClass: "slick-dots",
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    rows: 2,
    customPaging: (i) => (
      <div className={`custom-dot ${currentSlide === i ? "active" : ""}`}>
        {i + 1}
      </div>
    ),
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
  };

  return (
    <>
      <section className="content">
        <div className="container paddingTB categoryContent">
          <Slider {...settings}>
            {news.map((item) => {
              return <News key={item.id} info={item} />;
            })}
          </Slider>
        </div>
      </section>
    </>
  );
};

export default Business;
