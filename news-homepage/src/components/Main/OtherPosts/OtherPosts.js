import React from 'react';

import PostItem from './PostItem';

export default function OtherPosts({ className, data }) {
	return (
		<section
			className={`grid grid-cols-1 grid-rows-3 md:grid-cols-3 md:grid-rows-1 gap-10 ${className}`}
		>
			{data.map((item, index) => {
				return (
					<PostItem key={index} data={{ ...item, id: `0${index + 1}` }} />
				);
			})}
		</section>
	);
}
