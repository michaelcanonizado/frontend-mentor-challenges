import React from 'react';

import { Link } from 'react-router-dom';

export default function CountriesListItem({ countryData }) {
	return (
		<Link
			to={`./countries/${countryData.countryCode}`}
			className="flex flex-col rounded-md overflow-hidden  bg-elements w-full shadow-card hover:cursor-pointer hover:scale-[1.02]  md:hover:scale-105 transition-transform duration-[250ms] ease-out"
		>
			<div className="rounded-md overflow-hidden">
				<div className="w-full h-full aspect-[1.6/1]">
					<img
						className="w-full h-full"
						src={countryData.flag}
						alt={`${countryData.name}'s flag`}
					/>
				</div>
			</div>
			<div className="px-5 pt-5 pb-10 md:pb-5 lg:pb-10  flex flex-col  flex-grow justify-center">
				<div className="mb-4">
					<h3 className="font-extrabold text-xl md:text-lg">
						{countryData.name}
					</h3>
				</div>
				<ul className="grid gap-1 text-base md:text-sm">
					<li className="flex">
						<span className="font-semibold mr-1">Population: </span>
						<p>{countryData.population}</p>
					</li>
					<li className="flex">
						<span className="font-semibold mr-1">Region: </span>
						<p>{countryData.region}</p>
					</li>
					<li className="flex">
						<span className="font-semibold mr-1">Capital: </span>
						<p>{countryData.capital}</p>
					</li>
				</ul>
			</div>
		</Link>
	);
}
