// PopupWindow.js
import React from "react";
import "./PopUpNews.css";

const PopupWindow = ({
  content,
  title,
  urlToImage,
  publishedAt,
  author,
  onClose,
}) => {
  return (
    <div className="popup">
      <div className="popup-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <div className="box">
          <div className="img">
            <img src={urlToImage} alt=""></img>
          </div>
          <div className="text">
            {/* <span className="category"></span> */}
            <h1 className="titleBg">{title}</h1>
            <p>{content}</p>
            <div className="author flex">
              <span>by {author}</span>
              <span>{publishedAt}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupWindow;
