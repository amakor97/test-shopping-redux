import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";
import { allCart } from "../slices/cartSlice";

import Card from "../components/Card";

export default function CartPage() {

  const cart = useSelector(allCart);
  console.log(cart);


  return (
    <div>
      <h1>Cart page</h1>
      {
        cart.map(good => <Card data={good}/>)
      }
      <Link to="/">Go to catalog</Link>
    </div>
  );
}