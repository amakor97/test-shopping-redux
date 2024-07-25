import { useDispatch, useSelector } from "react-redux";
import { quantityInCart } from "../slices/cartSlice";

import { addItem } from "../slices/cartSlice";

export default function Card({data}) {
  const dispatch = useDispatch();
  
  const goodCount = useSelector(state => quantityInCart(state, data.id));
  console.log(goodCount);

  function handleAddItem() {

    if (data.left > 0) {
      dispatch(addItem(data.id))
    }
  }

  return (
    <div>
      <h2>{data.name}</h2>
      <p>cost: {data.cost}</p>
      <p>left: {data.left}</p>
      <button onClick={handleAddItem}>add to cart</button>
      <br/>
      <br/>
    </div>
  );
}