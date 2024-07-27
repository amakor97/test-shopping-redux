import cc from "./cartCont.module.css";

import CartCard from "../cartCard/CartCard.js";

export default function CartCont({dataArr}) {
  return (
    <div className={cc.cartCont}>
      {
        dataArr.map(data => <CartCard data={data}/>)
      }
    </div>
  );
}