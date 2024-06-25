import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
   name: 'cart',
   initialState: {
      items: []
   },
   reducers: {
      addItem: (state, payload) => {
         state.items.push(payload.payload);
      },
      removeItem: (state, payload) => {
         state.items = state.items.filter(item => item.id !== payload.payload);
      },
      clearCart: (state) => {
         state.items.length = 0;
      },
      updateQuantity: (state, action) => {
         const { productId, quantity } = action.payload;
         const index = state.items.findIndex(item => item.id === productId);
         state.items[index]['quantity'] = quantity
      },

   }
});

export const { addItem, removeItem, clearCart, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;