import { createSlice } from '@reduxjs/toolkit';

const themeSlice = createSlice({
	name: 'theme',
	initialState: {
		isDarkMode: JSON.parse(localStorage.getItem('isDarkMode')) || false,
	},
	reducers: {
		toggleDarkMode(state) {
			state.isDarkMode = !state.isDarkMode;
			localStorage.setItem('isDarkMode', JSON.stringify(state.isDarkMode));
			return;
		},
	},
});

export const themeActions = themeSlice.actions;

export default themeSlice.reducer;
