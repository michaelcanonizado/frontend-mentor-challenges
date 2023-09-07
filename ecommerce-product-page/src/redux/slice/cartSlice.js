import { createSlice, current } from '@reduxjs/toolkit';

const cartSlice = createSlice({
	name: 'cart',
	initialState: {
		totalItems: 0,
		items: [
			{
				id: '1',
				img: 'image-product-1-thumbnail.jpg',
				name: 'Fall Limited Edition Sneakers',
				price: 125,
				qty: 3,
				totalPrice: 400,
			},
			{
				id: '2',
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
			const itemDetails = action.payload.item;
			const itemQty = action.payload.qty;

			// const filteredItem = state.items.filter((item) => {
			// 	if (item.id === '1') {
			// 		return item;
			// 	}
			// });

			// if (filteredItem.length === 0) {
			// 	state.items.push(itemDetails);
			// } else {
			// 	const item = state.items.find((item) => {
			// 		if (item.id === '1') {
			// 			return item;
			// 		}
			// 	});
			// }
		},
	},
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
