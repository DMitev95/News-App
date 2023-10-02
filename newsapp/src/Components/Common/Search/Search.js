import { test } from "../../../DummyData";
import React, { useEffect, useState } from "react";
import { apiURL } from "../API/API";

const Search = async (category) => {
  const data = await fetch(
    `https://localhost:7148/api/News/category?category=${category}`
  )
    .then((respose) => respose.json())
    .then((data) => data)
    .catch((err) => console.error(err));

  return data.result;
};

export default Search;
