import React from 'react';
import { useParams } from 'react-router-dom';

import COUNTRIES_DATA from './../data.json';

import Country from './../components/Countries/Country/Country';

export default function CountryDetail() {
	const { countryCode } = useParams();
	const countryDetails = COUNTRIES_DATA.find((country) => {
		// if (country.alpha3Code === countryCode) {
		// 	console.log(country.alpha3Code);
		// 	return country;
		// }
		// if (country.name === countryCode) {
		// 	console.log(country);
		// 	return country;
		// }
		// return new Error();
		if (country.alpha3Code === 'CHN') {
			return country;
		}
	});

	return <Country country={countryDetails} COUNTRIES_DATA={COUNTRIES_DATA} />;
}
