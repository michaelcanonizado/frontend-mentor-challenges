import React from 'react';

export default function Sidebar({ className, user }) {
	return (
		<div
			className={`rounded-xl bg-neutral-300 overflow-hidden flex flex-col ${className}`}
		>
			<div className="h-fit md:h-2/3 p-7 bg-primary-violet rounded-xl flex gap-5 md:gap-7 flex-row md:flex-col items-center">
				<div className="md:w-full ">
					<div className="w-[80px] bg-white rounded-full border-4">
						<img src={user.img} alt={`${user.firstName}'s Report`}></img>
					</div>
				</div>
				<div className="">
					<div>
						<span className="text-neutral-100">Report for</span>
					</div>
					<div>
						<h1 className="text-xl sm:text-2xl md:text-3xl xl:text-4xl font-light">{`${user.firstName} ${user.lastName}`}</h1>
					</div>
				</div>
			</div>
			<div className="flex flex-grow flex-row md:flex-col justify-around p-5 md:p-7">
				<div>
					<p className="text-lg md:text-md lg:text-lg text-neutral-100 font-normal">
						Daily
					</p>
				</div>
				<div>
					<p className="text-lg md:text-md lg:text-lg text-white font-normal">
						Weekly
					</p>
				</div>
				<div>
					<p className="text-lg md:text-md lg:text-lg text-neutral-100 font-normal">
						Monthly
					</p>
				</div>
			</div>
		</div>
	);
}
