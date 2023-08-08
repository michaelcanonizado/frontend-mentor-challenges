import React from 'react';

export default function Card({
	className,
	title,
	currentDuration,
	previousDuration,
	icon,
}) {
	return (
		<div
			className={`rounded-xl flex flex-col h-fit md:aspect-square 2xl:aspect-auto box-border overflow-visible rounded-b-[20px] ${className}`}
		>
			<div className="flex flex-row-reverse h-[40px] md:h-[50px]">
				<div className=" w-fit h-full mr-3">
					<img
						className="w-[65px] h-full object-cover object-center"
						src={icon}
						alt={`${title} card`}
					></img>
				</div>
			</div>
			<div className="rounded-xl p-7 md:p-5 lg:p-7 bg-neutral-300 md:flex-grow 2xl:grow-0 2xl:h-fit ">
				<div className="flex justify-between items-center">
					<div className="font-medium">
						<h2 className="text-lg">{title}</h2>
					</div>
					<div>
						<img
							className="hover:cursor-pointer"
							src="icon-ellipsis.svg"
							alt="Options"
						></img>
					</div>
				</div>
				<div className="mt-2 md:mt-5 lg:mt-7 flex flex-row md:flex-col justify-between items-center md:items-start">
					<div className="lg:mb-2">
						<span className="text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-extralight">
							{parseInt(currentDuration) === 1
								? `${currentDuration}hr`
								: `${currentDuration}hrs`}
						</span>
					</div>
					<div>
						<p className="text-neutral-100">{`Last Week - ${previousDuration}`}</p>
					</div>
				</div>
			</div>
		</div>
	);
}
