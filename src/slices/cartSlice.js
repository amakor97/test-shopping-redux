import { createSelector, createSlice } from "@reduxjs/toolkit";

const initialState = ({
  cart: []
});

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: {
      reducer: (state, action) => {
        const index = state.cart.findIndex(good => good.id === action.payload);
        if (index > -1) {
          state.cart[index].quantity++;
        } else {
          state.cart.push({id: action.payload, quantity: 1});
        }
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
    allCart: (state) => state.cart,
    quantityInCart: (state, id) => {
      const targetGood = state.cart.find(good => good.id === id);
      console.log(targetGood);
      if (!targetGood) return 0;
      return targetGood.quantity;
    }
  }
})

export const {addItem, removeItem} = cartSlice.actions;
export const {allCart, quantityInCart} = cartSlice.selectors;
export default cartSlice.reducer;