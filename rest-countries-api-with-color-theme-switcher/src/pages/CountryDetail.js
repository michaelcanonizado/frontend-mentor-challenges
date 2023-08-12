import React from 'react';
import { useParams, useLoaderData } from 'react-router-dom';

// Local Countries JSON Data
// import COUNTRIES_DATA from './../data.json';

import Country from './../components/Countries/Country/Country';

function findAndFormatCountryDetails(COUNTRIES_DATA, countryCode) {
	let borderCountries = null;
	let countryLanguages = null;
	let countryCurrencies = null;

	const country = COUNTRIES_DATA.find((country) => {
		if (country.cca3 === countryCode) {
			return country;
		} else if (country.cioc === countryCode) {
			return country;
		}
	});

	if ('borders' in country) {
		borderCountries = country.borders.map((countryCode) => {
			const borderCountry = COUNTRIES_DATA.find((country) => {
				if (country.cca3 === countryCode) {
					return country;
				} else if (country.cioc === countryCode) {
					return country;
				}
			});
			return {
				name: borderCountry.name.common,
				code: borderCountry.cca3 ? borderCountry.cca3 : borderCountry.cioc,
			};
		});
	}

	if (Object.values(country.languages).length > 1) {
		countryLanguages = Object.values(country.languages).join(', ');
	} else {
		countryLanguages = Object.values(country.languages).shift().split;
	}

	if (Object.keys(country.currencies).length > 1) {
		countryCurrencies = Object.keys(country.currencies).join(', ');
	} else {
		countryCurrencies = Object.keys(country.currencies).shift().split;
	}

	const countryDetails = {
		name: country.name ? country.name : 'N/A',
		flag: {
			png: country.flags.svg,
			alt: country.flags.alt,
		},
		borders: borderCountries,
		details: {
			'Native Name': country.name.nativeName
				? Object.values(
						country.name.nativeName[
							Object.keys(country.name.nativeName)[0]
						]
				  )[0]
				: 'No Native Name',
			'Top Level Domain': country.tld ? country.tld[0] : 'No Top Level Domain',
			Population: country.population
				? country.population.toLocaleString('en-US')
				: 'Currently No Population',
			Currencies: country.currencies ? countryCurrencies : 'No Currency',
			Region: country.region ? country.region : 'N/A',
			Languages: country.languages ? countryLanguages : 'No Official Language',
			'Sub Region': country.subregion ? country.subregion : 'N/A',
			Capital: country.capital ? country.capital[0] : 'No Capital City',
		},
	};

	return countryDetails;
}

export default function CountryDetail() {
	const { countryCode } = useParams();
	const COUNTRIES_DATA = useLoaderData();

	const countryDetails = findAndFormatCountryDetails(COUNTRIES_DATA, countryCode);

	return <Country country={countryDetails} COUNTRIES_DATA={COUNTRIES_DATA} />;
}

export async function loader() {
	const response = await fetch('https://restcountries.com/v3.1/all');
	const data = await response.json();
	return data;
}
