import { configureStore } from "@reduxjs/toolkit";
import goodsReducer from "../slices/goodsSlice.js";
import reviewsReducer from "../slices/reviewsSlice.js";
import cartReducer from "../slices/cartSlice.js";

const store = configureStore({
  reducer: {
    goods: goodsReducer,
    reviews: reviewsReducer,
    cart: cartReducer
  }
});

export default store;