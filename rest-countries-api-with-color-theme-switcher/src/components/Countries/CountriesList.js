import React from 'react';

import { useDispatch } from 'react-redux';
import { dataActions } from './../../redux/slice/dataSlice';

import CountriesListNavigation from './CountriesListNavigation';
import CountriesListItem from './CountriesListItem';

export default function CountriesList({ COUNTRIES_DATA }) {
	const dispatch = useDispatch();

	function searchQueryHandler(query) {
		dispatch(dataActions.setSearchQuery({ query }));
	}
	function filterOptionHandler(option) {
		dispatch(dataActions.setFilterOption({ option }));
	}

	return (
		<>
			<CountriesListNavigation
				searchQuery={searchQueryHandler}
				filterOption={filterOptionHandler}
			/>
			<section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10 mb-20">
				{COUNTRIES_DATA.map(
					({ flags, name, population, region, capital, cca3, cioc }) => {
						const formattedData = {
							flag:
								flags.png ||
								'https://img.freepik.com/free-photo/gray-wall-textures-background_74190-4389.jpg?w=2000',
							name: name.common || 'N/A',
							population: population || 'N/A',
							region: region || 'N/A',
							capital: capital ? capital[0] : 'N/A',
							countryCode: cca3 || cioc,
						};

						return (
							<CountriesListItem
								countryData={formattedData}
								key={formattedData.countryCode}
							/>
						);
					}
				)}
			</section>
		</>
	);
}
