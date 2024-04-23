import React from "react";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PersonIcon from "@mui/icons-material/Person";
import NoImage from "../../../Common/images/NoImage.png";

const NewsForHomePage = ({
  info: {
    id,
    author,
    category,
    title,
    description,
    url,
    urlToImage,
    publishedAt,
  },
}) => {
  return (
    <div className="items">
      <div className="box shadow">
        <div className="images">
          <div className="img">
            {urlToImage !== null ? (
              <img src={urlToImage} alt=""></img>
            ) : (
              <img src={NoImage} alt=""></img>
            )}
          </div>
          <div className="category category1">
            <span>{category}</span>
          </div>
        </div>
        <div className="text">
          <h1 className="title">
            <a href={url} target="_blank" rel="noreferrer">
              {title.slice(0, 60)}...
            </a>
          </h1>
          <div className="date">
            <i>
              <CalendarMonthIcon />
            </i>
            <label> {publishedAt}</label>
          </div>
          <div className="author">
            <i>
              <PersonIcon />
            </i>
            <label>
              {" "}
              by {author === "" || author === null ? "Unknown" : author}
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsForHomePage;
