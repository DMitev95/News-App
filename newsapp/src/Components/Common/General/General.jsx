import React, { useEffect, useState } from "react";
import Search from "../Search/Search";
import { GeneralChildren } from "./GeneralChildren";

const General = () => {
  // const category = "general";
  // const [news, setNews] = useState([]);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const data = await Search(category);
  //     setNews(data);
  //   };
  //   fetchData();
  // }, [category]);

  return (
    <>
      <section className="general">
        <div className="container paddingTB">
          {/* {news.map((item) => {
            return <GeneralChildren key={item.id} info={item} />;
          })} */}
          <h1>General section!</h1>
        </div>
      </section>
    </>
  );
};

export default General;
