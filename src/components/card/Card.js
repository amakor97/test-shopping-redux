import cs from "./card.module.css";

import { useDispatch, useSelector } from "react-redux";
import { quantityInCart } from "../../slices/cartSlice";

import { addItem, removeCompletely, removeItem } from "../../slices/cartSlice";

import { useLocation } from "react-router";

export default function Card({data}) {
  const dispatch = useDispatch();
  const loc = useLocation();

  const goodCount = useSelector(state => quantityInCart(state, data.id));

  function handleAddItem() {
    if (data.left - goodCount > 0) {
      dispatch(addItem({id: data.id, name: data.name, cost: data.cost, left: data.left}))
    }
  }

  function handleRemoveItem() {
    dispatch(removeItem(data.id));
  }

  return (
    <div className={cs.card}>
      <h3>{data.name}</h3>
      <img className={cs.img} src={data.path}/>
      <p>Price: {data.cost}$</p>
      {
        loc.pathname.includes("cart") &&
        <p>Quantity: {goodCount}</p>
      }
      {
        !loc.pathname.includes("cart") &&
        <p>Left: {data.left - goodCount}</p>
      }
      {
        loc.pathname.includes("cart") &&
        <p>Price: {goodCount * data.cost}</p>
      }
      
      <div className={cs.btnBlock}>
        <button className={cs.btn} onClick={handleAddItem} disabled={(data.left - goodCount <= 0)}>Add one car</button>
        <button className={cs.btn} onClick={handleRemoveItem} disabled={(goodCount <= 0)}>Remove one car</button>
      </div>
    </div>
  );
}