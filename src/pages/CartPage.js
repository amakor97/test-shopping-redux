import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";
import { allCart } from "../slices/cartSlice";

import Card from "../components/Card";

export default function CartPage() {

  const cart = useSelector(allCart);
  console.log(cart);

  let sum = 0;

  const totalSum = cart.reduce((acc, good) => acc + good.cost*good.quantity, sum);
  console.log({totalSum});

  return (
    <div>
      <h1>Cart page</h1>
      {
        cart.map(good => <Card data={good}/>)
      }
      
      <p>total cart price: {totalSum}</p>

      <Link to="/">Go to catalog</Link>
    </div>
  );
}