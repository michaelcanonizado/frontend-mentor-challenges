import React, { useState, useEffect } from 'react';

import CountriesListNavigation from './CountriesListNavigation';
import CountriesListItem from './CountriesListItem';

function sortCountries(countries) {
	return countries.sort((countryA, countryB) => {
		if (countryA.name.common < countryB.name.common) {
			return -1;
		}
	});
}

export default function CountriesList({ COUNTRIES_DATA }) {
	const [countriesData, setCountriesData] = useState(COUNTRIES_DATA);
	const [searchQuery, setSearchQuery] = useState('');
	const [filterOption, setFilterOption] = useState('All');

	useEffect(() => {
		const filteredData = COUNTRIES_DATA.filter((country) => {
			if (filterOption === 'All') {
				if (
					country.name.common
						.toLowerCase()
						.startsWith(searchQuery.toLowerCase())
				) {
					return country;
				} else if (
					country.name.common
						.toLowerCase()
						.includes(searchQuery.toLowerCase())
				) {
					return country;
				}
			} else {
				if (
					country.name.common
						.toLowerCase()
						.startsWith(searchQuery.toLowerCase()) &&
					country.region === filterOption
				) {
					return country;
				} else if (
					country.name.common
						.toLowerCase()
						.includes(searchQuery.toLowerCase()) &&
					country.region === filterOption
				) {
					return country;
				}
			}
		});
		setCountriesData(sortCountries(filteredData));
	}, [searchQuery, filterOption, COUNTRIES_DATA]);

	function searchQueryHandler(query) {
		setSearchQuery(query);
	}
	function filterOptionHandler(option) {
		setFilterOption(option);
	}

	return (
		<>
			<CountriesListNavigation
				searchQuery={searchQueryHandler}
				filterOption={filterOptionHandler}
			/>
			<section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10 mb-20">
				{countriesData.map(
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
