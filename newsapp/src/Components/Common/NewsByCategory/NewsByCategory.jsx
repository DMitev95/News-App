import React, { useEffect, useState } from "react";
import { getNews } from "../Services/apiNews";
import Slider from "react-slick";
import { News } from "../News/News";
import Loader from "../../Ui/Loader/Loader";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./NewsByCategory.css";

const NewsByCategory = ({ category }) => {
  const [news, setNews] = useState([]);
  const [isLoading, setIsloading] = useState(false);

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

  useEffect(() => {
    const fetchData = async () => {
      setIsloading(true);
      const data = await getNews(category);
      setNews(data);
      setIsloading(false);
    };
    fetchData();
  }, [category]);

  return isLoading ? (
    <Loader />
  ) : (
    <div className="container paddingTB categoryContent">
      <Slider {...settings}>
        {news.map((item) => {
          return <News key={item.id} info={item} />;
        })}
      </Slider>
    </div>
  );
};

export default NewsByCategory;
