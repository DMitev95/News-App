import React from "react";
import NoImage from "../../Common/images/NoImage.png";

const Card = ({
  item: { author, title, url, urlToImage, publishedAt, category },
}) => {
  return (
    <div className="box">
      <div className="img">
        {urlToImage !== null ? (
          <img src={urlToImage} alt=""></img>
        ) : (
          <img src={NoImage} alt=""></img>
        )}
      </div>
      <div className="text">
        <span className="category">{category}</span>
        <h1 className="title">
          <a href={url} target="_blank" rel="noreferrer">
            {title}
          </a>
        </h1>
        <div className="author flex">
          <span>by {author}</span>
          <span>{publishedAt}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
