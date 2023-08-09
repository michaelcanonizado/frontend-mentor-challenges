import { createSlice } from '@reduxjs/toolkit';

const themeSlice = createSlice({
	name: 'theme',
	initialState: {
		isDarkMode: false,
	},
	reducers: {
		toggleDarkMode(state) {
			state.isDarkMode = !state.isDarkMode;
			return;
		},
	},
});

export const themeActions = themeSlice.actions;

export default themeSlice.reducer;
