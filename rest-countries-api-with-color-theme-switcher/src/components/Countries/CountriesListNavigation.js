import React from 'react';

import { useSelector } from 'react-redux';

export default function CountriesListNavigation(props) {
	const isDarkMode = useSelector((state) => state.theme.isDarkMode);

	const filterOptions = [
		{ name: 'All', value: 'All' },
		{ name: 'Africa', value: 'Africa' },
		{ name: 'Americas', value: 'Americas' },
		{ name: 'Asia', value: 'Asia' },
		{ name: 'Europe', value: 'Europe' },
		{ name: 'Oceania', value: 'Oceania' },
	];

	function onChangeCountriesInputHandler(event) {
		props.searchQuery(event.target.value);
	}
	function onChangeFilterSelectHandler(event) {
		props.filterOption(event.target.value);
	}

	return (
		<form className="my-10  flex flex-col md:flex-row gap-10 md:justify-between md:items-center">
			<div className="border border-elements rounded-md overflow-hidden h-12  md:flex-grow lg:grow-0 lg:w-2/5 flex bg-elements">
				{/* Use a div instead of button to prevent submitting */}
				<div
					className="
               w-[20%] grid place-items-center hover:cursor-pointer"
				>
					<div className="w-[25px] aspect-sqaure">
						<img
							src={
								isDarkMode
									? 'search-dark-icon.svg'
									: 'search-light-icon.svg'
							}
							alt="search icon"
						/>
					</div>
				</div>

				<input
					onChange={onChangeCountriesInputHandler}
					className="bg-elements text-text text-lg pl-5 border-none outline-none flex-grow"
					type="text"
					placeholder="Search for a country..."
					id="countries-search"
				/>
			</div>
			<div className="border border-elements rounded-md flex justify-center items-center w-[220px] md:w-[250px] h-12 bg-elements">
				<label className="mr-2" for="region-select">
					Filter by Region:
				</label>
				<select
					className="bg-elements p-2 border border-none outline-none font-semibold hover:cursor-pointer"
					name="region"
					id="region-select"
					onChange={onChangeFilterSelectHandler}
				>
					{filterOptions.map((option) => {
						return <option value={option.value}>{option.name}</option>;
					})}
				</select>
			</div>
		</form>
	);
}
