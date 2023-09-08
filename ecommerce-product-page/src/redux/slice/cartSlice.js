import { createSlice } from '@reduxjs/toolkit';

const getTotalCartItems = (cartArr) => {
	let totalItems = null;

	cartArr.forEach((item) => {
		totalItems += item.qty;
	});

	return totalItems;
};

const cartSlice = createSlice({
	name: 'cart',
	initialState: {
		totalItems: 8,
		items: [
			{
				id: '1',
				img: 'image-product-1-thumbnail.jpg',
				name: 'Fall Limited Edition Sneakers',
				price: 125,
				qty: 3,
				totalPrice: 375,
			},
			{
				id: '2',
				img: 'image-product-2-thumbnail.jpg',
				name: 'Fall Limited',
				price: 175,
				qty: 5,
				totalPrice: 875,
			},
		],
	},
	reducers: {
		addItem(state, action) {
			const itemDetails = action.payload.item;
			const itemQty = action.payload.qty;

			// Check if item exists in the cart, if exists, get the index
			const filteredItemIndex = state.items.findIndex((item) => {
				if (item.id === itemDetails.id) {
					return item;
				}
			});

			// If it doesn't exist, add it to the cart
			if (filteredItemIndex === -1) {
				state.items.unshift({
					id: itemDetails.id,
					img: itemDetails.images.thumbnails[0],
					name: itemDetails.name,
					price: itemDetails.price.salePrice,
					qty: itemQty,
					totalPrice:
						parseFloat(itemDetails.price.salePrice) * parseInt(itemQty),
				});

				// Update the total number of items in the cart
				state.totalItems = getTotalCartItems(state.items);
			}
			// If it is already in the array, just add the item's qty to the qty in the cart
			else {
				state.items[filteredItemIndex].qty += parseInt(itemQty);
				state.items[filteredItemIndex].totalPrice =
					state.items[filteredItemIndex].price *
					state.items[filteredItemIndex].qty;

				// Update the total number of items in the cart
				state.totalItems = getTotalCartItems(state.items);
			}
		},
	},
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
