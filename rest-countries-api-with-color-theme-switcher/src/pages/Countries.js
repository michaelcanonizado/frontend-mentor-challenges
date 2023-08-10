import React from 'react';

import COUNTRIES_DATA from './../data.json';

import CountriesList from './../components/Countries/CountriesList';

export default function Countries() {
	return <CountriesList COUNTRIES_DATA={COUNTRIES_DATA} />;
}
