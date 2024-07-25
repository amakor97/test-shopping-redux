import { Link } from "react-router-dom";

import Card from "../components/Card.js";

import { useDispatch, useSelector } from "react-redux";

import { allGoods, goodsData, goodsByText } from "../slices/goodsSlice.js";

import { useState } from "react";

export default function CatalogPage() {
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState("");

  const carsData = useSelector(state => goodsData(state));
  const fCarsData = useSelector(state => goodsByText(state, searchText));
  console.log(carsData);
  console.log(fCarsData);

  function handleSearchInputChange(e) {
    console.log(e.target.value);
    setSearchText(e.target.value);
    console.log(searchText);
  }


  return (
    <div>
      <h1>Catalog page</h1>
      <br/>

      <input type="text" name="filterText" placeholder="search..." onChange={handleSearchInputChange}/>

      {
        fCarsData.map(carData => <Card data={carData}/>)
      }

      <Link to="/cart">Go to cart</Link>
    </div>
  );
}