import React, { useEffect, useState } from 'react';

import { useLoaderData } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { dataActions } from './../redux/slice/dataSlice';

// Local Countries JSON Data
// import COUNTRIES_DATA from './../data.json';

import CountriesList from './../components/Countries/CountriesList';

function sortCountries(countries) {
	return countries.sort((countryA, countryB) => {
		if (countryA.name.common < countryB.name.common) {
			return -1;
		}
	});
}

export default function Countries() {
	const COUNTRIES_DATA = useLoaderData();
	const [countriesData, setCountriesData] = useState(
		sortCountries(COUNTRIES_DATA)
	);

	const dispatch = useDispatch();

	const dataSliceState = useSelector((state) => state.data);
	const searchQuery = useSelector((state) => state.data.searchQuery);
	const filterOption = useSelector((state) => state.data.filterOption);

	useEffect(() => {
		const filteredStartsWithData = COUNTRIES_DATA.filter((country) => {
			if (filterOption === 'All') {
				if (
					country.name.common
						.toLowerCase()
						.startsWith(searchQuery.toLowerCase())
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
				}
			}
		});
		const filteredIncludesData = COUNTRIES_DATA.filter((country) => {
			if (filterOption === 'All') {
				if (
					country.name.common
						.toLowerCase()
						.includes(searchQuery.toLowerCase()) &&
					!country.name.common
						.toLowerCase()
						.startsWith(searchQuery.toLowerCase())
				) {
					return country;
				}
			} else {
				if (
					country.name.common
						.toLowerCase()
						.includes(searchQuery.toLowerCase()) &&
					country.region === filterOption &&
					!country.name.common
						.toLowerCase()
						.startsWith(searchQuery.toLowerCase())
				) {
					return country;
				}
			}
		});
		setCountriesData([
			...sortCountries(filteredStartsWithData),
			...sortCountries(filteredIncludesData),
		]);
		return;
	}, [searchQuery, filterOption, dataSliceState, dispatch]);

	return <CountriesList COUNTRIES_DATA={countriesData} />;
}

export async function loader() {
	const response = await fetch('https://restcountries.com/v3.1/all');
	const data = await response.json();
	return data;
}
