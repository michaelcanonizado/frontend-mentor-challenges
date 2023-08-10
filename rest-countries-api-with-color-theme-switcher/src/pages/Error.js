import React from 'react';

import { Outlet } from 'react-router-dom';

import { useSelector } from 'react-redux';

import MainNavigation from '../components/Header/MainNavigation';

export default function Error() {
	const isDarkMode = useSelector((state) => state.theme.isDarkMode);

	return (
		<div
			data-theme={isDarkMode ? 'dark' : 'light'}
			className="bg-bkg text-text text-sm h-screen"
		>
			<MainNavigation className="max-w-[1366px] w-[90%] m-auto " />
			<main className="max-w-[1366px] w-[90%] m-auto grid place-items-center h-full">
				<h1 className="text-3xl font-semibold">404 Not Found</h1>
			</main>
		</div>
	);
}
