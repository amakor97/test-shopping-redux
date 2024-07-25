import { useDispatch, useSelector } from "react-redux";
import { quantityInCart } from "../slices/cartSlice";

import { addItem, removeCompletely } from "../slices/cartSlice";

import { useLocation } from "react-router";

export default function Card({data}) {
  const dispatch = useDispatch();
  const loc = useLocation();


  const goodCount = useSelector(state => quantityInCart(state, data.id));
  console.log(goodCount);

  function handleAddItem() {
    if (data.left > 0) {
      console.log("adding");
      dispatch(addItem({id: data.id, name: data.name, cost: data.cost, left: data.left}))
    }
  }

  function handleRemoveCompletely() {
    dispatch(removeCompletely(data.id));
  }

  return (
    <div>
      <h2>{data.name}</h2>
      <p>cost: {data.cost}</p>
      {
        loc.pathname.includes("cart") &&
        <p>quantity: {goodCount}</p>
      }
      {
        !loc.pathname.includes("cart") &&
        <p>left: {data.left}</p>
      }
      
      <button onClick={handleAddItem}>add to cart</button>
      <button onClick={handleRemoveCompletely}>remove completely</button>
      <br/>
      <button>+</button>
      <button>-</button>
      <br/>
    </div>
  );
}