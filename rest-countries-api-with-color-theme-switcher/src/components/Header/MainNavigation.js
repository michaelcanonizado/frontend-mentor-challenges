import React from 'react';
import { NavLink } from 'react-router-dom';

export default function MainNavigation({ className }) {
	return (
		<header className="bg-elements h-16 sticky inset-0 z-50">
			<nav
				className={`flex justify-between items-center h-full ${className}`}
				aria-label="Primary Navbar"
			>
				<div className="hover:cursor-pointer">
					<NavLink to="countries" className="font-extrabold text-xl">
						Where in the World?
					</NavLink>
				</div>
				<div className="flex items-center hover:cursor-pointer">
					<div className="w-[30px] mr-1 ">
						<img src="moon-icon.svg" alt="Dark M0de" />
					</div>
					<div className="">
						<p className="font-semibold">Dark Mode</p>
					</div>
				</div>
			</nav>
		</header>
	);
}
