import React from 'react';
import { Link } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';

import { themeActions } from './../../redux/slice/themeSlice';

export default function MainNavigation({ className }) {
	const isDarkMode = useSelector((state) => state.theme.isDarkMode);

	const dispatch = useDispatch();

	function toggleDarkModeHandler(event) {
		dispatch(themeActions.toggleDarkMode());
	}

	return (
		<header className="bg-elements h-16 sticky inset-0 z-50">
			<nav
				className={`flex justify-between items-center h-full ${className}`}
				aria-label="Primary Navbar"
			>
				<div className="hover:cursor-pointer">
					<Link to="" className="font-extrabold text-xl">
						Where in the World?
					</Link>
				</div>
				<div
					className="flex items-center hover:cursor-pointer"
					onClick={toggleDarkModeHandler}
				>
					<div className="w-[30px] mr-1 ">
						<img
							src={isDarkMode ? '/sunny-icon.svg' : '/moon-icon.svg'}
							alt="Dark M0de"
						/>
					</div>
					<div className="">
						<p className="font-semibold">
							{isDarkMode ? 'Light Mode' : 'Dark Mode'}
						</p>
					</div>
				</div>
			</nav>
		</header>
	);
}
