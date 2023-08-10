import React from 'react';

import { Link } from 'react-router-dom';

import CountryNavigation from './CountryNavigation';

export default function Country({ country, COUNTRIES_DATA }) {
	let borderCountries = null;

	const countryDetails = {
		'Native Name': country.nativeName,
		'Top Level Domain': country.topLevelDomain,
		Population: country.population,
		Currencies: country.currencies[0].code,
		Region: country.region,
		Languages: country.languages
			.map((language) => {
				return language.name;
			})
			.join(', '),
		'Sub region': country.subregion,
		Capital: country.capital,
	};

	if (country.borders) {
		borderCountries = country.borders.map((countryCode) => {
			const borderCountry = COUNTRIES_DATA.find((country) => {
				if (country.alpha3Code === countryCode) {
					return country;
				}
			});

			return {
				name: borderCountry.name,
				alpha3Code: borderCountry.alpha3Code,
			};
			// return country;
		});
	}

	console.log(borderCountries);

	return (
		<>
			<CountryNavigation />
			<section className="grid gap-14 lg:gap-20 grid-cols-1 md:grid-cols-2 flex-grow text-text mb-14">
				<div className="h-full w-full">
					<div className="w-full">
						<img
							className="w-full"
							src={country.flag}
							alt={`${country.name}'s flag`}
						/>
					</div>
				</div>
				<div className=" h-full w-full">
					<div className="mb-5">
						<h1 className="text-4xl">{country.name}</h1>
					</div>
					<ul className="mb-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-2">
						{Object.entries(countryDetails).map((detail) => {
							return (
								<li className="flex">
									<span className="font-medium text-base mr-1">{`${detail[0]}:`}</span>
									<p className="text-base">{detail[1]}</p>
								</li>
							);
						})}
					</ul>
					{borderCountries !== null ? (
						<div className="flex flex-col">
							<div className="mb-3">
								<h2 className="text-base font-medium">
									Border Countries:
								</h2>
							</div>
							<div className={`flex flex-wrap gap-2 flex-grow`}>
								{borderCountries.map((borderCountry) => {
									return (
										<Link
											className="py-2 px-4 rounded-md bg-elements shadow-card"
											to={`/countries/${borderCountry.alpha3Code}`}
										>
											{borderCountry.name}
										</Link>
									);
								})}
							</div>
						</div>
					) : (
						''
					)}
				</div>
			</section>
		</>
	);
}
