import React from "react";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import CommentIcon from "@mui/icons-material/Comment";
import "./GeneralHome.css";

const GeneralHomeChildren = ({
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
      <div className="items">
        <div className="box shadow">
          <div className="images">
            <div className="img">
              <img src={urlToImage} alt=""></img>
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
                <label> {publishedAt}</label>
              </i>
            </div>
            <div className="comment">
              <i>
                <CommentIcon />
                <label> {author}</label>
              </i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GeneralHomeChildren;
