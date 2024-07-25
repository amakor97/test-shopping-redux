import { srcGoods } from "../remote/data.js";

import { createSlice, createSelector } from "@reduxjs/toolkit";

const initialState = {
  goods: JSON.parse(window.localStorage.getItem("goods")) ?? srcGoods
};

//console.log(initialState);

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
    },
    goodsData: createSelector(
      (sliceState) => sliceState.goods,
      (goods) => Object.values(goods)
    ),
    goodsByText: (state, filterText) => {
      console.log(filterText);
      return state.goods.filter(good => good.name.toLowerCase().includes(filterText.toLowerCase()));
    }
  }
})


export const {allGoods, goodsByCat, goodById, goodsData, goodsByText} = goodsSlice.selectors;
export default goodsSlice.reducer;