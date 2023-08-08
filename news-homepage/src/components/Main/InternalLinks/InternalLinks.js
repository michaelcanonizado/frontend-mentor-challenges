import React from 'react';

import LinkItem from './LinkItem';

export default function InternalLinks({ className, data }) {
	return (
		<section className={`flex flex-col p-5 bg-neutral-300 ${className}`}>
			<div>
				<p className="text-softOrange text-2xl font-bold">New</p>
			</div>
			<div className="flex-grow grid grid-rows-3">
				{data.map((item, index) => (
					<LinkItem key={index} data={item} />
				))}
			</div>
		</section>
	);
}
