import React from "react";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import CommentIcon from "@mui/icons-material/Comment";
import "./GeneralHome.css";

const GeneralHomeChildren = ({
  info: { id, author, title, description, url, urlToImage, publishedAt },
}) => {
  return (
    <>
      <div className="items">
        <div className="box shadow">
          <div className="images row">
            <div className="img">
              <img src={urlToImage}></img>
            </div>
            <div className="category category1">
              <span>General</span>
            </div>
          </div>
          <div className="text row">
            <h1 className="title">{title.slice(0, 40)}...</h1>
            <div className="date">
              <i>
                <CalendarMonthIcon />
              </i>
              <label>{publishedAt}</label>
            </div>
            <div className="comment">
              <i>
                <CommentIcon />
              </i>
              <label>0</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GeneralHomeChildren;
