import React from 'react';

export default function PostItem({ data }) {
	return (
		<div className="grid grid-cols-3  md:flex md:flex-col lg:grid  lg:grid-cols-4  xl:grid-cols-3 gap-5 md:gap-3 xl:gap-5">
			<div className="col-span-1 md:col-span-1 lg:col-span-2 xl:col-span-1">
				<img className="" src={data.image} alt={data.title}></img>
			</div>
			<div className="col-span-2 md:col-span-1 lg:col-span-2 xl:col-span-2 ">
				<div className="">
					<span className="text-5xl text-neutral-100 md:text-4xl lg:text-3xl font-bold">
						{data.id}
					</span>
				</div>
				<div>
					<div className="mt-5 mb-2 md:mb-1 md:mt-1 lg:mt-3">
						<span className="font-bold text-xl md:text-lg lg:text-sm">
							{data.title}
						</span>
					</div>
					<div>
						<p className="text-base md:text-base lg:text-sm">
							{data.description}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
