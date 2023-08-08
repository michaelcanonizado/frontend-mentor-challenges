import { configureStore } from '@reduxjs/toolkit';

import ageReducer from './slice/ageSlice';

export default configureStore({
	reducer: {
		age: ageReducer,
	},
});
