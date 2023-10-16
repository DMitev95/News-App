import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

const Subscribe = () => {
  return (
    <>
      <section className="subscribe">
        <h1 className="title">Subscribe to our New News</h1>
        <form action="">
          <input type="text" placeholder="Email Address ..." />
          <button>
            <i>
              <FontAwesomeIcon icon={faPaperPlane} />
            </i>
            SUBMIT
          </button>
        </form>
      </section>
    </>
  );
};

export default Subscribe;
