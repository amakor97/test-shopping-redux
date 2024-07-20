import { createSlice } from "@reduxjs/toolkit";

const initialState = ({
  reviews: []
});

const reviewsSlice = createSlice({
  name: "reviews",
  initialState,
  reducers: {
    addReview: {
      reducer: (state, action) => {
        state.reviews.push(action.payload);
      },
      prepare: (reviewObj) => {
        return {payload: reviewObj}
      }
    }
  },
  selectors: {
    allReviewsByGoodId: (state, goodId) => state.reviews.filter(review => review.goodId === goodId)
  }
});

export const {addReview} = reviewsSlice.actions;
export const {allReviewsByGoodId} = reviewsSlice.selectors;
export default reviewsSlice.reducer;