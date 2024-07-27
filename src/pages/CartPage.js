import {  useSelector } from "react-redux";

import { allCart } from "../slices/cartSlice";

import Header from "../components/header/Header";
import CartCont from "../components/cartCont/CartCont";
import SubHeader from "../components/subHeader/SubHeader";

export default function CartPage() {
  const cart = useSelector(allCart);

  let sum = 0;

  const totalSum = cart.reduce((acc, good) => acc + good.cost*good.quantity, sum);

  const shData = {
    text: "Cart page",
    href: "/",
    linkText: "Go to catalog"
  };

  return (
    <div>
      <Header/>
      <SubHeader data={shData}/>
      <CartCont dataArr={cart}/>
      
      <p style={{textAlign: "center", fontSize: "2rem", marginTop: "1rem"}}>total cart price: {totalSum}</p>

    </div>
  );
}