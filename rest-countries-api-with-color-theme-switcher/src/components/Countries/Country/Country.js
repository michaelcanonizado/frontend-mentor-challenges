import React from 'react';

import { Link } from 'react-router-dom';

import CountryNavigation from './CountryNavigation';

export default function Country({ country }) {
	return (
		<>
			<CountryNavigation />
			<section className="grid gap-14 lg:gap-20 grid-cols-1 md:grid-cols-2 flex-grow text-text mb-14">
				<div className="h-full w-full">
					<div className="w-full">
						<img
							className="w-full"
							src={country.flag.png}
							alt={country.flag.alt}
						/>
					</div>
				</div>
				<div className=" h-full w-full">
					<div className="mb-5">
						<h1 className="text-4xl">
							<span className="font-semibold tracking-wide">
								{country.name.common}
							</span>
							<span className="font-light">{` (${country.name.official})`}</span>
						</h1>
					</div>
					<ul className="mb-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 xl:grid-cols-2 gap-2">
						{Object.entries(country.details).map((detail, index) => {
							return (
								<li className="flex" key={index}>
									<span className="font-medium text-base mr-1">{`${detail[0]}:`}</span>
									<p className="text-base">{detail[1]}</p>
								</li>
							);
						})}
					</ul>

					<div className="flex flex-col">
						<div className="mb-3 flex items-center gap-1">
							<h2 className="text-base font-medium">
								Border Countries:
							</h2>
							{country.borders === null ? (
								<span className="text-base font-light">{`${country.name.common} has no border countries`}</span>
							) : (
								''
							)}
						</div>
						{country.borders !== null ? (
							<div className={`flex flex-wrap gap-2 flex-grow`}>
								{country.borders.map((borderedCountry) => {
									return (
										<Link
											className="py-2 px-4 rounded-md bg-elements shadow-card"
											to={`/countries/${borderedCountry.code}`}
											key={borderedCountry.code}
										>
											{borderedCountry.name}
										</Link>
									);
								})}
							</div>
						) : (
							''
						)}
					</div>
				</div>
			</section>
		</>
	);
}
