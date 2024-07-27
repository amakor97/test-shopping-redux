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
        const index = state.cart.findIndex(good => good.id === action.payload.id);
        if (index > -1) {
          state.cart[index].quantity++;
        } else {
          state.cart.push({id: action.payload.id, name: action.payload.name, cost: action.payload.cost, left: action.payload.left, quantity: 1});
        }
      },
      prepare: (obj) => {
        return {payload: obj};
      }
    },
    removeItem: {
      reducer: (state, action) => {
        const index = state.cart.findIndex(good => good.id === action.payload);
        if (state.cart[index].quantity > 1) {
          state.cart[index].quantity--;
        } else {
          state.cart = state.cart.filter(item => item.id !== action.payload);
        }
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
      if (!targetGood) return 0;
      return targetGood.quantity;
    }
  }
})

export const {addItem, removeCompletely, removeItem} = cartSlice.actions;
export const {allCart, quantityInCart} = cartSlice.selectors;
export default cartSlice.reducer;