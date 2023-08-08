import React from 'react';

export default function LinkItem({ data }) {
	return (
		<div className="text-white py-5 border-b border-white flex flex-col justify-center">
			<div>
				<h3 className="font-bold text-base md:text-base lg:text-sm 2xl:text-lg">
					{data.title}
				</h3>
			</div>
			<div>
				<p className="text-base md:text-base lg:text-sm 2xl:text-lg">
					{data.description}
				</p>
			</div>
		</div>
	);
}
