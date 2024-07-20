import { configureStore } from "@reduxjs/toolkit";
import goodsReducer from "../pages/goodsSlice.js";
import reviewsReducer from "../pages/reviewsSlice.js";
import cartReducer from "../pages/cartSlice.js";

const store = configureStore({
  reducer: {
    goods: goodsReducer,
    reviews: reviewsReducer,
    cart: cartReducer
  }
});

export default store;