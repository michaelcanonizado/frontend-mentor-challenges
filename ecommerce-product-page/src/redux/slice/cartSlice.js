import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
	name: 'cart',
	initialState: {
		cart: [],
	},
	reducers: {
		addItem(state, action) {
			console.log('Item Added');
		},
	},
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
