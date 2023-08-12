import { configureStore } from '@reduxjs/toolkit';

import themeReducer from './slice/themeSlice';

import dataReducer from './slice/dataSlice';

export default configureStore({
	reducer: {
		theme: themeReducer,
		data: dataReducer,
	},
});
