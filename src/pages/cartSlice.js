import { createSlice } from "@reduxjs/toolkit";

const initialState = ({
  cart: []
});

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: {
      reducer: (state, action) => {
        state.cart.push(action.payload);
      },
      prepare: (id) => {
        return {payload: id};
      }
    },
    removeItem: {
      reducer: (state, action) => {
        state.cart = state.cart.filter(item => item.id !== action.payload);
      },
      prepare: (id) => {
        return {payload: id};
      }
    }
  },
  selectors: {
    allCart: (state) => state.cart
  }
})

export const {addItem, removeItem} = cartSlice.actions;
export const {allCart} = cartSlice.selectors;
export default cartSlice.reducer;