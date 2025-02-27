import React from "react";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PersonIcon from "@mui/icons-material/Person";
import NoImage from "../../Common/images/NoImage.png";
import "./News.css";

export const News = ({
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
    <div className="news">
      <div className="news-content">
        <div className="images">
          <div className="img">
            {urlToImage !== null ? (
              <img src={urlToImage} alt=""></img>
            ) : (
              <img src={NoImage} alt=""></img>
            )}
          </div>
          {category === null || category === "" ? (
            ""
          ) : (
            <div className="category category1">
              <span>{category}</span>
            </div>
          )}
        </div>
        <div className="text">
          <h1 className="title">{title.slice(0, 200)}</h1>
          <p className="description">
            {description === null
              ? "Dosent have description!"
              : description.slice(0, 200)}
          </p>
          <div className="news-footer">
            <div className="info">
              <div className="date">
                <i className="icon">
                  <CalendarMonthIcon />
                </i>
                <label> {publishedAt}</label>
              </div>
              <div className="author">
                <i className="icon">
                  <PersonIcon />
                </i>
                <label>
                  {" "}
                  by {author === "" || author === null ? "Unknown" : author}
                </label>
              </div>
            </div>
            <div className="read-more">
              <a href={url} target="_blank" rel="noopener noreferrer">
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
