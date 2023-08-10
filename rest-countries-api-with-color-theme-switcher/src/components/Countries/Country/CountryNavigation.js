import React from 'react';

import { useSelector } from 'react-redux';

export default function CountryNavigation() {
	const isDarkMode = useSelector((state) => state.theme.isDarkMode);

	return (
		<div className="my-10  flex justify-start">
			<a
				href="/"
				className="border border-elements rounded-md h-12 bg-elements flex items-center py-2 pl-7 pr-9 hover:cursor-pointer hover:scale-105 transition-transform duration-[50ms] ease-linear shadow-card"
			>
				<div className="w-[20px] mr-1">
					<img
						src={
							isDarkMode
								? '/arrow-back-dark-icon.svg'
								: '/arrow-back-light-icon.svg'
						}
						alt="arrow-back"
					/>
				</div>
				<div>
					<span className="text-md">Back</span>
				</div>
			</a>
		</div>
	);
}
