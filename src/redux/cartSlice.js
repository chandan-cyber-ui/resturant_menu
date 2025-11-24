import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    AddItem: (state, action) => {
      state.push(action.payload);   // add item to cart
    }
  }
});

export const { AddItem } = cartSlice.actions;
export default cartSlice.reducer;
