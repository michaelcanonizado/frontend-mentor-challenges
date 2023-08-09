import React from 'react';
import { Outlet } from 'react-router-dom';

import MainNavigation from '../components/Header/MainNavigation';

export default function RootLayout() {
	return (
		<div className=" bg-bkg text-sm" data-theme="">
			<MainNavigation className="max-w-[1366px] w-[90%] m-auto " />
			<main className="max-w-[1366px] w-[90%] m-auto">
				<Outlet />
			</main>
		</div>
	);
}
