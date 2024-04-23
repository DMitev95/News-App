import React from "react";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import CallIcon from "@mui/icons-material/Call";
import NewsLogo from "../../Common/images/logo.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="box">
          <div className="title">
            <img src={NewsLogo} alt="" />
            <h3>Best real news</h3>
          </div>
          <p>
            This is a demo of a news website. It's built with React.js and
            ASP.NET Core API. To fetch the latest news, I'm using
            https://newsapi.org/.
          </p>
          <div className="contacts">
            <div className="emailContact">
              <i>
                <AlternateEmailIcon />
              </i>
              <span>bestrealnews@news.com</span>
            </div>
            <div className="phoneContact">
              <i>
                <CallIcon />
              </i>
              <span>+12 213432523</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
