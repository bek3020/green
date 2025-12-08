import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    cart: [],
    like: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const item = state.cart.find((i) => i.id === action.payload.id);
      if (item) {
        item.quantity += 1;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },

    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },

    increment: (state, action) => {
      const item = state.cart.find((i) => i.id === action.payload);
      if (item) item.quantity += 1;
    },

    decrement: (state, action) => {
      const item = state.cart.find((i) => i.id === action.payload);
      if (item && item.quantity > 1) item.quantity -= 1;
    },

    addToLike: (state, action) => {
      const item = state.like.find((i) => i.id === action.payload.id);
      if (!item) state.like.push(action.payload);
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increment,
  decrement,
  addToLike,
  removeFromLike,
  clearCart,
} = productSlice.actions;

export default productSlice.reducer;
