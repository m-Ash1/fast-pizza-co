import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  shoppingCart: [],
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      state.shoppingCart.push(action.payload);
    },
    deleteItem(state, action) {
      state.shoppingCart = state.shoppingCart.filter(
        (pizza) => pizza.pizzaId !== action.payload,
      );
    },
    increaseItemQuantity(state, action) {
      const item = state.shoppingCart.find(
        (item) => item.pizzaId === action.payload,
      );
      item.quantity++;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    decreaseItemQuantity(state, action) {
      const item = state.shoppingCart.find(
        (item) => item.pizzaId === action.payload,
      );
      if (item.quantity === 1) {
        cartSlice.caseReducers.deleteItem(state, action);
      } else {
        item.quantity--;
        item.totalPrice = item.quantity * item.unitPrice;
      }
    },
    clearCart(state) {
      state.shoppingCart = [];
    },
  },
});

export const {
  addItem,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;

export const getTotalPrice = (store) =>
  store.cart.shoppingCart.reduce((acc, curr) => acc + curr.totalPrice, 0);
export const getTotalQuantity = (store) =>
  store.cart.shoppingCart.reduce((acc, curr) => acc + curr.quantity, 0);
