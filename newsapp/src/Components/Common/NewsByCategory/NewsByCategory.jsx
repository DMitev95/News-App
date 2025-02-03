import React from "react";
import Slider from "react-slick";
import { getNews } from "../Services/apiNews";
import { News } from "../News/News";
import { useLoaderData } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./NewsByCategory.css";

const NewsByCategory = () => {
  const news = useLoaderData();

  const settings = {
    dots: true,
    dotsClass: "slick-dots",
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    rows: 4,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 956,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 4,
          dots: true,
        },
      },
    ],
    customPaging: (i) => <div className="custom-dot">{i + 1}</div>,
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
};

export async function loader(category) {
  const news = await getNews(category);
  return news;
}

export default NewsByCategory;
