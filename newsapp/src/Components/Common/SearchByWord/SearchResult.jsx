import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import SearchByWord from "../Services/SearchByWord";
import { News } from "../News/News";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SearchResultsPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [news, setNews] = useState([]);

  const location = useLocation();
  const searchWord = new URLSearchParams(location.search).get("query");

  useEffect(() => {
    const fetchData = async () => {
      const data = await SearchByWord(searchWord);
      setNews(data);
    };
    fetchData();
  }, [searchWord]);

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
    <section className="content">
      <div className="container paddingTB categoryContent">
        <Slider {...settings}>
          {news !== undefined
            ? news.map((item) => {
                return <News key={item.id} info={item} />;
              })
            : ""}
        </Slider>
      </div>
    </section>
  );
};

export default SearchResultsPage;
