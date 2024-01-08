import React from "react";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import NoImage from "../../../Common/images/NoImage.png";

const ScienceHomeChildren = ({
  info: { author, category, title, url, urlToImage, publishedAt },
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
        </div>
      </div>
    </div>
  );
};

export default ScienceHomeChildren;
