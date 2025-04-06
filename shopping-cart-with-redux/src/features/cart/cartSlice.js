import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addItemToCart: (cart, action) => {
      cart.push(action.payload);
    },
    increaseQty: (cart, action) => {
      return cart.map((cartItem) =>
        cartItem.id === action.payload.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
    },
    decreaseQty: (cart, action) => {
      return cart.map((cartItem) =>
        cartItem.id === action.payload.id
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem
      );
    },
    removeItemToCart: (cart, action) => {
      return cart.filter((cartItem) => cartItem.id !== action.payload.id);
    },
  },
});

export const { addItemToCart, increaseQty, decreaseQty, removeItemToCart } =
  cartSlice.actions;
export default cartSlice.reducer;
