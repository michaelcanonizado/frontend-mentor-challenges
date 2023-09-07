import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
	name: 'cart',
	initialState: {
		totalItems: 0,
		items: [
			{
				img: 'image-product-1-thumbnail.jpg',
				name: 'Fall Limited Edition Sneakers',
				price: 125,
				qty: 3,
				totalPrice: 400,
			},
			{
				img: 'image-product-2-thumbnail.jpg',
				name: 'Fall Limited',
				price: 175,
				qty: 5,
				totalPrice: 375,
			},
		],
	},
	reducers: {
		addItem(state, action) {
			console.log('Item Added');
		},
	},
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
