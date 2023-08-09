import React from 'react';

import COUNTRIES_DATA from './../../data.json';

import CountriesListNavigation from './CountriesListNavigation';
import CountriesListItem from './CountriesListItem';

export default function CountriesList() {
	return (
		<>
			<CountriesListNavigation />
			<section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10">
				{COUNTRIES_DATA.map(
					({ flags, name, population, region, capital }) => {
						const formattedData = {
							flag:
								flags.png ||
								'https://img.freepik.com/free-photo/gray-wall-textures-background_74190-4389.jpg?w=2000',
							name: name || 'N/A',
							population: population || 'N/A',
							region: region || 'N/A',
							capital: capital || 'N/A',
						};

						return <CountriesListItem data={formattedData} />;
					}
				)}
			</section>
		</>
	);
}
