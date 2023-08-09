import { configureStore } from '@reduxjs/toolkit';

import themeReducer from './slice/themeSlice';

export default configureStore({
	reducer: {
		theme: themeReducer,
	},
});
