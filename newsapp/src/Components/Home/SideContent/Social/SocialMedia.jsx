import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faPinterest,
  faTwitter,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import React from "react";

const SocialMedia = () => {
  return (
    <>
      <section className="social">
        <div className="socBox">
          <i>
            <FontAwesomeIcon icon={faFacebookF} />
          </i>
          <span>13,564 Likes</span>
        </div>

        <div className="socBox">
          <i>
            <FontAwesomeIcon icon={faPinterest} />
          </i>
          <span>5,265 Fans</span>
        </div>

        <div className="socBox">
          <i>
            <FontAwesomeIcon icon={faTwitter} />
          </i>
          <span>8,148 Followers</span>
        </div>

        <div className="socBox">
          <i>
            <FontAwesomeIcon icon={faInstagram} />
          </i>
          <span>23,564 Followers</span>
        </div>

        <div className="socBox">
          <i>
            <FontAwesomeIcon icon={faYoutube} />
          </i>
          <span>2,564 Subscriber</span>
        </div>
      </section>
    </>
  );
};

export default SocialMedia;
