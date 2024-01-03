import React from "react";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import NoImage from "../../../Images/NoImage.png";

export const SportsHomeChildren = ({
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
      <div className="box shadow flexSB">
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

          {description !== null ? (
            <p className="desc">{description.slice(0, 250)}...</p>
          ) : (
            <p className="desc"></p>
          )}
          <div className="date">
            <i>
              <CalendarMonthIcon />
            </i>
            <label>{publishedAt}</label>
          </div>
          {/* <div className="comment">
            <i></i>
            <label>Share / </label>
            <i></i>
            <label> 0</label>
          </div> */}
        </div>
      </div>
    </div>
  );
};
