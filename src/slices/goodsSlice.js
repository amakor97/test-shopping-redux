import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  goods: JSON.parse(window.localStorage.getItem("goods"))
};

const goodsSlice = createSlice({
  name: "goods",
  initialState,
  reducers: {},
  selectors: {
    allGoods: (state) => state.goods,
    goodsByCat: (state, category) => state.goods.filter(good => good.category === category),
    goodById: (state, id) => {
      const good = state.goods.find(good => good.id === id);
      const reviews = state.reviews.filter(review => review.goodId === id);
      return {good, reviews};
    }
  }
})


export const {allGoods, goodsByCat, goodById} = goodsSlice.selectors;
export default goodsSlice.reducer;