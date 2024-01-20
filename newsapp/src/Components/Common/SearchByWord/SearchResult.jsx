import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import SearchByWord from "../Search/SearchByWord";
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
