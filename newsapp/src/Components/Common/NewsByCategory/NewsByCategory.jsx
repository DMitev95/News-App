import { useEffect, useRef, React } from "react";
import Slider from "react-slick";
import { getNews } from "../Services/apiNews";
import { News } from "../News/News";
import { useLoaderData } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./NewsByCategory.css";

const NewsByCategory = ({ category }) => {
  const news = useLoaderData();
  let sliderRef = useRef(null); // Create a ref for the slider

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

  // Reset slider to first slide when category changes
  useEffect(() => {
    sliderRef.slickGoTo(0);
  }, [category]); // Runs whenever the category changes

  return (
    <div className="container paddingTB categoryContent">
      <Slider
        ref={(slider) => {
          sliderRef = slider;
        }}
        {...settings}
      >
        {news.map((item) => (
          <News key={item.id} info={item} />
        ))}
      </Slider>
    </div>
  );
};

export async function loader(category) {
  const news = await getNews(category);
  return news;
}

export default NewsByCategory;
