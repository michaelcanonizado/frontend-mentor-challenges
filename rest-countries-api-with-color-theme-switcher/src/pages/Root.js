import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { themeActions } from '../redux/slice/themeSlice';

import MainNavigation from '../components/Header/MainNavigation';

export default function RootLayout() {
	const dispatch = useDispatch();

	// const isDarkMode = localStorage.getItem('isDarkMode');
	// dispatch(themeActions.setDarkMode({ payload: storedDarkMode }));

	const isDarkMode = useSelector((state) => state.theme.isDarkMode);

	// useEffect(() => {
	// 	localStorage.setItem('DARK_MODE', isDarkMode);
	// }, [isDarkMode]);

	return (
		<div
			data-theme={isDarkMode ? 'dark' : 'light'}
			className="bg-bkg text-text text-sm min-h-screen flex flex-col"
		>
			<MainNavigation className="max-w-[1366px] w-[90%] m-auto " />
			<main className="max-w-[1366px] w-[90%] m-auto flex-grow flex flex-col">
				<Outlet />
			</main>
		</div>
	);
}
