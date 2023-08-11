import React from 'react';

import { useLoaderData } from 'react-router-dom';

// Local Countries JSON Data
// import COUNTRIES_DATA from './../data.json';

import CountriesList from './../components/Countries/CountriesList';

export default function Countries() {
	const COUNTRIES_DATA = useLoaderData();

	return <CountriesList COUNTRIES_DATA={COUNTRIES_DATA} />;
}

export async function loader() {
	const response = await fetch('https://restcountries.com/v3.1/all');
	const data = await response.json();
	return data;
}
