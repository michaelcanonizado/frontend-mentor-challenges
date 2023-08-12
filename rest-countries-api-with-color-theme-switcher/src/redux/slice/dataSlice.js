import { createSlice } from '@reduxjs/toolkit';

const dataSlice = createSlice({
	name: 'countryData',
	initialState: {
		searchQuery: '',
		filterOption: 'All',
	},
	reducers: {
		setSearchQuery(state, action) {
			state.searchQuery = action.payload.query;
			return;
		},
		setFilterOption(state, action) {
			state.filterOption = action.payload.option;
			return;
		},
	},
});

export const dataActions = dataSlice.actions;

export default dataSlice.reducer;
