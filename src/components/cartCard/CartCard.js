import cc from "./cartCard.module.css";

import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem, quantityInCart } from "../../slices/cartSlice";

export default function CartCard({data}) {
  const dispatch = useDispatch();
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
    <div className={cc.card}>
      <h3>{data.name}</h3>
      <div className={cc.cardCont}>
        <button className={cc.btn} onClick={handleAddItem} disabled={(data.left - goodCount <= 0)}>Add one car</button>
        <button className={cc.btn} onClick={handleRemoveItem} disabled={(goodCount <= 0)}>Remove one car</button>
        <p>Quantity: {goodCount}</p>
        <p>Price: {goodCount * data.cost}$</p>
      </div>
    </div>
  );
}