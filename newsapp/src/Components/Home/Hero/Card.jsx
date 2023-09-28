import React from "react";

const Card = ({
  item: { id, author, title, description, url, urlToImage, publishedAt },
}) => {
  return (
    <>
      <div className="box">
        <div className="img">
          <img src={urlToImage} alt=""></img>
        </div>
        <div className="text">
          {/* <span className="category"></span> */}
          <h1 className="titleBg">
            <a href={url}>{title}</a>
          </h1>
          <div className="author flex">
            <span>by {author}</span>
            <span>{publishedAt}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
