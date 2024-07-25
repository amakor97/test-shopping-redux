import { Link } from "react-router-dom";

import Card from "../components/Card.js";

import { useSelector } from "react-redux";

import { allGoods, goodsData } from "../slices/goodsSlice.js";

export default function CatalogPage() {
  const carsData = useSelector(state => goodsData(state));
  console.log(carsData);

  return (
    <div>
      <h1>Catalog page</h1>
      <br/>
      {
        carsData.map(carData => <Card data={carData}/>)
      }

      <Link to="/cart">Go to cart</Link>
    </div>
  );
}