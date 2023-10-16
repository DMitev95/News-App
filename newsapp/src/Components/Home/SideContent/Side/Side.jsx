import React from "react";
import Heading from "../../../Common/Heading/Heading";
import SocialMedia from "../Social/SocialMedia";
import "./Side.css";
import Subscribe from "../Subscribe/Subscribe";

const Side = () => {
  return (
    <>
      <Heading title="Stay Connected" />
      <SocialMedia />
      <Heading title="Subscribe" />
      <Subscribe />
    </>
  );
};

export default Side;
