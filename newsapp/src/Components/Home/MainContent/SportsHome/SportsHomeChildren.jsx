import React from "react";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

export const SportsHomeChildren = ({
  info: { id, author, title, description, url, urlToImage, publishedAt },
}) => {
  return (
    <div className="items">
      <div className="box shadow flexSB">
        <div className="images">
          <div className="img">
            <img src={urlToImage} alt="" />
          </div>
          <div className="category category1">
            <span>Sport</span>
          </div>
        </div>
        <div className="text">
          <h1 className="title">{title.slice(0, 40)}...</h1>
          <div className="date">
            <i>
              <CalendarMonthIcon />
            </i>
            <label>{publishedAt}</label>
          </div>
          {description !== null ? (
            <p className="desc">{description.slice(0, 250)}...</p>
          ) : (
            <p className="desc"></p>
          )}
          <div className="comment">
            <i></i>
            <label>Share / </label>
            <i></i>
            <label> 0</label>
          </div>
        </div>
      </div>
    </div>
  );
};
