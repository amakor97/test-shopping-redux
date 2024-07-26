import { Link } from "react-router-dom";

import Card from "../components/card/Card.js";


import { useDispatch, useSelector } from "react-redux";
import { goodsData, goodsByText } from "../slices/goodsSlice.js";
import { useState } from "react";
import Header from "../components/header/Header.js";
import GridCont from "../components/gridCont/GridCont.js";
import SubHeader from "../components/subHeader/SubHeader.js";
import Search from "../components/search/Search.js";

export default function CatalogPage() {
  const [searchText, setSearchText] = useState("");

  const fCarsData = useSelector(state => goodsByText(state, searchText));

  function handleSearchInputChange(e) {
    setSearchText(e.target.value);
  }

  const shData = {
    text: "Catalog",
    href: "/cart",
    linkText: "Go to cart"
  };

  return (
    <div>
      <Header/>
      <SubHeader data={shData}/>
      <Search onInputChange={handleSearchInputChange}/>
      <GridCont dataArr={fCarsData}/>
    </div>
  );
}