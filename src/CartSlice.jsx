import { createSlice } from '@reduxjs/toolkit';

// Initial state for the cart slice
export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Array to store items in the cart
  },
  reducers: {
    // Action to add an item to the cart
    addItem: (state, action) => {
      const { name, image, cost } = action.payload;
      const existingItem = state.items.find(item => item.name === name);
      if (existingItem) {
        existingItem.quantity++; // Increment the quantity if the item is already in the cart
      } else {
        state.items.push({ name, image, cost, quantity: 1 }); // Add new item to the cart
      }
    },

    // Action to remove an item from the cart
    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.name !== action.payload);
    },

    // Action to update the quantity of an item in the cart
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      const itemToUpdate = state.items.find(item => item.name === name);
      if (itemToUpdate) {
        itemToUpdate.quantity = quantity; // Update the quantity of the item
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;
export default CartSlice.reducer;
