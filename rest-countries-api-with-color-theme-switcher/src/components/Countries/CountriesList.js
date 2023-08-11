import React from 'react';

import CountriesListNavigation from './CountriesListNavigation';
import CountriesListItem from './CountriesListItem';

export default function CountriesList({ COUNTRIES_DATA }) {
	return (
		<>
			<CountriesListNavigation />
			<section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10 mb-20">
				{COUNTRIES_DATA.map(
					({ flags, name, population, region, capital, cca3 }) => {
						const formattedData = {
							flag:
								flags.png ||
								'https://img.freepik.com/free-photo/gray-wall-textures-background_74190-4389.jpg?w=2000',
							name: name.common || 'N/A',
							population: population || 'N/A',
							region: region || 'N/A',
							capital: capital ? capital[0] : 'N/A',
							countryCode: cca3 || name,
						};

						return <CountriesListItem countryData={formattedData} />;
					}
				)}
			</section>
		</>
	);
}
