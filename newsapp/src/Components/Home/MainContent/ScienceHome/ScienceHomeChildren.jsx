import React from "react";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

const ScienceHomeChildren = ({
  info: { id, author, title, description, url, urlToImage, publishedAt },
}) => {
  return (
    <>
      <div className="items">
        <div className="box shadow">
          <div className="images">
            <div className="img">
              <img src={urlToImage}></img>
            </div>
            <div className="category category1">
              <span>Business</span>
            </div>
          </div>
          <div className="text">
            <h1 className="title">{title.slice(0, 40)}...</h1>
            <div className="date">
              <i>
                <CalendarMonthIcon />
              </i>
              <label> {publishedAt}</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ScienceHomeChildren;
