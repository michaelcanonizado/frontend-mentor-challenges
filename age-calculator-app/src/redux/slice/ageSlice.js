import moment from 'moment';

import { createSlice } from '@reduxjs/toolkit';

const getTotalDaysLived = (data) => {
	// const today = {
	// 	year: new Date().getFullYear(),
	// 	month: new Date().getMonth() + 1,
	// 	day: new Date().getDate(0),
	// };

	// Get Birthday data with moment
	const birthdayDate = moment([
		parseInt(data.birthday.year),
		parseInt(data.birthday.month),
		parseInt(data.birthday.day),
	]);

	// Get Today date with moment
	const todayDate = moment([data.today.year, data.today.month, data.today.day]);

	// Calculations
	const years = todayDate.diff(birthdayDate, 'year');
	birthdayDate.add(years, 'years');

	const months = todayDate.diff(birthdayDate, 'months');
	birthdayDate.add(months, 'months');

	const days = todayDate.diff(birthdayDate, 'days');

	// .
	return {
		years: isNaN(years) ? '--' : years,
		months: isNaN(months) ? '--' : months,
		days: isNaN(days) ? '--' : days,
	};
};

// Create a slice
const ageSlice = createSlice({
	name: 'age',
	initialState: {
		birthday: {
			day: '--',
			month: '--',
			year: '--',
		},
		today: {
			day: new Date().getDate(0),
			month: new Date().getMonth() + 1,
			year: new Date().getFullYear(),
		},
		difference: {
			days: 0,
			months: 0,
			years: 0,
		},
	},
	reducers: {
		updateDay(state, action) {
			// Check whether inputted date is valid

			if (action.payload.day > 31 || action.payload.day === 0) {
				state.difference = {
					years: '--',
					months: '--',
					days: '--',
				};
				return;
			}

			// Change the state with in inputted payload
			state.birthday.day = action.payload.day;

			// Calculate the difference then update the state.difference
			state.difference = getTotalDaysLived(state);
		},
		updateMonth(state, action) {
			if (
				action.payload.month.toString().length > 2 ||
				action.payload.month === 0 ||
				action.payload.month > 13
			) {
				state.difference = {
					years: '--',
					months: '--',
					days: '--',
				};
				return;
			}

			state.birthday.month = action.payload.month;

			state.difference = getTotalDaysLived(state);
		},
		updateYear(state, action) {
			if (action.payload.year > state.today.year) {
				state.difference = {
					years: '--',
					months: '--',
					days: '--',
				};
				return;
			}

			state.birthday.year = action.payload.year;

			state.difference = getTotalDaysLived(state);
		},
	},
});

export const ageActions = ageSlice.actions;

export default ageSlice.reducer;
