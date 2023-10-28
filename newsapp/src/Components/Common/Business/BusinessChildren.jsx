import React from "react";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import CommentIcon from "@mui/icons-material/Comment";

export const BusinessChildren = ({
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
    <>
      <div className="images">
        <div className="img" style={{ height: "500px" }}>
          <img src={urlToImage}></img>
        </div>
        <div className="category category1">
          <span>{category}</span>
        </div>
      </div>
      <div className="text">
        <h1 className="title">{title.slice(0, 200)}</h1>
        <p className="description">
          {description === null
            ? "Dosent have description!"
            : description.slice(0, 200)}
        </p>
        <div className="date">
          <i>
            <CalendarMonthIcon />
          </i>
          <label> {publishedAt}</label>
        </div>
        <div className="comment">
          <i>
            <CommentIcon />
          </i>
          <label> 0</label>
        </div>
      </div>
    </>
  );
};
